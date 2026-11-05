"use client";

import React, { useState } from "react";
import {
  Wrench,
  Cpu,
  Network,
  HardDrive,
  ShieldCheck,
  CheckCircle,
  Sparkles,
  Zap
} from "lucide-react";
import { portfolioData, SkillCategory } from "@/data/portfolioData";

export default function SkillsSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "cpu":
        return Cpu;
      case "network":
        return Network;
      case "hard-drive":
        return HardDrive;
      case "shield-check":
        return ShieldCheck;
      default:
        return Wrench;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-950/70 text-blue-300 border border-blue-500/30 mb-4">
            <Wrench className="w-3.5 h-3.5 text-blue-400" />
            <span>Technical Mastery & Operational Disciplines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Core Technical Skills & Disciplines
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Hands-on technical competencies developed over 15+ years across high-density facilities, Royal Palaces, MDF/IDF data rooms, and life-safety networks.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10">
          {portfolioData.skills.map((category, idx) => {
            const Icon = getIcon(category.icon);
            const isSelected = activeCategoryIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`glass-panel p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer flex items-start gap-3.5 ${
                  isSelected
                    ? "bg-[#09122c] border-blue-500 shadow-[0_0_22px_rgba(37,99,235,0.3)] ring-1 ring-blue-500/50"
                    : "border-slate-800/90 hover:border-slate-700 hover:bg-[#070e24]/70"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/50"
                      : "bg-[#0c1634] text-blue-400 border border-blue-900/40"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className={`text-xs sm:text-sm font-bold ${
                      isSelected ? "text-blue-300" : "text-white"
                    }`}
                  >
                    {category.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    {category.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Detailed View */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border-slate-800/90 bg-[#070e24]/90 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

          {/* Active Category Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">
                Category {activeCategoryIndex + 1} of {portfolioData.skills.length}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {portfolioData.skills[activeCategoryIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {portfolioData.skills[activeCategoryIndex].description}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-950/80 border border-blue-600/30 text-blue-300 text-xs font-mono shrink-0">
              <Zap className="w-3.5 h-3.5 text-blue-400" />
              <span>Production Tested</span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.skills[activeCategoryIndex].skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#030716]/85 border border-slate-800/90 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-semibold mb-2">
                  <span className="text-white text-sm">{skill.name}</span>
                  <span className="text-blue-400 font-mono">{skill.level}%</span>
                </div>

                {/* Progress Meter */}
                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden mb-3 border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-400 rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Tags */}
                {skill.tags && (
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-[#09122c] text-slate-300 border border-slate-700/60 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Modern Edge & AI Tools Callout */}
          {activeCategoryIndex === 3 && (
            <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-900/40 border border-blue-500/30 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-300 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">AI-Accelerated Telemetry & Troubleshooting</p>
                <p className="text-slate-300 mt-0.5">
                  Proficient in leveraging ChatGPT AI, Google Gemini, and Microsoft Bing Copilot for accelerated diagnostics, technical log telemetry analysis, and automated compliance reporting.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
