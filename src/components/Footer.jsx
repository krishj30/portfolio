import { motion } from 'framer-motion';
import { navigationItems } from '../data/portfolioData';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-white/10 bg-black/20"
    >
      <div className="premium-container py-10 sm:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">Krish Jethva</p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-white/55">
              Full Stack & AI Developer building premium digital products with a focus on clarity, motion, and real-world usefulness.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {navigationItems.map((item) => (
              <a key={item.label} href={item.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 transition-colors duration-300 hover:bg-white/8">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Krish Jethva. All rights reserved.</p>
         
        </div>
      </div>
    </motion.footer>
  );
}