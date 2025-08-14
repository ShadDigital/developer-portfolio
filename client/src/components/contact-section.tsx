import { Mail, Github, Twitter } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Have questions about my applications or interested in custom development? I'd love to hear from you.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a 
              href="mailto:alex@example.com" 
              className="flex items-center space-x-3 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Mail className="h-5 w-5 text-blue-600" />
              <span className="font-semibold text-slate-900">alex@example.com</span>
            </a>
            
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Github className="h-5 w-5 text-slate-700" />
              <span className="font-semibold text-slate-900">GitHub</span>
            </a>
            
            <a 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Twitter className="h-5 w-5 text-blue-400" />
              <span className="font-semibold text-slate-900">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
