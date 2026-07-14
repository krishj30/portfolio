import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 lg:py-28">
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="section-label">Projects</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">Selected work built for clarity, usefulness, and premium feel.</h2>
          <p className="mt-4 text-lg leading-8 text-white/68">
            Each project card combines a visual preview, feature breakdown, technology badges, and interactive actions with refined motion.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -12 }}
              className="glass-card group overflow-hidden rounded-[32px]"
            >
              <div className="relative overflow-hidden border-b border-white/10">
                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />
                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80 backdrop-blur-lg">
                  {project.status}
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/65">{project.description}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/70">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/38">Features</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-white/72">
                        <span className="h-2 w-2 rounded-full bg-olive shadow-glow" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href={project.github} className="premium-button-secondary flex-1 justify-center">
                    GitHub <FiGithub />
                  </a>
                </div>

                <div className="mt-5 flex items-center justify-end text-sm text-white/45">
                  Explore details <FiArrowUpRight className="ml-2" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}