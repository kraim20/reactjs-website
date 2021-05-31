import React from 'react';
import Features from './components/Features';
import Header from './components/Header';
import Services from './components/Services';
import Subscribe from './components/Subscribe';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
       <Header/>
          <div className="f-heading">
            <h1>Features</h1>
            <p>Here are some features of this Software</p>
          </div>
       <Features/>
       <Services/>
       <Subscribe/>
       <Contact/>
    </div>
  );
}

export default App;
