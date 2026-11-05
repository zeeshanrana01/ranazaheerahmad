"use client";

import React from "react";
import {
  Wrench,
  Zap,
  Server,
  Flame,
  Video,
  Users,
  Laptop,
  CheckCircle2,
  ArrowRight,
  MessageSquare
} from "lucide-react";
import { portfolioData, ServiceItem } from "@/data/portfolioData";

export default function ServicesSection() {
  const getServiceIcon = (icon: string) => {
    switch (icon) {
      case "zap":
        return Zap;
      case "server":
        return Server;
      case "flame":
        return Flame;
      case "video":
        return Video;
      case "users":
        return Users;
      case "laptop":
        return Laptop;
      default:
        return Wrench;
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-950/70 text-blue-300 border border-blue-500/30 mb-4">
            <Wrench className="w-3.5 h-3.5 text-blue-400" />
            <span>Operational Capabilities & Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Specialized Engineering & Supervisory Services
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Proven execution across electronics maintenance, data room structured cabling, fire safety certifications, and 24/7 technical shift leadership.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.services.map((service, index) => {
            const Icon = getServiceIcon(service.icon);
            return (
              <div
                key={index}
                className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-7 border-slate-800/90 bg-[#070e24]/85 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {service.fullDesc}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-blue-400">
                      Standard Deliverables:
                    </h4>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <a
                    href={`https://wa.me/966580828612?text=Hello%20Engr.%20Rana%20Zaheer%20Ahmad,%20I%20am%20inquiring%20about%20your%20service:%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
