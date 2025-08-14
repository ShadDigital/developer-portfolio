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
        name: "TaskMaster Pro",
        description: "Advanced task management application with team collaboration features, time tracking, and productivity analytics.",
        version: "v2.1.0",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240",
        downloadUrl: "/downloads/taskmaster-pro.dmg",
        fileSize: "45MB",
        downloads: 0,
        rating: "4.9"
      },
      {
        name: "CodeSync",
        description: "Real-time collaborative code editor with syntax highlighting, version control integration, and live sharing capabilities.",
        version: "v1.8.2",
        imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240",
        downloadUrl: "/downloads/codesync.dmg",
        fileSize: "78MB",
        downloads: 0,
        rating: "4.7"
      },
      {
        name: "DataViz Mobile",
        description: "Mobile data visualization tool that transforms complex datasets into beautiful, interactive charts and insights.",
        version: "v3.0.1",
        imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240",
        downloadUrl: "/downloads/dataviz-mobile.apk",
        fileSize: "32MB",
        downloads: 0,
        rating: "4.8"
      },
      {
        name: "DevTools Pro",
        description: "Comprehensive developer toolkit with API testing, database management, and deployment automation features.",
        version: "v4.2.0",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240",
        downloadUrl: "/downloads/devtools-pro.exe",
        fileSize: "125MB",
        downloads: 0,
        rating: "4.6"
      },
      {
        name: "CloudSync Desktop",
        description: "Secure cloud storage synchronization with end-to-end encryption, automatic backups, and cross-platform support.",
        version: "v2.5.3",
        imageUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240",
        downloadUrl: "/downloads/cloudsync-desktop.dmg",
        fileSize: "89MB",
        downloads: 0,
        rating: "4.9"
      },
      {
        name: "Terminal Master",
        description: "Enhanced terminal emulator with modern features, customizable themes, and advanced tab management for developers.",
        version: "v1.9.4",
        imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240",
        downloadUrl: "/downloads/terminal-master.deb",
        fileSize: "24MB",
        downloads: 0,
        rating: "4.5"
      }
    ];

    apps.forEach(app => {
      const id = randomUUID();
      const application: Application = {
        ...app,
        id,
        createdAt: new Date(),
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
