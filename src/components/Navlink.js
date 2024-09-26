import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlink = ({ href, children }) => {
  const getStyle = ({ isActive }) =>
    [
      'lg:px-5 md:px-3 px-2 lg:text-xl md:text-md text-sm border-2 border-solid border-white lg:py-2 py-1 cursor-pointer',
      isActive ? 'text-black bg-white' : '',
    ].join(' ');

  return (
    <div>
      <NavLink to={href}>
        {({ isActive }) => (
          <li className={getStyle({ isActive })}>{children}</li>
        )}
      </NavLink>
    </div>
  );
};

export default Navlink;
