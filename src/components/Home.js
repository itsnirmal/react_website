import React from 'react';
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <a href='https://github.com/itsnirmal' target= "_blank" rel="noreferrer noopener">Visit my Github</a>  
        <Typewriter
                options= {{ 
                              delay: 130,
                              cursor: '_',
                        }}
                onInit={(typewriter)=> {
                      typewriter.typeString("Hello! I am Nirmal. This is my website (underdevelopment).").pauseFor(8500).start();
                  
                      
                }}
        />
      </header>
     
    </div>
  )
}

export default Home