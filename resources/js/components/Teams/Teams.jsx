import React from 'react';
import { teams } from './data.jsx';

function Teams() {
    console.log(teams)
  return (
    <div>
        <img src={teams[0].src} />
    </div>
  )
}

export default Teams