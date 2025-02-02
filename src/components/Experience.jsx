import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const fadeVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    };

    const experiences = [
        {
            id: 1,
            title: 'LKS IT Software Solution for Business Tingkat Provinsi Bali',
            company: 'Dinas Pendidikan Provinsi Bali',
            date: '20/03/2024 - 22/03/2024',
            details: [
                'Implemented business needs in the field of human resource management includes employee management, applying mutations, and applying promotions using the tech stack C# .NET and SQL Server.'
            ]
        },
        {
            id: 2,
            title: 'LKS IT Software Solution for Business Tingkat Kabupaten Gianyar',
            company: 'Dinas Pendidikan Kabupaten Gianyar',
            date: '29/01/2024 - 31/01/2024',
            details: [
                'Implemented business needs in the field of commerce includes managing sales, inventory, users, and reporting using the tech stack C# .NET and SQL Server.'
            ]
        },
        {
            id: 3,
            title: 'Intern Frontend Developer',
            company: 'PT. Taksu Teknologi Indonesia',
            date: '19/08/2024 - 31/01/2025',
            details: [
                'Fixed UI Logic.',
                'Improved IndexedDB.',
                'Implemented WYSIWYG Editor.'
            ]
        }
    ];

    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (id) => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <section id="experience" className="flex pb-32 ">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-7">
                    <div className="title">
                        <motion.h2
                            variants={fadeUpVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 1 }}
                            transition={{ duration: 0.5, delay: 0 }}
                            className="font-mono font-semibold text-5xl">
                                Experience
                        </motion.h2>
                    </div>
                    <motion.div
                        variants={fadeVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.3}}
                        transition={{duration: 1, delay: 0.5}}                    
                        className="content rounded border-black border-2 border-dashed px-4 py-2">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    variants={fadeVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.9, delay: index * 0.5 }}
                                    className="my-3 border-b border-gray-700 pb-4">
                                        <div
                                            className="flex justify-between items-center cursor-pointer"
                                            onClick={() => toggleExpand(exp.id)}
                                        >
                                            <div className="flex items-center">
                                                <span className="font-mono text-lg font-light mr-2">
                                                    {exp.id < 10 ? `0${exp.id}.` : exp.id}
                                                </span>
                                                <h3 className="font-mono font-bold text-xl">{exp.title}</h3>
                                            </div>
                                            <motion.div
                                                animate={{ rotate: expanded === exp.id ? 45 : 0 }}
                                                className="text-xl font-bold"
                                            >
                                                +
                                            </motion.div>
                                        </div>
                                        <AnimatePresence>
                                            {expanded === exp.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4 }}
                                                    className="overflow-hidden relative mt-2 pl-8"
                                                >
                                                    <motion.div
                                                        initial={{ scaleX: 1 }}
                                                        animate={{ scaleX: 0 }}
                                                        transition={{ duration: 0.4 }}
                                                        className="absolute top-0 left-0 right-0 bottom-0 "
                                                        style={{ transformOrigin: 'left' }}
                                                    />
                                                    <div className="relative z-10">
                                                        <p className="font-mono text-sm italic">{exp.company}</p>
                                                        <p className="font-mono text-sm">{exp.date}</p>
                                                        <ul className="mt-2 list-disc list-inside">
                                                            {exp.details.map((detail, index) => (
                                                                <li key={index} className="font-mono">{detail}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                </motion.div>
                            ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
