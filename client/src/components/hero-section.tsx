import { Code, Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  stats?: {
    totalDownloads: number;
    totalApps: number;
  };
}

export default function HeroSection({ stats }: HeroSectionProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Bio Content */}
          <div className="animate-slide-up">
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Hey, I'm <span className="text-blue-600">Alex Chen</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Full-stack developer passionate about creating innovative applications that solve real-world problems. I build everything from mobile apps to web platforms.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">5+ Years Experience</h3>
                  <p className="text-slate-600">JavaScript, Python, React, Node.js</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Download className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {stats ? `${formatNumber(stats.totalDownloads)}+ Downloads` : "100k+ Downloads"}
                  </h3>
                  <p className="text-slate-600">Across all published applications</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Star className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">4.8/5 Rating</h3>
                  <p className="text-slate-600">Average user satisfaction</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection("downloads")}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                View My Apps
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-200"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="animate-fade-in lg:justify-self-end">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Developer workspace with multiple monitors and coding setup" 
              className="rounded-2xl shadow-2xl w-full h-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
