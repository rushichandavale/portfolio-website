import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, MapPin, Code2 } from "lucide-react";
const AboutMeSection = () => {
  // Add this helper function above the component
const getExperience = () => {
  const startDate = new Date(2024, 4); 
  const now = new Date();

  const totalMonths =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());

  const years = (totalMonths / 12).toFixed(1);

  return `${years}+ Years`;
};
  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 bg-gray-950 text-white overflow-hidden min-h-screen flex items-center"
    >
      <div className="container relative z-10 mx-auto px-4 w-full">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Left - Code Editor Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative w-full h-full flex flex-col justify-center font-mono"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-purple-500/20 to-secondary/20 rounded-[2rem] blur-2xl opacity-60" />
            
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#0d1117] border border-slate-700/50 shadow-2xl backdrop-blur-xl">
              {/* Editor Header */}
              <div className="flex px-4 py-3 bg-[#161b22] border-b border-slate-700/50 items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/90 shadow-[0_0_8px_rgba(244,63,94,0.4)]"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/90 shadow-[0_0_8px_rgba(245,158,11,0.4)]"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 tracking-wider ml-[-12px]">
                  <Code2 className="w-3.5 h-3.5" />
                  profile.ts
                </div>
                <div></div>
              </div>
              
              {/* Editor Content */}
              <div className="p-5 sm:p-6 text-sm sm:text-base leading-loose overflow-x-auto selection:bg-blue-500/30">
                <div className="text-slate-300 flex">
                  <span className="w-6 shrink-0 text-slate-600 select-none text-right pr-4 text-xs flex items-center justify-end">1</span>
                  <span><span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">developer</span> <span className="text-[#ff7b72]">=</span> <span className="text-[#e3b341]">&#123;</span></span>
                </div>
                
                <div className="text-slate-300 flex">
                  <span className="w-6 shrink-0 text-slate-600 select-none text-right pr-4 text-xs flex items-center justify-end">2</span>
                  <span className="pl-6"><span className="text-[#7ee787]">name:</span> <span className="text-[#a5d6ff]">'Rushikesh Chandavale'</span><span className="text-[#ff7b72]">,</span></span>
                </div>
                
                <div className="text-slate-300 flex">
                  <span className="w-6 shrink-0 text-slate-600 select-none text-right pr-4 text-xs flex items-center justify-end">3</span>
                  <span className="pl-6"><span className="text-[#7ee787]">role:</span> <span className="text-[#a5d6ff]">'Software Engineer'</span><span className="text-[#ff7b72]">,</span></span>
                </div>
                
                <div className="text-slate-300 flex">
                  <span className="w-6 shrink-0 text-slate-600 select-none text-right pr-4 text-xs flex items-center justify-end">4</span>
                  <span className="pl-6"><span className="text-[#7ee787]">focus:</span> <span className="text-[#a5d6ff]">'Frontend Architecture'</span><span className="text-[#ff7b72]">,</span></span>
                </div>
                
                <div className="text-slate-300 flex">
                  <span className="w-6 shrink-0 text-slate-600 select-none text-right pr-4 text-xs flex items-center justify-end">5</span>
                  <span className="pl-6"><span className="text-[#7ee787]">skills:</span> <span className="text-[#ff7b72]">[</span></span>
                </div>
                
                <div className="text-slate-300 flex">
                  <span className="w-6 shrink-0 text-slate-600 select-none text-right pr-4 text-xs flex items-center justify-end">6</span>
                  <span className="pl-12"><span className="text-[#a5d6ff]">'React'</span><span className="text-[#ff7b72]">,</span> <span className="text-[#a5d6ff]">'Next.js'</span><span className="text-[#ff7b72]">,</span> <span className="text-[#a5d6ff]">'TypeScript'</span><span className="text-[#ff7b72]">,</span></span>
                </div>

                <div className="text-slate-300 flex">
                  <span className="w-6 shrink-0 text-slate-600 select-none text-right pr-4 text-xs flex items-center justify-end">7</span>
                  <span className="pl-12"><span className="text-[#a5d6ff]">'TailwindCSS'</span><span className="text-[#ff7b72]">,</span> <span className="text-[#a5d6ff]">'Framer'</span></span>
                </div>
                
                <div className="text-slate-300 flex">
                  <span className="w-6 shrink-0 text-slate-600 select-none text-right pr-4 text-xs flex items-center justify-end">8</span>
                  <span className="pl-6 text-[#ff7b72]">]</span><span className="text-[#ff7b72]">,</span>
                </div>
                
                <div className="text-slate-300 flex pt-2 group">
                  <span className="w-6 shrink-0 text-slate-600 select-none text-right pr-4 text-xs flex items-center justify-end transition-colors group-hover:text-slate-400">9</span>
                  <span className="pl-6"><span className="text-[#7ee787]">builds:</span> <span className="text-[#ff7b72]">[</span></span>
                </div>
                
                <div className="text-slate-300 flex group lg:hover:bg-slate-800/30 transition-colors cursor-crosshair">
                  <span className="w-6 shrink-0 text-slate-600 select-none text-right pr-4 text-xs flex items-center justify-end transition-colors group-hover:text-slate-400">10</span>
                  <span className="pl-12 flex items-center"><span className="text-[#a5d6ff]">"Enterprise Applications"</span><span className="text-[#ff7b72]">,</span> <span className="ml-4 opacity-0 lg:group-hover:opacity-100 text-xs text-[#8b949e] transition-opacity">{"// Scale"}</span></span>
                </div>
                
                <div className="text-slate-300 flex group lg:hover:bg-slate-800/30 transition-colors cursor-crosshair">
                  <span className="w-6 shrink-0 text-slate-600 select-none text-right pr-4 text-xs flex items-center justify-end transition-colors group-hover:text-slate-400">11</span>
                  <span className="pl-12 flex items-center"><span className="text-[#a5d6ff]">"AI-Powered Platforms"</span><span className="text-[#ff7b72]">,</span> <span className="ml-4 opacity-0 lg:group-hover:opacity-100 text-xs text-[#8b949e] transition-opacity">{"// Innovation"}</span></span>
                </div>
                
                <div className="text-slate-300 flex group lg:hover:bg-slate-800/30 transition-colors cursor-crosshair">
                  <span className="w-6 shrink-0 text-slate-600 select-none text-right pr-4 text-xs flex items-center justify-end transition-colors group-hover:text-slate-400">12</span>
                  <span className="pl-12 flex items-center"><span className="text-[#a5d6ff]">"Real-time Systems"</span> <span className="ml-4 opacity-0 lg:group-hover:opacity-100 text-xs text-[#8b949e] transition-opacity">{"// Performance"}</span></span>
                </div>
                
                <div className="text-slate-300 flex group">
                  <span className="w-6 shrink-0 text-slate-600 select-none text-right pr-4 text-xs flex items-center justify-end transition-colors group-hover:text-slate-400">13</span>
                  <span className="pl-6 text-[#ff7b72]">]</span>
                </div>
                
                <div className="flex">
                  <span className="w-6 shrink-0 text-slate-600 select-none text-right pr-4 text-xs flex items-center justify-end">14</span>
                  <span className="text-[#e3b341]">&#125;<span className="text-[#ff7b72]">;</span></span>
                </div>
                <div className="flex animate-pulse">
                  <span className="w-6 shrink-0 text-slate-600 select-none text-right pr-4 text-xs flex items-center justify-end">15</span>
                  <span className="w-2 h-4 bg-slate-500/50 mt-1 ml-1" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-4"
          >
            {/* Intro Card */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 sm:p-6 hover:border-primary/50 transition-colors duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                About <span className="text-primary">Me</span>
              </h2>

              <div className="space-y-4 text-slate-300">
                <p className="leading-relaxed">
                  Hi, I'm{" "}
                  <span className="text-white font-semibold">
                    Rushikesh Chandavale
                  </span>
                  , a Frontend Developer with {getExperience()} of experience building
                  enterprise-grade and AI-powered web applications.
                </p>

                <p className="leading-relaxed">
                  I specialize in React, TypeScript, and Next.js, focusing on
                  scalable architecture, real-time systems, and performance
                  optimization. I’ve led frontend development for AI video
                  platforms, RFID-based tracking systems, and professional
                  networking applications.
                </p>

                <p className="leading-relaxed">
                  I care deeply about clean code, maintainability, and building
                  products that solve real business problems — not just
                  interfaces that look good.
                </p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <p className="text-sm text-slate-400 mb-1">Experience</p><p className="text-xl font-bold text-white">{getExperience()}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <p className="text-sm text-slate-400 mb-1">Projects</p>
                  <p className="text-xl font-bold text-white">8+ Built</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <p className="text-sm text-slate-400 mb-1">Specialization</p>
                  <p className="text-xl font-bold text-white">Enterprise</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <p className="text-sm text-slate-400 mb-1">Location</p>
                  <p className="text-xl font-bold text-white">Pune, India</p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 hover:border-primary/50 transition-colors duration-300">
              <h4 className="text-base font-semibold text-white mb-3">
                Let's Connect
              </h4>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4 text-primary" />
                  <a
                    href="mailto:rushichandavale@gmail.com"
                    className="text-sm group-hover:underline"
                  >
                    rushichandavale@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">Pune, India</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;