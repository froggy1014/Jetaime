export const springUp = (delay: number) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const slideIn = (
  direction: 'left' | 'up' | 'right' | 'down',
  type: 'spring' | 'tween',
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const fadeIn = (
  type: 'spring' | 'tween',
  delay: number,
  duration: number
) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
});

export const modalSlideUp = {
  hidden: {
    y: '100%',
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 0.5,
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    y: '100%',
    opacity: 0,
  },
};
