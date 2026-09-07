export const transitionEase = {
  type: 'spring',
  damping: 26,
  stiffness: 110,
  mass: 0.85,
};

export const smoothEase = [0.22, 1, 0.36, 1];

// 1. Hero: LEFT -> CENTER
export const heroVariants = {
  hidden: { opacity: 0, x: -70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: smoothEase,
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const heroChildVariants = {
  hidden: { opacity: 0, x: -45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: smoothEase },
  },
};

// 2. Stats: RIGHT -> CENTER
export const statsVariants = {
  hidden: { opacity: 0, x: 70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: smoothEase,
      delay: 0.18,
      staggerChildren: 0.09,
      delayChildren: 0.22,
    },
  },
};

export const statsChildVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: smoothEase },
  },
};

// 3. Filters: LEFT -> CENTER
export const filtersVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
      delay: 0.3,
    },
  },
};

// 4. Cards: Alternating LEFT (even) / RIGHT (odd)
export const getAlternatingCardVariant = (index) => {
  const isEven = index % 2 === 0;
  return {
    hidden: {
      opacity: 0,
      x: isEven ? -55 : 55,
      y: 25,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.65,
        ease: smoothEase,
        delay: 0.08 * (index % 3),
      },
    },
  };
};

export const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.38,
    },
  },
};

// 5. CTA: RIGHT -> CENTER
export const ctaVariants = {
  hidden: { opacity: 0, x: 65, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: smoothEase,
      delay: 0.1,
    },
  },
};

// 6. Footer: LEFT -> CENTER
export const footerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};

// Ambient floating orbs animation
export const floatingGlowVariants = {
  animate: {
    x: [0, 25, -20, 0],
    y: [0, -20, 15, 0],
    scale: [1, 1.08, 0.95, 1],
    transition: {
      duration: 14,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};
