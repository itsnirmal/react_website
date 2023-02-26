import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Project from './components/projects';
import Home from './components/Home';
import Preloader from './components/Preloader';
import NavigationBar from './components/NavigationBar';
import './App.css';





function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
  }, [])


  return (
    <>
    <div className="App">
    {loading === false ? (
              <Router>
                <NavigationBar />
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/projects" element={<Project />} />
                </Routes>
              </Router>     
      
    ) : (
      <Preloader />
        )}
    </div>
      
    </>
  );
}

export default App;
