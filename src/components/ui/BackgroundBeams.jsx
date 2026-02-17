"use client";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = ({ className }) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-indigo-500/10 opacity-20 blur-[100px] rounded-full mix-blend-screen animate-blob" />
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-purple-500/10 opacity-20 blur-[100px] rounded-full mix-blend-screen animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-blue-500/10 opacity-20 blur-[100px] rounded-full mix-blend-screen animate-blob animation-delay-4000" />
      
      {/* Moving lines/beams */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M-100 0 L1000 1000"
          stroke="url(#grad1)"
          strokeWidth="2"
          strokeDasharray="10 10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1, pathOffset: [0, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
