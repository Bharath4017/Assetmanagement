import React from 'react';
import './model.css'

export default function Model({closeModel}) {
  return (
    <div className='modelBackground'>
        <div className='modelContainer'>
          <div className='titleCloseBtn'>
            <button onClick={()=>closeModel(false)}>X</button>
          </div>
          <div className='title'> 
            <h1>This is model box</h1>
          </div>
          <div className='body'>
              <p>Assets Details</p>
          </div>
        </div>
    </div>
  );
}
