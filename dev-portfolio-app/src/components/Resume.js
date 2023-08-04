import React from 'react';
import ResumePDF from '../assets/Joshua Bott Resume-2.pdf';
function Resume() {
  return (
    <div className='bg-slate-600 py-24 px-8'>
      <h1 className='text-4xl sm:text-7xl font-bold text-white'>Resume</h1>
      <br></br>
      <p className='text-white'>
        <a className="text-black underline"href={ResumePDF} download>
        Click here to download my resume
        </a>
      </p>
      <br></br>
      <h2 className='text-3xl sm:text-6xl text-white'>My Proficiencies</h2>
      <br></br>
      <ul className='text-white'>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>SiTailwindcss</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Handlebars</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}

export default Resume;