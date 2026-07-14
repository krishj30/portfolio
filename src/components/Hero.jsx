import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMapPin } from 'react-icons/fi';
import { stats } from '../data/portfolioData';

const floatingVariants = {
  animate: (delay) => ({
    y: [0, -18, 0],
    x: [0, 10, 0],
    transition: {
      duration: 7 + delay,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-28">
      <div className="premium-container relative z-10 grid items-center gap-12 pb-20 lg:grid-cols-[1.2fr_0.8fr] lg:pb-28">
        <div className="relative max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="section-label"
          >
            <span className="h-2 w-2 rounded-full bg-olive shadow-glow" />
            Open for premium freelance work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="heading-glow mt-6 text-5xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Crafting premium digital products for the next generation of AI-first experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl"
          >
            I am a Full Stack & AI Developer from Mumbai, India, building refined web and mobile products with React, React Native, FastAPI, Python, MongoDB, Firebase, and intelligent integrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#projects" className="premium-button-primary">
              View Projects <FiArrowRight />
            </a>
          <a
  href="/resume.pdf"
  download="Krish_Jethva_Resume.pdf"
  className="premium-button-secondary"
>
  Download Resume <FiDownload />
</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/55"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <FiMapPin className="text-olive" /> Mumbai, India
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              Building smooth, AI-powered interfaces
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-[36px] bg-olive/20 blur-3xl" />
          <div className="glass-card relative overflow-hidden rounded-[32px] p-5 sm:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(122,158,75,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_34%)]" />

            <div className="relative grid min-h-[520px] place-items-center overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d10] p-6">
              <motion.div
                custom={0}
                variants={floatingVariants}
                animate="animate"
                className="absolute left-8 top-10 h-28 w-28 rounded-full bg-olive/30 blur-2xl"
              />
              <motion.div
                custom={0.6}
                variants={floatingVariants}
                animate="animate"
                className="absolute right-8 top-20 h-24 w-24 rounded-full bg-white/10 blur-2xl"
              />
              <motion.div
                custom={1.2}
                variants={floatingVariants}
                animate="animate"
                className="absolute bottom-12 left-16 h-32 w-32 rounded-full bg-olive/15 blur-2xl"
              />

              <div className="relative z-10 flex w-full max-w-sm flex-col items-center rounded-[28px] border border-white/10 bg-white/[0.045] px-6 py-8 text-center shadow-premium backdrop-blur-2xl">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-olive/30 bg-gradient-to-br from-olive/25 to-white/5 text-4xl font-extrabold text-white shadow-glow">
                  KJ
                </div>
                <p className="mt-6 text-sm uppercase tracking-[0.34em] text-white/40">Full Stack & AI Developer</p>
                <h2 className="mt-3 text-2xl font-bold text-white">Krish Jethva</h2>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  Building refined products that feel fast, thoughtful, and ready for modern users.
                </p>

                <div className="mt-6 grid w-full grid-cols-3 gap-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4">
                      <p className="text-xl font-bold text-white">{stat.value}</p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-white/40">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}