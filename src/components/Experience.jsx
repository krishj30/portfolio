import { motion } from 'framer-motion';
import { experienceTimeline } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 lg:py-28">
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="section-label">Experience</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">A timeline shaped by shipping products, not just studying them.</h2>
          <p className="mt-4 text-lg leading-8 text-white/68">
            The focus is on real product progress: building, iterating, and refining systems that combine strong UX with reliable implementation.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card rounded-[30px] p-6 sm:p-8"
          >
            <div className="relative space-y-6 before:absolute before:left-5 before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-gradient-to-b before:from-olive/60 before:to-white/10">
              {experienceTimeline.map((item) => (
                <article key={item.title} className="relative pl-14">
                  <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-olive/25 bg-olive/10 text-xs font-bold text-olive shadow-glow">
                    {item.period}
                  </span>
                  <div className="rounded-[26px] border border-white/10 bg-white/[0.035] p-5">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/66">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card rounded-[30px] p-6 sm:p-8"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">Delivery mindset</p>
            <div className="mt-5 space-y-4">
              {[
                'Smooth motion that supports the product, not decoration for its own sake.',
                'Responsive layouts that feel equally deliberate on desktop, tablet, and mobile.',
                'Scalable component structure with reusable UI patterns.',
                'Clear hierarchy, subtle depth, and premium contrast throughout.',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-white/68">
                  {item}
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}