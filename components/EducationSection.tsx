"use client";

import React from "react";
import { GraduationCap, Award, BookOpen, CheckCircle, Calendar, School } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-teal-500/10 text-teal-400 border border-teal-500/30 mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Education & Technical Diplomas
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Formally accredited academic foundation combining enterprise information systems with hands-on polytechnic engineering.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.education.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-7 border-slate-800 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-xl bg-slate-800 text-teal-300 border border-slate-700/60">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-teal-300 transition-colors mb-1.5">
                  {edu.degree}
                </h3>

                <p className="text-xs font-medium text-cyan-400 mb-3 flex items-center gap-1.5">
                  <School className="w-3.5 h-3.5" />
                  {edu.institution}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {edu.description}
                </p>
              </div>

              <div>
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Key Academic Pillars:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {edu.highlights.map((item, hIdx) => (
                    <span
                      key={hIdx}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-950/80 text-slate-300 border border-slate-800 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
