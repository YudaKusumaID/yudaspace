import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const fadeDownVariants = {
        hidden: { opacity: 0, y: -20},
        visible: { opacity: 1, y: 0}
    };

    const fadeVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    };

    const contacts = [
        { name: 'Email: digital.yudakusuma@gmail.com', link: 'mailto:fabio.ottaviani@gmail.com' },
        { name: 'Linkedin: Yuda Kusuma', link: 'https://www.linkedin.com/in/yuda-kusuma-07869b308/' },
        { name: 'Instagram: yuda._kusuma', link: 'https://www.instagram.com/yuda._kusuma/' },
        { name: 'YouTube: On progress', link: '' },
        { name: 'GitHub: YudaKusumaID', link: 'https://github.com/YudaKusumaID' },
    ];

    return (
        <section id="contact" className="font-mono pb-32 ">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-5">
                    <div className="title flex justify-start">
                        <motion.h2
                            variants={fadeUpVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 1 }}
                            transition={{ duration: 0.5, delay: 0 }}
                            className="font-mono text-black text-5xl font-semibold">
                                Contact
                        </motion.h2>
                    </div>
                    <motion.div
                        variants={fadeVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.3}}
                        transition={{duration: 1, delay: 0.5}}
                        className="content rounded border-black border-2 border-dashed px-4 py-2">
                            <div className="space-y-4">
                                {contacts.map((contact, index) => (
                                    <motion.a
                                    variants={fadeDownVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                        href={contact.link}
                                        key={index}
                                        target="_blank"
                                        className="block py-2 border-b border-black text-black transition-all duration-300 hover:bg-black hover:text-white hover:pl-8"
                                    >
                                        {contact.name}
                                    </motion.a>
                                ))}
                            </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
