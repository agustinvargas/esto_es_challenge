import React from 'react';

const MenuOpenIcon = ({ w = '4', h = '18', color = 'black' }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM2 14C0.9 14 0 14.9 0 16C0 17.1 0.9 18 2 18C3.1 18 4 17.1 4 16C4 14.9 3.1 14 2 14ZM2 7C0.9 7 0 7.9 0 9C0 10.1 0.9 11 2 11C3.1 11 4 10.1 4 9C4 7.9 3.1 7 2 7Z'
        fill={color}
        fill-opacity='0.85'
      />
    </svg>
  );
};

export default MenuOpenIcon;
