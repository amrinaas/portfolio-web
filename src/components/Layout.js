import React from 'react';
import HeaderIcon from './HeaderIcon';
import { Navlink } from '../components';

const Layout = (props) => {
  return (
    <div className='font-vt bg-black/90 min-h-screen text-white  lg:px-24 md:px-12 px-7'>
      <nav className='flex flex-row justify-between py-5'>
        <ul></ul>

        {/* Link */}
        <ul className='flex justify-center lg:text-2xl text-lg'>
          <Navlink href={'/'}>about me</Navlink>
          <Navlink href={'/projects'}>my projects</Navlink>
          <Navlink href={'/skills'}>my skills</Navlink>
          <Navlink href={'/contact'}>contact me</Navlink>
        </ul>

        {/* Icon */}
        <ul className='lg:text-3xl text-lg flex flex-row items-center'>
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
