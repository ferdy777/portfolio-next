"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-indigo-300 dark:bg-indigo-600 rounded-full opacity-20 blur-3xl"
          animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-pink-300 dark:bg-pink-600 rounded-full opacity-20 blur-3xl"
          animate={{ x: [0, -100, 100, 0], y: [0, 50, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.span
                className="inline-block text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-1 rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👋 Welcome to my portfolio
              </motion.span>

              <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                Hi, I am{" "}
                <span className="bg-linear-to-r from-indigo-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                  Ferdinard Stephen
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-slate-600 dark:text-slate-300 font-medium"
                variants={itemVariants}
              >
                Frontend Developer
              </motion.p>

              <motion.p
                className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl"
                variants={itemVariants}
              >
                I build modern, responsive, and high-performance web
                applications using React, Next.js, and TypeScript. Passionate
                about clean code, scalable architecture, and creating seamless
                user experiences that deliver real business value.
              </motion.p>
            </motion.div>

            {/* CTA Button (Now Links to GitHub) */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="https://github.com/ferdy777"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-indigo-500/40 transition-all w-fit"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Professional Stats */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="absolute -top-12 right-10 w-64 h-40 bg-linear-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm opacity-90">Projects Built</div>
            </motion.div>

            <motion.div
              className="absolute bottom-50 right-20 w-56 h-32 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl shadow-lg p-6 text-white"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              <div className="text-3xl font-bold">3+ Years</div>
              <div className="text-sm opacity-90">Experience</div>
            </motion.div>

            <motion.div
              className="absolute bottom-10 left-10 w-72 h-36 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="text-3xl font-bold">Modern Stack</div>
              <div className="text-sm opacity-90">
                React • Next.js • TypeScript
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
