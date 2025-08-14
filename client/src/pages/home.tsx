import { useQuery } from "@tanstack/react-query";
import { type Application } from "@shared/schema";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import DownloadsSection from "@/components/downloads-section";
import ContactSection from "@/components/contact-section";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const { data: applications, isLoading } = useQuery<Application[]>({
    queryKey: ["/api/applications"],
  });

  const { data: stats } = useQuery<{ totalDownloads: number; totalApps: number }>({
    queryKey: ["/api/stats"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Skeleton className="h-12 w-3/4 mb-6" />
                <Skeleton className="h-6 w-full mb-4" />
                <Skeleton className="h-6 w-5/6 mb-8" />
                <div className="space-y-4 mb-8">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <Skeleton className="h-10 w-10 rounded-lg" />
                      <div>
                        <Skeleton className="h-4 w-32 mb-2" />
                        <Skeleton className="h-3 w-40" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Skeleton className="h-80 w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection stats={stats} />
      <DownloadsSection applications={applications || []} />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-slate-500">&copy; 2025 Shadrack Don. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
