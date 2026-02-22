"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 bg-gray-950 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Featured Projects" subtitle="A collection of my recent work and open-source contributions" />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              className="h-full"
            >
              <SpotlightCard 
                spotlightColor="rgba(157, 78, 221, 0.2)" 
                className="flex flex-col h-full bg-slate-900/40 border-slate-800/50 backdrop-blur-sm p-0 overflow-hidden hover:border-primary/40 transition-all duration-500 group rounded-3xl"
              >
                {/* Image Container - Landscape Optimized */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Category Badge on Image */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-wider rounded-full border border-primary/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-2 md:p-4 flex flex-col grow">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <p 
                    className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 grow"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tools.slice(0, 4).map((tool) => (
                      <span key={tool} className="text-[10px] font-medium text-slate-400 bg-slate-800/50 px-2 py-1 rounded-md border border-slate-700/50">
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 4 && (
                      <span className="text-[10px] font-medium text-slate-500 px-1 py-1 italic">
                        +{project.tools.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-4 mt-auto pt-6 border-t border-slate-800/50">
                    {project.liveDemoUrl && (
                      <a 
                        href={project.liveDemoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 flex items-center justify-center gap-2 text-white bg-primary hover:bg-primary/90 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-95"
                      >
                        <FaExternalLinkAlt size={12} /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 flex items-center justify-center gap-2 text-slate-300 border border-slate-700/50 hover:text-white hover:bg-slate-800/80 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all active:scale-95"
                      >
                        <FaGithub size={14} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
