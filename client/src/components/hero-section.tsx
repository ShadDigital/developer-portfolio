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
    <section id="home" className="pt-20 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Shadrack Don
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            <b>C++</b> & <b>Python</b> Developer with a passion for building scalable and efficient applications.
          </p>
          
          <div className="flex justify-center gap-8 text-sm text-slate-500 mb-8">
            <span>{stats ? `${formatNumber(stats.totalDownloads)}` : "..."} Downloads</span>
            <span>{stats ? stats.totalApps : "..."} Apps</span>
          </div>
          
          <Button 
            onClick={() => scrollToSection("downloads")}
            className="bg-slate-900 text-white px-6 py-2 hover:bg-slate-800"
          >
            View Apps
          </Button>
        </div>
      </div>
    </section>
  );
}
