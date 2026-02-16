"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  floating,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";
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
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-pink-300 dark:bg-pink-600 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, -100, 100, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          }}
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
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.span
                className="inline-block text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👋 Welcome to my portfolio
              </motion.span>

              <motion.h1
                className="text-6xl sm:text-7xl font-bold text-slate-900 dark:text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Hi, I'm{" "}
                <span className="bg-linear-to-r from-indigo-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                  Emmy
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-slate-600 dark:text-slate-300"
                variants={itemVariants}
              >
                Full Stack Developer & Creative Problem Solver
              </motion.p>

              <motion.p
                className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed"
                variants={itemVariants}
              >
                I craft beautiful, performant web experiences that solve
                real-world problems. Specializing in modern web technologies and
                user-centric design.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                className="group px-8 py-4 bg-linear-to-r from-indigo-600 to-pink-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              {[
                { icon: Github, label: "GitHub", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Mail, label: "Email", href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Floating Elements */}
          <motion.div
            className="relative h-full min-h-96 hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {/* Floating cards */}
            <motion.div
              className="absolute top-10 right-10 w-64 h-40 bg-linear-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white"
              variants={floating}
              animate="animate"
            >
              <div className="text-4xl font-bold">50+</div>
              <div className="text-sm opacity-90">Projects Completed</div>
            </motion.div>

            <motion.div
              className="absolute bottom-32 right-20 w-56 h-32 bg-linear-to-br from-pink-500 to-rose-600 rounded-2xl shadow-lg p-6 text-white"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-3xl font-bold">5+ Years</div>
              <div className="text-sm opacity-90">Experience</div>
            </motion.div>

            <motion.div
              className="absolute bottom-10 left-10 w-72 h-36 bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white"
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm opacity-90">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-slate-400 dark:bg-slate-600 rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
