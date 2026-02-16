"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { CalendarDays } from "lucide-react";

export default function ProjectsSection() {
  const containerRef = useRef(null);
  
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-UK", {
      year: "numeric",
      month: "short",
    }).format(date);
  };

  return (
    <section id="projects" className="py-24 relative bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <SectionHeading title="Featured Projects" subtitle="Scroll horizontally to explore" />
      </div>

      <div ref={containerRef} className="overflow-x-auto overflow-y-hidden no-scrollbar">
        <div className="flex gap-6 px-4 sm:px-8 pb-8" style={{ width: 'max-content' }}>
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex-shrink-0 w-[400px] sm:w-[500px] h-[650px] bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80" />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-[370px]">
                <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-4 flex-grow">
                  {project.shortDescription}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                  <CalendarDays size={14} className="text-primary" />
                  <span>{formatDate(new Date(project.projectStartDate))}</span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 text-xs rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 4 && (
                    <span className="px-2 py-1 text-slate-500 text-xs">
                      +{project.tools.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 border border-slate-700 text-slate-300 text-sm font-semibold rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-300"
                    >
                      <FaGithub size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="text-center mt-8">
        <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
          <svg className="w-5 h-5 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          Scroll horizontally to see more projects
        </p>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes bounce-horizontal {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
