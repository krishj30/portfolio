import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMessageCircle, FiDownload } from 'react-icons/fi';
import { contactLinks } from '../data/portfolioData';

const contactIcons = [FiMail, FiGithub, FiLinkedin, FiMessageCircle];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="section-label">Contact</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">Let&apos;s build something sharp, useful, and memorable.</h2>
          <p className="mt-4 text-lg leading-8 text-white/68">
            Reach out for collaborations, freelance work, or product conversations. I&apos;m especially interested in AI-driven web and mobile experiences.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card rounded-[30px] p-6 sm:p-8"
          >
            <div className="rounded-[28px] border border-olive/20 bg-olive/8 p-6">
              <p className="text-xs uppercase tracking-[0.32em] text-olive">Available for work</p>
              <h3 className="mt-3 text-2xl font-bold text-white">Open to select freelance and collaboration opportunities.</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">
                If you need a polished website, a mobile product, a backend API, or AI integrations, I can help design and ship the solution.
              </p>
              <a href="/resume.pdf" className="premium-button-primary mt-6 w-full sm:w-auto">
                Download Resume <FiDownload />
              </a>
            </div>

            <div className="mt-6 space-y-3">
              {contactLinks.map((item, index) => {
                const Icon = contactIcons[index];

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.06] text-olive">
                        <Icon size={18} />
                      </span>
                      <div>
                        <p className="text-sm text-white/40">{item.label}</p>
                        <p className="text-sm font-medium text-white">{item.value}</p>
                      </div>
                    </div>
                    <span className="text-xs uppercase tracking-[0.24em] text-white/35">Open</span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card rounded-[30px] p-6 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.3em] text-white/40">What you get</p>
              <span className="rounded-full border border-olive/20 bg-olive/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-olive">
                Premium delivery
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                'Responsive and elegant UI systems',
                'Modern Framer Motion interactions',
                'Scalable React component architecture',
                'Clean API integration and data flow',
                'Optimized mobile-first experience',
                'Polished handoff and maintainability',
              ].map((item) => (
                <div key={item} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-white/68">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm text-white/55">Navigation</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72 transition-colors duration-300 hover:bg-white/[0.08]">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}