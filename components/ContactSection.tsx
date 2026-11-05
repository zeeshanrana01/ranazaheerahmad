"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  ShieldCheck,
  Clock,
  Sparkles
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Communication Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Connect with Rana Zaheer Ahmad
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Open for Senior Technical Supervisor, Engineering Management, and Specialized Low-Voltage / IT Infrastructure contracts in Saudi Arabia and internationally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication Cards (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Priority Card */}
            <a
              href="https://wa.me/966580828612?text=Hello%20Rana%20Zaheer%20Ahmad,%20I%20reviewed%20your%20Engineering%20Portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-3xl p-6 border-emerald-500/40 bg-gradient-to-br from-emerald-950/30 to-slate-900/90 block group hover:border-emerald-400 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Instant Response
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                Direct WhatsApp Chat
              </h3>
              <p className="text-xs text-slate-300 mt-1 mb-3">
                Click to initiate an immediate WhatsApp chat for rapid recruitment or project consulting.
              </p>
              <div className="flex items-center justify-between text-xs font-mono text-emerald-400 font-semibold pt-2 border-t border-emerald-500/20">
                <span>+966 58 082 8612</span>
                <span className="flex items-center gap-1">Open Chat <ExternalLink className="w-3.5 h-3.5" /></span>
              </div>
            </a>

            {/* Email Card */}
            <div className="glass-panel rounded-3xl p-6 border-slate-800 bg-slate-900/80">
              <div className="flex items-start justify-between mb-3">
                <div className="w-11 h-11 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer text-xs flex items-center gap-1"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedEmail ? "Copied!" : "Copy"}</span>
                </button>
              </div>
              <h3 className="text-base font-bold text-white">Email Address</h3>
              <p className="text-xs text-slate-400 mt-0.5 mb-3">
                For official correspondence, RFP packets, and verified documentation.
              </p>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="text-xs font-mono font-semibold text-teal-300 hover:text-teal-200 transition-colors break-all"
              >
                {portfolioData.personal.email}
              </a>
            </div>

            {/* Direct Phone & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="glass-panel rounded-2xl p-4 border-slate-800">
                <Phone className="w-5 h-5 text-cyan-400 mb-2" />
                <p className="text-[11px] text-slate-400 uppercase font-mono">Mobile Call</p>
                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="text-xs font-bold text-white hover:text-cyan-300 transition-colors font-mono"
                >
                  {portfolioData.personal.phone}
                </a>
              </div>

              <div className="glass-panel rounded-2xl p-4 border-slate-800">
                <MapPin className="w-5 h-5 text-amber-400 mb-2" />
                <p className="text-[11px] text-slate-400 uppercase font-mono">Primary Station</p>
                <p className="text-xs font-bold text-white leading-tight">
                  Makkah, Saudi Arabia
                </p>
              </div>
            </div>

            {/* Social Link */}
            <div className="glass-panel rounded-2xl p-4 border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">
                  FB
                </span>
                <div>
                  <p className="font-semibold text-white">Facebook Portfolio</p>
                  <p className="text-[10px] text-slate-400">Certificates & Verified Gallery</p>
                </div>
              </div>
              <a
                href="https://www.facebook.com/share/1HcoNJn52Y/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-semibold text-xs hover:bg-blue-500 transition-colors flex items-center gap-1"
              >
                <span>Visit</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form (Col 7) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border-slate-800 bg-slate-900/90 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  Send a Direct Message / Inquire
                </h3>
                <p className="text-xs text-slate-400">
                  Fill in your details below and I will get back to you promptly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Inquiry Received Successfully</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. You can also connect immediately on WhatsApp at{" "}
                    <strong className="text-emerald-300">+966 58 082 8612</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Engr. Ahmad Al-Harbi"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-teal-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ahmad@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-teal-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                        Contact / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+966 50 123 4567"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-teal-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                        Subject / Project Type
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Job Position / Facility Maintenance / ELV Project"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-teal-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Your Message & Scope *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your requirements, position details, or facility inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-teal-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <p className="text-[11px] text-slate-400 text-center sm:text-left">
                      Strict confidentiality and professional data handling guaranteed.
                    </p>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs sm:text-sm hover:bg-teal-400 transition-all shadow-[0_0_20px_rgba(45,212,191,0.4)] cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
