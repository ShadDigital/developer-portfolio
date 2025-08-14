import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDownloadSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all applications
  app.get("/api/applications", async (req, res) => {
    try {
      const applications = await storage.getAllApplications();
      res.json(applications);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch applications" });
    }
  });

  // Get single application
  app.get("/api/applications/:id", async (req, res) => {
    try {
      const application = await storage.getApplication(req.params.id);
      if (!application) {
        return res.status(404).json({ error: "Application not found" });
      }
      res.json(application);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch application" });
    }
  });

  // Track download
  app.post("/api/applications/:id/download", async (req, res) => {
    try {
      const applicationId = req.params.id;
      
      // Verify application exists
      const application = await storage.getApplication(applicationId);
      if (!application) {
        return res.status(404).json({ error: "Application not found" });
      }

      // Track download
      const downloadData = {
        applicationId,
        userAgent: req.get('User-Agent') || null,
      };

      const validatedData = insertDownloadSchema.parse(downloadData);
      await storage.trackDownload(validatedData);
      await storage.incrementDownloads(applicationId);

      res.json({ 
        message: "Download tracked successfully",
        downloadUrl: application.downloadUrl 
      });
    } catch (error) {
      console.error("Download tracking error:", error);
      res.status(500).json({ error: "Failed to track download" });
    }
  });

  // Get download statistics
  app.get("/api/stats", async (req, res) => {
    try {
      const stats = await storage.getDownloadStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch statistics" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
