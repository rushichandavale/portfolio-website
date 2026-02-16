import {Link} from "react-router-dom";
import { motion } from "framer-motion"; 
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  CalendarDays,
  GitBranch,
  Construction,
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";

 

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-UK", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
};

export default function ProjectCard({ project, index }) {
  const statusColor =
    project.projectStatus.toLowerCase() === "completed"
      ? "bg-green-500 text-green-50"
      : project.projectStatus.toLowerCase() === "in progress"
        ? "bg-yellow-500 text-yellow-50"
        : "bg-gray-500 text-gray-50";

  const handleButtonClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Link to={`/projects/${project.slug}`}>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={index}
        className="h-full"
      >
        <SpotlightCard
          spotlightColor="rgba(157, 78, 221, 0.25)"
          className="flex flex-col h-full p-0 overflow-hidden border-slate-800 bg-slate-900/50 hover:border-primary/50 transition-colors duration-300"
        >
          <div className="relative w-full h-56 sm:h-60 overflow-hidden">
            <img
              src={project.imageUrl || "/images/placeholder-project.png"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-5 flex flex-col grow">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-primary">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm mb-3 line-clamp-3 grow">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap text-xs text-slate-500 mb-3 gap-x-4 gap-y-1">
              <div className="flex items-center">
                <CalendarDays size={14} className="mr-1.5 text-primary" />
                <span>Start: {formatDate(new Date(project.projectStartDate))}</span>
              </div>
              <div className="flex items-center">
                {project.projectStatus.toLowerCase() === "in progress" ? (
                  <Construction size={14} className="mr-1.5 text-yellow-400" />
                ) : (
                  <GitBranch size={14} className="mr-1.5 text-green-400" />
                )}
                Status:
                <span className={`ml-1 px-1.5 py-0.5 rounded-sm text-xs ${statusColor}`}>
                  {project.projectStatus}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center gap-3">
              {project.githubUrl && (
                <Link
                  to={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleButtonClick}
                  className="flex-1 text-center sm:text-left inline-flex items-center justify-center sm:justify-start gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium py-2 px-4 rounded-lg text-sm transform active:scale-95 transition-all duration-150 ease-in-out border border-slate-700"
                >
                  <FaGithub size={16} />
                  View Code
                </Link>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleButtonClick}
                  className="flex-1 sm:text-left inline-flex items-center justify-center sm:justify-start gap-2 rounded-lg text-sm py-2 px-4 text-center font-medium text-white bg-gradient-to-br from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg shadow-primary/20 transform active:scale-95 transition-all duration-150 ease-in-out"
                >
                  <FaExternalLinkAlt size={14} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </SpotlightCard>
      </motion.div>
    </Link>
  );
}
