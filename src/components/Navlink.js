import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlink = ({ href, children }) => {
  const getStyle = ({ isActive }) =>
    [
      'lg:px-5 px-3 border-2 border-solid border-white py-2 cursor-pointer',
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
