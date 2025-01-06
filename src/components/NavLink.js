import React from 'react';

const NavLink = ({ href, children, isActive }) => {
  return (
    <a 
      href={href} 
      className={`relative text-gray-300 hover:text-white transition-colors duration-200 py-1
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full 
        after:transition-transform after:duration-200
        ${isActive 
          ? 'text-white after:bg-emerald-500 after:scale-x-100' 
          : 'after:bg-emerald-500 after:scale-x-0 hover:after:scale-x-100'
        }`}
    >
      {children}
    </a>
  );
};

export default NavLink;