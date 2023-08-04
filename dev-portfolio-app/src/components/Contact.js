import React from 'react';
import { FiMail } from 'react-icons/fi';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Contact = () => {
    const iconSizeMobile = '2rem';
    const iconSizeDesktop = '3rem';

    return (
        <div id='contact' name='contact' className='w-full bg-slate-600'>
            <div className='max-w-[1000px] mx-auto px-8 flex justify-center items-center py-5'>
                <h1 className='text-4xl sm:text-7xl text-white font-bold'>Contact</h1>
                <ul className='flex gap-3 px-10'>
                    <a href="mailto:joshbottied1@gmail.com">
                        <FiMail size={iconSizeMobile} className='sm:hidden' />
                        <FiMail size={iconSizeDesktop} className='hidden sm:block' />
                    </a>
                    <a href="https://github.com/josh4got">
                        <SiGithub size={iconSizeMobile} className='sm:hidden' />
                        <SiGithub size={iconSizeDesktop} className='hidden sm:block' />
                    </a>
                    <a href="https://linkedin.com/in/joshua-bott-39a597190">
                        <SiLinkedin size={iconSizeMobile} className='sm:hidden' />
                        <SiLinkedin size={iconSizeDesktop} className='hidden sm:block' />
                    </a>
                </ul>
            </div>
        </div>
    )
};

export default Contact;