import React from 'react';
import { SiJavascript, SiReact, SiMongodb, SiTailwindcss, SiBootstrap } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';

const Home = () => {
    const iconSize = '2rem';

    return (
        <div id='home' name='home' className='w-full bg-slate-600'>
            {/* Profile Img */}
            
            {/* About Me */}
            <div className='max-w-[1000px] mx-auto px-8 py-24 flex flex-col justify-center'>
                <h1 className='text-4xl sm:text-7xl text-white font-bold'>Joshua Bott</h1>
                <h2 className='text-3xl sm:text-6xl text-white'>Innovative Web Developer</h2>
                <p className='text-xl text-white max-w-[700px] py-5'>Full stack web developer with a passion for creating innovative solutions to complex problems. I have a background in sales and service, and am excited to use my skills to help businesses grow and thrive.</p>
                {/* Tech Stack */}
                <div className='md:flex items-center hidden py-5'>
                    <h1 className='text-2xl'>Tech I Know:</h1>
                    <ul className='flex gap-2 items-center py-5'>
                        <li className='flex flex-col items-center'>
                            <SiJavascript size={iconSize} />
                            <span>JavaScript</span>
                        </li>
                        <li className='flex flex-col items-center'>
                            <SiReact size={iconSize} />
                            <span>React</span>
                        </li>
                        <li className='flex flex-col items-center'>
                            <FaNodeJs size={iconSize} />
                            <span>Node.js</span>
                        </li>
                        <li className='flex flex-col items-center'>
                            <SiMongodb size={iconSize} />
                            <span>MongoDb</span>
                        </li>
                        <li className='flex flex-col items-center'>
                            <SiTailwindcss size={iconSize} />
                            <span>Tailwind CSS</span>
                        </li>
                        <li className='flex flex-col items-center'>
                            <SiBootstrap size={iconSize} />
                            <span>Bootstrap</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;