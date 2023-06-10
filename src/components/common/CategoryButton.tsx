import { springUp } from '@src/utils/motion';
import { motion } from 'framer-motion';

interface Props {
  label: string;
}

const CategoryButton = ({ label }: Props) => {
  return (
    <motion.div
      variants={springUp(1.1)}
      className='relative flex h-11 w-24 items-center justify-center bg-secondary text-lg text-primary'
    >
      {label}
      <div className='absolute left-0 top-1/2 h-5 w-5 translate-x-[-50%] translate-y-[-50%] rounded-full bg-background' />
      <div className='absolute right-0 top-1/2 h-5 w-5 translate-x-[50%] translate-y-[-50%] rounded-full bg-background' />
    </motion.div>
  );
};

export default CategoryButton;
