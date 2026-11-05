"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FileText,
  Download,
  Eye,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
  Printer,
  Maximize2,
  X
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ResumeSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-950/70 text-blue-300 border border-blue-500/30 mb-4">
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Official Curriculum Vitae (CV) & Credentials
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Review the official verified CV document outlining 15+ years of statutory credentials, project milestones, and certifications.
          </p>
        </div>

        {/* Resume Card Container */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border-slate-800/90 bg-[#070e24]/90 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: CV Overview & Highlights (Col 7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Original & Attested Documentation</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Rana Zaheer Ahmad Shakir
              </h3>
              
              <p className="text-sm text-blue-300 font-mono">
                Electronics IT Computer Network Engineer | Saudi Binladin Group Veteran
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  A comprehensive, verified engineering dossier spanning <strong className="text-white font-semibold">15+ years of continuous service</strong> across Saudi Arabia and Pakistan. Verified by the Saudi Council of Engineers (SCE), NEBOSH UK, and the Government of Pakistan.
                </p>
                <p>
                  Held high-security leadership responsibilities across <strong className="text-blue-300 font-semibold">Project No. 0768 & 0769 (Al Safa Royal Palace & Mina Royal Palace Makkah)</strong> under RPA & CPPA.
                </p>
              </div>

              {/* Attestation Box */}
              <div className="p-4 rounded-2xl bg-[#030716]/90 border border-slate-800 text-xs space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-semibold">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  <span>Official Attestation Declaration</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  &ldquo;I have all original documents and no doubt in my curriculum vitae Form. All documents are verified from the government or Govt. Pakistan & others private National-International government centers. Reference will be furnished on demand.&rdquo;
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/images/resume_full.jpg"
                  download="Rana_Zaheer_Ahmad_CV.jpg"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Official CV Document</span>
                </a>

                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-panel text-white font-semibold text-xs sm:text-sm border-blue-500/35 hover:bg-blue-600/15 transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-sky-400" />
                  <span>Inspect Fullscreen CV</span>
                </button>
              </div>

            </div>

            {/* Right Column: Interactive Resume Document Preview (Col 5) */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() => setModalOpen(true)}
                className="relative w-full max-w-sm rounded-2xl overflow-hidden border-2 border-blue-500/35 shadow-2xl shadow-blue-950/70 group cursor-pointer hover:border-blue-400 transition-all duration-300"
              >
                <div className="relative aspect-[3/4] w-full bg-slate-950">
                  <Image
                    src="/images/resume_full.jpg"
                    alt="Rana Zaheer Ahmad Shakir - Official CV Document"
                    fill
                    className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#02050f]/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white p-4 text-center">
                    <Maximize2 className="w-8 h-8 text-blue-400 animate-bounce" />
                    <span className="text-xs font-semibold">Click to View Full Screen</span>
                  </div>
                </div>

                <div className="p-3 bg-[#030716]/95 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-300">
                  <span>Verified Resume Document</span>
                  <span className="text-blue-400 font-mono">Click to Expand</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Fullscreen Resume Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#02050f]/90 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] glass-panel rounded-3xl p-4 sm:p-6 bg-[#070e24] border border-blue-500/40 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-bold text-white">Rana Zaheer Ahmad Shakir — Verified CV</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/images/resume_full.jpg"
                  download="Rana_Zaheer_Ahmad_CV.jpg"
                  className="p-2 rounded-xl bg-blue-600/20 text-blue-300 hover:bg-blue-600 hover:text-white transition-colors"
                  title="Download"
                >
                  <Download className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body / Image */}
            <div className="relative flex-1 overflow-auto rounded-xl bg-slate-950 p-2 flex justify-center">
              <div className="relative w-full max-w-2xl min-h-[600px] sm:min-h-[800px]">
                <Image
                  src="/images/resume_full.jpg"
                  alt="Rana Zaheer Ahmad Shakir CV Full View"
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
