"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/config/portfolio";

export function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1 });

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-pink-600">
                Projects
              </span>
            </h2>
            <div className="h-1 w-20 bg-linear-to-r from-indigo-600 to-pink-600 rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-slate-200 dark:bg-slate-700">
                  <motion.div
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex gap-3">
                        <motion.a
                          href={project.github}
                          className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href={project.link}
                          className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Accent Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-indigo-600 to-pink-600"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.button
              className="px-8 py-4 bg-linear-to-r from-indigo-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
