"use client";

import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ui/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { Images } from "@/lib/images";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/rushikesh-chandavale/",
    icon: FaLinkedin,
    color: "hover:bg-blue-600",
  },
  {
    name: "GitHub",
    href: "https://github.com/rushichandavale",
    icon: FaGithub,
    color: "hover:bg-gray-700",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/rushichandavale",
    icon: FaTwitter,
    color: "hover:bg-sky-500",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/rushichandavale",
    icon: FaInstagram,
    color: "hover:bg-pink-600",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-gray-950 text-white overflow-hidden">
      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="Get In Touch" subtitle="Let's build something amazing together" />

        <div className="mt-16 max-w-5xl mx-auto">
          {/* Profile Card with Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-12 mb-12"
          >
            <div className="flex flex-col items-center text-center">
              {/* Profile Photo */}
              <div className="relative mb-6 group">
                <div className="absolute -inset-2 bg-gradient-to-br from-primary via-secondary to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
                  <img
                    src={Images.profile}
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">Rushikesh Chandavale</h3>
              <p className="text-lg text-slate-400 mb-6">Software Engineer & Web Developer</p>

              {/* Contact Info */}
              <div className="space-y-6">
              <a
                href="mailto:rushichandavale@gmail.com"
                className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 text-primary transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white font-medium">rushichandavale@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                <div className="p-3 rounded-full bg-secondary/10 group-hover:bg-secondary/20 text-secondary transition-colors">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-white font-medium">Pune City, India</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/rushichandavale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all transform hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/rushikesh-chandavale/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all transform hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com/rushichandavale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all transform hover:scale-110"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
              Send Me a Message
            </h3>
            <p className="text-slate-400 text-center mb-8">
              Have a project in mind? Let's discuss how we can work together.
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
