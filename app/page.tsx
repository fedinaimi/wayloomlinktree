"use client";

import Image from "next/image";
import { useState } from "react";

interface LinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  modalType: "video" | "external" | "deck";
  gradient: string;
  badge?: string;
  icon: React.ReactNode;
}

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Key metrics - investor-ready stats
  const metrics = [
    { value: "7 min", label: "Screening Time", sublabel: "Per assessment" },
    { value: "$31B", label: "USA Market", sublabel: "By 2030" },
    { value: "2nd Phase", label: "Development", sublabel: "MVP Ready" },
  ];

  // Primary featured actions
  const primaryActions: LinkItem[] = [
    {
      id: "demo",
      title: "Watch Product Demo",
      description: "3-minute walkthrough of our AI-powered cognitive screening platform",
      url: "https://youtu.be/toPKhn9Gd5c",
      modalType: "video",
      gradient: "from-rose-400 via-pink-400 to-purple-400",
      icon: (
        <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      ),
    },
    {
      id: "deck",
      title: "Investor Pitch Deck",
      description: "Market opportunity, technology stack, financial projections, and team",
      url: "#",
      modalType: "deck",
      gradient: "from-blue-400 via-cyan-400 to-teal-400",
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      ),
    },
    {
      id: "website",
      title: "Explore Full Platform",
      description: "Complete product overview, technology, research, and clinical validation",
      url: "https://wayloom-landingpage.vercel.app/en",
      modalType: "external",
      gradient: "from-violet-400 via-purple-400 to-fuchsia-400",
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
        </svg>
      ),
    },
  ];

  // Team members
  const team = [
    {
      name: "Fedi Naimi",
      role: "Co-Founder & Researcher",
      image: "/team/fediBackgroundRemoved-removebg-preview (1).png",
      email: "naimif@mail.gvsu.edu",
      linkedin: "https://www.linkedin.com/in/fedi-naimi-035753198",
    },
    {
      name: "Halee Belghouthi",
      role: "Co-Founder & Researcher",
      image: "/team/image-removebg-preview (10).png",
      email: "belghouh@mail.gvsu.edu",
      linkedin: "https://www.linkedin.com/in/halèe-belghouthi/",
    },
  ];

  const handlePrimaryClick = (link: LinkItem, e: React.MouseEvent) => {
    e.preventDefault();
    if (link.modalType === "external") {
      window.open(link.url, "_blank");
    } else {
      setActiveModal(link.id);
    }
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Simple neuron animation background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Minimal neurons - Clean and simple */}
        <div className="animation-delay-500 absolute left-[15%] top-[20%] h-2.5 w-2.5 animate-pulse-glow rounded-full bg-violet-400/20 shadow-sm shadow-violet-400/20"></div>
        <div className="animation-delay-1000 absolute right-[20%] top-[30%] h-2.5 w-2.5 animate-pulse-glow rounded-full bg-purple-400/20 shadow-sm shadow-purple-400/20"></div>
        <div className="animation-delay-1500 absolute left-[70%] top-[45%] h-2.5 w-2.5 animate-pulse-glow rounded-full bg-violet-400/20 shadow-sm shadow-violet-400/20"></div>
        <div className="animation-delay-2000 absolute right-[60%] bottom-[35%] h-2.5 w-2.5 animate-pulse-glow rounded-full bg-purple-400/20 shadow-sm shadow-purple-400/20"></div>
        <div className="animation-delay-2500 absolute left-[40%] bottom-[25%] h-2.5 w-2.5 animate-pulse-glow rounded-full bg-violet-400/20 shadow-sm shadow-violet-400/20"></div>
        <div className="animation-delay-3000 absolute left-[25%] top-[60%] h-2.5 w-2.5 animate-pulse-glow rounded-full bg-purple-400/20 shadow-sm shadow-purple-400/20"></div>
        
        {/* Simple connecting lines */}
        <svg className="absolute inset-0 h-full w-full opacity-8">
          <line x1="15%" y1="20%" x2="20%" y2="30%" stroke="#8b5cf6" strokeWidth="0.5" className="animate-pulse-glow">
            <animate attributeName="stroke-opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite"/>
          </line>
          <line x1="80%" y1="30%" x2="70%" y2="45%" stroke="#a855f7" strokeWidth="0.5" className="animation-delay-1000 animate-pulse-glow">
            <animate attributeName="stroke-opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite"/>
          </line>
          <line x1="70%" y1="45%" x2="40%" y2="65%" stroke="#8b5cf6" strokeWidth="0.5" className="animation-delay-2000 animate-pulse-glow">
            <animate attributeName="stroke-opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite"/>
          </line>
          <line x1="40%" y1="65%" x2="25%" y2="60%" stroke="#a855f7" strokeWidth="0.5" className="animation-delay-500 animate-pulse-glow">
            <animate attributeName="stroke-opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite"/>
          </line>
        </svg>
      </div>

      {/* Main content */}
      <main className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-20 flex flex-col items-center text-center">
          {/* Logo with pearl glass effect */}
          <div 
            className="group mb-12 transition-all duration-700 hover:scale-105"
            style={{ animation: "fadeInUp 0.6s ease-out" }}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 animate-pulse rounded-full bg-gradient-to-r from-pink-300/20 via-purple-300/20 to-blue-300/20 blur-2xl"></div>
              
              {/* Glass container */}
              <div className="relative h-36 w-36 rounded-3xl border border-white/60 bg-gradient-to-br from-white/90 via-white/70 to-white/50 p-6 shadow-2xl shadow-purple-200/30 backdrop-blur-2xl">
                {/* Inner shine effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-transparent"></div>
        <Image
                  src="/wayloomlogo.png"
                  alt="Wayloom.ai"
                  width={120}
                  height={120}
                  className="relative z-10 drop-shadow-lg transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
          priority
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            </div>
          </div>

          {/* Brand name with sophisticated gradient */}
          <h1 
            className="mb-6 bg-gradient-to-r from-slate-800 via-purple-700 to-blue-700 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl lg:text-8xl"
            style={{ animation: "fadeInUp 0.7s ease-out" }}
          >
            Wayloom.ai
          </h1>

          {/* Elegant status badge */}
          <div 
            className="mb-8 group inline-flex items-center gap-3 rounded-full border border-purple-200/60 bg-gradient-to-r from-white/80 via-purple-50/50 to-white/80 px-6 py-3 shadow-lg shadow-purple-100/50 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-200/50"
            style={{ animation: "fadeInUp 0.8s ease-out" }}
          >
            <div className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></span>
            </div>
            <span className="bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-sm font-bold tracking-wide text-transparent">
              Actively Raising Seed Round
            </span>
          </div>

          {/* Value proposition */}
          <h2 
            className="mb-5 max-w-3xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl"
            style={{ animation: "fadeInUp 0.9s ease-out" }}
          >
            AI-Powered Brain Health Monitoring
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Accessible to Everyone
            </span>
          </h2>

          <p 
            className="mb-12 max-w-2xl text-lg leading-relaxed text-slate-600"
            style={{ animation: "fadeInUp 1s ease-out" }}
          >
            Clinical-grade cognitive screening through smartphones. Detect dementia years earlier with adaptive AI, continuous monitoring, and research-validated assessments.
          </p>

          {/* Premium metrics grid */}
          <div 
            className="mb-16 grid w-full grid-cols-3 gap-4 lg:gap-6"
            style={{ animation: "fadeInUp 1.1s ease-out" }}
          >
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-br from-white/90 via-white/60 to-white/40 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-200/50"
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100/0 via-purple-100/0 to-blue-100/0 opacity-0 transition-all duration-500 group-hover:from-pink-100/30 group-hover:via-purple-100/20 group-hover:to-blue-100/30 group-hover:opacity-100"></div>
                
                <div className="relative z-10">
                  <div className="mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-4xl font-bold text-transparent transition-transform duration-500 group-hover:scale-110">
                    {metric.value}
                  </div>
                  <div className="mb-1 text-sm font-bold text-slate-800">
                    {metric.label}
                  </div>
                  <div className="text-xs font-medium text-slate-500">
                    {metric.sublabel}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Primary Actions with creative glass cards */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {primaryActions.map((action, index) => (
              <button
                key={action.id}
                onClick={(e) => handlePrimaryClick(action, e)}
                className="group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/60 bg-gradient-to-br from-white/90 via-white/60 to-white/40 shadow-lg sm:shadow-xl shadow-slate-200/50 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-purple-200/50"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${1.2 + index * 0.15}s both`,
                }}
              >
                {/* Iridescent shimmer on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${action.gradient} opacity-0 transition-all duration-500 group-hover:opacity-10`}></div>

                <div className="flex items-center gap-4 sm:gap-5 md:gap-6 p-4 sm:p-6 md:p-8">
                  {/* Icon with pearl effect */}
                  <div className="relative flex-shrink-0">
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${action.gradient} blur-lg sm:blur-xl opacity-50 transition-all duration-500 group-hover:opacity-80 group-hover:blur-xl sm:group-hover:blur-2xl`}></div>
                    
                    {/* Glass icon container */}
                    <div className={`relative flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${action.gradient} shadow-md sm:shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
                      {action.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-left min-w-0">
                    <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl md:text-2xl font-bold text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-700 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent leading-tight">
                      {action.title}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-slate-600 leading-snug pr-2">
                      {action.description}
                    </p>
                  </div>

                  {/* Arrow with animation */}
                  <svg
                    className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 flex-shrink-0 transform text-slate-400 transition-all duration-500 group-hover:translate-x-1 sm:group-hover:translate-x-2 group-hover:text-purple-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>

                {/* Bottom gradient accent */}
                <div className={`h-1 sm:h-1.5 w-0 bg-gradient-to-r ${action.gradient} transition-all duration-700 group-hover:w-full`}></div>
              </button>
            ))}
          </div>
        </div>

        {/* Partnership with GVSU - Premium card */}
        <div 
          className="mb-12 sm:mb-16 md:mb-20 overflow-hidden rounded-2xl sm:rounded-3xl border border-white/60 bg-gradient-to-br from-white/90 via-white/60 to-white/40 p-6 sm:p-8 md:p-10 shadow-lg sm:shadow-xl shadow-slate-200/50 backdrop-blur-2xl"
          style={{ animation: "fadeInUp 0.6s ease-out 1.6s both" }}
        >
          <div className="mb-6 sm:mb-8 text-center">
            <h3 className="mb-2 sm:mb-3 bg-gradient-to-r from-slate-700 to-purple-700 bg-clip-text text-xs sm:text-sm font-bold uppercase tracking-widest text-transparent">
              In Partnership With
            </h3>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="group transition-transform duration-500 hover:scale-105">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/80 bg-white p-4 sm:p-6 md:p-8 shadow-md sm:shadow-lg transition-all duration-500 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-purple-200/50">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-50/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                
                <Image
                  src="/grand-valley-state-university-pew-campus_image2.png"
                  alt="Grand Valley State University - College of Computing"
                  width={280}
                  height={80}
                  className="relative z-10 h-auto w-56 sm:w-64 md:w-80 transition-all duration-500 group-hover:drop-shadow-lg"
                />
              </div>
              <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm font-bold text-slate-600">
                DCIH Research Lab
              </p>
            </div>
          </div>
        </div>

        {/* Team Section with sophisticated cards */}
        <div 
          className="mb-12 sm:mb-16 md:mb-20"
          style={{ animation: "fadeInUp 0.6s ease-out 1.8s both" }}
        >
          <div className="mb-8 sm:mb-10 md:mb-12 text-center px-2">
            <h3 className="mb-2 sm:mb-3 bg-gradient-to-r from-slate-800 to-purple-700 bg-clip-text text-2xl sm:text-3xl md:text-4xl font-bold text-transparent">
              Meet the Team
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Building the future of brain health monitoring
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/60 bg-gradient-to-br from-white/90 via-white/60 to-white/40 p-6 sm:p-7 md:p-8 shadow-lg sm:shadow-xl shadow-slate-200/50 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-purple-200/50"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${1.9 + index * 0.1}s both`,
                }}
              >
                {/* Pearl shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100/0 via-purple-100/0 to-blue-100/0 opacity-0 transition-all duration-500 group-hover:from-pink-100/20 group-hover:via-purple-100/10 group-hover:to-blue-100/20 group-hover:opacity-100"></div>
                
                <div className="relative flex flex-col items-center text-center">
                  {/* Photo with pearl frame */}
                  <div className="mb-4 sm:mb-5 md:mb-6 relative transition-transform duration-700 group-hover:scale-105">
                    {/* Outer glow */}
                    <div className="absolute -inset-2 sm:-inset-3 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-pink-300/40 via-purple-300/40 to-blue-300/40 blur-lg sm:blur-xl opacity-0 transition-all duration-700 group-hover:opacity-100"></div>
                    
                    {/* Pearl frame */}
                    <div className="relative h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 overflow-hidden rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-white/80 bg-gradient-to-br from-white/60 to-white/30 p-1 sm:p-1.5 shadow-lg sm:shadow-xl backdrop-blur-xl">
                      <div className="h-full w-full overflow-hidden rounded-xl sm:rounded-2xl bg-white">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={160}
                          height={160}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <h4 className="mb-1.5 sm:mb-2 text-xl sm:text-2xl font-bold text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-700 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent leading-tight">
                    {member.name}
                  </h4>
                  <p className="mb-5 sm:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-xs sm:text-sm font-bold text-transparent leading-snug px-2">
                    {member.role}
                  </p>

                  {/* Contact buttons with glass effect */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <a
                      href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
                      className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl border border-white/60 bg-gradient-to-br from-white/80 to-white/40 text-slate-600 shadow-md sm:shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-purple-300 hover:text-purple-600 hover:shadow-lg sm:hover:shadow-xl hover:shadow-purple-200/50 active:scale-95"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
          </a>
          <a
                      href={`mailto:${member.email}`}
                      className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl border border-white/60 bg-gradient-to-br from-white/80 to-white/40 text-slate-600 shadow-md sm:shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-300 hover:text-pink-600 hover:shadow-lg sm:hover:shadow-xl hover:shadow-pink-200/50 active:scale-95"
                      aria-label={`Email ${member.name}`}
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Footer */}
        <footer className="border-t border-slate-200/60 pt-6 sm:pt-8 md:pt-10 pb-safe">
          <div className="mb-4 sm:mb-6 text-center px-4">
            <p className="mb-2 sm:mb-3 bg-gradient-to-r from-slate-600 via-purple-600 to-pink-600 bg-clip-text text-sm sm:text-base font-semibold italic text-transparent">
              Science meets empathy, in the palm of your hand.
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500 sm:flex-row px-4">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-center">
              <span className="font-bold text-slate-700">© 2025 Wayloom.ai</span>
              <span className="hidden sm:inline">·</span>
              <span>Grand Valley State University</span>
              <span className="hidden sm:inline">·</span>
              <span>DCIH Research Lab</span>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="mailto:naimif@mail.gvsu.edu" className="transition-all hover:text-purple-600 active:text-purple-700">
                Contact
              </a>
              <span>·</span>
              <a href="https://wayloom-landingpage.vercel.app/en" target="_blank" rel="noopener noreferrer" className="transition-all hover:text-purple-600 active:text-purple-700">
                Privacy
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* Modals */}
      {activeModal && (
        <div
          className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4 backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            className="modal-content relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-14 right-0 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:shadow-xl hover:shadow-purple-500/50"
              aria-label="Close modal"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="overflow-hidden rounded-3xl border border-white/60 bg-white shadow-2xl shadow-purple-500/20">
              {activeModal === "demo" && (
                <div className="relative aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/toPKhn9Gd5c?autoplay=1"
                    title="Wayloom.ai Product Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              {activeModal === "deck" && (
                <div className="flex flex-col h-[80vh] sm:h-[85vh]">
                  {/* Header with actions */}
                  <div className="flex items-center justify-between gap-4 border-b border-slate-200 bg-gradient-to-r from-purple-50 via-white to-pink-50 p-4 sm:p-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 shadow-lg">
                        <svg className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                          Investor Pitch Deck
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600">
                          Wayloom.ai — Brain Health Monitoring
                        </p>
                      </div>
                    </div>
                    
                    {/* Download button */}
                    <a
                      href="/wayloompitchdeck.pdf"
                      download="Wayloom-Pitch-Deck.pdf"
                      className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-400/50"
                    >
                      <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                      <span className="hidden sm:inline">Download</span>
                      <span className="sm:hidden">PDF</span>
                    </a>
                  </div>

                  {/* PDF Viewer */}
                  <div className="relative flex-1 bg-slate-100">
                    <iframe
                      src="/wayloompitchdeck.pdf#toolbar=0"
                      className="h-full w-full"
                      title="Wayloom.ai Investor Pitch Deck"
                    ></iframe>
                    
                    {/* Mobile hint */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:hidden">
                      <p className="rounded-full bg-slate-900/80 px-4 py-2 text-xs text-white backdrop-blur-sm">
                        Swipe to navigate slides
                      </p>
                    </div>
                  </div>

                  {/* Footer actions - Mobile optimized */}
                  <div className="flex items-center justify-between gap-3 border-t border-slate-200 bg-white p-4 sm:p-5">
                    <a
                      href="mailto:naimif@mail.gvsu.edu,belghouh@mail.gvsu.edu?subject=Investment Inquiry - Wayloom.ai"
                      className="flex-1 sm:flex-none rounded-full border-2 border-purple-600 bg-white px-5 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-purple-600 text-center transition-all duration-300 hover:bg-purple-50"
                    >
                      Contact Us
                    </a>
                    <button
                      onClick={closeModal}
                      className="flex-1 sm:flex-none rounded-full bg-slate-100 px-5 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-slate-700 transition-all duration-300 hover:bg-slate-200"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
