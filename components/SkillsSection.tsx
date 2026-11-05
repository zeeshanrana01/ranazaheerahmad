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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-teal-500/10 text-teal-400 border border-teal-500/30 mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Mastery & Operational Specializations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Core Technical Skills & Disciplines
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on technical competencies developed over 15+ years in high-density facilities, Royal Palaces, data centers, and multi-room life-safety networks.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {portfolioData.skills.map((category, idx) => {
            const Icon = getIcon(category.icon);
            const isSelected = activeCategoryIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`glass-panel p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer flex items-start gap-3.5 ${
                  isSelected
                    ? "bg-slate-900 border-teal-500 shadow-[0_0_20px_rgba(45,212,191,0.25)] ring-1 ring-teal-500/50"
                    : "border-slate-800 hover:border-slate-700 hover:bg-slate-900/60"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? "bg-teal-500 text-slate-950 shadow-md"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className={`text-xs sm:text-sm font-bold ${
                      isSelected ? "text-teal-300" : "text-white"
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
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border-slate-800 bg-slate-900/90 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Active Category Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-teal-400 uppercase tracking-wider block mb-1">
                Category {activeCategoryIndex + 1} of {portfolioData.skills.length}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {portfolioData.skills[activeCategoryIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {portfolioData.skills[activeCategoryIndex].description}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono shrink-0">
              <Zap className="w-3.5 h-3.5 text-teal-400" />
              <span>Production Tested</span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.skills[activeCategoryIndex].skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/90 hover:border-teal-500/30 transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-semibold mb-2">
                  <span className="text-white text-sm">{skill.name}</span>
                  <span className="text-teal-400 font-mono">{skill.level}%</span>
                </div>

                {/* Progress Meter */}
                <div className="w-full h-2 rounded-full bg-slate-800/90 overflow-hidden mb-3">
                  <div
                    className="h-full bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(45,212,191,0.5)]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Tags */}
                {skill.tags && (
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* AI Tools Badge & Modern Edge */}
          {activeCategoryIndex === 3 && (
            <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-indigo-500/10 border border-teal-500/30 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-300 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">Modern AI Accelerated Troubleshooting</p>
                <p className="text-slate-400 mt-0.5">
                  Proficient in applying ChatGPT AI, Google Gemini, and Microsoft Bing Copilot for rapid technical telemetry analysis, diagnostic checklists, and documentation automation.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
