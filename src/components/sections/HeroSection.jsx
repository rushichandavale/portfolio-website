import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, Code2, Terminal, Cpu, Globe } from "lucide-react";
import { SparklesCore } from "../ui/sparkles";

const HeroSection = () => {
  const codeSnippet = `const developer = {
  name: "Rushikesh",
  role: "Software Engineer",
  skills: ["React", "Next.js", "Node.js"],
  hardWorker: true,
  quickLearner: true,
  hireable: function() {
    return this.hardWorker && this.quickLearner;
  }
};`;

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gray-950 pt-20 lg:pt-0"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={70}
          particleColor="#FFFFFF"
        />
      </div>

      {/* Ambient Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-700/50 rounded-full backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-300">Available for Opportunities</span>
            </motion.div>

            {/* Headings */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white"
              >
                Building <br className="hidden lg:block" />
                <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
                  Digital Experiences
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Hi, I'm <strong className="text-white">Rushikesh</strong>. A Software Engineer focused on crafting clean, user-centric web applications with modern technologies.
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Button
                className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl px-8 py-6 text-base shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-primary/40"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Link to="#projects" className="flex items-center gap-2">
                  View My Work <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent text-white border-slate-700 hover:bg-slate-800 hover:border-slate-600 font-semibold rounded-xl px-8 py-6 text-base transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Link to="#contact">Contact Me</Link>
              </Button>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-4 flex items-center justify-center lg:justify-start gap-6"
            >
              {[
                { icon: Github, href: "https://github.com/rushichandavale" },
                { icon: Linkedin, href: "https://linkedin.com/in/rushikesh-chandavale/" },
                { icon: Mail, href: "mailto:rushichandavale@gmail.com" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual - Abstract Code Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-[80px]" />

            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-lg bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl overflow-hidden group hover:border-slate-700/80 transition-colors"
            >
              {/* Card Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 px-3 py-1 bg-slate-800 rounded-md flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3 h-3" />
                  developer.js
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden">
                <div className="text-slate-300">
                  <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> <span className="text-slate-400">=</span> <span className="text-yellow-400">{`{`}</span>
                  <br />
                  &nbsp;&nbsp;<span className="text-sky-400">name</span>: <span className="text-green-400">"Rushikesh"</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-sky-400">role</span>: <span className="text-green-400">"Software Engineer"</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-sky-400">skills</span>: <span className="text-yellow-400">[</span>
                  <span className="text-green-400">"React"</span>, <span className="text-green-400">"Next.js"</span><span className="text-yellow-400">]</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-sky-400">hardWorker</span>: <span className="text-red-400">true</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-sky-400">hireable</span>: <span className="text-purple-400">function</span><span className="text-yellow-400">()</span> <span className="text-yellow-400">{`{`}</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-red-400">true</span>;
                  <br />
                  &nbsp;&nbsp;<span className="text-yellow-400">{`}`}</span>
                  <br />
                  <span className="text-yellow-400">{`}`}</span>;
                </div>
                
                {/* Simulated Cursor */}
                <motion.div 
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-2.5 h-4 bg-primary inline-block ml-1 align-middle mt-1"
                />
              </div>

              {/* Decorative Tech Icons Floating */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 -top-6 p-4 bg-slate-800/80 backdrop-blur-md rounded-xl border border-slate-700 shadow-xl"
              >
                <Code2 className="w-8 h-8 text-blue-400" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-6 -bottom-6 p-4 bg-slate-800/80 backdrop-blur-md rounded-xl border border-slate-700 shadow-xl"
              >
                <Cpu className="w-8 h-8 text-purple-400" />
              </motion.div>
               <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute right-10 -bottom-10 p-3 bg-slate-800/80 backdrop-blur-md rounded-xl border border-slate-700 shadow-xl"
              >
                <Globe className="w-6 h-6 text-green-400" />
              </motion.div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-500 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-2 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

