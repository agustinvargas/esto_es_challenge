import React from 'react';

const BackArrowIcon = ({ w = '16', h = '16', color = 'black' }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.828 6.99998H16V8.99998H3.828L9.192 14.364L7.778 15.778L0 7.99998L7.778 0.221985L9.192 1.63598L3.828 6.99998Z'
        fill={color}
        fillOpacity='0.65'
      />
    </svg>
  );
};

export default BackArrowIcon;
