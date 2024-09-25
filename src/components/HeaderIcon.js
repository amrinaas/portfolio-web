import React from 'react';
import { Icon } from '@iconify/react';

const HeaderIcon = ({ link, icon }) => {
  return (
    <li className='mx-2 hover:-translate-y-1.5 hover:transition-transform hover:text-cyan-700'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <Icon icon={icon} />
      </a>
    </li>
  );
};

export default HeaderIcon;
