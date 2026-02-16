"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2 });

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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "ferdstep7@gmail.com",
      href: "mailto:ferdstep7@gmail.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/ferdinard-stephen-2891a020b",
      href: "https://www.linkedin.com/in/ferdinard-stephen-2891a020b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/ferdy777",
      href: "https://github.com/ferdy777",
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
          <motion.div variants={itemVariants} className="mb-4 text-center">
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

          {/* Centered Contact Content */}
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto text-center space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Get in Touch
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto">
                I am always interested in hearing about new projects and
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
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className="flex items-center justify-between gap-4 p-5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="p-3 rounded-lg bg-linear-to-br from-indigo-600 to-pink-600 text-white"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <div className="text-left">
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          {method.title}
                        </div>
                        <div className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors break-all">
                          {method.value}
                        </div>
                      </div>
                    </div>

                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
