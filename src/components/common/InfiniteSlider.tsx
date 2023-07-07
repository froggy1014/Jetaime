import Image from 'next/image';
import 'swiper/swiper-bundle.css';

interface Props {
  dir?: boolean;
}

const InfiniteSlide = ({ dir = false }: Props) => {
  return (
    <div className='relative m-auto h-[220px] w-auto overflow-hidden'>
      <div
        className={`flex w-[calc(340px*8)] gap-4 ${
          dir ? 'animate-rightslide' : 'animate-leftslide'
        }`}
      >
        <div className='h-[220px] w-[324px]'>
          <Image
            className='rounded-2xl'
            src='/image/dummy1.webp'
            alt='dummy1'
            width={324}
            height={220}
          />
        </div>
        <div className='h-[220px] w-[324px]'>
          <Image
            className='rounded-2xl'
            src='/image/dummy2.webp'
            alt='dummy2'
            width={324}
            height={220}
          />
        </div>
        <div className='h-[220px] w-[324px]'>
          <Image
            className='rounded-2xl'
            src='/image/dummy3.webp'
            alt='dummy3'
            width={324}
            height={220}
          />
        </div>
        <div className='h-[220px] w-[324px]'>
          <Image
            className='rounded-2xl'
            src='/image/dummy4.webp'
            alt='dummy4'
            width={324}
            height={220}
          />
        </div>
        <div className='h-[220px] w-[324px]'>
          <Image
            className='rounded-2xl'
            src='/image/dummy1.webp'
            alt='dummy1'
            width={324}
            height={220}
          />
        </div>
        <div className='h-[220px] w-[324px]'>
          <Image
            className='rounded-2xl'
            src='/image/dummy2.webp'
            alt='dummy2'
            width={324}
            height={220}
          />
        </div>
        <div className='h-[220px] w-[324px]'>
          <Image
            className='rounded-2xl'
            src='/image/dummy3.webp'
            alt='dummy3'
            width={324}
            height={220}
          />
        </div>
        <div className='h-[220px] w-[324px]'>
          <Image
            className='rounded-2xl'
            src='/image/dummy4.webp'
            alt='dummy4'
            width={324}
            height={220}
          />
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlide;
