// ... imports
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
 
import { TbApi } from "react-icons/tb";
import { MdOutlineImportantDevices } from "react-icons/md";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaDocker,
  FaPython,
  FaJava
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPrisma,
  SiMariadb,
  SiMysql
} from "react-icons/si";
import TagCloud from "@/components/ui/TagCloud";
 
// ... inside component
const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "ReactJS", icon: <FaReact className="h-8 w-8 text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="h-8 w-8" /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="h-8 w-8 text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="h-8 w-8 text-[#3178C6]" /> },
      { name: "HTML5", icon: <FaHtml5 className="h-8 w-8 text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="h-8 w-8 text-[#1572B6]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="h-8 w-8 text-[#06B6D4]" /> },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="h-8 w-8 text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="h-8 w-8 text-slate-200" /> },
      { name: "Python", icon: <FaPython className="h-8 w-8 text-[#3776AB]" /> },
      { name: "Java", icon: <FaJava className="h-8 w-8 text-[#f89820]" /> },
      { name: "MongoDB", icon: <SiMongodb className="h-8 w-8 text-[#47A248]" /> },
      { name: "Prisma", icon: <SiPrisma className="h-8 w-8 text-teal-200" /> },
      { name: "MariaDB", icon: <SiMariadb className="h-10 w-10 text-cyan-200" /> },
      { name: "MySQL", icon: <SiMysql className="h-10 w-10 text-[#06B6D4]" /> },
    ]
  },
  {
    title: "Tools & Methodologies",
    skills: [
      { name: "Git", icon: <FaGitAlt className="h-8 w-8 text-[#F05032]" /> },
      { name: "RESTful APIs", icon: <TbApi className="h-10 w-10 text-blue-200" /> },
      { name: "Responsive Design", icon: <MdOutlineImportantDevices className="h-8 w-8 text-rose-400" /> },
      { name: "Figma", icon: <FaFigma className="h-8 w-8 text-[#F24E1E]" /> },
      { name: "Docker", icon: <FaDocker className="h-8 w-8 text-sky-400" /> },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
};

export default function SkillsSection() {
  const allSkills = skillCategories.flatMap(cat => cat.skills);

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-gray-950 overflow-hidden min-h-screen flex flex-col justify-center">
       
      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="My Skills" subtitle="Technologies & Expertise" />

        <div className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Leftside: 3D Cloud */}
          <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1 perspective-1000">
             <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                <TagCloud 
                  className="text-slate-300 pointer-events-none"
                  radius={180} // adjusted radius
                >
                  {allSkills.map((skill, i) => (
                    <div key={i} className="flex flex-col items-center gap-1 bg-slate-900/80 backdrop-blur-sm p-2 rounded-lg border border-slate-700/50 shadow-lg">
                       <div className="w-8 h-8 flex items-center justify-center">{skill.icon}</div>
                       <span className="text-[10px] font-semibold">{skill.name}</span>
                    </div>
                  ))}
                </TagCloud>
             </div>
          </div>

          {/* Rightside: Categories Grid (Compact) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="w-full lg:w-1/2 grid grid-cols-1 gap-6 order-1 lg:order-2"
          >
             {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-slate-900"
              >
                <h3 className="mb-4 text-lg font-bold text-slate-100 border-b border-slate-800 pb-2">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 bg-slate-800/50 rounded-full px-3 py-1.5 text-xs text-slate-300 border border-slate-700/50 hover:bg-slate-700 transition-colors">
                      {/* Enforce small icon size in pills using [&>svg]:!w-full [&>svg]:!h-full */}
                      <div className="w-4 h-4 shrink-0 [&>svg]:!w-full [&>svg]:!h-full">{skill.icon}</div>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
