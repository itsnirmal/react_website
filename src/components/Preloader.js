import React from 'react';
import ReactLoading from 'react-loading';

function Preloader() {
  return (
    <div className = "loading">
      <ReactLoading type='bars' color = "white"
          height = { 100 } width = { 100 }
      />
    </div>
  )
}

export default Preloader