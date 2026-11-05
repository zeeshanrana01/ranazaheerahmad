"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  MessageSquare,
  FileText,
  Award,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  Sparkles,
  Server,
  Zap,
  Building,
  ChevronRight
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % portfolioData.personal.titles.length);
    }, 3400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Official Profile Details & CTAs (Col 7) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Official Accreditation Seal Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-950/70 text-blue-200 border border-blue-500/35 shadow-[0_0_20px_rgba(37,99,235,0.25)]">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Saudi Council of Engineers (SCE) Verified Member</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="hidden sm:inline text-slate-300">15+ Years Field Leadership</span>
            </div>

            {/* Official Main Headline */}
            <div>
              <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-blue-400 mb-2 font-semibold">
                Executive Electronics & IT Network Engineering
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                RANA ZAHEER <br />
                <span className="bg-gradient-to-r from-blue-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                  AHMAD SHAKIR
                </span>
              </h1>
            </div>

            {/* Dynamic Role Switcher */}
            <div className="h-10 flex items-center justify-center lg:justify-start">
              <p className="text-base sm:text-lg font-medium text-slate-300 flex items-center gap-2.5">
                <span className="text-blue-400 font-mono text-xs sm:text-sm uppercase tracking-wider">Mandate:</span>
                <span className="text-white font-bold tracking-wide transition-all duration-300 border-b-2 border-blue-500/50 pb-0.5">
                  {portfolioData.personal.titles[currentRoleIndex]}
                </span>
              </p>
            </div>

            {/* Formal Executive Summary */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Distinguished Electronics & IT Computer Network Engineer with over a decade and a half of supervisory tenure across the Kingdom of Saudi Arabia. Trusted technical leader for <strong className="text-white font-semibold">Saudi Binladin Group (SBGOM)</strong> at <strong className="text-blue-300 font-semibold">Al Safa Royal Palace</strong> and <strong className="text-blue-300 font-semibold">Mina Royal Palace Makkah</strong> under Royal Protocol Administration (RPA & CPPA).
            </p>

            {/* Key Statistics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
              <div className="glass-panel p-3.5 rounded-2xl border-slate-800/90 text-center">
                <p className="text-xl sm:text-2xl font-black text-blue-400">15+ Yrs</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Field Leadership</p>
              </div>
              <div className="glass-panel p-3.5 rounded-2xl border-slate-800/90 text-center">
                <p className="text-xl sm:text-2xl font-black text-amber-400">Royal Sites</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Projects 0768 & 0769</p>
              </div>
              <div className="glass-panel p-3.5 rounded-2xl border-slate-800/90 text-center">
                <p className="text-xl sm:text-2xl font-black text-sky-400">25+ Certs</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Govt. Verified</p>
              </div>
              <div className="glass-panel p-3.5 rounded-2xl border-slate-800/90 text-center">
                <p className="text-xl sm:text-2xl font-black text-emerald-400">99.9%</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Operational Uptime</p>
              </div>
            </div>

            {/* Official Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href="https://wa.me/966580828612?text=Hello%20Engr.%20Rana%20Zaheer%20Ahmad,%20I%20reviewed%20your%20Official%20Engineering%20Portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)] active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Direct WhatsApp Contact</span>
              </a>

              <a
                href="#certifications"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-panel text-white font-semibold text-xs sm:text-sm border-blue-500/40 hover:bg-blue-600/15 hover:border-blue-400 transition-all active:scale-95 shadow-sm"
              >
                <Award className="w-4 h-4 text-blue-400" />
                <span>Review Accreditations</span>
              </a>

              <a
                href="#resume"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-panel text-slate-300 font-semibold text-xs sm:text-sm hover:text-white hover:bg-slate-800/80 transition-all active:scale-95 border-slate-700/80"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Curriculum Vitae</span>
              </a>
            </div>

            {/* Mission-Critical Systems Handled */}
            <div className="pt-4 border-t border-slate-800/90 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <span className="font-mono text-blue-400 text-[11px] font-semibold">Core Expertise:</span>
              <span className="px-2.5 py-1 rounded-lg bg-[#0c142c] text-slate-200 border border-blue-900/50">MDF/IDF Data Centers</span>
              <span className="px-2.5 py-1 rounded-lg bg-[#0c142c] text-slate-200 border border-blue-900/50">DN24 Fire Alarm Systems</span>
              <span className="px-2.5 py-1 rounded-lg bg-[#0c142c] text-slate-200 border border-blue-900/50">FM200 Clean Agent</span>
              <span className="px-2.5 py-1 rounded-lg bg-[#0c142c] text-slate-200 border border-blue-900/50">CCTV Matrix Rooms</span>
              <span className="px-2.5 py-1 rounded-lg bg-[#0c142c] text-slate-200 border border-blue-900/50">Building Management (BMS)</span>
            </div>

          </div>

          {/* Right Column: High-Profile Executive Card (Col 5) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Subtle Blue/Indigo Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 rounded-3xl blur-xl opacity-35 transition duration-1000 pointer-events-none" />

              {/* Main Profile Container */}
              <div className="relative glass-panel rounded-3xl p-6 sm:p-7 bg-[#070e24]/95 border border-blue-500/30 shadow-2xl shadow-blue-950/70">
                
                {/* Status Bar */}
                <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-emerald-400">Available for Senior Supervisory Roles</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-300 bg-blue-950/80 px-2.5 py-1 rounded-lg border border-blue-800/60">
                    KSA / Global
                  </span>
                </div>

                {/* Profile Avatar with Royal Frame */}
                <div className="relative mx-auto w-44 h-44 sm:w-48 sm:h-48 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-sky-400 p-[3px] shadow-[0_0_30px_rgba(37,99,235,0.45)]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 relative">
                      <Image
                        src="/images/avatar_fb.jpg"
                        alt="Engr. Rana Zaheer Ahmad Shakir - Electronics & IT Network Engineer"
                        fill
                        priority
                        className="object-cover object-top hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 192px, 240px"
                      />
                    </div>
                  </div>

                  {/* SCE Verified Badge */}
                  <div className="absolute -bottom-1 -right-1 bg-[#040816] p-1.5 rounded-full border border-amber-500/50 shadow-xl">
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-300" title="Saudi Council of Engineers Verified">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Profile Identity Details */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Rana Zaheer Ahmad Shakir
                  </h3>
                  <p className="text-xs text-blue-300 font-medium mt-1">
                    Electronics IT Computer Network Engineer
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1 flex items-center justify-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-blue-400" />
                    <span>Saudi Binladin Group Veteran (SBGOM)</span>
                  </p>
                </div>

                {/* Contact Information List */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#030716]/80 border border-slate-800/90">
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-slate-300 truncate font-medium">
                      Makkah Al-Mukarramah, Kingdom of Saudi Arabia
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#030716]/80 border border-slate-800/90">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <a
                      href="tel:+966580828612"
                      className="text-slate-300 hover:text-emerald-400 transition-colors font-mono font-medium"
                    >
                      +966 58 082 8612
                    </a>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#030716]/80 border border-slate-800/90">
                    <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                    <a
                      href="mailto:Mrranasbgom@gmail.com"
                      className="text-slate-300 hover:text-sky-400 transition-colors truncate font-mono text-[11px]"
                    >
                      Mrranasbgom@gmail.com
                    </a>
                  </div>
                </div>

                {/* Royal Guiding Principle Quote */}
                <div className="mt-5 p-3 rounded-xl bg-blue-950/40 border border-blue-500/20 text-center">
                  <p className="text-[11px] italic text-blue-200/90 leading-relaxed">
                    &ldquo;There is no limit earth & sky, Priorities Fly on Sky.&rdquo;
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
