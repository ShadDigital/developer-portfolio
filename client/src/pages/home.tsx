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
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">DevPortfolio</h3>
              <p className="text-slate-400 leading-relaxed">
                Creating innovative applications and tools that make developers' lives easier and more productive.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="#downloads" className="hover:text-white transition-colors duration-200">Downloads</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Bug Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Feature Requests</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p>&copy; 2024 Alex Chen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
