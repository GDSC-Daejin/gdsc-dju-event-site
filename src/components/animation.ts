export const pageTransitionAnimate = {
  start: {
    opacity: 0,
    scale: 0.98,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
  out: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.3,
    },
  },
};
export const pageAnimate = {
  type: 'tween',
  ease: 'anticipate',
};
