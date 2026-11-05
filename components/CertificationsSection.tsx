"use client";

import React, { useState } from "react";
import { Award, ShieldCheck, CheckCircle, ExternalLink, Filter, Sparkles, FileCheck } from "lucide-react";
import { portfolioData, CertificationItem } from "@/data/portfolioData";
import CertificationsModal from "./CertificationsModal";

export default function CertificationsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  const categories = [
    { id: "all", label: "All Accreditations" },
    { id: "engineering", label: "Engineering & SCE" },
    { id: "safety", label: "Health & Safety (NEBOSH)" },
    { id: "it", label: "IT & Data Centers" },
    { id: "specialized", label: "Specialized Management" }
  ];

  const filteredCerts = selectedCategory === "all"
    ? portfolioData.certifications
    : portfolioData.certifications.filter((c) => c.category === selectedCategory);

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-950/70 text-blue-300 border border-blue-500/30 mb-4">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            <span>Official Government & International Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Professional Certifications & Statutory Licensure
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            All certifications are verified, government attested, and registered under the{" "}
            <span className="text-blue-300 font-semibold">Saudi Council of Engineers (SCE)</span>,{" "}
            <span className="text-sky-300 font-semibold">NEBOSH UK</span>, and the{" "}
            <span className="text-emerald-300 font-semibold">Government of Pakistan</span>. Select any credential to inspect verification parameters.
          </p>

          {/* Verification Highlight Banner */}
          <div className="mt-6 p-4 rounded-2xl glass-panel border-blue-500/25 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-300">
            <span className="flex items-center gap-2 text-amber-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-amber-400" /> Saudi Council of Engineers Verified
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="flex items-center gap-2 text-blue-200 font-medium">
              <FileCheck className="w-4 h-4 text-blue-400" /> NEBOSH Level 7 H&S Qualified
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="flex items-center gap-2 text-sky-200 font-medium">
              <Sparkles className="w-4 h-4 text-sky-400" /> 25+ Verified Online & Field Modules
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white font-bold shadow-[0_0_18px_rgba(37,99,235,0.45)] border border-blue-400/40"
                  : "glass-panel text-slate-300 hover:text-white hover:border-blue-500/35 hover:bg-[#0c1634]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setActiveCert(cert)}
              className="glass-panel glass-panel-hover rounded-2xl p-5 border border-slate-800/90 cursor-pointer flex flex-col justify-between group relative overflow-hidden bg-[#070e24]/85"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-blue-600/5 rounded-full blur-xl group-hover:bg-blue-600/10 transition-colors pointer-events-none" />

              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    Verified
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {cert.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-2 mb-2 leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs text-blue-300/90 font-medium mb-3">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              {/* Skills Tags & Action */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-[#0a1228] text-slate-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-blue-950/80 text-blue-300 font-mono border border-blue-800/50">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                  <span>Review Credential Details</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Official Certificate Verification Link Banner */}
        <div className="mt-12 glass-panel rounded-2xl p-6 border-blue-500/25 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left bg-[#070e24]/90">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-300 shrink-0">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Full Certificate Transcripts & Original Government Seals</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Physical and digitized attested transcripts are registered and verified. Complete certificate portfolio is accessible via official Facebook channel.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://www.facebook.com/share/1HcoNJn52Y/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all text-xs font-semibold shadow-[0_0_15px_rgba(37,99,235,0.35)]"
            >
              <span>View Facebook Certificate Album</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Modal View */}
      <CertificationsModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </section>
  );
}
