"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiSend, FiLoader, FiCheckCircle, FiAlertTriangle } from "react-icons/fi";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef(null);
  const [ formState, setFormState ] = useState({ status: "idle", message: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ status: "loading", message: null });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || 
        serviceId.includes("your_") || templateId.includes("your_") || publicKey.includes("your_")) {
       setFormState({
        status: "error",
        message: "EmailJS is not configured. Please set API keys in the .env file.",
      });
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      setFormState({
        status: "success",
        message: "Your message has been sent successfully!"
      });
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormState({
        status: "error",
        message: "Failed to send message. Please try again later."
      });
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3 }
    }),
  };

  const inputBaseClasses =
    "block w-full px-4 py-2.5 rounded-lg shadow-sm text-white bg-slate-800/50 border border-slate-700 placeholder-slate-500 text-sm sm:text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50";

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-5 sm:space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
    >
      <motion.div variants={inputVariants} custom={0}>
        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
          Full Name <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          name="user_name"
          id="name"
          required
          className={inputBaseClasses}
          placeholder="Your Name"
        />
      </motion.div>

      <motion.div variants={inputVariants} custom={1}>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
          Email Address <span className="text-primary">*</span>
        </label>
        <input
          type="email"
          name="user_email"
          id="email"
          required
          className={inputBaseClasses}
          placeholder="your.email@example.com"
        />
      </motion.div>

      <motion.div variants={inputVariants} custom={2}>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1.5">
          Subject <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          className={inputBaseClasses}
          placeholder="Project Inquiry"
        />
      </motion.div>

      <motion.div variants={inputVariants} custom={3}>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={inputBaseClasses}
          placeholder="Your detailed message here..."
        ></textarea>
      </motion.div>

      <motion.div variants={inputVariants} custom={4}>
        <button
          type="submit"
          disabled={formState.status === "loading"}
          className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-lg text-base font-semibold text-white
          bg-gradient-to-r from-primary to-secondary
          hover:shadow-primary/30 hover:scale-[1.02]
          disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
        >
          {formState.status === "loading" ? (
            <FiLoader className="animate-spin -ml-1 mr-3 h-5 w-5" />
          ) : (
            <FiSend className="-ml-1 mr-2.5 h-5 w-5" />
          )}
          {formState.status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </motion.div>

      {formState.message && (
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           className={`mt-4 p-4 rounded-lg flex items-start gap-3 text-sm border ${
             formState.status === "success" 
               ? "bg-green-500/10 border-green-500/20 text-green-400" 
               : "bg-red-500/10 border-red-500/20 text-red-400"
           }`}
        >
           {formState.status === "success" ? (
             <FiCheckCircle className="h-5 w-5 mt-0.5 shrink-0" />
           ) : (
             <FiAlertTriangle className="h-5 w-5 mt-0.5 shrink-0" />
           )}
           <span>{formState.message}</span>
        </motion.div>
      )}
    </motion.form>
  );
}
