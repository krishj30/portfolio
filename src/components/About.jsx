import { motion } from 'framer-motion';
import { FiAward, FiCompass, FiLayers } from 'react-icons/fi';
import { aboutPoints } from '../data/portfolioData';

const highlights = [
  { icon: FiLayers, title: 'Product-first building', text: 'Thoughtful flows, clean visuals, and scalable structure.' },
  { icon: FiCompass, title: 'AI integrations', text: 'Meaningful use of Gemini, OpenAI, and intelligent workflows.' },
  { icon: FiAward, title: 'Modern stack', text: 'React, React Native, FastAPI, Python, MongoDB, Firebase.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="section-label">About</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A developer who blends design discipline with AI-powered execution.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/68">
            I&apos;m a Full Stack Developer passionate about building AI-powered Web & Mobile Applications. I specialize in React, React Native, FastAPI, Python, MongoDB, Firebase and AI integrations, and I enjoy turning complex problems into polished experiences that people want to use.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card rounded-[30px] p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-olive/12 text-olive">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/58">{item.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 space-y-4">
              {aboutPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-olive shadow-glow" />
                  <p className="text-sm leading-7 text-white/70">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card rounded-[30px] p-6 sm:p-8"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">Current Education</p>
            <div className="mt-5 rounded-[28px] border border-olive/25 bg-olive/8 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-olive">MSc.IT</p>
              <h3 className="mt-3 text-2xl font-bold text-white">Somaiya School of Science & Applied</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">
                Formal study paired with hands-on product building helps me design systems that are practical, modern, and production-friendly.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-3xl font-extrabold text-white">Mumbai</p>
                <p className="mt-2 text-sm text-white/55">Located in Mumbai, India and available for remote collaborations.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-3xl font-extrabold text-white">AI</p>
                <p className="mt-2 text-sm text-white/55">Focused on building intelligent, user-friendly products that feel premium.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}