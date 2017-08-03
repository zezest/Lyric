import React from 'react';

const Icon = ({ name, width, height, color }) => {
  switch (name) {
    case 'x':
      return <svg width={width} height={height} style={{fill:`${color}`}} viewBox="0 0 18 18"><path d="M15.61,13.72L9.89,8l5.72-5.72A1.33,1.33,0,1,0,13.72.39L8,6.12,2.27,0.39A1.33,1.33,0,1,0,.39,2.28L6.11,8,0.39,13.73a1.33,1.33,0,0,0,1.88,1.88L8,9.89l5.72,5.72a1.33,1.33,0,0,0,1.89-1.89h0Z" /></svg>

    case 'squareX':
      return <svg width={width} height={height} style={{fill:`${color}`}} viewBox="0 0 26 26"><path d="M19,3H7C4.8,3,3,4.8,3,7v12c0,2.2,1.8,4,4,4h12c2.2,0,4-1.8,4-4V7C23,4.8,21.2,3,19,3z M17.9,16.5l-1.4,1.4L13,14.4 l-3.5,3.5l-1.4-1.4l3.5-3.5L8.1,9.5l1.4-1.4l3.5,3.5l3.5-3.5l1.4,1.4L14.4,13L17.9,16.5z"></path></svg>

    default:
      return null;
  }
}

export default Icon;