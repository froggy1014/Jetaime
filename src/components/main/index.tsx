'use client';

import ChevronDown from '@public/svg/chevronDown.svg';
import Logo from '@public/svg/Logo.svg';
import CategoryButton from '@src/components/common/CategoryButton';
import { springUp } from '@src/utils/motion';
import { motion } from 'framer-motion';
// import Image from 'next/image';

const Main = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='show'
      className='scroll relative h-full w-full	snap-center snap-always bg-background'
    >
      <div className='absolute top-[30%] flex h-auto w-full flex-col items-center justify-center gap-4'>
        <motion.div variants={springUp(0.5)} className='mb-4'>
          <Logo />
        </motion.div>
        <div className='flex justify-center gap-4'>
          <CategoryButton label='Menu' />
          <CategoryButton label='About Us' />
        </div>
        <div className='flex justify-center gap-4'>
          <CategoryButton label='Story' />
        </div>
      </div>

      <motion.div
        variants={springUp(0.5)}
        className='absolute bottom-0 flex w-full justify-center'
      >
        <ChevronDown className='animate-bounce' />
      </motion.div>
    </motion.section>
  );
};

export default Main;
