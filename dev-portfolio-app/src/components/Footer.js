import React from 'react';
import { FiMail } from 'react-icons/fi';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Footer = () => {
    const iconSizeMobile = '2rem';
    const iconSizeDesktop = '3rem';

    return (
        <div id='Footer' className='w-full bg-[#046E8F]'>
            <div className='max-w-[1000px] mx-auto px-8 flex justify-center items-center py-5'>
                <ul className='flex gap-10 px-10'>
                    <a href="mailto:joshbottied1@gmail.com">
                        <FiMail size={iconSizeMobile} className='sm:hidden' />
                        <FiMail size={iconSizeDesktop} className='hidden sm:block' />
                    </a>
                    <a href="https://github.com/josh4got">
                        <SiGithub size={iconSizeMobile} className='sm:hidden' />
                        <SiGithub size={iconSizeDesktop} className='hidden sm:block' />
                    </a>
                    <a href="https://www.linkedin.com/in/joshua-bott-39a597190/">
                        <SiLinkedin size={iconSizeMobile} className='sm:hidden' />
                        <SiLinkedin size={iconSizeDesktop} className='hidden sm:block' />
                    </a>
                </ul>
            </div>
        </div>
    )
};

export default Footer;