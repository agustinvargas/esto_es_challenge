import React from 'react';

const AddIcon = ({ w = '10', h = '11', color = 'white' }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.86914 4.37305H9.83398V6.08203H5.86914V10.5742H4.05273V6.08203H0.0878906V4.37305H4.05273V0.222656H5.86914V4.37305Z'
        fill={color}
      />
    </svg>
  );
};

export default AddIcon;
