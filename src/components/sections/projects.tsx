"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, Code2 } from "lucide-react";

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

  const projects = [
    {
      title: "Skuulnex – Multi-Tenant School Management Platform",
      description:
        "Built a scalable multi-tenant school management platform enabling onboarding and management of multiple school tenants within a single application. Implemented authentication flows and reusable UI systems.",
      link: "#",
      tags: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "API Integration",
      ],
    },
    {
      title: "Utility Hub Website",
      description:
        "Developed the services page UI for Utility Hub, a Nigerian utility bill payment platform. Built responsive interfaces using Next.js and TypeScript while collaborating closely with backend teams.",
      link: "https://utilityhub.ng/",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Context API"],
    },
    {
      title: "Eglobal ICT Hub Website",
      description:
        "Contributed to the official website of Eglobal ICT Hub, delivering responsive and pixel-perfect UI components aligned with Figma designs.",
      link: "https://eglobalicthub.com/",
      tags: ["Next.js", "React", "TypeScript", "Responsive Design"],
    },
    {
      title: "School Institution Management Platform",
      description:
        "Developed a responsive school management platform with portals for teachers, students, parents, and admins. Implemented robust form validation and global state management.",
      link: "#",
      tags: ["React", "TypeScript", "Formik", "Yup", "Context API"],
    },
    {
      title: "Real Estate Listing Web App",
      description:
        "Collaborated in building a real estate listing platform. Developed profile and about pages, integrated APIs for dynamic property data, and implemented scalable state management.",
      link: "#",
      tags: ["Next.js", "TypeScript", "Context API", "API Integration"],
    },
    {
      title: "Netflix Clone",
      description:
        "Built a Netflix-inspired movie streaming platform integrating the TMDB API for real-time movie data, dynamic routing, and modern UI interactions.",
      link: "https://neflix-clone-zqks.onrender.com",
      tags: ["React", "API Integration", "JavaScript", "Responsive UI"],
    },
  ];

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
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                Projects
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full" />
          </motion.div>

          {/* Grid */}
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
                whileHover={{ y: -10 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
