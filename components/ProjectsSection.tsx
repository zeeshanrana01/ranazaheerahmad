"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Building2,
  Server,
  Flame,
  Users,
  Briefcase,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Zap
} from "lucide-react";
import { portfolioData, ProjectItem } from "@/data/portfolioData";

export default function ProjectsSection() {
  const getProjectIcon = (icon: string) => {
    switch (icon) {
      case "palace":
        return Building2;
      case "shield":
        return ShieldCheck;
      case "server":
        return Server;
      case "flame":
        return Flame;
      case "users":
        return Users;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-950/70 text-blue-300 border border-blue-500/30 mb-4">
            <Building2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Landmark Infrastructure Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Royal Palaces & Mission-Critical Facilities
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            High-security state facilities and royal complexes where continuous uptime is paramount. Overseeing low-voltage electronics, life safety networks, and communication backbones.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project) => {
            const Icon = getProjectIcon(project.icon);
            return (
              <div
                key={project.id}
                className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-7 border-slate-800/90 bg-[#070e24]/85 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-blue-600/5 rounded-full blur-2xl group-hover:bg-blue-600/10 transition-colors pointer-events-none" />

                <div>
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-lg bg-[#09122c] text-blue-200 border border-blue-800/50">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-1.5 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-sky-300 mb-3">
                    {project.subtitle}
                  </p>

                  {/* Scope badge */}
                  <div className="p-2.5 rounded-xl bg-[#030716]/90 border border-slate-800 text-xs text-slate-300 mb-4">
                    <span className="text-[10px] font-mono text-blue-400 block uppercase">Project Scope:</span>
                    <span className="font-medium">{project.scope}</span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Metric footer */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>{project.metrics}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
