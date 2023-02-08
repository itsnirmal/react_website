import Home from './components/Home';
import './App.css';
import Preloader from './components/Preloader';
import React, { useState, useEffect } from 'react';


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
  }, [])


  return (
    <>
    <div className="App">
    {loading === false ? (
      
            <Home />
      
    ) : (
      <Preloader />
        )}
    </div>
      
    </>
  );
}

export default App;
