"use client";

import React from "react";
import { 
  ArrowLeft, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Briefcase,
  GraduationCap,
  Code
} from "lucide-react";
import Link from "next/link";

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 print:p-0 print:bg-white print:text-black">
      {/* Control Panel (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between print:hidden">
        <Link 
          href="/"
          className="flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-cyber-cyan transition-colors"
        >
          <ArrowLeft size={14} />
          <span>./back-to-console</span>
        </Link>
        
        <button 
          onClick={handlePrint}
          className="px-4 py-2 bg-cyber-cyan hover:bg-cyber-cyan/90 text-cyber-dark font-mono font-bold text-xs rounded-lg flex items-center space-x-2 transition-all shadow-md shadow-cyber-cyan/10 cursor-pointer"
        >
          <Printer size={14} />
          <span>Print / Save PDF</span>
        </button>
      </div>

      {/* Main Resume Sheet */}
      <article className="max-w-4xl mx-auto bg-slate-900/40 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl print:border-none print:bg-transparent print:p-0 print:shadow-none print:text-black">
        {/* Header */}
        <header className="border-b border-slate-800 pb-6 print:border-black/10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-100 print:text-black">Julius Adereti</h1>
              <p className="text-sm font-mono text-cyber-cyan font-bold tracking-wider mt-1 print:text-slate-700 uppercase">
                Lead Full-Stack Software Engineer & DevOps Architect
              </p>
            </div>
            
            {/* Contacts Info */}
            <div className="space-y-1.5 font-mono text-xs text-slate-400 print:text-slate-800">
              <div className="flex items-center space-x-2 justify-start md:justify-end">
                <MapPin size={12} className="text-cyber-cyan print:text-black" />
                <span>Lagos / Ogun State, Nigeria</span>
              </div>
              <div className="flex items-center space-x-2 justify-start md:justify-end">
                <Phone size={12} className="text-cyber-cyan print:text-black" />
                <span>+234 (0) 811 966 6657 | +234 (0) 912 600 7181</span>
              </div>
              <div className="flex items-center space-x-2 justify-start md:justify-end">
                <Mail size={12} className="text-cyber-cyan print:text-black" />
                <a href="mailto:jhulee1@gmail.com" className="hover:underline">jhulee1@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="mt-4 pt-4 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-2 text-[11px] font-mono text-slate-400 print:border-black/10 print:text-slate-800">
            <a href="https://www.linkedin.com/in/julius-adereti-682308178" target="_blank" rel="noreferrer" className="flex items-center space-x-1.5 hover:text-cyber-cyan print:hover:text-black">
              <svg className="w-3 h-3 text-cyber-cyan print:text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>linkedin.com/in/julius-adereti</span>
            </a>
            
            <a href="https://github.com/Jhuleebaba" target="_blank" rel="noreferrer" className="flex items-center space-x-1.5 hover:text-cyber-cyan print:hover:text-black">
              <svg className="w-3 h-3 text-cyber-cyan print:text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span>github.com/Jhuleebaba</span>
            </a>

            <a href="https://x.com/jhulee_1" target="_blank" rel="noreferrer" className="flex items-center space-x-1.5 hover:text-cyber-cyan print:hover:text-black">
              <svg className="w-3 h-3 text-cyber-cyan print:text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span>x.com/jhulee_1</span>
            </a>

            <div className="flex items-center space-x-1.5">
              <svg className="w-3 h-3 text-cyber-cyan print:text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>Portfolio OS v1.0</span>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mt-6">
          <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-cyber-purple print:text-black border-b border-slate-800/40 pb-1.5 mb-2.5 print:border-black/10">
            // Professional Summary
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed print:text-slate-850">
            Highly driven, self-taught Lead Full-Stack Engineer and SaaS Founder with a proven track record of architecting, deploying, and scaling production-ready multi-tenant SaaS applications, real-time exam engines, and custom school portals. Expert in building modular, secure REST APIs (FastAPI, Flask, Node.js), structuring performant databases (PostgreSQL, MongoDB), orchestrating background worker queues (Celery, Redis), and designing premium user interfaces. Characterized by extreme technical resourcefulness, a business-oriented mindset, and a commitment to zero-downtime DevOps practices.
          </p>
        </section>

        {/* Technical Proficiencies */}
        <section className="mt-6">
          <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-cyber-purple print:text-black border-b border-slate-800/40 pb-1.5 mb-2.5 print:border-black/10">
            // Technical Proficiencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="space-y-1">
              <span className="text-cyber-cyan font-bold print:text-black block">Languages & DBs</span>
              <span className="text-slate-300 print:text-slate-800">Python, TypeScript, SQL, PostgreSQL, MongoDB, Redis</span>
            </div>
            <div className="space-y-1">
              <span className="text-cyber-cyan font-bold print:text-black block">Backend & DevOps</span>
              <span className="text-slate-300 print:text-slate-800">FastAPI, Flask, Node.js, Celery, Docker, Paystack API, Git</span>
            </div>
            <div className="space-y-1">
              <span className="text-cyber-cyan font-bold print:text-black block">Frontend & Mobile</span>
              <span className="text-slate-300 print:text-slate-800">Next.js 16 (App Router), React 19, React Native (Expo), Tailwind v4</span>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mt-6">
          <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-cyber-purple print:text-black border-b border-slate-800/40 pb-1.5 mb-3 print:border-black/10">
            // Professional Experience
          </h2>
          
          <div className="space-y-5">
            {/* Experience Item 1 */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold text-slate-100 print:text-black">Founder & Lead Software Architect</h3>
                  <span className="text-xs font-semibold text-cyber-cyan print:text-slate-800">Beze Exam Suite (exam.beze.ng)</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 print:text-slate-700">Jan 2024 – Present</span>
              </div>
              <ul className="list-disc pl-4 text-xs text-slate-300 space-y-1 print:text-slate-855">
                <li>Founded and engineered a modular monolith exam & printing engine as an independent question provider API.</li>
                <li>Designed and developed the frontend using Next.js 16 (App Router), React 19, and Tailwind CSS v4, utilizing canvas animations for a premium user experience.</li>
                <li>Built a Python/FastAPI backend utilizing SQLAlchemy, PostgreSQL, and an asynchronous Celery task queue with a Redis message broker to process bulk student imports and generate printed exam papers (PDF/DOCX).</li>
              </ul>
            </div>

            {/* Experience Item 2 */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold text-slate-100 print:text-black">Founder & Lead Software Architect</h3>
                  <span className="text-xs font-semibold text-cyber-cyan print:text-slate-800">Bezalel SaaS (www.beze.ng)</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 print:text-slate-700">Jan 2024 – Present</span>
              </div>
              <ul className="list-disc pl-4 text-xs text-slate-300 space-y-1 print:text-slate-855">
                <li>Conceived, architected, and successfully launched a commercial, multi-tenant School Management SaaS platform powering school administration, financial invoicing, academic scoring, and report compilations.</li>
                <li>Implemented database tenant isolation using custom MongoDB context filters based on unique school identifiers.</li>
                <li>Integrated the Paystack API payment gateway to process parent/student invoice payments, track billing cycles, and dynamically issue digital receipts.</li>
                <li>Designed a custom server-side ReportLab PDF compilation pipeline to generate dynamic, stylized academic transcripts and report cards on the fly.</li>
              </ul>
            </div>

            {/* Experience Item 2 */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold text-slate-100 print:text-black">Independent Full-Stack Engineer & DevOps Specialist</h3>
                  <span className="text-xs font-semibold text-cyber-cyan print:text-slate-800">Freelance / Remote</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 print:text-slate-700">Jan 2020 – Present</span>
              </div>
              <ul className="list-disc pl-4 text-xs text-slate-300 space-y-2.5 print:text-slate-855">
                <li className="space-y-0.5">
                  <span className="font-bold text-slate-200 print:text-black block">MMS Computer-Based Testing System (mmscbtfronten.vercel.app):</span>
                  <span>Developed a dual-mode MCQ and Subjective Theory assessment app supporting offline/unstable networks. Created a custom client-side auto-save synchronization queue using React 19 state triggers and visual sync pills.</span>
                </li>
                <li className="space-y-0.5">
                  <span className="font-bold text-slate-200 print:text-black block">Goodly Heritage Comprehensive High School Portal (www.goodlyheritageschools.com.ng):</span>
                  <span>Scaled the Bezalel core platform to power a school-specific portal and a cross-platform Expo-based mobile app for parent dashboards. Developed a secure, locked-down student browser mode preventing exit during active exams.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mt-6">
          <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-cyber-purple print:text-black border-b border-slate-800/40 pb-1.5 mb-2.5 print:border-black/10">
            // Education
          </h2>
          <div className="space-y-3 font-mono text-xs">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-slate-100 font-bold print:text-black block">Bachelor of Science (B.Sc.) in Computer Science</span>
                <span className="text-slate-400 print:text-slate-700 text-xs">University of Ibadan, Ibadan, Nigeria</span>
              </div>
              <span className="text-[10px] text-slate-500 print:text-slate-700">2024 – Present (In View)</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <span className="text-slate-100 font-bold print:text-black block">National Diploma (ND) in Building Technology</span>
                <span className="text-slate-400 print:text-slate-700 text-xs">Yaba College of Technology, Yaba, Lagos, Nigeria</span>
              </div>
              <span className="text-[10px] text-slate-500 print:text-slate-700">2016 – 2018</span>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
