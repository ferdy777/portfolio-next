import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: portfolioData.skills.languages,
      color: "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200",
    },
    {
      title: "Frontend",
      skills: portfolioData.skills.frontend,
      color:
        "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-200",
    },
    {
      title: "Backend",
      skills: portfolioData.skills.backend,
      color:
        "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200",
    },
    {
      title: "DevOps & Tools",
      skills: [...portfolioData.skills.devops, ...portfolioData.skills.tools],
      color:
        "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className={`${category.color} font-medium`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        {/* {portfolioData.certifications.length > 0 && (
          <div className="mt-16 rounded-lg border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
              Certifications
            </h3>
            <ul className="space-y-3">
              {portfolioData.certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-3">
                  <span className="text-xl">🏆</span>
                  <span className="text-zinc-700 dark:text-zinc-300">
                    {cert}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </div>
    </section>
  );
}
