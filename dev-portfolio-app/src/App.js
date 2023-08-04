import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
<Header />
<About />
<Projects />
<ContactForm />
<Footer />
    </div>
  );
}

export default App;
