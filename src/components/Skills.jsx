import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import { skillGroups } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 lg:py-28">
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="section-label">Skills</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">A complete stack for modern product experiences.</h2>
          <p className="mt-4 text-lg leading-8 text-white/68">
            From interface design to backend APIs and AI integrations, I work across the full product surface to deliver cohesive systems.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-[28px] p-6 transition-transform duration-300"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                <span className="rounded-full border border-olive/20 bg-olive/8 px-3 py-1 text-xs uppercase tracking-[0.26em] text-olive">
                  {group.items.length}
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {group.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/74">
                    <FiChevronRight className="text-olive" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}