"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Menu, X, Award, Briefcase, GraduationCap, Wrench, FileText, Phone, User, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = [
        "hero",
        "certifications",
        "about",
        "skills",
        "experience",
        "education",
        "projects",
        "services",
        "resume",
        "contact"
      ];

      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", icon: User },
    { name: "Certificates", href: "#certifications", icon: Award },
    { name: "Skills", href: "#skills", icon: Wrench },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Projects", href: "#projects", icon: ShieldCheck },
    { name: "Services", href: "#services", icon: Wrench },
    { name: "Resume", href: "#resume", icon: FileText },
    { name: "Contact", href: "#contact", icon: Phone }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-3 px-3 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <nav
          className={`glass-panel rounded-2xl px-4 sm:px-5 py-2.5 flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "bg-slate-900/90 shadow-2xl shadow-teal-950/40 border-teal-500/20" : "bg-slate-950/70 border-slate-800/80"
          }`}
        >
          {/* Logo Branding */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <span className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-mono font-bold text-xs tracking-wider group-hover:bg-teal-500 group-hover:text-slate-950 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] transition-all duration-300">
              RZA
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-teal-400 transition-colors flex items-center gap-1.5">
                Rana Zaheer Ahmad
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[10px] font-mono text-teal-400/90">
                Electronics & IT Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-1 text-xs font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-2.5 py-1.5 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-teal-300 bg-teal-500/15 border border-teal-500/30 font-semibold"
                      : "hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/966580828612?text=Hi%20Rana%20Zaheer%20Ahmad,%20I%20reviewed%20your%20Engineering%20Portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-all duration-300 text-xs font-semibold shadow-sm hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-2 glass-panel rounded-2xl p-4 bg-slate-950/95 border-teal-500/30 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl transition-all ${
                      isActive
                        ? "bg-teal-500/20 text-teal-300 font-semibold border border-teal-500/40"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 text-teal-400" />
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
