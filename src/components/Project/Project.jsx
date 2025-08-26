import React, { useState } from 'react';
import { projects } from '../../constants';

const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const handleOpenModal = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    }

    return (
        <section id='projects' className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[12vw] font-sans relative'>
            {/* Section Title */}
            <div className='text-center mb-16 '>
                <h2 className='text-4xl font-bold text-white'>PROJECTS</h2>
                <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
                <p className='text-gray-400 mt-4 text-lg font-semibold'>A showcase of my work and projects that highlighting my skills and expertise.</p>
            </div>


            {/* Project List */}
            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {projects.map((project) => (
                    <div key={project.id} onClick={() => handleOpenModal(project)} className='border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300'>
                        <div className='p-4'>
                            <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-xl' />
                        </div>
                        <div className='p-6'>
                            <h3 className='text-2xl font-bold text-white mb-2'>{project.title}</h3>
                            <p className='text-gray-500 mb-4 pt-4 line-clamp-3'>{project.description}</p>
                            <div className='mb-4 '>
                                {project.tags.map((tag, index) => (
                                    <span key={index} className='inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2'>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Open selected project modal */}
            {selectedProject && (
                <div className='fixed inset-0 bg-black p-4 bg-opacity-90 flex items-center justify-center z-50'>
                    <div className='bg-gray-900 rounded-xl p-8 shadow-2xl lg:w-[96%] w-[90%] max-w-2xl overflow-hidden relative'>
                        <div className='flex justify-end'>
                            <button onClick={handleCloseModal} className='text-white text-3xl font-bold hover:text-purple-500'>&times;</button>
                        </div>
                        <div className='flex flex-col'>
                            <div className='w-full flex justify-center bg-gray-900 px-4 py-2'>
                                <img src={selectedProject.image} alt={selectedProject.title} className='lg:w-full w-[96%] shadow-2xl object-contain rounded-xl' />
                            </div>
                            <div className='lg:p-4 p-2'>
                                <h3 className='lg:text-2xl mb-2 text-md font-bold text-white'>{selectedProject.title}</h3>
                            </div>
                            <p className='text-gray-400 mb-6 lg:text-base text-xs'>{selectedProject.description}</p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {selectedProject.tags.map((tag, index) => (
                                    <span key={index} className=' bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mb-2'>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className='flex flex-wrap gap-4 mb-6'>
                                {selectedProject.github && (
                                    <a href={selectedProject.github} target='_blank' rel='noopener noreferrer' className='px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition'>
                                        Source Code
                                    </a>
                                )}
                                {selectedProject.webapp && (
                                    <a href={selectedProject.webapp} target='_blank' rel='noopener noreferrer' className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition'>
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Project;