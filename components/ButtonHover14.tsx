import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonHover14Props {
  label: string;
  icon?: React.ElementType;
  href?: string;
}

const ButtonHover14: React.FC<ButtonHover14Props> = ({ label, icon: Icon = ArrowRight, href }) => {
  const buttonContent = (
    <button className='group cursor-pointer slide-anime px-5 py-3 rounded-full w-[180px] bg-white text-black border border-gray-300 hover:bg-gray-100 dark:bg-white dark:text-black flex justify-between items-center font-semibold transition-colors duration-300'>
      {label}
      <div className='group-hover:translate-x-2 transition-all'>
        <Icon />
      </div>
    </button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }
  return buttonContent;
};

export default ButtonHover14; 