"use client";

import React from "react";
import { ArrowUp, MessageSquare, ShieldCheck, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#030614]/95 relative z-10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-300 font-mono font-bold text-xs tracking-wider">
              RZA
            </span>
            <div>
              <p className="text-sm font-bold text-white">Engr. Rana Zaheer Ahmad Shakir</p>
              <p className="text-[11px] text-blue-300 font-mono">
                Electronics & IT Computer Network Engineer
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#resume" className="hover:text-white transition-colors">Curriculum Vitae</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-slate-800 transition-colors cursor-pointer flex items-center gap-1.5 text-xs"
            title="Scroll to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>

        {/* Bottom line */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span className="text-slate-300">Saudi Council of Engineers (SCE) Verified Member</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/966580828612?text=Hello%20Engr.%20Rana%20Zaheer%20Ahmad,%20I%20reviewed%20your%20Official%20Engineering%20Portfolio."
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp: +966 58 082 8612</span>
            </a>
          </div>

          <p className="text-slate-400">
            © 2026 Rana Zaheer Ahmad Shakir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
