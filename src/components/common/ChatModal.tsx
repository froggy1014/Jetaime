import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, modalSlideUp, springUp } from '@src/utils/motion';
import Logo from '@public/svg/Logo.svg';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatModal = ({ open, setOpen }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <div className='relative h-full w-full'>
          <motion.div
            className='absolute left-0 top-0 h-full w-full bg-black bg-opacity-50'
            initial='hidden'
            whileInView='show'
            exit='exit'
            variants={fadeIn('tween', 0, 0.2)}
            onClick={() => setOpen(!open)}
          />
          <motion.div
            className='absolute bottom-0 z-10 h-[90%] w-full rounded-t-[40px] bg-white'
            initial='hidden'
            animate='show'
            exit='exit'
            variants={modalSlideUp}
          >
            <div className='flex w-full justify-center py-4'>
              <div className='h-1 w-1/5 rounded-2xl bg-gray-400' />
            </div>
            <motion.div
              initial='hidden'
              animate='show'
              variants={springUp(1)}
              className='my-4 flex w-full justify-center'
            >
              <Logo />
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ChatModal;
