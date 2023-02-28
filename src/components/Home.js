import React from 'react';
import Typewriter from "typewriter-effect";


function Home() {
  return (
    <div>
      <header className="App-header">
        
        <a href='https://github.com/itsnirmal' target= "_blank" rel="noreferrer noopener">Visit my Github</a>  
        <Typewriter
                options= {{ 
                              delay: 130,
                              cursor: '_',
                        }}
                onInit={(typewriter)=> {
                      typewriter.typeString("Welcome to my portfolio website!").pauseFor(8500).start();
                  
                      
                }}
        />
      </header>
     
    </div>
  )
}

export default Home