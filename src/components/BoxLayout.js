import React from 'react';
import { Icon } from '@iconify/react';
import { Box } from '.';

const BoxLayout = ({ title, boxes }) => {
  return (
    <div className='text-center mb-8'>
      <h1 className='text-3xl mb-3 underline'>{title}</h1>
      <div className='text-3xl flex flex-wrap justify-center'>
        {boxes.map((box, i) => (
          <Box key={i} logo={<Icon icon={box.logo} />} title={box.title} />
        ))}
      </div>
    </div>
  );
};

export default BoxLayout;
