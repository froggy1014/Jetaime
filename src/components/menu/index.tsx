'use client';

import { springUp } from '@src/utils/motion';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { TypingText } from '../common/TypingText';
import Button from '../common/Button';

// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import '../../styles/globals.css';

const Menus = [
  {
    src: '/image/menu.png',
    alt: 'menu',
    title: '치즈파닭',
    description: '풍부한 소스 어쩌구',
  },
  {
    src: '/image/menu.png',
    alt: 'menu',
    title: '치즈파닭',
    description: '풍부한 소스 어쩌구',
  },
  {
    src: '/image/menu.png',
    alt: 'menu',
    title: '치즈파닭',
    description: '풍부한 소스 어쩌구',
  },
  {
    src: '/image/menu.png',
    alt: 'menu',
    title: '치즈파닭',
    description: '풍부한 소스 어쩌구',
  },
  {
    src: '/image/menu.png',
    alt: 'menu',
    title: '치즈파닭',
    description: '풍부한 소스 어쩌구',
  },
];

const Menu = () => {
  return (
    <motion.section
      id='menu'
      initial='hidden'
      whileInView='show'
      className='relative flex min-h-screen w-full snap-center snap-always flex-col items-center justify-around py-2'
    >
      <motion.h1
        variants={springUp(0.5)}
        className='w-full text-center text-2xl'
      >
        Menu
        <TypingText title='쥬뗌의 대표메뉴입니다.' />
      </motion.h1>

      <Swiper
        slidesPerView='auto'
        centeredSlides
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className='h-[400px] w-1/2 bg-background'
      >
        {Menus.map((menu, index) => (
          <SwiperSlide key={menu.src + index} className='flex flex-col'>
            <Image src={menu.src} alt={menu.alt} fill className='rounded-3xl' />
            <div className='px-6 py-2'>
              <div className='flex w-full justify-between'>
                <span>{menu.title}</span>
                <span>19,000원</span>
              </div>
              <p className='flex w-full justify-start'>{menu.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Button title='전체 메뉴 확인하기' className='mt-20' />
    </motion.section>
  );
};

export default Menu;
