import { textContainer, textVariant2 } from '@src/utils/motion';
import { motion } from 'framer-motion';

export const TypingText = ({ title }: { title: string }) => (
  <motion.p
    variants={textContainer}
    className=' mb-4 w-full text-center text-primary'
  >
    {Array.from(title).map((letter, index) => {
      return (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      );
    })}
  </motion.p>
);
