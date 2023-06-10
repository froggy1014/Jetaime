'use client';

import React from 'react';
import ChevronDown from '@public/svg/chevronDown.svg';
import Logo from '@public/svg/Logo.svg';
import CategoryButton from '@src/components/common/CategoryButton';
// import Image from 'next/image';

const Main = () => {
  return (
    <section className='scroll relative h-full w-full	snap-center snap-always bg-background'>
      <div className='absolute top-[30%] flex h-auto w-full flex-col items-center justify-center gap-4'>
        <div className='mb-4'>
          <Logo />
        </div>
        <div className='flex justify-center gap-4'>
          <CategoryButton label='Menu' />
          <CategoryButton label='About Us' />
        </div>
        <div className='flex justify-center gap-4'>
          <CategoryButton label='Story' />
        </div>
      </div>

      <div className='absolute bottom-0 left-1/2 -translate-x-1/2'>
        <ChevronDown className='animate-bounce' />
      </div>
    </section>
  );
};

export default Main;
