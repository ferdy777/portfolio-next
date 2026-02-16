"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PORTFOLIO_DATA } from "@/config/portfolio";

export function Skills() {
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-slate-50 dark:bg-slate-900/50"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={categoryVariants} className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              My{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-pink-600">
                Skills
              </span>
            </h2>
            <div className="h-1 w-20 bg-linear-to-r from-indigo-600 to-pink-600 rounded-full" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PORTFOLIO_DATA.skills.categories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                variants={categoryVariants}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Category Title */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                  {category.name}
                </h3>

                {/* Skills */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={skillVariants}
                      className="group"
                    >
                      {/* Skill Name */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {skill}
                        </span>
                        <motion.span
                          className="text-sm font-bold text-indigo-600 dark:text-indigo-400"
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : {}}
                          transition={{ delay: 0.5 + skillIndex * 0.1 }}
                        >
                          {85 + skillIndex * 3}%
                        </motion.span>
                      </div>

                      {/* Skill Bar */}
                      <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-linear-to-r from-indigo-600 to-pink-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={
                            inView ? { width: `${85 + skillIndex * 3}%` } : {}
                          }
                          transition={{
                            duration: 1.5,
                            delay: 0.3 + skillIndex * 0.1,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Category Decoration */}
                <motion.div
                  className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700"
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  style={{ originX: 0 }}
                >
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    Proficiency: Advanced
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={categoryVariants}
            className="mt-16 p-8 bg-linear-to-r from-indigo-50 to-pink-50 dark:from-indigo-900/20 dark:to-pink-900/20 rounded-2xl border border-indigo-200 dark:border-indigo-800"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Learning & Growth
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              I'm continuously learning and staying updated with the latest
              technologies and best practices. Currently exploring AI/ML
              integration and advanced performance optimization techniques.
            </p>
            <div className="flex flex-wrap gap-2">
              {["AI/ML", "WebAssembly", "Rust", "3D Web Technologies"].map(
                (tech, idx) => (
                  <motion.span
                    key={idx}
                    className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-semibold text-indigo-600 dark:text-indigo-400"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ),
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
