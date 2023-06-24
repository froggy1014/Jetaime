import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ title, type = 'button', ...props }: Props) => {
  return (
    <button
      type={type}
      {...props}
      className='mx-4 h-14 w-11/12 rounded-md border-[1px] border-primary bg-background px-4 py-2 text-primary'
    >
      {title}
    </button>
  );
};

export default Button;
