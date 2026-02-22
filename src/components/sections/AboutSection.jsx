import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, MapPin } from "lucide-react";
import { Images } from "@/lib/images";
import TiltedCard from "@/components/ui/TiltedCard";

const AboutMeSection = () => {
  // Add this helper function above the component
const getExperience = () => {
  const startDate = new Date(2024, 4); 
  const now = new Date();

  const totalMonths =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());

  const years = (totalMonths / 12).toFixed(1);

  return `${years}+ Years`;
};
  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 bg-gray-950 text-white overflow-hidden min-h-screen flex items-center"
    >
      <div className="container relative z-10 mx-auto px-4 w-full">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative group"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-primary/30 via-secondary/20 to-purple-600/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

            <div className="relative flex items-center justify-center">
              <TiltedCard
                imageSrc={Images.profile}
                altText="Rushikesh Chandavale"
                captionText="Software Engineer"
                containerHeight="500px"
                containerWidth="100%"
                imageHeight="500px"
                imageWidth="100%"
                rotateAmplitude={10}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-4"
          >
            {/* Intro Card */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 sm:p-6 hover:border-primary/50 transition-colors duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                About <span className="text-primary">Me</span>
              </h2>

              <div className="space-y-4 text-slate-300">
                <p className="leading-relaxed">
                  Hi, I'm{" "}
                  <span className="text-white font-semibold">
                    Rushikesh Chandavale
                  </span>
                  , a Frontend Developer with {getExperience()} of experience building
                  enterprise-grade and AI-powered web applications.
                </p>

                <p className="leading-relaxed">
                  I specialize in React, TypeScript, and Next.js, focusing on
                  scalable architecture, real-time systems, and performance
                  optimization. I’ve led frontend development for AI video
                  platforms, RFID-based tracking systems, and professional
                  networking applications.
                </p>

                <p className="leading-relaxed">
                  I care deeply about clean code, maintainability, and building
                  products that solve real business problems — not just
                  interfaces that look good.
                </p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <p className="text-sm text-slate-400 mb-1">Experience</p><p className="text-xl font-bold text-white">{getExperience()}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <p className="text-sm text-slate-400 mb-1">Projects</p>
                  <p className="text-xl font-bold text-white">8+ Built</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <p className="text-sm text-slate-400 mb-1">Specialization</p>
                  <p className="text-xl font-bold text-white">Enterprise</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <p className="text-sm text-slate-400 mb-1">Location</p>
                  <p className="text-xl font-bold text-white">Pune, India</p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 hover:border-primary/50 transition-colors duration-300">
              <h4 className="text-base font-semibold text-white mb-3">
                Let's Connect
              </h4>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4 text-primary" />
                  <a
                    href="mailto:rushichandavale@gmail.com"
                    className="text-sm group-hover:underline"
                  >
                    rushichandavale@gmail.com
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