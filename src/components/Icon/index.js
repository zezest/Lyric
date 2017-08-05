import React from 'react';

const Icon = ({ name, width, height, color }) => {
  switch (name) {
    case 'x':
      return <svg width={width} height={height} style={{fill:`${color}`}} viewBox="0 0 18 18"><path d="M15.61,13.72L9.89,8l5.72-5.72A1.33,1.33,0,1,0,13.72.39L8,6.12,2.27,0.39A1.33,1.33,0,1,0,.39,2.28L6.11,8,0.39,13.73a1.33,1.33,0,0,0,1.88,1.88L8,9.89l5.72,5.72a1.33,1.33,0,0,0,1.89-1.89h0Z" /></svg>

    case 'squareX':
      return <svg width={width} height={height} style={{fill:`${color}`}} viewBox="0 0 26 26"><path d="M19,3H7C4.8,3,3,4.8,3,7v12c0,2.2,1.8,4,4,4h12c2.2,0,4-1.8,4-4V7C23,4.8,21.2,3,19,3z M17.9,16.5l-1.4,1.4L13,14.4 l-3.5,3.5l-1.4-1.4l3.5-3.5L8.1,9.5l1.4-1.4l3.5,3.5l3.5-3.5l1.4,1.4L14.4,13L17.9,16.5z"></path></svg>

    case 'arrow>':
      return <svg width={width} height={height} style={{fill:`${color}`}} viewBox="0 0 26 26"><path d="M16.7,22.7l9-9c0.2-0.2,0.3-0.5,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7l-9-9C16.5,3.1,16.3,3,16,3s-0.5,0.1-0.7,0.3l-1.4,1.4  c-0.4,0.4-0.4,1,0,1.4l4,4c0.3,0.3,0.1,0.9-0.4,0.9H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h16.6c0.4,0,0.7,0.5,0.4,0.9l-4,4  c-0.4,0.4-0.4,1,0,1.4l1.4,1.4c0.2,0.2,0.4,0.3,0.7,0.3C16.3,23,16.5,22.9,16.7,22.7z"/></svg>
    
    case 'handle':
      return <svg width={width} height={height} style={{fill:`${color}`}} viewBox="0 0 512 512"><g><rect height="32" width="512" y="144"/><rect height="32" width="512" y="240"/><rect height="32" width="512" y="336"/></g></svg>

    case 'bin':
      return <svg width={width} height={height} style={{fill:`${color}`}} viewBox="0 0 408.483 408.483"><path d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z"/><path d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z"/></svg>

    default:
      return null;
  }
}

export default Icon;