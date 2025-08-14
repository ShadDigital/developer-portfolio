import { type Application, type InsertApplication, type Download, type InsertDownload } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Applications
  getAllApplications(): Promise<Application[]>;
  getApplication(id: string): Promise<Application | undefined>;
  createApplication(app: InsertApplication): Promise<Application>;
  incrementDownloads(id: string): Promise<void>;
  
  // Downloads
  trackDownload(download: InsertDownload): Promise<Download>;
  getDownloadStats(): Promise<{ totalDownloads: number; totalApps: number }>;
}

export class MemStorage implements IStorage {
  private applications: Map<string, Application>;
  private downloads: Map<string, Download>;

  constructor() {
    this.applications = new Map();
    this.downloads = new Map();
    this.seedData();
  }

  private seedData() {
    const apps: InsertApplication[] = [
      {
        name: "Calculator",
        description: "Simple desktop calculator application",
        version: "v1.0.0",
        imageUrl: "/assets/app-screenshots/Screenshot 2025-08-14 123946.png",
        downloadUrl: "/downloads/Calculator-1.0.0-win64.exe",
        fileSize: "45MB",
        downloads: 0
      }
      /*
      {
        name: "Terminal Master",
        description: "Enhanced terminal emulator with modern features, customizable themes, and advanced tab management for developers.",
        version: "v1.9.4",
        imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240",
        downloadUrl: "/downloads/terminal-master.deb",
        fileSize: "24MB",
        downloads: 0,

      }*/
    ];

    apps.forEach(app => {
      const id = randomUUID();
      const application: Application = {
        ...app,
        id,
        createdAt: new Date(),
        downloads: app.downloads ?? 0,
      };
      this.applications.set(id, application);
    });
  }

  async getAllApplications(): Promise<Application[]> {
    return Array.from(this.applications.values()).sort((a, b) => b.downloads - a.downloads);
  }

  async getApplication(id: string): Promise<Application | undefined> {
    return this.applications.get(id);
  }

  async createApplication(insertApp: InsertApplication): Promise<Application> {
    const id = randomUUID();
    const app: Application = {
      ...insertApp,
      id,
      createdAt: new Date(),
      downloads: insertApp.downloads ?? 0,
    };
    this.applications.set(id, app);
    return app;
  }

  async incrementDownloads(id: string): Promise<void> {
    const app = this.applications.get(id);
    if (app) {
      app.downloads += 1;
      this.applications.set(id, app);
    }
  }

  async trackDownload(insertDownload: InsertDownload): Promise<Download> {
    const id = randomUUID();
    const download: Download = {
      ...insertDownload,
      id,
      downloadedAt: new Date(),
      applicationId: insertDownload.applicationId ?? null,
      userAgent: insertDownload.userAgent ?? null,
    };
    this.downloads.set(id, download);
    return download;
  }

  async getDownloadStats(): Promise<{ totalDownloads: number; totalApps: number }> {
    const apps = await this.getAllApplications();
    const totalDownloads = apps.reduce((sum, app) => sum + app.downloads, 0);
    return {
      totalDownloads,
      totalApps: apps.length,
    };
  }
}

export const storage = new MemStorage();
