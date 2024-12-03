import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import rightArrowIcon from '../assets/rightarrow.svg'
import pointOfSalesIcon from '../assets/projects/pointofsales.svg'
import baliSastraIcon from '../assets/projects/balisastra.svg'
import rehatMataIcon from '../assets/projects/rehatmata.svg'
import objectDetectionIcon from '../assets/projects/objectdetection.svg'

const importPointOfSalesImages = () => {
    const context = import.meta.glob('/src/assets/projects/pointofsales/*.{png,jpg,jpeg,svg}');
    return Object.values(context).map((importFn) => importFn);
};

const importBaliSastraImages = () => {
    const context = import.meta.glob('/src/assets/projects/balisastra/*.{png,jpg,jpeg,svg}');
    return Object.values(context).map((importFn) => importFn);
};

const importRehatMataImages = () => {
    const context = import.meta.glob('/src/assets/projects/rehatmata/*.{png,jpg,jpeg,svg}');
    return Object.values(context).map((importFn) => importFn);
};

const Projects = () => {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const fadeDownVariants = {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 0, y: 20 }
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0
        })
    };

    const [pointOfSalesImages, setPointOfSalesImages] = useState([]);
    const [baliSastraImages, setBaliSastraImages] = useState([]);
    const [rehatMataImages, setRehatMataImages] = useState([]);
    const [direction, setDirection] = useState(0);
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [currentProject, setCurrentProject] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const modalVariants = isOpenModal ? fadeUpVariants : fadeDownVariants;

    const openModal = (project) => {
        setCurrentProject(project)
        setCurrentImageIndex(0)
        setIsOpenModal(true)
    }

    const closeModal = () => {
        setIsOpenModal(false)
        setCurrentProject(null)

    }

    const showPreviousImage = () => {
        setDirection(-1)
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? currentProject.images.length - 1 : prevIndex - 1))
    }

    const showNextImage = () => {
        setDirection(1)
        setCurrentImageIndex((prevIndex) => (prevIndex === currentProject.images.length - 1 ? 0 : prevIndex + 1))
    }


    const projects = [
        {
            id: 2,
            title: 'Bali Sastra',
            icon: baliSastraIcon,
            description: 'Your ultimate companion for mastering the beautiful Balinese language. Whether you\'re a beginner or looking to deepen your understanding, this app is designed to make learning and translating Balinese effortless and fun. With an easy-to-use interface, you can quickly look up words, phrases, and their meanings, bridging the gap between Balinese and other languages.',
            techstack: ['React', 'TypeScript', 'Tailwind CSS'],
            images: baliSastraImages,
            visit: 'https://balisastra.pages.dev',
            sourcecode: '',
        },
        {
            id: 1,
            title: 'Point of Sales',
            icon: pointOfSalesIcon,
            description: 'Unlock the full potential of your retail or hospitality business with our intuitive and feature-rich Point of Sale (POS) application. Designed for speed, accuracy, and ease of use, our POS system is the perfect solution for managing transactions, inventory, and customer interactions—all in one seamless platform.',
            techstack: ['C#', 'SQL Server'],
            images: pointOfSalesImages,
            visit: '',
            sourcecode: 'https://github.com/YudaKusumaID/ukk_kasir'
        },
        {
            id: 3,
            title: 'Rehat Mata',
            icon: rehatMataIcon,
            description: 'In today’s fast-paced digital world, prolonged screen time can lead to eye strain, discomfort, and long-term vision problems. Our Eye Rest Reminder app is here to help you protect your eyes by reminding you to take regular breaks and practice healthy habits for your eye care.',
            techstack: ['C#'],
            images: rehatMataImages,
            visit: '',
            sourcecode: 'https://github.com/YudaKusumaID/rehat-mata',
        },
        {
            id: 4,
            title: 'Object Detection',
            icon: objectDetectionIcon,
            description: 'Unlock the power of advanced technology with our Object Detection app, designed to help you identify, analyze, and interact with objects in real-time. Whether you’re in retail, security, research, or any industry that relies on object recognition, this app provides you with a fast, reliable, and highly accurate solution for detecting and tracking objects.',
            techstack: ['Python', 'OpenCV'],
            images: [],
            visit: '',
            sourcecode: 'https://github.com/YudaKusumaID/Object-Detection',
        }
    ];

    useEffect(() => {
        const loadPointOfSalesImages = async () => {
            const modules = await Promise.all(importPointOfSalesImages().map((importFn) => importFn()));
            setPointOfSalesImages(modules.map((module) => module.default)); // Ambil URL gambar
        };

        const loadBaliSastraImages = async () => {
            const modules = await Promise.all(importBaliSastraImages().map((importFn) => importFn()));
            setBaliSastraImages(modules.map((module) => module.default)); // Ambil URL gambar
        };

        const loadRehatMataImages = async () => {
            const modules = await Promise.all(importRehatMataImages().map((importFn) => importFn()));
            setRehatMataImages(modules.map((module) => module.default)); // Ambil URL gambar
        };

        loadPointOfSalesImages();
        loadBaliSastraImages();
        loadRehatMataImages();
    }, []);

    useEffect(() => {
        if (isOpenModal) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpenModal])

    return (
        <section id="projects" className="flex justify-center items-center pb-32">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 items-center gap-7">
                    <div className="title flex justify-start">
                        <motion.h2
                            variants={fadeUpVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 1 }}
                            transition={{ duration: 0.5, delay: 0 }}
                            className="font-mono text-black text-5xl font-semibold">
                            Projects
                        </motion.h2>
                    </div>
                    <div className="content font-mono grid grid-cols-1 md:grid-cols-3 gap-5">
                        {projects.map((project, index) => (
                            <motion.div
                                variants={fadeUpVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                                key={project.id}
                                className="content flex-1 rounded border-2 border-black border-dashed px-4 py-3 w-full"
                            >
                                <img src={project.icon} alt={project.title} className="h-16 w-16  mb-4" />
                                <h3 className="text-start font-semibold text-xl mb-2">{project.title}</h3>
                                <p className="text-justify text-sm mb-4 line-clamp-4">{project.description}</p>
                                <div className="techstack flex flex-wrap items-center gap-2">
                                    <div className="flex flex-wrap gap-2">
                                        {project.techstack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <button onClick={() => openModal(project)} className="ml-auto">
                                        <img src={rightArrowIcon} alt="Arrow Icon" height={30} width={30} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Modal */}
            {isOpenModal && currentProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    {/* Modal Container with Fade Up Animation */}
                    <motion.div
                        className="bg-white rounded-lg shadow-xl max-w-md w-full relative"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {/* Close Button */}
                        <div className="flex justify-end p-2">
                            <button onClick={() => closeModal()} className="text-gray-500 hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {/* Modal Content */}
                        <div className="px-6 pb-4 font-mono">
                            {/* Image Section with Slide Animation */}
                            {currentProject.images && currentProject.images.length > 0 ? (
                                <div className="relative w-full h-64 overflow-hidden rounded-lg mb-3">
                                    <motion.img
                                        key={currentImageIndex}
                                        src={currentProject.images[currentImageIndex]}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 }
                                        }}
                                        className="absolute w-full h-full object-stretch"
                                        alt={`Slide ${currentImageIndex + 1}`}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-between z-10">
                                        <button
                                            onClick={showPreviousImage}
                                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-1 hover:bg-opacity-100 focus:outline-none"
                                            aria-label="Previous image"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={showNextImage}
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-1 hover:bg-opacity-100 focus:outline-none"
                                            aria-label="Next image"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-sm z-10">
                                        {currentImageIndex + 1} / {currentProject.images.length}
                                    </div>
                                </div>
                            ) : (
                                <div className="relative mb-4 flex justify-center items-center bg-gray-200 h-64 rounded">
                                    <p className="text-gray-500 text-sm">No images available</p>
                                </div>
                            )}
                            {/* Title and Description */}
                            <h2 className="text-start font-semibold text-xl mb-2">{currentProject.title}</h2>
                            <p className="text-justify text-sm mb-4">{currentProject.description}</p>
                            {/* Tech Stack */}
                            <div className="mb-4">
                                <h3 className="text-sm font-semibold mb-2">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {currentProject.techstack.map((tech, index) => (
                                        <span key={index} className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {/* Buttons */}
                            <div className="flex gap-2">
                                <a
                                    href={currentProject.visit || '#'}
                                    target={currentProject.visit ? "_blank" : ""}
                                    rel={currentProject.visit ? "noopener noreferrer" : ""}
                                    className={`flex-1 px-4 py-2 text-center rounded bg-black text-white ${currentProject.visit ? '' : 'cursor-not-allowed'}`}
                                    style={{
                                        pointerEvents: currentProject.visit ? 'auto' : 'none',
                                        textDecoration: currentProject.visit ? 'none' : 'line-through'
                                    }}
                                >
                                    Visit
                                </a>
                                <a
                                    href={currentProject.sourcecode || '#'}
                                    target={currentProject.sourcecode ? "_blank" : ""}
                                    rel={currentProject.sourcecode ? "noopener noreferrer" : ""}
                                    className={`flex-1 px-4 py-2 text-center rounded bg-gray-200 text-gray-800 ${currentProject.sourcecode ? '' : 'cursor-not-allowed'}`}
                                    style={{
                                        pointerEvents: currentProject.sourcecode ? 'auto' : 'none',
                                        textDecoration: currentProject.sourcecode ? 'none' : 'line-through'
                                    }}
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )
            }
        </section>
    )
}

export default Projects