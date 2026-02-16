import { motion } from "framer-motion";

export function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center space-y-6 mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="inline-block">
          <div
            className="relative px-3 py-1 text-sm font-medium rounded-full
  bg-linear-to-r from-purple-500/80 via-indigo-600/80 to-blue-600/80
  backdrop-blur-sm border border-indigo-300/50 text-white mb-2"
          >
            <span className="relative z-10   text-gray-100">{subtitle}</span>
            <span className="absolute inset-0 rounded-full bg-linear-to-r from-purple-500/25 via-indigo-600/25 to-blue-600/25 animate-pulse backdrop-blur-sm mix-blend-overlay"></span>
          </div>
        </div>
      </motion.div>
      <motion.h2
        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent 
  bg-gradient-to-r from-white via-indigo-300 to-white
 animate-text-shimmer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="w-24 h-1.5 bg-linear-to-r from-purple-500 via-indigo-600 to-blue-600 rounded-full mx-auto mt-6 shadow-lg shadow-indigo-500/30"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      />
    </div>
  );
}
