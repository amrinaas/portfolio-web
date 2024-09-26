import React from 'react';

const Title = ({ title }) => {
  return (
    <div className='lg:mb-5 mb-2 lg:mt-0 mt-1'>
      <h1 className='uppercase underline decoration-2 lg:text-5xl text-3xl'>
        <span className='text-rose-700'>&lt; </span>
        {title}
        <span className='text-rose-700'> /&gt;</span>
      </h1>
    </div>
  );
};

export default Title;
