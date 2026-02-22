import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, Code2, Terminal, Cpu, Globe, Twitter, Instagram } from "lucide-react";
import { SparklesCore } from "../ui/sparkles";
import {socialLinks} from "@/lib/data"
const TypewriterEffect = ({ texts, delay = 100, pause = 2000 }) => {
  const [currentText, setCurrentText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [textIndex, setTextIndex] = React.useState(0);

  React.useEffect(() => {
    const currentString = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentString.length) {
          setCurrentText(prev => prev + currentString[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        if (currentIndex > 0) {
          setCurrentText(prev => prev.slice(0, -1));
          setCurrentIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setTextIndex(prev => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, isDeleting, pause, textIndex, texts]);

  return <span>{currentText}<span className="animate-pulse">|</span></span>;
}

const TypewriterCode = ({ code, speed = 30 }) => {
  const [displayCode, setDisplayCode] = React.useState("");
  const [cursorPosition, setCursorPosition] = React.useState(0);

  React.useEffect(() => {
    if (cursorPosition < code.length) {
      const timeout = setTimeout(() => {
        setDisplayCode(prev => prev + code[cursorPosition]);
        setCursorPosition(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [code, cursorPosition, speed]);

  const highlightCode = (text) => {
    // Simple regex-based syntax highlighting for the specific snippet
    return text.split(/(\s+|[{}[\](),.:;]|["](?:\\.|[^"\\])*["]|\b(?:const|var|let|function|return|true|false)\b)/g).map((part, i) => {
      if (!part) return null;
      if (/^(const|function|return)$/.test(part)) return <span key={i} className="text-purple-400">{part}</span>;
      if (/^(true|false)$/.test(part)) return <span key={i} className="text-red-400">{part}</span>;
      if (/^[{}()[\]]$/.test(part)) return <span key={i} className="text-yellow-400">{part}</span>;
      if (/^[.:;,]$/.test(part)) return <span key={i} className="text-slate-400">{part}</span>;
      if (/^"[^"]*"$/.test(part)) return <span key={i} className="text-green-400">{part}</span>;
      if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(part) && !/^(const|function|return|true|false)$/.test(part)) {
        // Basic check for property names (roughly)
        const nextPart = text.split(/(\s+|[{}[\](),.:;]|["](?:\\.|[^"\\])*["]|\b(?:const|var|let|function|return|true|false)\b)/g)[i+1];
        if (nextPart === ':') return <span key={i} className="text-sky-400">{part}</span>;
        return <span key={i} className="text-blue-400">{part}</span>;
      }
      return <span key={i} className="text-slate-300">{part}</span>;
    });
  };

  return (
    <div className="font-mono text-sm leading-relaxed whitespace-pre-wrap">
      {highlightCode(displayCode)}
      <motion.div 
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="w-2 h-4 bg-primary inline-block ml-0.5 align-middle"
      />
    </div>
  );
};

const HeroSection = () => {
    const [scrollY, setScrollY] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  const codeSnippet = `const developer = {
  name: "Rushikesh Chandavale",
  role: "Software Engineer",
  skills: ["React", "Next.js", "Javascript", "Typescript", "Node.js"],
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
                Hi, I'm <strong className="text-white">Rushikesh</strong>. A <strong className="text-primary"><TypewriterEffect texts={["Software Engineer", "Frontend Developer"]} delay={100} /></strong> focused on crafting clean, user-centric web applications with modern technologies.
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
                className="bg-transparent text-white border-slate-700 hover:bg-slate-800 hover:border-slate-600 hover:text-primary font-semibold rounded-xl px-8 py-6 text-base transition-all duration-300"
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
              {socialLinks.map((social, idx) => {
                const Icon = {
                  github: Github,
                  linkedin: Linkedin,
                  twitter: Twitter,
                  instagram: Instagram,
                  mail: Mail
                }[social.platform];

                if (!Icon) return null;

                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"
                    title={social.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
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
              <div className="p-6 overflow-hidden min-h-[220px]">
                <TypewriterCode code={codeSnippet} speed={20} />
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
        animate={{ opacity: scrollY > 100 ? 0 : 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
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

