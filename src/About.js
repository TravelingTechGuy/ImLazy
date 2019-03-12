import React from 'react';

export default props => (
  <div>
    <h1 className='Header'>About</h1>
    <p>About page</p>
    <p style={props.style}>{props.text}</p>
  </div>
);