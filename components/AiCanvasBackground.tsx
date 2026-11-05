"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  glowColor: string;
  pulsePhase: number;
}

interface Pulse {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export default function AiCanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracker
    const mouse = {
      x: -2000,
      y: -2000,
      radius: 180,
      isHovered: false
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -2000;
      mouse.y = -2000;
      mouse.isHovered = false;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Official Executive Theme Palettes: Deep Sapphire, Cobalt, Ice Blue, and subtle Royal Gold
    const nodePalette = [
      { fill: "rgba(96, 165, 250, ", glow: "rgba(59, 130, 246, 0.45)" }, // Ice Blue
      { fill: "rgba(59, 130, 246, ", glow: "rgba(37, 99, 235, 0.5)" },   // Royal Blue
      { fill: "rgba(129, 140, 248, ", glow: "rgba(99, 102, 241, 0.45)" }, // Indigo
      { fill: "rgba(245, 158, 11, ", glow: "rgba(245, 158, 11, 0.4)" }    // Royal Gold Accent
    ];

    const nodeCount = Math.min(Math.floor((width * height) / 12000), 85);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const p = nodePalette[Math.floor(Math.random() * (i % 6 === 0 ? nodePalette.length : 3))];
      const r = Math.random() * 2 + 1.2;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: r,
        baseRadius: r,
        color: p.fill,
        glowColor: p.glow,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    // Active AI Data Pulses traveling along neural connections
    const pulses: Pulse[] = [];
    const maxPulses = 14;

    const spawnPulse = () => {
      if (pulses.length >= maxPulses || nodes.length < 2) return;
      const fromIdx = Math.floor(Math.random() * nodes.length);
      // Find nearest neighbor
      let nearestIdx = -1;
      let minDist = 140;
      for (let j = 0; j < nodes.length; j++) {
        if (j === fromIdx) continue;
        const dx = nodes[fromIdx].x - nodes[j].x;
        const dy = nodes[fromIdx].y - nodes[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < minDist) {
          minDist = d;
          nearestIdx = j;
        }
      }

      if (nearestIdx !== -1) {
        pulses.push({
          fromNode: fromIdx,
          toNode: nearestIdx,
          progress: 0,
          speed: 0.015 + Math.random() * 0.015
        });
      }
    };

    let pulseTimer = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle background geometric grid for official blueprint vibe
      ctx.strokeStyle = "rgba(30, 58, 138, 0.05)";
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Update and draw nodes & neural connections
      const maxDistance = 145;

      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];

        // Move
        n1.x += n1.vx;
        n1.y += n1.vy;

        // Bounce gently off borders
        if (n1.x < 0 || n1.x > width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > height) n1.vy *= -1;

        // Pulse breathing
        n1.pulsePhase += 0.02;
        const breathing = Math.sin(n1.pulsePhase) * 0.4;
        n1.radius = n1.baseRadius + breathing;

        // Draw connections to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.28;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            // Gradient connection stroke
            const grad = ctx.createLinearGradient(n1.x, n1.y, n2.x, n2.y);
            grad.addColorStop(0, `rgba(59, 130, 246, ${alpha})`);
            grad.addColorStop(1, `rgba(99, 102, 241, ${alpha * 0.7})`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }

        // Mouse magnetic connection & interactive beacon
        const mdx = n1.x - mouse.x;
        const mdy = n1.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < mouse.radius) {
          const mAlpha = (1 - mDist / mouse.radius) * 0.55;
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(96, 165, 250, ${mAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // Subtle magnetic repulsion/nudge
          n1.x += (mdx / mDist) * 0.4;
          n1.y += (mdy / mDist) * 0.4;
        }

        // Draw Node Core
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${n1.color}0.85)`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = n1.glowColor;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 3. Process & Draw Active Neural AI Pulses
      pulseTimer++;
      if (pulseTimer % 20 === 0) {
        spawnPulse();
      }

      for (let pIdx = pulses.length - 1; pIdx >= 0; pIdx--) {
        const pulse = pulses[pIdx];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(pIdx, 1);
          continue;
        }

        const startNode = nodes[pulse.fromNode];
        const endNode = nodes[pulse.toNode];
        if (!startNode || !endNode) {
          pulses.splice(pIdx, 1);
          continue;
        }

        const px = startNode.x + (endNode.x - startNode.x) * pulse.progress;
        const py = startNode.y + (endNode.y - startNode.y) * pulse.progress;

        // Draw glowing pulse photon
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(147, 197, 253, 0.95)";
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(96, 165, 250, 0.9)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 4. Subtle Cursor Radar Ring
      if (mouse.isHovered && mouse.x > 0 && mouse.y > 0) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 16, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(96, 165, 250, 0.35)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(96, 165, 250, 0.85)";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(59, 130, 246, 0.7)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
