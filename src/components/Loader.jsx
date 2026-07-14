import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      key="loader-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45 } }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#09090B]"
    >
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-premium">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-2 rounded-full border border-olive/20 border-t-olive"
          />
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
            className="h-4 w-4 rounded-full bg-olive shadow-glow"
          />
        </div>
        <motion.p
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="text-xs uppercase tracking-[0.4em] text-white/45"
        >
          Loading portfolio
        </motion.p>
      </div>
    </motion.div>
  );
}