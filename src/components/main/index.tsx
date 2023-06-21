'use client';

import ChevronDown from '@public/svg/chevronDown.svg';
import Logo from '@public/svg/Logo.svg';
import { fadeIn, springUp } from '@src/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypingText } from '../common/TypingText';

const Main = () => {
  const tabs = ['Menu', 'Story', 'Info'];
  return (
    <motion.section
      initial='hidden'
      whileInView='show'
      className='scroll relative flex h-full	w-full snap-center snap-always flex-col justify-center gap-6 bg-background px-4'
    >
      <div className='flex h-auto w-full flex-col items-center justify-center gap-4'>
        <motion.div variants={springUp(0.5)} className='mb-4'>
          <Logo />
        </motion.div>
      </div>

      <TypingText title='퓨전 치킨을 선보이는 천안 로컬 맛집' />

      <motion.div variants={fadeIn('tween', 0.7, 0.5)}>
        <Image src='/image/main.png' alt='main' width={500} height={245} />
      </motion.div>

      <div className='flex w-full flex-col justify-between text-primary'>
        <nav className='flex w-full justify-center gap-8 text-2xl'>
          {tabs.map((tab, idx) => (
            <motion.a
              key={tab}
              variants={fadeIn('tween', 0.3 * (idx + 1), 0.5)}
              href={`#${tab.toLowerCase()}`}
              className='decoration-4 underline-offset-8 duration-500 hover:underline'
            >
              {tab}
            </motion.a>
          ))}
        </nav>
      </div>
      <motion.p variants={springUp(0.5)} className='text-center text-primary'>
        Lorem ipsum dolor sit amet consectetur. Egestas diam et malesuada lacus
        integer arcu facilisi donec. Dolor bibendum tortor risus vestibulum
        aliquet. Diam tincidunt ipsum natoque eget feugiat mauris.
      </motion.p>
      <motion.div
        variants={springUp(0.5)}
        className='absolute bottom-0 left-0 flex w-full flex-col items-center justify-center gap-4'
      >
        {/* <motion.button
          type='button'
          className='mx-2 h-10 w-11/12 rounded-full bg-white text-gray-400 shadow-lg'
          variants={slideIn('right', 'spring', 0.5, 1)}
          onClick={() => setOpen(!open)}
        >
          무엇이든 물어보세요.
        </motion.button> */}
        <ChevronDown className='animate-bounce' />
      </motion.div>

      {/* <ChatModal open={open} setOpen={setOpen} /> */}
    </motion.section>
  );
};

export default Main;
