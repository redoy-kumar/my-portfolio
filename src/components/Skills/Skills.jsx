import React from 'react';
import { SkillsInfo } from '../../constants';
import Tilt from 'react-parallax-tilt'

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient"
        >
            {/* Section title */}
            <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    A collection of my technical skills and my expertise honed through various
                    projects and experiences.
                </p>
            </div>

            {/* Skills categories */}
            <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
                {SkillsInfo.map((category) => (
                    <div
                        key={category.title}
                        className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
                    >
                        {/* Category title */}
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
                            {category.title}
                        </h3>

                        <Tilt
                            tiltMaxAngleX={20}
                            tiltMaxAngleY={20}
                            perspective={1000}
                            scale={1.05}
                            transitionSpeed={1000}
                            gyroscope={true}
                        >

                            {/* List of skills */}
                            <ul className="grid grid-cols-2 md:grid-cols-3 gap-5 text-gray-300 text-lg">
                                {category.skills.map((skill, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2 bg-gray-800 px-2 py-2 rounded-lg hover:scale-105 transition-transform duration-200"
                                    >
                                        <img
                                            src={skill.logo}
                                            alt={skill.name}
                                            className="w-6 h-6 object-contain sm:w-8 sm:h-8"
                                        />
                                        <span className='text-sm sm:text-sm text-gray-300'>{skill.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </Tilt>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
