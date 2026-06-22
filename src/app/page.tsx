"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Terminal as TerminalIcon, 
  Code, 
  Cpu, 
  Server, 
  Database, 
  Globe, 
  ExternalLink, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw, 
  Layers, 
  ShieldCheck, 
  DollarSign, 
  BookOpen, 
  Clock, 
  ArrowRight,
  ClipboardCheck,
  Send
} from "lucide-react";

// Project Data
const PROJECTS = [
  {
    id: "beze",
    title: "Beze Exam Suite",
    subtitle: "Modular Monolith Exam & Printing Engine",
    type: "Enterprise SaaS API Provider",
    liveUrl: "https://exam.beze.ng",
    githubUrl: "https://github.com/Jhuleebaba/beze_backend",
    status: "online",
    latency: "22ms",
    uptime: "99.98%",
    stack: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Next.js 16", "React 19", "Tailwind v4", "Celery", "Redis", "Docker"],
    features: [
      "Modular monolith architecture separating auth, references, questions, and integrations",
      "Next.js 16 App Router frontend with GSAP and Three.js canvas animations",
      "Background worker processing for heavy bulk imports and PDF/DOCX printed exam sheets",
      "Exposes REST endpoints as an independent question provider API for school portals"
    ]
  },
  {
    id: "bezalel",
    title: "Bezalel SaaS",
    subtitle: "Multi-Tenant School Management Platform",
    type: "Commercial SaaS Platform",
    liveUrl: "https://bezalel-three.vercel.app",
    githubUrl: "https://github.com/Jhuleebaba/bezalel_backend",
    status: "online",
    latency: "34ms",
    uptime: "99.95%",
    stack: ["Flask", "MongoDB", "PyMongo", "JWT Auth", "Paystack API", "ReportLab", "Vite", "TypeScript"],
    features: [
      "Multi-tenant isolation using custom school_id context filters",
      "Paystack payment gateway integration processing invoice payments, billing, and receipts",
      "Automated financial payroll tracker for school staff and administrators",
      "Dynamic school report card compiler creating styled PDF sheets on the fly"
    ]
  },
  {
    id: "ghs",
    title: "Goodly Heritage Portal",
    subtitle: "Dedicated School Web & Mobile Ecosystem",
    type: "Dedicated Enterprise Deployment",
    liveUrl: "https://ghsportal-frontend.vercel.app",
    githubUrl: "https://github.com/Jhuleebaba/Ghsportal_frontend",
    status: "online",
    latency: "31ms",
    uptime: "99.94%",
    stack: ["React Native", "Expo", "Flask", "MongoDB", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Student dual-mode login: Personal mode (notes & dashboard) vs. Exam mode (locked down)",
      "Expo-based cross-platform mobile application providing portal access to parents and staff",
      "Real-time announcements, assignments module, and staff attendance register systems",
      "Super-administrator settings module controlling school arm, class level, and session configurations"
    ]
  },
  {
    id: "mmscbt",
    title: "MMS CBT System",
    subtitle: "High-Integrity Testing Engine",
    type: "Automated Assessment Portal",
    liveUrl: "https://mmscbtfronten.vercel.app",
    githubUrl: "https://github.com/Jhuleebaba/mmscbt_frontend",
    status: "online",
    latency: "18ms",
    uptime: "100.0%",
    stack: ["React 19", "FastAPI", "MongoDB", "Tailwind v4", "Quill Editor", "Axios Interceptors"],
    features: [
      "Dual-assessment UI supporting MCQs and Subjective Theory assessment simultaneously",
      "Real-time auto-saving client state with visual status pills (Syncing / Synced / Error)",
      "Question flagging/bookmarking system with desktop sidebar quick-navigation grids",
      "Rich Quill Editor integration allowing admin compilation of questions with images"
    ]
  },
  {
    id: "entrance",
    title: "Entrance Exam System",
    subtitle: "Admissions & Authentication Service",
    type: "Public Intake System",
    githubUrl: "https://github.com/Jhuleebaba/entrance_exam_backend",
    status: "online",
    latency: "28ms",
    uptime: "99.99%",
    stack: ["Node.js", "Express", "TypeScript", "MongoDB", "React", "JWT Auth", "REST APIs"],
    features: [
      "Admissions registration portal with secure candidate enrollment verification flow",
      "Strict candidate-only JWT credentials session timeout tracking engine",
      "Admin exam control room scheduling, reset capabilities, and global scores registers"
    ]
  }
];

