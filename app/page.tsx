"use client";
import { motion } from "framer-motion";
import { Sparkles, BookOpen, ShieldCheck, Cpu, ArrowRight } from "lucide-react";

function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] text-left">
      <div className="text-[#D4AF37] mb-4">{icon}</div>
      <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function SoftLaunch() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a1a15]">
      {/* 1. Video Background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105">
        <source src="/heavenly-bg.mp4" type="video/mp4" />
      </video>

      {/* 2. Content */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full mb-12 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
          <Sparkles size={16} className="text-[#D4AF37]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">Official Soft Launch • Youm-e-Ashura 2026</span>
        </div>

        <h1 className="text-6xl md:text-[100px] font-serif text-white mb-8 leading-none tracking-tighter">
          SIRAT <span className="text-[#D4AF37] italic font-medium">AI</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-white/60 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
          Decoding Divine Wisdom with <br /> 
          <span className="text-white font-medium">Next-Gen Intelligence.</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <FeatureCard icon={<BookOpen size={24}/>} title="Authentic Sources" desc="Verified Quran & Hadith data" />
          <FeatureCard icon={<Cpu size={24}/>} title="AI Insights" desc="Smart context-aware answers" />
          <FeatureCard icon={<ShieldCheck size={24}/>} title="Privacy First" desc="Secure & Ad-free experience" />
        </div>
      </motion.div>
    </main>
  );
}