import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/50"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            My journey in the tech industry
          </p>
        </div>

        <div className="space-y-8">
          {portfolioData.experience.map((job, index) => (
            <Card
              key={index}
              className="border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black/50 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                      {job.title}
                    </h3>
                    <p className="mt-1 text-lg text-zinc-600 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <Badge variant="secondary" className="whitespace-nowrap">
                    {job.period}
                  </Badge>
                </div>

                <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                  {job.description}
                </p>

                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white mb-3">
                    Key Achievements:
                  </p>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400"
                      >
                        <span className="mt-1 text-base">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Education */}
        {portfolioData.education.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">
              Education
            </h3>
            <div className="space-y-4">
              {portfolioData.education.map((edu, index) => (
                <Card
                  key={index}
                  className="border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-black/50"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                        {edu.institution}
                      </p>
                      {edu.details && (
                        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
                          {edu.details}
                        </p>
                      )}
                    </div>
                    <Badge variant="outline">{edu.year}</Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
