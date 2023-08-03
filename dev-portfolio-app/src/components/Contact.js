import React from 'react';
import { FiMail } from 'react-icons/fi';
import { SiGithub, SiLinkedin } from 'react-icons/si';
const Contact = () => {
    const iconSize = '2rem';
    return (
        <div name='contact' className='w-full bg-slate-600'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center'>
            <h1 className='text-4xl sm:text-7xl text-white font-bold'>Contact Me</h1>
            <ul className='flex gap-3 py-5'>
            <FiMail size={iconSize} />
            <SiGithub size={iconSize} />
            <SiLinkedin size={iconSize} />
            </ul>
            </div>
        </div>
    )
};

export default Contact;