import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handlePointerMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY, visible: true });
    };

    const handlePointerLeave = () => setCursor((current) => ({ ...current, visible: false }));

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  const cursorStyle = useMemo(
    () => ({ left: cursor.x, top: cursor.y, opacity: cursor.visible ? 1 : 0 }),
    [cursor]
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-premiumBlack text-white">
      <ScrollToTop />
      <div className="pointer-events-none absolute inset-0 bg-premium-radial opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />
      <motion.div
        className="pointer-events-none fixed z-50 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-olive/10 blur-3xl lg:block"
        animate={cursorStyle}
        transition={{ type: 'spring', stiffness: 80, damping: 18, mass: 0.2 }}
      />

      <AnimatePresence mode="wait">
        {isLoading ? <Loader key="loader" /> : null}
      </AnimatePresence>

      {!isLoading ? (
        <Routes>
          <Route
            path="/"
            element={
              <div className="relative">
                <Navbar />
                <Home />
                <Footer />
              </div>
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      ) : null}
    </div>
  );
}