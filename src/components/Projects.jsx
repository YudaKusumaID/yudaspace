import React from 'react'
import { motion } from 'framer-motion'

import rightArrowIcon from '../assets/rightarrow.svg'
import pointOfSalesIcon from '../assets/projects/pointofsales.svg'
import rehatMataIcon from '../assets/projects/rehatmata.svg'
import objectDetectionIcon from '../assets/projects/objectdetection.svg'

const Projects = () => {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const projects = [
        {
            id: 1,
            title: 'Point of Sales',
            icon: pointOfSalesIcon,
            description: 'Unlock the full potential of your retail or hospitality business with our intuitive and feature-rich Point of Sale (POS) application. Designed for speed, accuracy, and ease of use, our POS system is the perfect solution for managing transactions, inventory, and customer interactions—all in one seamless platform.',
            techstack: ['C#', 'SQL Server'],
            url: 'https://github.com/YudaKusumaID/ukk_kasir',
        },
        {
            id: 2,
            title: 'Rehat Mata',
            icon: rehatMataIcon,
            description: 'In today’s fast-paced digital world, prolonged screen time can lead to eye strain, discomfort, and long-term vision problems. Our Eye Rest Reminder app is here to help you protect your eyes by reminding you to take regular breaks and practice healthy habits for your eye care.',
            techstack: ['C#'],
            url: 'https://github.com/YudaKusumaID/rehat-mata',
        },
        {
            id: 3,
            title: 'Object Detection',
            icon: objectDetectionIcon,
            description: 'Unlock the power of advanced technology with our Object Detection app, designed to help you identify, analyze, and interact with objects in real-time. Whether you’re in retail, security, research, or any industry that relies on object recognition, this app provides you with a fast, reliable, and highly accurate solution for detecting and tracking objects.',
            techstack: ['Python', 'OpenCV'],
            url: 'https://github.com/YudaKusumaID/Object-Detection',
        }
    ]

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
                    <div className="content font-mono flex flex-col md:flex-row gap-5">
                        {projects.map((project, index) => (
                            <motion.div
                                variants={fadeUpVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                                key={project.id}
                                className="content flex-1 rounded border-2 border-black border-dashed px-4 py-3"
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
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="ml-auto">
                                        <img src={rightArrowIcon} alt="Arrow Icon" height={30} width={30} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects