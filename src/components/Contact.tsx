import React from "react";
import { siteConfig } from "../data/config";
import { MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-[40%]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-mono text-emerald-400 mb-4">What's Next?</h2>
        <h3 className="text-4xl font-bold text-slate-200 mb-6">Get In Touch</h3>
      </div>
      <div className="relative mt-20 rounded-xl overflow-hidden max-w-6xl mx-auto">
        <div className="absolute inset-0 bg-[url('https://www.nitk.ac.in/design-system/campus-images/beach.jpg')] bg-cover bg-center opacity"></div>
        <div className="relative bg-gradient-to-b from-slate-900/80 to-slate-900/95 backdrop-blur-sm py-20">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <MapPin className="w-10 h-10 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Based in NITK
            </h3>
            <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
              Available for in-person collaboration in NITK
              <br />
              and remote opportunities.
            </p>
          </div>
        </div>
      </div>
      <footer className="mt-20 text-slate-500 text-sm text-center">
        
        Built with <span className="text-emerald-400">React.js</span> and 
        <span className="text-emerald-400"> Tailwind CSS</span>, deployed with 
        <span className="text-emerald-400"> Vercel</span>. All text is set in the 
        <span className="text-emerald-400"> Inter</span> typeface.
        <p className="text-slate-500 text-xs mt-6">
          © {new Date().getFullYear()} Rohit Manohar. 
        </p>
      </footer>
    </section>
  );
};
