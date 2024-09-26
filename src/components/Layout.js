import React from 'react';
import HeaderIcon from './HeaderIcon';
import { Navlink } from '../components';

const Layout = (props) => {
  return (
    <div className='lg:px-24 md:px-12 px-7'>
      <nav className='flex lg:flex-row md:flex-row flex-col justify-between py-5'>
        <ul></ul>
        {/* Link */}
        <ul className='flex lg:justify-center'>
          <Navlink href={'/'}>about me</Navlink>
          <Navlink href={'/projects'}>my projects</Navlink>
          <Navlink href={'/skills'}>my skills</Navlink>
          <Navlink href={'/contact'}>contact me</Navlink>
        </ul>

        {/* Icon */}
        <ul className='lg:text-3xl text-sm flex flex-row items-center lg:mt-0 md:mt-0 mt-3'>
          <HeaderIcon
            link={'https://www.linkedin.com/in/amrinaas/'}
            icon={'bi:linkedin'}
          />
          <HeaderIcon
            link={'https://github.com/amrinaas'}
            icon={'mdi:github'}
          />
          <HeaderIcon
            link={'https://www.instagram.com/amrinaas/'}
            icon={'mdi:instagram'}
          />
          <HeaderIcon
            link={'https://x.com/amrinaas'}
            icon={'pajamas:twitter'}
          />
        </ul>
      </nav>

      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
