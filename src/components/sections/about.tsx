"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";

export function About() {
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

  const highlights = [
    "3+ years of frontend development experience",
    "Strong expertise in React, Next.js, and TypeScript",
    "Experienced in building scalable and modular UI architectures",
    "Passionate about performance optimization and clean code",
  ];

  return (
    <section
      id="about"
      className="py-20 bg-slate-50 dark:bg-slate-900/50"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                Me
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I am a dedicated Frontend Developer with over 3 years of
                experience building modern, responsive, and user-focused web
                applications. I specialize in creating clean and maintainable
                interfaces using React, Next.js, and TypeScript.
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I enjoy transforming complex ideas into intuitive digital
                experiences. My focus is on performance, scalability, and
                writing modular code that aligns with industry best practices.
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Beyond development, I continuously improve my skills by
                exploring new frontend technologies, refining UI systems, and
                contributing to team-based projects.
              </p>
            </motion.div>

            {/* Right Column - Highlights */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Highlights
              </h3>

              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 flex items-center justify-center mt-1"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                  <p className="text-slate-600 dark:text-slate-300 pt-1">
                    {highlight}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-200 dark:border-slate-800"
          >
            {[
              { number: "10+", label: "Projects Built" },
              { number: "3+", label: "Years Experience" },
              { number: "100%", label: "Commitment to Quality" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-slate-600  dark:text-slate-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
