"use client";

import React from "react";
import Image from "next/image";
import {
  User,
  ShieldCheck,
  Languages,
  CheckCircle2,
  Award,
  Globe,
  Briefcase,
  Car,
  FileCheck2,
  Cpu
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-950/70 text-blue-300 border border-blue-500/30 mb-4">
            <User className="w-3.5 h-3.5 text-blue-400" />
            <span>Executive Profile & Professional Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            15+ Years of Dedicated Engineering Excellence
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From technical field engineering to supervising mission-critical electronics, communications, and life-safety systems at the landmark Royal Palaces of Makkah Al-Mukarramah.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Detailed Bio (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border-slate-800/90 bg-[#070e24]/90 space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Cpu className="w-5 h-5 text-blue-400" />
                <span>Electronics, IT & Royal Facilities Leadership</span>
              </h3>
              
              <p className="text-sm text-slate-300 leading-relaxed">
                I am an <strong className="text-white font-semibold">Electronics & IT Computer Network Engineer</strong> with a comprehensive foundation in electrical engineering principles, enterprise digital infrastructure, and life-safety systems. With over a decade and a half of professional practice, I have specialized in the drafting, execution, preventative maintenance, and troubleshooting of complex low-voltage (ELV) networks.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                Currently, I serve with the <strong className="text-white font-semibold">Saudi Binladin Group Operation & Maintenance (SBGOM)</strong> in Makkah, Saudi Arabia. My responsibilities span across prestigious royal facilities, notably <strong className="text-blue-300 font-semibold">Al Safa Royal Palace (Project 0768)</strong> and <strong className="text-blue-300 font-semibold">Mina Royal Palace (Project 0769)</strong> under the auspices of the Royal Protocol Administration (RPA) and Crown Prince Protocol Administration (CPPA).
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                I oversee the uninterrupted operation of <strong className="text-sky-300">MDF/IDF Data Centers</strong>, enterprise switch racks, and multi-monitor central security rooms. My expertise extends to life safety infrastructure, including <strong className="text-indigo-300">DN24 multi-room Fire Alarm Systems (FAS)</strong>, <strong className="text-indigo-300">FM200 clean agent gas suppression</strong>, gas detectors, pull stations, SMATV, IPTV, and analog/digital PABX telecommunications.
              </p>

              {/* Core Philosophy Callout */}
              <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/25">
                <p className="text-xs text-blue-200 italic leading-relaxed">
                  &ldquo;To find for myself the right position with appropriate challenges and rewards, where I can have optimum utilization of my education, skills, and experience and play a leading role in progress and development.&rdquo;
                </p>
                <p className="text-[11px] font-bold text-amber-400 mt-2 font-mono text-right">
                  — Engr. Rana Zaheer Ahmad Shakir
                </p>
              </div>
            </div>

            {/* Professional Memberships & Accreditations Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border-slate-800/90 bg-[#070e24]/90">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>Verified Statutory Memberships & Recognitions</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div className="p-3.5 rounded-xl bg-[#030716]/90 border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Saudi Council of Engineers (SCE)</strong>
                    <span className="text-slate-400">Verified Member & Active Engineering Standing in KSA</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#030716]/90 border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Overseas Pakistanis Foundation (OPF)</strong>
                    <span className="text-slate-400">Active Expatriate Professional Membership</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#030716]/90 border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Pakistan Hajj Volunteer Group (PHVG)</strong>
                    <span className="text-slate-400">Active Field Volunteer & IT Support Coordinator</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#030716]/90 border border-slate-800 flex items-start gap-3">
                  <Briefcase className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">IBC Travel & Tourism & ASCSI Group</strong>
                    <span className="text-slate-400">Owner & Executive Director</span>
                  </div>
                </div>
              </div>

              {/* Driving Licenses */}
              <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-blue-400" />
                  <span>Officially Licensed Driver: <strong className="text-white">Saudi Arabia & Pakistan</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Languages & Attestation (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Multilingual Fluency */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border-slate-800/90 bg-[#070e24]/90">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Languages className="w-5 h-5 text-blue-400" />
                <span>Multilingual Fluency</span>
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Executive communication proficiency across diverse multinational teams, royal staff, and pilgrimage missions.
              </p>

              <div className="space-y-4">
                {portfolioData.languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-semibold text-white">{lang.name}</span>
                      <span className="text-[11px] text-blue-300 font-mono">{lang.proficiency}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-400 rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                        style={{ width: `${lang.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Document Verification Guarantee Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border-blue-500/30 bg-[#070e24]/95 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-300 shrink-0">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Full Legal Credential Guarantee</h4>
                  <p className="text-[11px] text-blue-300 font-mono">Government & International Verification</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {portfolioData.personal.verificationDisclaimer}
              </p>

              <div className="p-3 rounded-xl bg-[#030716]/90 border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
                <span>Transcripts & Attested Copies:</span>
                <span className="text-amber-400 font-semibold font-mono">Furnished on Demand</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
