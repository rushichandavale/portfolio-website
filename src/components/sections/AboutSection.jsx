"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, MapPin, Award, Code } from "lucide-react";
import { Images } from "@/lib/images";

 
const stats = [
  { label: "Years of Experience", value: "3+", icon: Award },
  { label: "Projects Completed", value: "15+", icon: Code },
];

const AboutMeSection = () => {
  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 bg-gray-950 text-white overflow-hidden min-h-screen flex items-center"
    >
      <div className="container relative z-10 mx-auto px-4 w-full">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Left - Large Photo (40%) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-3 bg-gradient-to-br from-primary/30 via-secondary/20 to-purple-600/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            
            {/* Photo Container - Reduced height */}
            <div className="relative aspect-[4/5] max-h-[600px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src={Images.profile}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-60" />
              
              {/* Floating badge - More compact */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-white">Available for Work</span>
                </div>
                <p className="text-xs text-slate-400">Open to opportunities</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content (60%) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-4"
          >
            {/* Intro Card - More compact */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 sm:p-6 hover:border-primary/50 transition-colors duration-300">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  About <span className="text-primary">Me</span>
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p className="leading-relaxed">
                    Hi, I'm <span className="text-white font-semibold">Rushikesh Chandavale</span>, a passionate Software Engineer and Web Developer.
                    I specialize in building scalable, user-centric web applications using modern technologies like React, Next.js, and Node.js.
                  </p>
                  <p className="leading-relaxed">
                    With a strong foundation in computer science and a keen eye for design, I strive to create digital experiences that differ from the norm.
                    My journey in tech is driven by curiosity and a commitment to continuous learning.
                  </p>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <p className="text-sm text-slate-400 mb-1">Experience</p>
                    <p className="text-xl font-bold text-white">3+ Years</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <p className="text-sm text-slate-400 mb-1">Projects</p>
                    <p className="text-xl font-bold text-white">20+ Built</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <p className="text-sm text-slate-400 mb-1">Clients</p>
                    <p className="text-xl font-bold text-white">10+ Global</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <p className="text-sm text-slate-400 mb-1">Location</p>
                    <p className="text-xl font-bold text-white">Pune, India</p>
                  </div>
                </div>
            </div>

            {/* Contact Info Card - More compact */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 hover:border-primary/50 transition-colors duration-300">
              <h4 className="text-base font-semibold text-white mb-3">Let's Connect</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:rushi@gmail.com" className="text-sm group-hover:underline">
                    rushi@gmail.com
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

