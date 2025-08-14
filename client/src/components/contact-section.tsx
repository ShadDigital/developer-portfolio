import { Github } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Contact
        </h2>
        
        <div className="flex justify-center">
          <a 
            href="https://github.com/ShadDigital" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
