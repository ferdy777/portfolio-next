"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@example.com",
      href: "mailto:contact@example.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/emmy",
      href: "#",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/emmy",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-pink-600">
                Connect
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Have a project in mind? Let's work together to bring your ideas to
              life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left Side - Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Get in Touch
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  I'm always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, feel free to reach out!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={index}
                      href={method.href}
                      variants={itemVariants}
                      className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                      whileHover={{ x: 10 }}
                    >
                      <motion.div
                        className="p-3 rounded-lg bg-linear-to-br from-indigo-600 to-pink-600 text-white"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          {method.title}
                        </div>
                        <div className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {method.value}
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                    placeholder="Emmy"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Your Email
                  </label>
                  <motion.input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Message
                  </label>
                  <motion.textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all resize-none"
                    placeholder="Tell me about your project..."
                    rows={5}
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-4 px-6 bg-linear-to-r from-indigo-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {submitted ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center justify-center gap-2"
                    >
                      ✓ Message Sent!
                    </motion.span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
