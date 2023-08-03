import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
<Navbar />
<Home />
<Projects />
<About />
<Contact />
    </div>
  );
}

export default App;
