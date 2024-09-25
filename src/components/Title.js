import React from 'react';

const Title = ({ title }) => {
  return (
    <div className='mb-5'>
      <h1 className='uppercase text-5xl'>
        <span className='text-rose-700'>&lt; </span>
        {title}
        <span className='text-rose-700'> /&gt;</span>
      </h1>
    </div>
  );
};

export default Title;
