"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { CalendarDays } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function ProjectsSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[300vh] bg-gray-950">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-8 left-0 right-0 z-10 px-4">
           {/* Section Heading positioned absolutely at top */}
           <SectionHeading title="Featured Projects" subtitle="Scroll down to explore" />
        </div>
        
        <motion.div style={{ x }} className="flex gap-8 px-8 sm:px-16 pt-20">
          {projectsData.map((project, index) => (
             <div key={project.id} className="relative group w-[85vw] md:w-[600px] lg:w-[800px] h-[50vh] md:h-[60vh] flex-shrink-0">
               <SpotlightCard spotlightColor="rgba(157, 78, 221, 0.25)" className="w-full h-full bg-slate-900/50 border-slate-800 p-0 overflow-hidden hover:border-primary/50 transition-colors duration-300">
               <div className="flex flex-col md:flex-row h-full">
                  {/* Image Side (Top on mobile, Left on desktop) */}
                  <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
                     <img
                       src={project.imageUrl}
                       alt={project.title}
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 md:bg-gradient-to-r" />
                  </div>

                  {/* Content Side */}
                  <div className="w-full md:w-1/2 h-1/2 md:h-full p-6 md:p-8 flex flex-col justify-center relative z-10">
                     <div className="mb-2">
                        <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/20">
                           {project.category}
                        </span>
                     </div>
                     <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                     </h3>
                     <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-4 line-clamp-3 md:line-clamp-none">
                        {project.description}
                     </p>
                     
                     <div className="flex flex-wrap gap-2 mb-6">
                        {project.tools.map((tool) => (
                          <span key={tool} className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded">
                             {tool}
                          </span>
                        ))}
                     </div>

                     <div className="flex gap-4 mt-auto">
                        {project.liveDemoUrl && (
                           <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:shadow-lg hover:shadow-primary/20">
                              <FaExternalLinkAlt size={14} /> Live Demo
                           </a>
                        )}
                        {project.githubUrl && (
                           <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 border border-slate-700 hover:text-white hover:bg-slate-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                              <FaGithub size={16} /> Code
                           </a>
                        )}
                     </div>
                  </div>
               </div>
               </SpotlightCard>
             </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
