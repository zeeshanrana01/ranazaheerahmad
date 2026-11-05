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
    { name: "Curriculum Vitae", href: "#resume", icon: FileText },
    { name: "Contact", href: "#contact", icon: Phone }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-3.5 px-3 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <nav
          className={`glass-panel rounded-2xl px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "bg-[#060c20]/95 shadow-2xl shadow-blue-950/60 border-blue-500/25"
              : "bg-[#050a1c]/80 border-slate-800/80"
          }`}
        >
          {/* Logo Branding */}
          <a href="#hero" className="flex items-center gap-3 group">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/20 to-indigo-600/30 border border-blue-500/40 flex items-center justify-center text-blue-300 font-mono font-bold text-xs tracking-wider group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 shadow-inner">
              RZA
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-blue-300 transition-colors flex items-center gap-2">
                Rana Zaheer Ahmad
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/30 px-1.5 py-0.2 rounded font-normal">
                  SCE Verified
                </span>
              </span>
              <span className="text-[11px] font-mono text-slate-400 font-normal">
                Electronics & IT Network Engineer
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
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-blue-300 bg-blue-600/20 border border-blue-500/40 font-semibold shadow-sm"
                      : "hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://wa.me/966580828612?text=Hello%20Engr.%20Rana%20Zaheer%20Ahmad,%20I%20reviewed%20your%20Engineering%20Portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 transition-all duration-300 text-xs font-semibold shadow-sm hover:shadow-[0_0_18px_rgba(16,185,129,0.45)]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-2 glass-panel rounded-2xl p-4 bg-[#060c20]/95 border-blue-500/30 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
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
                        ? "bg-blue-600/20 text-blue-300 font-semibold border border-blue-500/40"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 text-blue-400" />
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
