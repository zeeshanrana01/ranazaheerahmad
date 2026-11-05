"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Building,
  Server
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-950/70 text-blue-300 border border-blue-500/30 mb-4">
            <Briefcase className="w-3.5 h-3.5 text-blue-400" />
            <span>15Y-Experience Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Professional Career & Leadership Timeline
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Progressive trajectory from technical IT specialist to leading engineering crews at the landmark Royal Palaces of Makkah Al-Mukarramah.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 lg:ml-12 pl-6 sm:pl-10 space-y-12">
          {portfolioData.experiences.map((exp, index) => {
            const isFeatured = index === 0; // Saudi Binladin Group
            const isExpanded = expandedIndex === index;

            return (
              <div key={index} className="relative group">
                {/* Timeline Node Marker */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isFeatured
                      ? "bg-blue-600 text-white shadow-[0_0_18px_rgba(37,99,235,0.7)]"
                      : "bg-[#070e24] border border-slate-700 text-slate-400 group-hover:border-blue-500/60"
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Main Card */}
                <div
                  className={`glass-panel rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                    isFeatured
                      ? "border-blue-500/40 bg-[#070e24]/90 shadow-xl shadow-blue-950/40"
                      : "border-slate-800/80 hover:border-slate-700 bg-[#060c20]/60"
                  }`}
                >
                  {/* Period & Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/80 text-blue-300 border border-blue-500/30 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        {exp.period}
                      </span>
                      {isFeatured && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                          Active Supervisory Mandate
                        </span>
                      )}
                    </div>

                    {exp.badge && (
                      <span className="text-xs font-mono font-medium text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-xl">
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  {/* Role Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-blue-300 transition-colors">
                    {exp.role}
                  </h3>

                  {/* Company & Location */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-1.5 mb-4">
                    <span className="flex items-center gap-1.5 text-slate-200 font-semibold">
                      <Building className="w-4 h-4 text-blue-400" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Summary Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Key Mandates & Operations:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-start gap-2.5 text-xs text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Handled */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Systems & Infrastructure Handled:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs px-2.5 py-1 rounded-lg bg-[#030716]/90 text-blue-200 border border-blue-500/25 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Associated Sites */}
                  {exp.projects && (
                    <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2 text-xs">
                      <span className="text-slate-400 font-mono text-[11px]">Associated Sites:</span>
                      {exp.projects.map((proj, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-2 py-0.5 rounded-md bg-[#0a1228] text-slate-300 border border-slate-700/60 text-[11px]"
                        >
                          {proj}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
