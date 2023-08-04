import React from "react";

const About = () => {
    return (
        <div id='about' name='about' className='w-full bg-slate-600'>
            {/* About Me */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center py-5 text-white'>
                <h1 className='text-4xl sm:text-7xl text-white font-bold'>About Me</h1>
                <p className ='py-5'>
                I'm a full-stack web developer
                with a keen eye for detail and an unwavering commitment to excellence, 
                I harness my problem-solving aptitude and technical know-how to create seamless 
                user experiences and optimize website performance.
                </p>
                <p className ='py-5 hidden md:flex'>
                My proficiency in effective communication 
                allows me to collaborate seamlessly with cross-functional teams, ensuring tangible outcomes 
                and surpassing expectations.
                I'm open to embracing new opportunities and exploring fresh horizons where I can 
                contribute my expertise and passion for creating digital solutions. If you're looking for a 
                dynamic collaborator to make a real impact, let's connect and bring visions to life!
                </p>
            </div>
        </div>
    )
};

export default About;