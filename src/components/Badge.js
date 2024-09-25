import React from 'react';

const Badge = ({ text }) => {
  return (
    <span className='bg-blue-100/80 text-cyan-800 text-base me-2 px-1 mt-1 rounded-md'>
      {text}
    </span>
  );
};

export default Badge;
