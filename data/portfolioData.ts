export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  badge?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  projects?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  category: 'engineering' | 'safety' | 'it' | 'specialized';
  verified: boolean;
  status: string;
  description: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  scope: string;
  highlights: string[];
  metrics: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: { name: string; level: number; tags?: string[] }[];
}

export interface ServiceItem {
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  icon: string;
}

export const portfolioData = {
  personal: {
    fullName: "Rana Zaheer Ahmad Shakir",
    displayName: "Rana Zaheer Ahmad",
    titles: [
      "Electronics & IT Computer Network Engineer",
      "Royal Palace Infrastructure Supervisor",
      "Saudi Binladin Group Veteran (15+ Yrs)",
      "ELV, BMS & Life Safety Systems Specialist",
      "Saudi Council of Engineers (SCE) Verified"
    ],
    primaryTitle: "Electronics IT Computer Network Engineer",
    summary:
      "Accomplished Electronics & IT Computer Network Engineer with 15+ years of distinguished field experience across high-security Royal Palaces and enterprise mission-critical facilities in Saudi Arabia (Makkah). Certified by the Saudi Council of Engineers (SCE) and NEBOSH Level 7 H&S, specializing in MDF/IDF Data Center operations, Enterprise Network Switching, CCTV surveillance matrices, Building Management Systems (BMS), and advanced multi-room Fire Alarm & FM200 suppression networks.",
    experienceYears: "15+",
    projectsCount: "10+",
    certificationsCount: "25+",
    uptimeRecord: "99.9%",
    email: "Mrranasbgom@gmail.com",
    phone: "+966-580828612",
    whatsappNumber: "966580828612",
    address: "Kingdom of Saudi Arabia — Makkah Al-Mukarramah",
    secondaryAddress: "Punjab, Pakistan",
    facebookPage: "https://www.facebook.com/share/1HcoNJn52Y/",
    facebookProfileUrl: "https://www.facebook.com/WwwRanaZaheerAhmadCom/",
    quote: "There is no limit between earth & sky; it is your decision which you choose. Priorities fly on sky.",
    verificationDisclaimer:
      "All documents and credentials are fully original and verified by the Government of Pakistan, Saudi Council of Engineers (SCE), and recognized national and international accreditation councils. Available upon request."
  },

  socialLinks: [
    { name: "WhatsApp", url: "https://wa.me/966580828612?text=Hi%20Rana%20Zaheer%20Ahmad,%20I%20reviewed%20your%20Engineering%20Portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.", icon: "whatsapp", highlight: true },
    { name: "Facebook", url: "https://www.facebook.com/WwwRanaZaheerAhmadCom/", icon: "facebook" },
    { name: "Email", url: "mailto:Mrranasbgom@gmail.com", icon: "email" },
    { name: "Phone", url: "tel:+966580828612", icon: "phone" }
  ],

  certifications: [
    {
      id: "sce-verified",
      title: "Saudi Council of Engineering (SCE) Verified Member",
      issuer: "Saudi Council of Engineers — Kingdom of Saudi Arabia",
      year: "Active & Verified",
      category: "engineering",
      verified: true,
      status: "Active Professional Accreditation",
      description: "Official engineering accreditation and verified membership in the Kingdom of Saudi Arabia for professional practice in Electronics & IT Systems.",
      skills: ["Electronics Engineering", "Code Compliance", "Saudi Building Codes", "Engineering Verification"]
    },
    {
      id: "nebosh-level-7",
      title: "NEBOSH (Level 7) Occupational Health & Safety (H&S)",
      issuer: "NEBOSH International",
      year: "Certified",
      category: "safety",
      verified: true,
      status: "International Standard",
      description: "Executive qualification covering hazardous work environments, high-profile facility risk assessments, life safety compliance, and occupational ergonomics.",
      skills: ["Hazard Analysis", "Risk Assessment", "Workplace Safety", "Emergency Protocol"]
    },
    {
      id: "nebosh-climate",
      title: "NEBOSH — Impact of Climate Changing",
      issuer: "NEBOSH International",
      year: "Certified",
      category: "safety",
      verified: true,
      status: "Sustainability Certified",
      description: "Specialized training on environmental resilience, clean technology implementations, and climate-adaptive facility safety systems.",
      skills: ["Climate Resilience", "Environmental Management", "Green Facility Standards"]
    },
    {
      id: "dae-electronics",
      title: "Diploma of Associate Engineering (DAE) in Electronics",
      issuer: "Punjab Board of Technical Education (PBTE)",
      year: "Certified",
      category: "engineering",
      verified: true,
      status: "3-Year Engineering Diploma",
      description: "Comprehensive multi-year engineering curriculum covering analog/digital circuits, semiconductor physics, instrumentation, microprocessors, and electronic diagnostic methodology.",
      skills: ["Circuit Design", "Signal Processing", "Component Diagnostics", "PCB & Electronics"]
    },
    {
      id: "diploma-computer-hardware",
      title: "Diploma of Computer Hardware & Software's",
      issuer: "Govt. Recognized Technical Institute",
      year: "Certified",
      category: "it",
      verified: true,
      status: "Professional Technical Diploma",
      description: "In-depth motherboard diagnostics, chip-level troubleshooting, BIOS configuration, peripheral interfaces, OS deployment, and system driver optimization.",
      skills: ["Hardware Architecture", "PC Diagnostics", "Peripheral Interfacing", "OS Architecture"]
    },
    {
      id: "diploma-office-management",
      title: "Diploma of Computer Office Management",
      issuer: "National Technical Training Center",
      year: "Certified",
      category: "it",
      verified: true,
      status: "Executive Office Diploma",
      description: "Computerized corporate office automation, database filing, network administration, spreadsheet modeling, and executive communications.",
      skills: ["Office Systems", "Enterprise Databases", "Workflow Automation", "IT Administration"]
    },
    {
      id: "web-graphic-design-cm",
      title: "Web & Graphic Designing (CM Project)",
      issuer: "Government Youth Development Initiative",
      year: "Certified",
      category: "specialized",
      verified: true,
      status: "Govt. Verified Award",
      description: "Professional certification covering UI layout design, vector graphics, HTML/CSS web structuring, digital branding, and user interface ergonomics.",
      skills: ["Graphic Design", "Web Structuring", "AutoCAD & Vector Graphics", "UI Design"]
    },
    {
      id: "financial-literacy-sbp",
      title: "Financial Literacy Program (State Bank of Pakistan)",
      issuer: "State Bank of Pakistan (SBP)",
      year: "Certified",
      category: "specialized",
      verified: true,
      status: "National Bank Certification",
      description: "Commercial banking, enterprise financial tracking, accounting principles, procurement budgeting, and fiscal discipline.",
      skills: ["Budget Management", "Commercial Procurement", "Fiscal Accountability"]
    },
    {
      id: "hotel-management-holy-sites",
      title: "Hotel Management & Hospitality Operations (Makkah & Madinah)",
      issuer: "Hospitality Management Authority KSA",
      year: "Certified",
      category: "specialized",
      verified: true,
      status: "Hospitality Standard",
      description: "Executive facility operations, VIP guest protocol handling, building services orchestration, and high-occupancy logistics during Hajj & Umrah seasons.",
      skills: ["VIP Protocol", "High-Volume Logistics", "Facilities Coordination", "Customer Care"]
    },
    {
      id: "online-marketing-sales",
      title: "Online Marketing in Sales & Purchasing",
      issuer: "E-Commerce & Trade Development Council",
      year: "Certified",
      category: "specialized",
      verified: true,
      status: "Trade Credential",
      description: "Strategic procurement, vendor negotiation, global supply chain tracking, and digital vendor relationship management.",
      skills: ["Vendor Relations", "Commercial Sourcing", "E-Commerce SCM", "Procurement"]
    },
    {
      id: "data-center-sustainability",
      title: "Achieving Sustainability in Data Center 1 & 2",
      issuer: "Industrial Data Center Certification",
      year: "Certified",
      category: "it",
      verified: true,
      status: "Green IT Infrastructure",
      description: "Thermal management, energy efficiency optimization, PUE metrics reduction, and cooling air-flow optimization in high-density MDF/IDF data rooms.",
      skills: ["Data Center Power/Cooling", "PUE Optimization", "Green Computing", "MDF/IDF Efficiency"]
    },
    {
      id: "industrial-iot-smart-metering",
      title: "Smart Metering Energy Efficiency & Industrial IoT Platforms",
      issuer: "Smart Grid & Automation Institute",
      year: "Certified",
      category: "engineering",
      verified: true,
      status: "Advanced Automation",
      description: "Integration of smart power meters, SCADA/IoT sensors, BMS power telemetry, and automated low-voltage power factor correction.",
      skills: ["Industrial IoT", "Smart Metering", "BMS Telemetry", "Energy Management"]
    },
    {
      id: "switches-motor-flow",
      title: "LV Transfer Switches, Advanced Motor Theory & Flow Measurement",
      issuer: "Heavy Electrical & Mechanical Systems Academy",
      year: "Certified",
      category: "engineering",
      verified: true,
      status: "Heavy Infrastructure Systems",
      description: "Automatic Transfer Switches (ATS), Low-Voltage circuit breakers, motor controls, pump theory, and closed-loop liquid flow sensors.",
      skills: ["LV Switches", "ATS Panels", "Motor Drive Controls", "Flow Instrumentation"]
    },
    {
      id: "ai-prompting-mastery",
      title: "Generative AI Systems: ChatGPT, Google Gemini & MS Bing Copilot",
      issuer: "Advanced AI Applications Guild",
      year: "Certified",
      category: "it",
      verified: true,
      status: "Modern AI Productivity",
      description: "Leveraging cutting-edge large language models, automated workflow generation, technical diagnostics scripting, and AI-accelerated troubleshooting.",
      skills: ["Generative AI", "Gemini API Workflows", "Diagnostic AI", "AI Automation"]
    }
  ] as CertificationItem[],

  experiences: [
    {
      period: "2017 – Present (2026 Continued)",
      role: "Electronics Computer Technician / IT Computer Operator / Team Leader / Foreman / Supervisor",
      company: "Saudi Binladin Group Operation & Maintenance (SBGOM)",
      location: "Makkah Al-Mukarramah, Kingdom of Saudi Arabia",
      badge: "Royal Palaces Project No. 0768 & 0769",
      description:
        "Serving as senior technical supervisor and team lead across landmark royal facilities: Al Safa Royal Palace and Mina Royal Palace Makkah under Royal Protocol Administration (RPA) & Crown Prince Protocol Administration (CPPA). Directing continuous 24/7 mission-critical operations across electronics, networking, life-safety, and building automation.",
      responsibilities: [
        "Overseeing centralized MDF & IDF Data Center computer rooms, server racks, fiber interconnects, core distribution switches, and uninterrupted power feeds.",
        "Managing enterprise CCTV surveillance matrices across royal zones: troubleshooting PTZ cameras, video servers, matrix switchers, and multi-display security command centers.",
        "Directing Fire Alarm System (FAS) maintenance featuring fully functional DN24 multi-room central consoles, Simplex, DEF, and Honeywell panels.",
        "Supervising FM200 gaseous clean agent fire suppression, PBG systems, optical smoke sensors, heat sensors, gas detectors, pull stations, and alarm sounders.",
        "Operating building maintenance systems (BMS), SMATV satellite television distribution, IPTV networks, and digital/analog PABX telephony exchanges.",
        "Leading multi-disciplinary technician squads, assigning preventative maintenance routines, managing shift logs, and coordinating rapid responses to emergency incidents.",
        "Handling HR administrative paperwork, technical reporting for royal site engineers, and VIP call center liaison services."
      ],
      technologies: [
        "MDF / IDF Data Centers",
        "Honeywell FAS",
        "Simplex FAS",
        "DEF Systems",
        "FM200 Clean Agent",
        "CCTV Networks",
        "IP Telephony / SMATV",
        "BMS Automation",
        "DN24 Control Rooms"
      ],
      projects: ["Al Safa Royal Palace", "Mina Royal Palace", "PHVG Hajj Mission", "FBGOM Facilities", "SSCL Project"]
    },
    {
      period: "2015 – 2016",
      role: "Computer Technician",
      company: "Al-Anfal Manpower Services",
      location: "Punjab, Pakistan",
      badge: "IT Operations",
      description:
        "Managed day-to-day enterprise computer hardware, peripheral maintenance, network cabling, and software deployment across executive offices.",
      responsibilities: [
        "Diagnosed and repaired desktop motherboards, power supplies, thermal cooling, RAM, and storage arrays.",
        "Deployed local area networks (LAN), Wi-Fi routers, client printers, and network photocopiers.",
        "Implemented secure Windows OS environments, anti-malware policies, and user workstation backups.",
        "Provided rapid desk-side support for office management and operational staff."
      ],
      technologies: ["Hardware Diagnostics", "LAN Setup", "Workstation Support", "Windows Server", "Office Systems"],
      projects: ["Enterprise Office Modernization", "Manpower Portal IT Infrastructure"]
    },
    {
      period: "2013 – 2015",
      role: "Accountant & Operations Executive",
      company: "Changa Manga Travel & Tour's (Pvt) Limited",
      location: "Punjab, Pakistan",
      badge: "Finance & Operations",
      description:
        "Maintained corporate ledger accounts, handled international ticketing client relationships, and ensured financial data consistency.",
      responsibilities: [
        "Managed daily cash-flow books, accounts receivable/payable, and reconciled monthly bank statements.",
        "Coordinated with airline GDS booking platforms and handled high-volume corporate travel itineraries.",
        "Delivered front-line customer consultation, package pricing, and customer satisfaction."
      ],
      technologies: ["Accounting Systems", "GDS Portals", "Financial Modeling", "Client CRM", "Data Analytics"],
      projects: ["Travel ERP Implementation", "Corporate Ticketing Ledger"]
    },
    {
      period: "2012 – 2013",
      role: "Science & Computer Teacher",
      company: "Islamic Future High School & College",
      location: "Punjab, Pakistan",
      badge: "Academic Instruction",
      description:
        "Delivered structured academic lectures in Computer Science, Physics, and English, preparing matriculation and intermediate students for board examinations.",
      responsibilities: [
        "Instructed foundational principles of computing, logic gates, binary mathematics, and elementary programming.",
        "Supervised hands-on physics and electronics laboratory experiments with oscilloscopes and circuit boards.",
        "Mentored students on technical career paths and modern information technology opportunities."
      ],
      technologies: ["Computer Science Pedagogy", "Applied Physics", "Electronics Labs", "English Communication"],
      projects: ["Computer Science Lab Overhaul", "Annual Science Exhibition"]
    },
    {
      period: "2010 – 2011",
      role: "HR Administrator & IT Coordinator",
      company: "Al Muslim School & Islamic Education",
      location: "Punjab, Pakistan",
      badge: "HR & Analytics",
      description:
        "Directed staff HR operations, institutional records digitisation, data analytics, and public relations liaison.",
      responsibilities: [
        "Maintained digital databases for staff payroll, performance records, and student demographics.",
        "Handled institutional communications, parental inquiries, and community outreach.",
        "Implemented digitized attendance systems and automated report card generation."
      ],
      technologies: ["HR Information Systems", "Database Analytics", "Public Dealing", "Administrative Reporting"],
      projects: ["School Management Digitization"]
    }
  ] as ExperienceItem[],

  education: [
    {
      degree: "Bachelor of Business Information Technology (BBIT)",
      institution: "Recognized University",
      period: "4-Year Bachelor Degree",
      description: "Interdisciplinary degree uniting business enterprise strategy, database management systems (DBMS), software lifecycle, systems analysis, and enterprise networking.",
      major: "Business Information Technology",
      highlights: ["Enterprise Database Management", "Software Systems Analysis", "Corporate IT Governance", "Data Communications"]
    },
    {
      degree: "Diploma of Associate Engineering (DAE) in Electronics",
      institution: "Punjab Board of Technical Education (PBTE)",
      period: "3-Year Engineering Diploma",
      description: "Rigorous polytechnic engineering qualification in electronic circuitry, semiconductor devices, telecommunications, instrumentation, and industrial control systems.",
      major: "Electronics Engineering",
      highlights: ["Analog & Digital Electronics", "Microprocessor Systems", "Instrumentation & Telemetry", "Industrial Power & Control"]
    },
    {
      degree: "Diploma of Computer Office Management",
      institution: "National Technical Institute",
      period: "1-Year Professional Diploma",
      description: "Advanced management training in computerized business operations, office automation suites, records management, and executive communications.",
      major: "Office Information Systems",
      highlights: ["Office Automation", "Database Administration", "Executive Reporting", "Network Filing"]
    },
    {
      degree: "Diploma of Computer Hardware & Software's",
      institution: "Technical Training Academy",
      period: "Professional Technical Diploma",
      description: "Comprehensive hands-on training in microcomputer assembly, diagnostic motherboard analysis, bus architectures, BIOS/UEFI programming, and peripheral maintenance.",
      major: "Hardware Engineering & Systems",
      highlights: ["Microcomputer Architecture", "Component Diagnostics", "Network Interface Cards", "Peripheral Repair"]
    }
  ],

  projects: [
    {
      id: "al-safa-palace",
      title: "Al Safa Royal Palace Makkah — Electronics & IT Systems",
      subtitle: "Saudi Binladin Group (Project No. 0768) under RPA & CPPA",
      category: "Royal & Mission-Critical",
      scope: "Full-facility Electronics, IT Networking, CCTV & FAS Infrastructure",
      highlights: [
        "Maintained high-availability MDF/IDF data rooms with enterprise switch stacks and redundant fiber uplinks.",
        "Configured multi-zone CCTV security monitoring feeding into central royal command monitors.",
        "Operated DN24 multi-room Fire Alarm System with addressable FAS panels and automated FM200 fire suppression.",
        "Coordinated with Royal Protocol Administration (RPA) engineering teams for zero-downtime VIP events."
      ],
      metrics: "99.99% Uptime across Royal Summits & VIP Visits",
      icon: "palace"
    },
    {
      id: "mina-royal-palace",
      title: "Mina Royal Palace Makkah — Infrastructure & Life Safety",
      subtitle: "Saudi Binladin Group (Project No. 0769) under RPA & CPPA",
      category: "Royal & Mission-Critical",
      scope: "Emergency Communication, SMATV/IPTV, PABX & Gas Detection",
      highlights: [
        "Supervised life safety and gas detector sensor networks across sensitive palace wings.",
        "Maintained broadcast SMATV and IPTV satellite feeds for international broadcasts during Hajj seasons.",
        "Managed PABX telephony exchanges ensuring crystal-clear secure communication lines for state officials.",
        "Led emergency maintenance squads during peak operational periods with rapid triage procedures."
      ],
      metrics: "Zero Unplanned Blackouts during High-Density Hajj Operations",
      icon: "shield"
    },
    {
      id: "phvg-mission",
      title: "Pakistan Hajj Volunteer Group (PHVG) — IT Operations & Support",
      subtitle: "Community & Humanitarian Volunteer Infrastructure",
      category: "Public Sector & Humanitarian",
      scope: "Field Communications, Volunteer Tracking & Pilgrim Navigation Assistance",
      highlights: [
        "Deployed temporary Wi-Fi hotspots, mobile radios, and emergency communication channels for field volunteers.",
        "Coordinated with Pakistan Hajj Mission officials to streamline lost-pilgrim data and medical emergency dispatches.",
        "Active verified membership and ongoing annual voluntary contributions in holy sites."
      ],
      metrics: "Supported 100,000+ Pilgrims during Annual Hajj Operations",
      icon: "users"
    },
    {
      id: "data-center-mdf-idf",
      title: "Enterprise MDF / IDF Data Center Cabinets & Fiber Stacks",
      subtitle: "Saudi Binladin Group Facilities",
      category: "Enterprise IT Networking",
      scope: "Data Center Physical Layer, Core Switches, Cable Trays & Environmental Controls",
      highlights: [
        "Organized and labeled complex patch panels, fiber opt channels, and Cat6A Ethernet routing.",
        "Maintained environmental sensors, rack temperature alarms, and power distribution units (PDUs).",
        "Executed non-disruptive hot-swapping of failed line cards and power supply modules."
      ],
      metrics: "Over 500+ Switch Ports & 50+ Fiber Nodes Monitored 24/7",
      icon: "server"
    },
    {
      id: "fas-dn24-fm200",
      title: "DN24 Multi-Room Fire Alarm & FM200 Suppression Matrix",
      subtitle: "Integrated Facility Life-Safety Automation",
      category: "Fire Protection & Automation",
      scope: "Simplex, DEF & Honeywell FAS Panels, MCP Call Points & Sounders",
      highlights: [
        "Programmed addressable loop modules, monitored sounders, strobes, and emergency exit release contacts.",
        "Maintained FM200 gaseous suppression cylinders, solenoids, abort switches, and discharge nozzles.",
        "Conducted scheduled functional drill tests ensuring sub-second alarm propagation to central consoles."
      ],
      metrics: "100% Compliance with Saudi Civil Defense Regulations",
      icon: "flame"
    },
    {
      id: "ibsc-ascsi-group",
      title: "IBC Travel & Tourism & ASCSI Group Management",
      subtitle: "Enterprise Venture & Commercial Operations",
      category: "Business & Management",
      scope: "Executive Ownership, Digital Systems, Logistics & Corporate Strategy",
      highlights: [
        "Built automated customer booking workflows and international visa/travel services.",
        "Integrated financial bookkeeping and multi-currency transaction accounting.",
        "Expanded commercial operations between Saudi Arabia and Pakistan."
      ],
      metrics: "Established Robust International Client Base",
      icon: "briefcase"
    }
  ] as ProjectItem[],

  skills: [
    {
      title: "Electronics & Infrastructure Systems",
      description: "Low-voltage, building management, broadcast, and life safety matrices.",
      icon: "cpu",
      skills: [
        { name: "CCTV Systems & Troubleshooting", level: 98, tags: ["PTZ", "NVR", "Multi-Monitor"] },
        { name: "Fire Alarm Systems (FAS)", level: 96, tags: ["Honeywell", "Simplex", "DEF"] },
        { name: "FM200 Suppression & PBG", level: 94, tags: ["Clean Agent", "Solenoids"] },
        { name: "Building Management Systems (BMS)", level: 92, tags: ["HVAC", "Sensors"] },
        { name: "SMATV & IPTV Distribution", level: 90, tags: ["Satellite", "IP Video"] },
        { name: "Gas Detection & Emergency Audio", level: 92, tags: ["MCP", "Sounders"] }
      ]
    },
    {
      title: "IT & Enterprise Networking",
      description: "Data center physical layer, routing/switching, telephony, and cabling.",
      icon: "network",
      skills: [
        { name: "MDF / IDF Data Center Management", level: 95, tags: ["Server Racks", "Patching"] },
        { name: "Ethernet & Fiber Switches", level: 94, tags: ["Catalyst", "Cabinets"] },
        { name: "IP & Analog Telephony / PABX", level: 90, tags: ["VoIP", "Extensions"] },
        { name: "Structured Cabling & Wire Tracing", level: 96, tags: ["Cat6A", "Fiber Optics"] },
        { name: "Network Diagnostics & Packet Flow", level: 88, tags: ["Ping", "Tracing"] },
        { name: "Data Center Cooling & PUE", level: 86, tags: ["Sustainability"] }
      ]
    },
    {
      title: "Hardware, Systems & Office Tech",
      description: "Component troubleshooting, peripherals, and workstation optimization.",
      icon: "hard-drive",
      skills: [
        { name: "Computer Hardware Diagnostics", level: 96, tags: ["Motherboards", "RAM", "PSU"] },
        { name: "Laser Printers & Photo Copiers", level: 92, tags: ["Multi-Function", "Network"] },
        { name: "OS Installation & Drivers", level: 94, tags: ["Windows", "Drivers", "BIOS"] },
        { name: "Office Automation & Management", level: 92, tags: ["Workflow", "Records"] },
        { name: "Power Supplies & UPS Backup", level: 90, tags: ["Inverters", "Batteries"] },
        { name: "AutoCAD & Technical Drafting", level: 82, tags: ["Schematics", "Layouts"] }
      ]
    },
    {
      title: "Safety, Standards & Management",
      description: "Regulatory compliance, occupational safety, and team supervision.",
      icon: "shield-check",
      skills: [
        { name: "NEBOSH Level 7 H&S Compliance", level: 95, tags: ["Risk Assessment", "Audits"] },
        { name: "Saudi Council of Engineers Standards", level: 96, tags: ["Verified Member"] },
        { name: "Team Leadership & Foreman Supervision", level: 95, tags: ["15+ Years"] },
        { name: "Call Center & VIP Client Liaison", level: 92, tags: ["Royal Protocol"] },
        { name: "AI Tools (ChatGPT, Gemini, Copilot)", level: 90, tags: ["Modern Productivity"] },
        { name: "E-Commerce & Digital Procurement", level: 85, tags: ["SCM", "QuickBooks"] }
      ]
    }
  ] as SkillCategory[],

  services: [
    {
      title: "Electronics & Low Voltage (ELV) Engineering",
      shortDesc: "End-to-end design, installation, calibration, and troubleshooting of ELV systems.",
      fullDesc: "Complete lifecycle management for low-voltage systems including fire alarms, CCTV matrices, access control, public address systems, and building automation panels.",
      deliverables: ["FAS Panel Commissioning", "CCTV Matrix Calibration", "Cable Trace & Certification", "Preventative Maintenance Plans"],
      icon: "zap"
    },
    {
      title: "Data Center & Network Infrastructure Management",
      shortDesc: "MDF / IDF server room setup, switch rack cabinets, and fiber/copper structured cabling.",
      fullDesc: "Professional data center physical layer maintenance, server rack airflow balancing, patch panel organization, switch configuration, and high-reliability cable management.",
      deliverables: ["Rack Layout & Cable Dressing", "Switch Cabinet Consolidation", "Fiber Patch Optimization", "Thermal & Power Monitoring"],
      icon: "server"
    },
    {
      title: "Fire Alarm (FAS) & FM200 Suppression Maintenance",
      shortDesc: "Emergency life-safety compliance, DN24 control consoles, and gas detection networks.",
      fullDesc: "Regular inspection, sensor loop verification, pull station testing, sounder calibration, and FM200 gaseous cylinder pressure checks compliant with civil defense codes.",
      deliverables: ["Multi-Room FAS Audits", "FM200 Discharge Readiness", "Smoke & Heat Detector Testing", "Emergency Drills Protocol"],
      icon: "flame"
    },
    {
      title: "CCTV Surveillance & Security Control Rooms",
      shortDesc: "Multi-camera surveillance arrays, video storage servers, and central monitoring rooms.",
      fullDesc: "Turnkey CCTV troubleshooting across analog, IP, and PTZ camera networks. Diagnostic testing of video encoders, NVR/DVR arrays, video walls, and security control room consoles.",
      deliverables: ["PTZ Camera Diagnostics", "Video Server Maintenance", "Matrix Switcher Configuration", "Control Room Ergonomics"],
      icon: "video"
    },
    {
      title: "Technical Team Leadership & Facility Supervision",
      shortDesc: "Foreman oversight, 24/7 emergency response, shift coordination, and VIP protocol handling.",
      fullDesc: "Experienced supervisory leadership for large technical crews across commercial and royal facilities. Rigorous shift scheduling, task dispatching, quality control, and safety audits.",
      deliverables: ["Shift Roster Management", "Incident RCA Reports", "VIP Event Zero-Downtime Standby", "Staff Technical Mentoring"],
      icon: "users"
    },
    {
      title: "IT Hardware, Software & Office Automation",
      shortDesc: "Enterprise workstation repairs, printer/copier maintenance, and digital workflow systems.",
      fullDesc: "Prompt component-level hardware repair, office printer/copier fleets, software licensing, backup management, and modern AI productivity workflows.",
      deliverables: ["Motherboard & Hardware Repair", "Copier/Printer Fleet Support", "AI-Powered Technical Workflows", "Secure OS Deployment"],
      icon: "laptop"
    }
  ] as ServiceItem[],

  languages: [
    { name: "English", proficiency: "Professional Working Proficiency", level: 90 },
    { name: "Arabic", proficiency: "Fluent Working & Conversational (KSA)", level: 88 },
    { name: "Urdu", proficiency: "Native / Bilingual", level: 100 },
    { name: "Punjabi", proficiency: "Native", level: 100 },
    { name: "Hindi", proficiency: "Conversational & Working", level: 85 },
    { name: "Bangla", proficiency: "Working Knowledge", level: 75 },
    { name: "Binary & Coding IT Literacy", proficiency: "Technical Domain Fluency", level: 92 }
  ],

  achievements: [
    "15+ Years continuous service in Saudi Arabia & Pakistan engineering sectors.",
    "Veteran supervisor for Al Safa Royal Palace & Mina Royal Palace under RPA & CPPA.",
    "Verified Member of Saudi Council of Engineers (SCE).",
    "Active Member of Overseas Pakistanis Foundation (OPF).",
    "Active Volunteer & Contributor with Pakistan Hajj Volunteer Group (PHVG).",
    "Owner & Executive of IBC Travel & Tourism and ASCSI Group.",
    "Valid Light Vehicle Driving Licenses in both Saudi Arabia and Pakistan.",
    "NEBOSH Level 7 Certified in Occupational Health & Safety."
  ]
};