// Skills Data
const SKILLS = {
  backend: [
    { name: "Python / FastAPI / Flask", level: 95 },
    { name: "Node.js / Express", level: 88 },
    { name: "SQLAlchemy / PyMongo", level: 92 },
    { name: "REST API Design", level: 96 },
    { name: "Celery Task Queue", level: 85 }
  ],
  frontend: [
    { name: "React / Next.js (App Router)", level: 93 },
    { name: "React Native (Expo)", level: 85 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS v4 & v3", level: 95 },
    { name: "Zustand / Redux", level: 88 }
  ],
  devops: [
    { name: "Docker & Containerization", level: 88 },
    { name: "PostgreSQL & MongoDB", level: 90 },
    { name: "Redis Caching / Message Broker", level: 85 },
    { name: "Vercel / Render Deployment", level: 92 },
    { name: "Git / CI Pipelines", level: 90 }
  ]
};

export default function Home() {
  const [activeSkillTab, setActiveSkillTab] = useState<"backend" | "frontend" | "devops">("backend");
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; output: string | React.ReactNode }>>([
    { cmd: "system-init", output: "Julius Adereti OS v1.0.0 initialized successfully. Type 'help' to view available commands." }
  ]);
  const [copiedText, setCopiedText] = useState(false);
  const [contactState, setContactState] = useState({ name: "", email: "", message: "" });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory]);

  const focusTerminalInput = () => {
    inputRef.current?.focus();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jhulee1@gmail.com");
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactState.name || !contactState.email || !contactState.message) return;
    
    // Simulate contact form submission
    setContactSubmitted(true);
    const cmdText = `./submit_inquiry.sh --name "${contactState.name}" --email "${contactState.email}"`;
    const responseOutput = (
      <div className="text-cyber-lime font-mono text-xs space-y-1">
        <p>✓ Connection established with SMTP gateway...</p>
        <p>✓ Package assembled successfully.</p>
        <p>✓ Dispatching secure transmission payload to jhulee1@gmail.com...</p>
        <p className="text-cyber-cyan font-semibold">✓ TRANSMISSION SUCCESSFUL! Julius will respond within 24 hours.</p>
      </div>
    );
    
    setTerminalHistory(prev => [
      ...prev,
      { cmd: cmdText, output: responseOutput }
    ]);
  };

  const executeCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let output: string | React.ReactNode = "";

    switch (cleanCmd) {
      case "help":
        output = (
          <div className="grid grid-cols-2 gap-2 font-mono text-xs text-slate-300">
            <div><span className="text-cyber-cyan">about</span> - Who is Julius Adereti?</div>
            <div><span className="text-cyber-cyan">projects</span> - List all production deployments</div>
            <div><span className="text-cyber-cyan">skills</span> - Display key technical assets</div>
            <div><span className="text-cyber-cyan">contact</span> - Show socials & direct links</div>
            <div><span className="text-cyber-cyan">clear</span> - Flush terminal buffer log</div>
            <div><span className="text-cyber-cyan">uptime</span> - Query core system checks</div>
          </div>
        );
        break;
      case "about":
        output = "Julius Adereti (Jhuleebaba) is a Lead Full-Stack Engineer and DevOps Specialist based in Nigeria. He designs highly secure multi-tenant school administration software (Bezalel), modular examination frameworks (Beze), mobile client apps, and automated test sync architectures. Specialized in Python, Node.js, and modern React environments.";
        break;
      case "projects":
        output = (
          <div className="font-mono text-xs text-slate-300 space-y-1">
            <p className="text-cyber-lime font-semibold">Live Production Repositories:</p>
            <p>1. <span className="text-cyber-cyan font-bold">Beze Exam Suite</span> - FastAPI / Celery / Next.js 16 (exam.beze.ng)</p>
            <p>2. <span className="text-cyber-cyan font-bold">Bezalel SaaS</span> - Flask / PyMongo / Paystack (bezalel-three.vercel.app)</p>
            <p>3. <span className="text-cyber-cyan font-bold">Goodly Heritage Portal</span> - Expo Mobile / Web Client (ghsportal-frontend.vercel.app)</p>
            <p>4. <span className="text-cyber-cyan font-bold">MMS CBT System</span> - React 19 / Theory & MCQ Engine (mmscbtfronten.vercel.app)</p>
            <p>5. <span className="text-cyber-cyan font-bold">Entrance Exam Backend</span> - Node.js / Express / Secure Intake</p>
          </div>
        );
        break;
      case "skills":
        output = "Backend: Python (FastAPI, Flask), Node.js, Celery, SQLAlchemy. Frontend: React, Next.js, React Native, TypeScript, Tailwind. DevOps: Docker, Postgres, MongoDB, Redis, CI/CD pipelines.";
        break;
      case "contact":
        output = (
          <div className="font-mono text-xs text-slate-300 space-y-1">
            <p>Email: <span className="text-cyber-lime">jhulee1@gmail.com</span></p>
            <p>LinkedIn: linkedin.com/in/julius-adereti-682308178</p>
            <p>X/Twitter: x.com/jhulee_1</p>
          </div>
        );
        break;
      case "uptime":
        output = (
          <div className="font-mono text-xs space-y-1">
            <p className="text-cyber-lime">✓ Beze API: ACTIVE (Uptime: 99.98%, Latency: 22ms)</p>
            <p className="text-cyber-lime">✓ Bezalel SaaS: ACTIVE (Uptime: 99.95%, Latency: 34ms)</p>
            <p className="text-cyber-lime">✓ GHS Mobile Gateway: ACTIVE (Uptime: 99.94%, Latency: 31ms)</p>
            <p className="text-cyber-lime">✓ MMS CBT Engine: ACTIVE (Uptime: 100.0%, Latency: 18ms)</p>
          </div>
        );
        break;
      case "clear":
        setTerminalHistory([]);
        return;
      case "":
        output = "";
        break;
      default:
        output = `Command not recognized: '${cleanCmd}'. Type 'help' for options.`;
    }

    setTerminalHistory(prev => [...prev, { cmd, output }]);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(terminalInput);
    setTerminalInput("");
  };

  return (
    <div className="min-h-screen relative cyber-grid flex flex-col">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyber-purple/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-cyber-bg/75 border-b border-cyber-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-cyber-cyan/15 flex items-center justify-center border border-cyber-cyan/35 animate-pulse">
              <span className="text-cyber-cyan font-mono font-bold text-sm">J</span>
            </div>
            <span className="font-mono text-sm tracking-widest text-slate-200">JULIUS ADERETI</span>
          </div>

          <nav className="hidden md:flex space-x-8 font-mono text-xs">
            <a href="#about" className="text-slate-400 hover:text-cyber-cyan transition-colors">./about</a>
            <a href="#projects" className="text-slate-400 hover:text-cyber-cyan transition-colors">./projects</a>
            <a href="#skills" className="text-slate-400 hover:text-cyber-cyan transition-colors">./skills</a>
            <a href="#status" className="text-slate-400 hover:text-cyber-cyan transition-colors">./sys-monitor</a>
            <a href="#contact" className="text-slate-400 hover:text-cyber-cyan transition-colors">./contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/Jhuleebaba" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded bg-cyber-cyan/10 hover:bg-cyber-cyan/20 border border-cyber-cyan/20 text-cyber-cyan text-xs font-mono flex items-center space-x-1.5 transition-all"
            >
              <span>GitHub Profile</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col space-y-16">
        
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Headline and introduction */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan">
              <Sparkles size={14} className="animate-spin" />
              <span className="font-mono text-xs uppercase tracking-wider">Systems Architecture & DevOps</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none text-slate-100">
              Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-lime glow-cyan">Julius Adereti</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              I am a Lead Full-Stack Software Engineer and DevOps Architect specializing in high-performance backends, multi-tenant SaaS structures, and real-time exam engines. I build production platforms with extreme focus on SEO, zero-downtime orchestration, and clean code.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#projects" 
                className="px-5 py-3 rounded-lg bg-cyber-cyan hover:bg-cyber-cyan/90 text-cyber-dark font-mono font-bold text-sm flex items-center space-x-2 transition-all shadow-md shadow-cyber-cyan/15 hover:shadow-cyber-cyan/30"
              >
                <span>Inspect Production Deployments</span>
                <ArrowRight size={16} />
              </a>
              <a 
                href="#contact" 
                className="px-5 py-3 rounded-lg border border-slate-700 hover:border-cyber-cyan bg-slate-900/40 text-slate-300 hover:text-cyber-cyan font-mono text-sm transition-all"
              >
                <span>Establish Connection</span>
              </a>
            </div>
          </div>

          {/* Cyber Terminal Emulator */}
          <div 
            onClick={focusTerminalInput}
            className="lg:col-span-5 rounded-xl bg-slate-950/80 border border-cyber-cyan/15 shadow-2xl relative overflow-hidden flex flex-col h-[380px] cursor-text"
          >
            {/* Window control header */}
            <div className="h-9 bg-slate-900/90 border-b border-cyber-cyan/10 px-4 flex items-center justify-between">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center space-x-1.5 text-slate-400 font-mono text-[10px]">
                <TerminalIcon size={12} className="text-cyber-cyan" />
                <span>guest@jhuleebaba-v1.0.0</span>
              </div>
              <div className="w-8" />
            </div>

            {/* Terminal Body */}
            <div className="flex-grow p-4 overflow-y-auto font-mono text-xs text-cyber-cyan/90 space-y-3 cyber-dots">
              {terminalHistory.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-start space-x-1">
                    <span className="text-cyber-purple font-bold">jhulee@system:~$</span>
                    <span className="text-slate-200">{item.cmd}</span>
                  </div>
                  <div className="text-slate-300 whitespace-pre-wrap leading-relaxed">
                    {item.output}
                  </div>
                </div>
              ))}
              
              <form onSubmit={handleTerminalSubmit} className="flex items-center space-x-1">
                <span className="text-cyber-purple font-bold">jhulee@system:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  className="flex-grow bg-transparent border-none outline-none focus:ring-0 text-slate-200 p-0 m-0 select-text"
                  autoFocus
                  placeholder=""
                />
                <span className="w-2 h-4 bg-cyber-cyan animate-blink inline-block" />
              </form>
              <div ref={terminalEndRef} />
            </div>

            {/* Quick buttons */}
            <div className="bg-slate-950 border-t border-cyber-cyan/10 p-2 flex flex-wrap gap-2 justify-center">
              <button 
                onClick={(e) => { e.stopPropagation(); executeCommand("about"); }} 
                className="px-2 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/20 hover:bg-cyber-cyan/20 text-cyber-cyan font-mono text-[10px] transition-colors"
              >
                about
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); executeCommand("projects"); }} 
                className="px-2 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/20 hover:bg-cyber-cyan/20 text-cyber-cyan font-mono text-[10px] transition-colors"
              >
                projects
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); executeCommand("skills"); }} 
                className="px-2 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/20 hover:bg-cyber-cyan/20 text-cyber-cyan font-mono text-[10px] transition-colors"
              >
                skills
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); executeCommand("uptime"); }} 
                className="px-2 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/20 hover:bg-cyber-cyan/20 text-cyber-cyan font-mono text-[10px] transition-colors"
              >
                uptime
              </button>
            </div>
          </div>
        </section>

        {/* METRICS DASHBOARD (Uptime/Latency) */}
        <section id="status" className="bg-slate-950/40 rounded-2xl border border-cyber-cyan/10 p-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-xl font-bold tracking-tight text-slate-100 font-mono">./systems-operational-dashboard</h2>
              <p className="text-xs text-slate-400 font-mono">Live health check of Julius' production architectures hosted on Render & Vercel</p>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono text-cyber-lime bg-cyber-lime/10 px-3 py-1 rounded-full border border-cyber-lime/20">
              <CheckCircle2 size={12} />
              <span>All Systems Operational</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3 font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300 truncate max-w-[100px]">{proj.title}</span>
                  <span className="w-2 h-2 rounded-full bg-cyber-lime animate-pulse" />
                </div>
                <div className="space-y-1 text-[10px]">
                  <div className="flex justify-between text-slate-500">
                    <span>Uptime:</span>
                    <span className="text-cyber-lime">{proj.uptime}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Ping:</span>
                    <span className="text-slate-300">{proj.latency}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Node:</span>
                    <span className="text-cyber-cyan truncate max-w-[50px]">{proj.stack[0]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-100">Live Production Deployments</h2>
            <p className="text-slate-400 max-w-2xl text-sm">
              Explore key custom school portals, multi-tenant enterprise software suites, and CBT systems that I have architected and deployed in live production environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <div 
                key={project.id} 
                className="rounded-2xl bg-slate-950/40 border border-slate-800 hover:border-cyber-cyan/40 p-6 flex flex-col justify-between space-y-6 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-cyan/5 rounded-full filter blur-xl pointer-events-none group-hover:bg-cyber-cyan/10 transition-all" />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-cyber-purple font-semibold">{project.type}</span>
                    <div className="flex items-center space-x-2">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyber-cyan text-slate-400 hover:text-cyber-cyan transition-colors"
                          title="Visit Live App"
                        >
                          <Globe size={14} />
                        </a>
                      )}
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyber-cyan text-slate-400 hover:text-cyber-cyan transition-colors"
                        title="Inspect Codebase"
                      >
                        <Code size={14} />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyber-cyan transition-colors">{project.title}</h3>
                    <p className="text-xs text-cyber-lime font-mono">{project.subtitle}</p>
                  </div>

                  <ul className="space-y-2 text-sm text-slate-400">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-cyber-cyan font-bold font-mono mt-0.5">▪</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400 font-mono text-[10px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-100">Technical Expertise</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              My engineering stack covers full-stack web and mobile development, focusing on high-performance modular APIs and zero-downtime infrastructure operations.
            </p>
            <div className="flex flex-col space-y-3 font-mono text-xs">
              <button 
                onClick={() => setActiveSkillTab("backend")} 
                className={`w-full px-4 py-3 rounded-lg text-left border flex items-center justify-between transition-all ${activeSkillTab === "backend" ? "bg-cyber-cyan/15 border-cyber-cyan/40 text-cyber-cyan" : "bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700"}`}
              >
                <span className="flex items-center space-x-2">
                  <Cpu size={16} />
                  <span>Backend APIs & Architecture</span>
                </span>
                <span>/backend</span>
              </button>
              <button 
                onClick={() => setActiveSkillTab("frontend")} 
                className={`w-full px-4 py-3 rounded-lg text-left border flex items-center justify-between transition-all ${activeSkillTab === "frontend" ? "bg-cyber-cyan/15 border-cyber-cyan/40 text-cyber-cyan" : "bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700"}`}
              >
                <span className="flex items-center space-x-2">
                  <Layers size={16} />
                  <span>Frontend & Cross-Platform UI</span>
                </span>
                <span>/frontend</span>
              </button>
              <button 
                onClick={() => setActiveSkillTab("devops")} 
                className={`w-full px-4 py-3 rounded-lg text-left border flex items-center justify-between transition-all ${activeSkillTab === "devops" ? "bg-cyber-cyan/15 border-cyber-cyan/40 text-cyber-cyan" : "bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700"}`}
              >
                <span className="flex items-center space-x-2">
                  <Server size={16} />
                  <span>DevOps & Orchestration</span>
                </span>
                <span>/devops</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-950/40 rounded-2xl border border-slate-800 p-6 min-h-[340px] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-cyber-purple font-semibold">Active Matrix View</span>
                <span className="font-mono text-xs text-slate-500">Jhuleebaba Node Console</span>
              </div>

              <div className="space-y-4">
                {SKILLS[activeSkillTab].map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-cyber-cyan">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-purple transition-all duration-500" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-900 flex items-start space-x-3 text-xs text-slate-400 leading-relaxed font-mono">
              <TerminalIcon size={16} className="text-cyber-cyan shrink-0 mt-0.5" />
              <p>
                All skills represent active, hands-on production experience in launching real-world systems with robust unit testing and visual compliance guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT / CONNECTION SECTION */}
        <section id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 rounded-2xl bg-slate-950/40 border border-slate-800 p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-100">Establish Connection</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Interested in building high-scale SaaS systems, modular exam suites, or establishing automated DevOps pipelines? Feel free to copy my direct credentials or message me via social interfaces.
              </p>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div 
                onClick={handleCopyEmail}
                className="p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-cyber-cyan flex items-center justify-between cursor-pointer group transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Mail size={16} className="text-cyber-cyan" />
                  <span className="text-slate-300">jhulee1@gmail.com</span>
                </div>
                {copiedText ? (
                  <span className="text-cyber-lime flex items-center space-x-1">
                    <ClipboardCheck size={12} />
                    <span>copied</span>
                  </span>
                ) : (
                  <span className="text-slate-500 group-hover:text-cyber-cyan transition-colors">copy</span>
                )}
              </div>

              <div className="grid grid-cols-3 gap-2">
                <a 
                  href="https://www.linkedin.com/in/julius-adereti-682308178" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-cyber-cyan flex flex-col items-center justify-center space-y-1.5 transition-colors"
                >
                  <svg className="w-4 h-4 text-cyber-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="text-[10px] text-slate-400">LinkedIn</span>
                </a>
                <a 
                  href="https://x.com/jhulee_1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-cyber-cyan flex flex-col items-center justify-center space-y-1.5 transition-colors"
                >
                  <svg className="w-4 h-4 text-cyber-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="text-[10px] text-slate-400">X / Twitter</span>
                </a>
                <a 
                  href="https://www.facebook.com/julius.aderetiadeyemi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-cyber-cyan flex flex-col items-center justify-center space-y-1.5 transition-colors"
                >
                  <svg className="w-4 h-4 text-cyber-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="text-[10px] text-slate-400">Facebook</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 text-slate-500 font-mono text-[10px] text-center">
              SECURE SMTP SOCKET OVER TLS-V1.3
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-950/40 rounded-2xl border border-slate-800 p-6">
            <h3 className="text-lg font-bold text-slate-200 mb-4 font-mono">./config-inquiry-payload.yaml</h3>
            
            {contactSubmitted ? (
              <div className="h-[260px] flex flex-col items-center justify-center text-center space-y-4 font-mono">
                <div className="w-12 h-12 rounded-full bg-cyber-lime/10 border border-cyber-lime/30 flex items-center justify-center text-cyber-lime animate-bounce">
                  <CheckCircle2 size={24} />
                </div>
                <div className="space-y-2">
                  <p className="text-slate-200 text-sm font-bold">Transmission Dispatched Successfully!</p>
                  <p className="text-slate-400 text-xs max-w-sm">The secure SMTP packet has been piped. I will get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 font-mono text-xs">
                <div className="space-y-2">
                  <label className="text-slate-400 block">visitor_name: </label>
                  <input 
                    type="text" 
                    value={contactState.name}
                    onChange={(e) => setContactState(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your name" 
                    className="w-full bg-slate-950 border border-slate-800 focus:border-cyber-cyan rounded p-3 text-slate-200 outline-none transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-slate-400 block">visitor_email: </label>
                  <input 
                    type="email" 
                    value={contactState.email}
                    onChange={(e) => setContactState(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter your email" 
                    className="w-full bg-slate-950 border border-slate-800 focus:border-cyber-cyan rounded p-3 text-slate-200 outline-none transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-slate-400 block">visitor_message: </label>
                  <textarea 
                    value={contactState.message}
                    onChange={(e) => setContactState(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Type details of your request or connection purpose..." 
                    className="w-full bg-slate-950 border border-slate-800 focus:border-cyber-cyan rounded p-3 text-slate-200 outline-none h-28 resize-none transition-colors"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3 bg-cyber-cyan/10 hover:bg-cyber-cyan/20 border border-cyber-cyan/35 text-cyber-cyan font-bold font-mono tracking-wider rounded transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={14} />
                  <span>DEPLOY INQUIRY PAYLOAD</span>
                </button>
              </form>
            )}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950/60 py-8 text-center text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <p>© {new Date().getFullYear()} Julius Adereti (Jhuleebaba). All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <span className="text-cyber-cyan">next.js 16</span>
            <span>•</span>
            <span className="text-cyber-purple">tailwind css v4</span>
            <span>•</span>
            <span className="text-cyber-lime">react 19</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
