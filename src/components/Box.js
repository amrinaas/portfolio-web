import React from 'react';

const Box = ({ logo, title }) => {
  return (
    <div className='flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 border-2 border-white m-5 px-3 py-5 cursor-pointer hover:shadow-cyan-500/40	shadow-lg hover:-translate-y-1.5 hover:transition-transform'>
      <p className='text-4xl'>{logo}</p>
      <p className='capitalize text-xl'>{title}</p>
    </div>
  );
};

export default Box;
