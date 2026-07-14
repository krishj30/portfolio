import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { navigationItems } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40"
    >
      <div
        className={`premium-container pt-4 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-2xl' : ''
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-6 ${
            isScrolled
              ? 'glass-card border-white/10 bg-[#09090B]/80 shadow-premium'
              : 'border-white/10 bg-white/[0.03]'
          }`}
        >
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-olive/25 bg-olive/10 text-sm font-bold text-olive shadow-glow transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
              KJ
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Krish Jethva</p>
              <p className="text-xs text-white/50">Full Stack & AI Developer</p>
            </div>
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-white/72 transition-all duration-300 hover:bg-white/6 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="#contact" className="premium-button-secondary">
              Let&apos;s Talk
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-transform duration-300 hover:scale-105 lg:hidden"
          >
            {isMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-xl lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="premium-container pt-24"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="glass-card rounded-[28px] p-5">
                <div className="space-y-2">
                  {navigationItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-white/85 transition-colors duration-300 hover:bg-white/[0.08]"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-white/40">01</span>
                    </a>
                  ))}
                </div>

                <a href="#contact" className="premium-button-primary mt-5 w-full" onClick={() => setIsMenuOpen(false)}>
                  Let&apos;s Build
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}