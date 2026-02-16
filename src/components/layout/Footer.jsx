"use client";

import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { IoChevronUpCircleSharp } from "react-icons/io5";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link
              to="#home"
               className="text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-secondary
              bg-clip-text text-transparent"
            >
              Rushikesh
            </Link>
            <p className="mt-4 text-gray-400">
              Passionate about creating dynamic websites and applications with modern frontend technology.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {
                [
                  "Home",
                  "About",
                  "Goals",
                  "Experiences",
                  "Projects",
                  "Skills",
                  "Testimonials",
                  "Contact"
                ]
                  .map((item) => (
                    <li key={ item }>
                      <a
                        href={ `#${item.toLowerCase()}` }
                        className="text-gray-600 hover:text-blue-400 transition-colors"
                      >
                        { item }
                      </a>
                    </li>
                  )) }
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {
                [
                  "Frontend Development",
                  "Full-Stack Solutions",
                  "AI Integration",
                ].map((item) => (
                  <li key={ item }>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-400 transition-colors"
                    >
                      { item }
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 hover:text-blue-400 transition-colors">
                <Mail className="h-4 w-4 mr-2" /> rushichandavale@gmail.com
              </li>
              <li className="flex items-center text-gray-600 hover:text-blue-400 transition-colors">
                <Github className="h-4 w-4 mr-2" /> github.com/rushichandavale
              </li>
              <li className="flex items-center text-gray-600 hover:text-blue-400 transition-colors">
                <Linkedin className="h-4 w-4 mr-2" /> linkedin.com/in/rushikesh-chandavale
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-md">
              Designed & Built by Rushikesh Chandavale. © { new Date().getFullYear() } All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-20 right-4 z-40 flex flex-col space-y-2">
        <a
          href="https://github.com/rushichandavale"
          rel="noopener noreferrer"
          target="_blank"
          className="p-2 bg-gray-800 rounded-full shadow-lg hover:bg-primary/30 transition-colors"
          aria-label="Github Profile"
        >
          <Github className="h-5 w-5 text-gray-300" />
        </a>
        <a
          href="https://linkedin.com/in/rushikesh-chandavale/"
          rel="noopener noreferrer"
          target="_blank"
          className="p-2 bg-gray-800 rounded-full shadow-lg hover:bg-cyan-500/30 transition-colors"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="h-5 w-5 text-gray-300" />
        </a>
        <a
          href="mailto:rushichandavale@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          className="p-2 bg-gray-800 rounded-full shadow-lg hover:bg-cyan-500/30 transition-colors"
          aria-label="Send Email"
        >
          <Mail className="h-5 w-5 text-gray-300" />
        </a>
      </div>

      {/* Scroll to Top Button */ }
      <motion.button
        onClick={ scrollToTop }
        aria-label="Scroll to top"
        className="fixed bottom-6 right-4 z-50 p-1 rounded-full bg-gradient-to-r
        from-primary via-purple-500 to-secondary text-white hover:bg-primary
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50
        transition-all duration-300 shadow-lg"
        whileHover={ { scale: 1.1, rotate: 360 } }
        whileTap={ { scale: 0.95 } }
        initial={ { scale: 0, opacity: 0 } }
        animate={ { scale: 1, opacity: 1 } }
        exit={ { scale: 0, opacity: 0 } }
        transition={ { type: "spring", stiffness: 260, damping: 20, rotate: { duration: 0.7 } } }
      >
        <IoChevronUpCircleSharp size={ 30 } />
      </motion.button>
    </footer>
  )
}
