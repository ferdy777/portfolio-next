"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Skills() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const skillCategories = [
    {
      name: "Core Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "TypeScript",
        "React.js",
        "Next.js",
      ],
    },
    {
      name: "State & Data Management",
      skills: [
        "Context API",
        "Zustand",
        "React Query",
        "Formik",
        "Yup Validation",
        "REST API Integration",
      ],
    },
    {
      name: "UI, Styling & Workflow",
      skills: [
        "Tailwind CSS",
        "Responsive Design",
        "Framer Motion",
        "Git & GitHub",
        "Figma Collaboration",
        "Performance Optimization",
      ],
    },
  ];

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
              Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                Expertise
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                variants={categoryVariants}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -6 }}
              >
                {/* Category Title */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {category.name}
                </h3>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      variants={skillVariants}
                      className="px-4 py-2 text-sm font-medium rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800 hover:scale-105 transition-transform"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
