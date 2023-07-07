'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { springUp } from '@src/utils/motion';
import InfiniteSlide from '../common/InfiniteSlider';

const Story = () => {
  return (
    <motion.section
      id='story'
      className='bg-amber-200 flex h-screen w-full snap-center snap-always flex-col justify-center gap-6'
      initial='hidden'
      whileInView='show'
    >
      <div>
        <motion.h1
          variants={springUp(0.5)}
          className='w-full py-[20px] text-center text-3xl font-bold text-primary'
        >
          Our Story
        </motion.h1>
        <motion.p
          variants={springUp(0.5)}
          className='px-4 leading-5 text-primary'
        >
          Lorem ipsum dolor sit amet consectetur. Egestas diam et malesuada
          lacus lacus lacus integer arcu facilisi donec. Dolor bibendum tortor
          risus vestibulum aliquet. Diam tincidunt ipsum natoque eget feugiat
          mauris. Non lectus lacus in accumsan imperdiet rutrum dolor orci. Sed
          placerat placerat duis nisl vel cras.
        </motion.p>
      </div>

      <div>
        <InfiniteSlide dir />
        <InfiniteSlide />
      </div>
    </motion.section>
  );
};

export default Story;
