import { type Application } from "@shared/schema";
import AppCard from "./app-card";

interface DownloadsSectionProps {
  applications: Application[];
}

export default function DownloadsSection({ applications }: DownloadsSectionProps) {
  return (
    <section id="downloads" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Applications
          </h2>
        </div>

        {/* Apps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <AppCard 
              key={app.id} 
              application={app} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
