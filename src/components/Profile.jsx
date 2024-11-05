import React from 'react';
import { motion } from 'framer-motion';
import { tr } from 'framer-motion/client';

const Profile = () => {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const fadeVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    return (
        <section id="profile" className="flex flex-col items-start pb-32">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-7">
                    <div className="title flex justify-start">
                        <motion.h2
                            variants={fadeUpVariants}
                            initial="hidden"
                            whileInView="visible" 
                            viewport={{ once: true, amount: 1 }}
                            transition={{ duration: 0.5, delay: 0 }}
                            className="font-mono text-black text-5xl font-semibold">
                                Profile
                        </motion.h2>
                    </div>
                    <motion.div
                        variants={fadeVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.3}}
                        transition={{duration: 1, delay: 0.5}}
                        className="content rounded border-2 border-black border-dashed px-4 py-2">
                            <p className="font-mono text-justify">
                            Hi, I’m a student with a passion for backend development,
                                low-level programming, and cybersecurity. My curiosity
                                drives me to dig deep into how technology functions at its
                                core. Whether it’s crafting efficient backend solutions or
                                exploring the intricacies of system security, I’m always
                                on the lookout for ways to improve and secure the digital
                                landscape. I love tackling challenges and learning new things,
                                and I’m excited about the endless possibilities in the tech world!
                            </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
