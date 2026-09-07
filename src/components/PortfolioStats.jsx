import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { statistics } from '../data/projects';

function Counter({ targetValue, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, {
    damping: 28,
    stiffness: 75,
    duration: 1.6,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionVal.set(targetValue);
    }
  }, [isInView, targetValue, motionVal]);

  useEffect(() => {
    const unsubscribe = springVal.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return () => unsubscribe();
  }, [springVal]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export default function PortfolioStats() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-40px' });

  return (
    <section className="py-4 sm:py-6 md:py-8 max-w-6xl mx-auto px-4 sm:px-6 overflow-hidden relative z-10">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, x: 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 bg-white/75 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-blue-100/80 shadow-lg shadow-blue-950/5 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-sky-50/20 pointer-events-none" />

        {statistics.map((stat, idx) => (
          <motion.div
            key={stat.id || idx}
            whileHover={{ y: -3, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className={`relative z-10 flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-white/90 hover:shadow-xs group ${
              idx !== statistics.length - 1
                ? 'md:border-r md:border-slate-200/50'
                : ''
            }`}
          >
            {/* Professional Metallic Gold Color Numbers */}
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 mb-1 leading-none tracking-tight drop-shadow-xs">
              <Counter
                targetValue={stat.value}
                prefix={stat.prefix || ''}
                suffix={stat.suffix || ''}
              />
            </div>
            <p className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-500 uppercase leading-tight group-hover:text-amber-700 transition-colors">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}