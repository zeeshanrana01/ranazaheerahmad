"use client";

import React from "react";
import { X, ShieldCheck, CheckCircle2, Building, ExternalLink, Calendar, Award } from "lucide-react";
import { CertificationItem } from "@/data/portfolioData";

interface CertificationsModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
}

export default function CertificationsModal({ cert, onClose }: CertificationsModalProps) {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 bg-slate-900/95 border border-teal-500/30 shadow-2xl shadow-teal-950/50 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0 shadow-[0_0_20px_rgba(45,212,191,0.25)]">
            <Award className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Verified Credential
              </span>
              <span className="text-[11px] font-mono text-teal-400 uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-800/80">
                {cert.category}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
              {cert.title}
            </h3>
          </div>
        </div>

        {/* Issuer and Status info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 mb-6">
          <div className="flex items-center gap-3">
            <Building className="w-4 h-4 text-teal-400 shrink-0" />
            <div>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Issuing Authority</p>
              <p className="text-xs font-semibold text-slate-200">{cert.issuer}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Status & Standing</p>
              <p className="text-xs font-semibold text-teal-300">{cert.status}</p>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            Scope & Competencies Evaluated
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed bg-slate-800/30 p-4 rounded-xl border border-slate-800/60">
            {cert.description}
          </p>
        </div>

        {/* Validated Skills Tags */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
            Key Verified Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-teal-300 border border-teal-500/20"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Verification Guarantee & Action */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-400 leading-snug text-center sm:text-left">
            <span className="text-emerald-400 font-semibold">Attestation Verified:</span> All documents are verified by the Government of Pakistan, Saudi Council of Engineers (SCE), and recognized international authorities. Original transcripts available on request.
          </p>
          <a
            href="https://wa.me/966580828612?text=Hello%20Rana%20Zaheer%20Ahmad,%20I%20would%20like%20to%20request%20verification%20documents%20for%20your%20certification:%20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-semibold text-xs hover:bg-teal-400 transition-all shrink-0 shadow-[0_0_15px_rgba(45,212,191,0.4)]"
          >
            <span>Request Document</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
