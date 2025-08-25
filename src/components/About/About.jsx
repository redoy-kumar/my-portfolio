import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt'
import profile from '../../assets/education_logo/profile.jpg'

const About = () => {
  return (
    <section
      id='about'
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Redoy Kumar
          </h2>

          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] mb-4 leading-tight'>
            <span className='text-white'>I am a{" "}</span>
            <Typewriter
              words={['Fullstack Developer', 'React Enthusiast', 'JavaScript Lover']}
              loop={0} // 0 = infinite
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>

          {/* About me paragraph */}
          <p className='text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-10 mt-8'>
            A passionate Fullstack Developer with a strong focus on building modern, user-friendly, and responsive web applications. I enjoy working with React, JavaScript, and new technologies to craft innovative solutions. Always eager to learn and grow, I aim to create impactful projects that make a difference.
          </p>

          {/* Resume Button */}
          <a
            href='/path/to/resume.pdf' target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-lg mt-5 text-white py-3 px-8 rounded-full transition duration-300 font-bold transform hover:scale-105'
            style={{ backgroundColor: 'linear-gradient(90deg, #8245ec, #a855f7)', boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0  40px #8245ec' }}
          >
            Download Resume
          </a>
        </div>

        {/* Right Side */}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
            <Tilt className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-purple-700 rounded-full'
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            >
              <img src={profile} alt="Redoy Kumar" className='rounded-full w-full h-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]' />
            </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
