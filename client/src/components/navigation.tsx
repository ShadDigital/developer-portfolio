import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-slate-200 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-lg font-semibold text-slate-900">Alex Chen</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="flex space-x-6">
              <button 
                onClick={() => scrollToSection("downloads")}
                className="text-slate-600 hover:text-slate-900 text-sm"
              >
                Apps
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-slate-600 hover:text-slate-900 text-sm"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-200">
              <button 
                onClick={() => scrollToSection("downloads")}
                className="block w-full text-left text-slate-600 hover:text-slate-900 px-3 py-2 text-sm"
              >
                Apps
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-slate-600 hover:text-slate-900 px-3 py-2 text-sm"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
