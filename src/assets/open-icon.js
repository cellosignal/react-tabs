import React from 'react';

export default ({ color = '#000000' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11">
    <g fill={color} fill-rule="evenodd" transform="rotate(45 5.5 6.207)">
      <rect width="10.303" height="1.472" y="4.416" transform="rotate(-45 5.152 5.152)" />
      <rect width="10.303" height="1.472" y="4.416" transform="rotate(45 5.152 5.152)" />
    </g>
  </svg>
);

