# Rana Zaheer Ahmad Shakir — Engineering Portfolio

A modern, high-performance portfolio website built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4** for **Rana Zaheer Ahmad Shakir** — Electronics & IT Computer Network Engineer with 15+ years of distinguished experience at the Royal Palaces of Makkah (Saudi Binladin Group).

Inspired by the cyber-modern aesthetic of [ranazeeshan.vercel.app](https://ranazeeshan.vercel.app/), featuring an interactive AI neural constellation particle background, glassmorphism UI, interactive certifications modal, and responsive design.

---

## 🌟 Key Features

1. **Interactive AI Neural Background (`<canvas>`)**:
   - Dynamic drifting nodes with connecting lines, particle physics, and cursor attraction.
2. **Interactive Certifications Modal Review**:
   - Filterable categories: Engineering & SCE, Health & Safety (NEBOSH), IT & Data Centers, Specialized & Management.
   - Comprehensive review modal showing issuing body, verified status, skills evaluated, and official attestations.
3. **15+ Years Professional Timeline**:
   - Saudi Binladin Group (Al Safa Royal Palace & Mina Royal Palace Makkah under RPA & CPPA).
   - Detailed systems handled: MDF/IDF Data Centers, DN24 Fire Alarm Systems, FM200 Clean Agent suppression, CCTV matrices, SMATV, IPTV, BMS.
4. **Verified Qualifications & Education**:
   - Bachelor of Business Information Technology (BBIT).
   - Diploma of Associate Engineering (DAE) in Electronics.
   - Diploma in Computer Hardware & Software's.
   - Diploma in Computer Office Management.
5. **Interactive Curriculum Vitae (CV) Section**:
   - High-resolution modal inspector of the verified CV document.
   - Direct download button for original attested transcripts.
6. **Direct Communication Channels**:
   - Instant WhatsApp one-click chat with prefilled message.
   - Direct email (`Mrranasbgom@gmail.com`) with one-click copy.
   - Direct phone call (`+966 58 082 8612`).
   - Interactive inquiry transmission form.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js `v18.18+` or `v20+` (tested on `v22.17.0`)
- npm `v10+`

### Installation
1. Navigate to the project directory:
   ```bash
   cd D:\AgenticAi\ranazaheerahmad
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 How to Deploy Live (e.g. on Vercel)

The site is production-optimized and ready for instant deployment on Vercel:

### Option 1: Via Vercel CLI (Fastest)
1. In your terminal inside `D:\AgenticAi\ranazaheerahmad`:
   ```bash
   npx vercel
   ```
2. Follow the prompts to link your Vercel account and project.
3. Deploy to production:
   ```bash
   npx vercel --prod
   ```

### Option 2: Via GitHub & Vercel Dashboard
1. Initialize a git repository and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: complete modern portfolio for Rana Zaheer Ahmad"
   ```
2. Push the code to a GitHub repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/ranazaheerahmad.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [vercel.com/new](https://vercel.com/new), select your repository, and click **Deploy**. Vercel will automatically build and publish the live URL.

---

## 📂 Project Structure

```text
ranazaheerahmad/
├── app/
│   ├── globals.css              # Cyber-dark theme, glassmorphism, glow utilities
│   ├── layout.tsx               # Root layout with AI canvas & scroll progress
│   └── page.tsx                 # Main single-page portfolio layout
├── components/
│   ├── Navbar.tsx               # Frosted glass navbar with active spy & WhatsApp CTA
│   ├── AiCanvasBackground.tsx   # Interactive particle & neural network canvas
│   ├── ScrollProgressBar.tsx    # Top scroll progress gradient bar
│   ├── Hero.tsx                 # Dynamic headline, stats, avatar, and quick CTAs
│   ├── CertificationsSection.tsx# Filterable credentials grid & review triggers
│   ├── CertificationsModal.tsx  # Detailed credential review modal
│   ├── AboutSection.tsx         # Detailed bio, languages matrix, SCE & OPF memberships
│   ├── SkillsSection.tsx        # 4 categorized quadrants with visual progress meters
│   ├── ExperienceSection.tsx    # 15Y-experience interactive career timeline
│   ├── EducationSection.tsx     # Academic degrees & technical engineering diplomas
│   ├── ProjectsSection.tsx      # Royal palaces & mission-critical sites portfolio
│   ├── ServicesSection.tsx      # 6 specialized ELV & IT supervisory service offerings
│   ├── ResumeSection.tsx        # Digital CV with high-res document viewer & download
│   ├── ContactSection.tsx       # WhatsApp direct, phone, email, and inquiry form
│   └── Footer.tsx               # Copyright, back-to-top, and verification seal
├── data/
│   └── portfolioData.ts         # Centralized verified data for all sections
├── public/
│   └── images/
│       ├── avatar_fb.jpg        # High-res profile avatar
│       ├── avatar_resume.jpg    # Headshot crop from original resume
│       └── resume_full.jpg      # Full original verified CV document
└── package.json
```

---

© 2026 Rana Zaheer Ahmad Shakir. All Rights Reserved.
