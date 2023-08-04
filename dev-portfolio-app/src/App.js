import React, {useState} from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';

function App() {
  const [activePage, setActivePage] = useState('About');

  const renderPage = () => {
    switch (activePage) {
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <ContactForm />;
      default:
        return <About />;
    }
  };

  return (
    <div className='app'>
      <Header activePage={activePage} setActivePage={setActivePage} />
      <div>
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
