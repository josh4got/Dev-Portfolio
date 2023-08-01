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
        <img src="placeholder" alt="Logo" style={{width: '50px'}}/>
      </div>

      {/* Menu */}
      <div className='hidden md:flex ml-auto'>
        <ul className='flex gap-3'>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Menu Icon */}
      <div onClick={handleClick} className='md:hidden z-10 ml-auto'>
        {!showMenu ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faXmark} size='1x'/>}
      </div>

      {/* Mobile Menu */}
      <div>
        <ul className={!showMenu ? 'hidden' : 'absolute top-0 right-0 w-full h-screen bg-slate-600 flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About Me</li>
          <li className='py-6 text-4xl'>Projects</li>
          <li className='py-6 text-4xl'>Contact</li>
        </ul>
      </div>
  </div>
  );
};

export default Navbar;
