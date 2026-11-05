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
  Flame,
  ArrowRight
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % portfolioData.personal.titles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Actions (Col 7) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/30 shadow-[0_0_15px_rgba(45,212,191,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Saudi Council of Engineers (SCE) Verified Member</span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="hidden sm:inline text-slate-300">15+ Yrs Field Leadership</span>
            </div>

            {/* Main Headline */}
            <div>
              <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-teal-400 mb-2 font-semibold">
                Senior Engineering & Facility Infrastructure
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                RANA ZAHEER <br />
                <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
                  AHMAD SHAKIR
                </span>
              </h1>
            </div>

            {/* Dynamic Role Switcher */}
            <div className="h-10 flex items-center justify-center lg:justify-start">
              <p className="text-base sm:text-lg font-medium text-slate-300 flex items-center gap-2">
                <span className="text-teal-400 font-mono text-xs sm:text-sm">Specialization:</span>
                <span className="text-teal-200 font-bold tracking-wide transition-all duration-300 border-b border-teal-500/40 pb-0.5">
                  {portfolioData.personal.titles[currentRoleIndex]}
                </span>
              </p>
            </div>

            {/* Summary */}
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Veteran Electronics & Computer Network Engineer trusted with continuous operations across{" "}
              <span className="text-slate-200 font-medium">Al Safa Royal Palace</span> &{" "}
              <span className="text-slate-200 font-medium">Mina Royal Palace Makkah</span> (Saudi Binladin Group). Directing enterprise{" "}
              <span className="text-teal-300">MDF/IDF Data Centers</span>,{" "}
              <span className="text-cyan-300">CCTV Surveillance Matrices</span>,{" "}
              <span className="text-emerald-300">DN24 Multi-Room Fire Alarms & FM200</span>, and Building Management Systems (BMS).
            </p>

            {/* Quick Stats Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="glass-panel p-3 rounded-2xl border-slate-800 text-center">
                <p className="text-xl sm:text-2xl font-black text-teal-400">15+ Yrs</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Field Leadership</p>
              </div>
              <div className="glass-panel p-3 rounded-2xl border-slate-800 text-center">
                <p className="text-xl sm:text-2xl font-black text-cyan-400">10+ Sites</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Royal & High-Security</p>
              </div>
              <div className="glass-panel p-3 rounded-2xl border-slate-800 text-center">
                <p className="text-xl sm:text-2xl font-black text-emerald-400">25+ Certs</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Verified Modules</p>
              </div>
              <div className="glass-panel p-3 rounded-2xl border-slate-800 text-center">
                <p className="text-xl sm:text-2xl font-black text-amber-400">99.9%</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Uptime Record</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href="https://wa.me/966580828612?text=Hello%20Rana%20Zaheer%20Ahmad,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20position/project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)] active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="#certifications"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-panel text-white font-semibold text-sm border-teal-500/40 hover:bg-teal-500/10 hover:border-teal-400 transition-all active:scale-95 shadow-sm"
              >
                <Award className="w-4 h-4 text-teal-400" />
                <span>View Certifications</span>
              </a>

              <a
                href="#resume"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-panel text-slate-300 font-semibold text-sm hover:text-white hover:bg-slate-800/80 transition-all active:scale-95"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Key Infrastructure Systems Handled */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <span className="font-mono text-teal-400 text-[11px]">Primary Systems:</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-300">Data Center MDF/IDF</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-300">Honeywell & Simplex FAS</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-300">FM200 Fire Suppression</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-300">CCTV Control Rooms</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-300">SMATV / IPTV</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-300">BMS Automation</span>
            </div>

          </div>

          {/* Right Column: High-Tech Profile Card (Col 5) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Decorative Glow Rings */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000 animate-pulse-slow pointer-events-none" />

              {/* Main Profile Card Container */}
              <div className="relative glass-panel rounded-3xl p-6 sm:p-7 bg-slate-900/95 border border-teal-500/30 shadow-2xl shadow-teal-950/60">
                
                {/* Status Header */}
                <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-semibold text-emerald-400">Ready for Deployment</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60">
                    KSA / Global
                  </span>
                </div>

                {/* Profile Avatar with Glowing Ring */}
                <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-500 to-cyan-400 p-[3px] shadow-[0_0_25px_rgba(45,212,191,0.5)]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 relative">
                      <Image
                        src="/images/avatar_fb.jpg"
                        alt="Rana Zaheer Ahmad Shakir - Electronics & IT Computer Network Engineer"
                        fill
                        priority
                        className="object-cover object-top hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 192px, 240px"
                      />
                    </div>
                  </div>

                  {/* Verification Floating Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-slate-950 p-1.5 rounded-full border border-teal-500/40 shadow-lg">
                    <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                      <ShieldCheck className="w-5 h-5 text-teal-300" />
                    </div>
                  </div>
                </div>

                {/* Profile Identity Details */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white">
                    Rana Zaheer Ahmad
                  </h3>
                  <p className="text-xs text-teal-400 font-medium mt-1">
                    Electronics IT Computer Network Engineer
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Saudi Binladin Group Veteran (SBGOM)
                  </p>
                </div>

                {/* Quick Info Grid */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                    <span className="text-slate-300 truncate font-medium">
                      Makkah Al-Mukarramah, Saudi Arabia
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <a
                      href="tel:+966580828612"
                      className="text-slate-300 hover:text-emerald-400 transition-colors font-mono font-medium"
                    >
                      +966 58 082 8612
                    </a>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <a
                      href="mailto:Mrranasbgom@gmail.com"
                      className="text-slate-300 hover:text-cyan-400 transition-colors truncate font-mono text-[11px]"
                    >
                      Mrranasbgom@gmail.com
                    </a>
                  </div>
                </div>

                {/* Quote card */}
                <div className="mt-5 p-3 rounded-xl bg-teal-500/5 border border-teal-500/20 text-center">
                  <p className="text-[11px] italic text-teal-300/90 leading-tight">
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
