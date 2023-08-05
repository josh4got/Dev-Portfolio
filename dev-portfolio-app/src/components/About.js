import React from 'react';
import { SiJavascript, SiReact, SiMongodb, SiTailwindcss, SiBootstrap } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import Portrait from '../assets/Portrait.jpg';

const About = () => {
  const iconSize = '2rem';

  return (
    <div id='about' className='w-full bg-slate-600 py-24'>

    
      <div className='max-w-[1000px] mx-auto px-8 py-24 flex flex-col md:flex-row md:items-center justify-center'>

        {/* Portrait Image (Displayed on Mobile) */}
        <div className='sm:hidden mb-8'>
          <img
            src={Portrait}
            alt='Portrait'
            className='w-48 h-48 object-cover rounded-full border-4 border-white mx-auto'
          />
        </div>

        {/* Introduction */}
        <div className='md:w-1/2'>
          <h1 className='text-4xl sm:text-7xl text-black font-bold'>Joshua Bott</h1>
          <h2 className='text-3xl sm:text-6xl text-white'>Innovative Web Developer</h2>
          <p className='text-xl text-white max-w-[700px] py-5'>
            Full stack web developer with a passion for creating innovative solutions to complex problems.
            I have a background in sales and service, and am excited to use my skills to help businesses grow and thrive.
          </p>
        </div>

        {/* Portrait Image (Displayed on Larger Screens) */}
        <div className='hidden sm:block sm:w-1/2'>
          <img
            src={Portrait}
            alt='Portrait'
            className='w-72 h-72 object-cover rounded-full border-4 border-white mx-auto'
          />
        </div>
      </div>

      {/* Tech Stack */}
      <div className='hidden sm:block max-w-[1000px] mx-auto py-5'>
        <h1 className='text-2xl text-white text-center mb-3'>Tech I Know:</h1>
        <ul className='flex gap-2 items-center justify-center'>
          <li className='flex flex-col items-center cursor-default'>
            <SiJavascript size={iconSize} />
            <span>JavaScript</span>
          </li>
          <li className='flex flex-col items-center cursor-default'>
            <SiReact size={iconSize} />
            <span>React</span>
          </li>
          <li className='flex flex-col items-center cursor-default'>
            <FaNodeJs size={iconSize} />
            <span>Node.js</span>
          </li>
          <li className='flex flex-col items-center cursor-default'>
            <SiMongodb size={iconSize} />
            <span>MongoDb</span>
          </li>
          <li className='flex flex-col items-center cursor-default'>
            <SiTailwindcss size={iconSize} />
            <span>Tailwind CSS</span>
          </li>
          <li className='flex flex-col items-center cursor-default'>
            <SiBootstrap size={iconSize} />
            <span>Bootstrap</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;