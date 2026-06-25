

"use client";
import { motion } from "framer-motion";
import { Sparkles, BookOpen, ShieldCheck, Cpu, ArrowRight } from "lucide-react";
 




 export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
export default function SoftLaunch() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a1a15]">
      
      {/* 1. Video Background */}
      <video 
        autoPlay loop muted playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
      >
        <source src="/heavenly-bg.mp4" type="video/mp4" />
      </video>

      {/* 2. Professional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a15]/80 via-transparent to-[#0a1a15]" />

      {/* 3. Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full mb-12 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
          <Sparkles size={16} className="text-[#D4AF37]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            Official Soft Launch • Youm-e-Ashura 2026
          </span>
        </div>

        {/* Azeemo-Shan Title */}
        <h1 className="text-6xl md:text-[100px] font-serif text-white mb-8 leading-none tracking-tighter">
          SIRAT <span className="text-[#D4AF37] italic font-medium">AI</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-white/60 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
          Decoding Divine Wisdom with <br /> 
          <span className="text-white font-medium">Next-Gen Intelligence.</span>
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <FeatureCard icon={<BookOpen />} title="Authentic Sources" desc="Verified Quran & Hadith data" />
          <FeatureCard icon={<Cpu />} title="AI Insights" desc="Smart context-aware answers" />
          <FeatureCard icon={<ShieldCheck />} title="Privacy First" desc="Secure & Ad-free experience" />
        </div>

        {/* Action Button */}
        <button className="group relative bg-[#D4AF37] text-[#0a1a15] px-12 py-5 rounded-full font-black text-lg transition-all hover:scale-105 shadow-[0_20px_50px_rgba(212,175,55,0.3)]">
          BE THE FIRST TO EXPERIENCE
          <ArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
        </button>
      </motion.div>

      {/* YardsSoft Branding */}
      <div className="absolute bottom-10 w-full text-center">
        <p className="text-white/20 text-[10px] uppercase tracking-[0.5em]">
          Designed & Developed by YardsSoft Agency
        </p>
      </div>
    </main>
  );
}

function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] text-left">
      <div className="text-[#D4AF37] mb-4">{icon}</div>
      <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}