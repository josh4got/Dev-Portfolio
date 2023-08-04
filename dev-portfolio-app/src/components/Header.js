import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = ({ activePage, setActivePage }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => setShowMenu(!showMenu);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#046E8F] text-white">
      <div></div>

      {/* Menu */}
      <div className='hidden md:flex ml-auto'>
        <ul className='flex gap-3'>
          <li className={activePage === 'About' ? 'text-black' : 'text-white hover:text-black'} onClick={() => setActivePage('About')}>
            <a href="#about">About</a>
          </li>
          <li className={activePage === 'Projects' ? 'text-black' : 'text-white hover:text-black'} onClick={() => setActivePage('Projects')}>
            <a href="#projects">Projects</a>
          </li>
          <li className={activePage === 'Resume' ? 'text-black' : 'text-white hover:text-black'} onClick={() => setActivePage('Resume')}>
            <a href="#resume">Resume</a>
          </li>
          <li className={activePage === 'Contact' ? 'text-black' : 'text-white hover:text-black'} onClick={() => setActivePage('Contact')}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Menu Icon */}
      <div onClick={handleClick} className='md:hidden z-10 ml-auto'>
        {!showMenu ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} size='1x' />}
      </div>

      {/* Mobile Menu */}
      <div>
        <ul className={!showMenu ? 'hidden' : 'absolute top-0 right-0 w-full h-screen bg-slate-600 flex flex-col justify-center items-center'}>
          <li className={activePage === 'About' ? 'text-black py-6 text-4xl' : 'text-white py-6 text-4xl hover:text-black'} onClick={() => setActivePage('About')}>
            <a href="#about" onClick={handleClick}>About Me</a>
          </li>
          <li className={activePage === 'Projects' ? 'text-black py-6 text-4xl' : 'text-white py-6 text-4xl hover:text-black'} onClick={() => setActivePage('Projects')}>
            <a href="#projects" onClick={handleClick}>Projects</a>
          </li>
          <li className='py-6 text-4xl hover:text-black' onClick={() => setActivePage('Resume')}>
            <a href="#resume" onClick={handleClick}>Resume</a>
          </li>
          <li className={activePage === 'Contact' ? 'text-black py-6 text-4xl' : 'text-white py-6 text-4xl hover:text-black'} onClick={() => setActivePage('Contact')}>
            <a href="#contact" onClick={handleClick}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
