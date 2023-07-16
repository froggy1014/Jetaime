'use client';

import { springUp } from '@src/utils/motion';
import { motion } from 'framer-motion';
import Script from 'next/script';
import { useEffect, useRef } from 'react';
import Map from './Map';

const Info = () => {
  return (
    <motion.section
      id='info'
      className='bg-amber-200 flex h-screen w-full snap-center snap-always flex-col justify-center gap-6'
      initial='hidden'
      whileInView='show'
    >
      <div>
        <motion.h1
          variants={springUp(0.5)}
          className='w-full py-[20px] text-center text-3xl font-bold text-primary'
        >
          Info
        </motion.h1>
      </div>

      <motion.div variants={springUp(0.8)}>
        <Map />
      </motion.div>
    </motion.section>
  );
};

export default Info;
