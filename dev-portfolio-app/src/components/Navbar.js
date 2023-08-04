import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => setShowMenu(!showMenu);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-600 text-white">
      <div>
      </div>

{/* Menu */}
<div className='hidden md:flex ml-auto'>
  <ul className='flex gap-3'>
    <li className='hover:text-[#046E8F]'><a href="#home">Home</a></li>
    <li className='hover:text-[#046E8F]'><a href="#projects">Projects</a></li>
    <li className='hover:text-[#046E8F]'><a href="#about">About</a></li>
    <li className='hover:text-[#046E8F]'><a href="#contact">Contact</a></li>
  </ul>
</div>

      {/* Menu Icon */}
      <div onClick={handleClick} className='md:hidden z-10 ml-auto'>
        {!showMenu ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faXmark} size='1x'/>}
      </div>

      {/* Mobile Menu */}
      <div>
        <ul className={!showMenu ? 'hidden' : 'absolute top-0 right-0 w-full h-screen bg-slate-600 flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl hover:text-[#046E8F]'><a href="#home" onClick={handleClick}>Home</a></li>
          <li className='py-6 text-4xl hover:text-[#046E8F]'><a href="#about" onClick={handleClick}>About Me</a></li>
          <li className='py-6 text-4xl hover:text-[#046E8F]'><a href="#projects" onClick={handleClick}>Projects</a></li>
          <li className='py-6 text-4xl hover:text-[#046E8F]'><a href="#contact" onClick={handleClick}>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
