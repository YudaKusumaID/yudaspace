import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

import csharpIcon from '../assets/techstack/csharp.svg';
import cIcon from '../assets/techstack/c.svg';
import cplusplusIcon from '../assets/techstack/cplusplus.svg';
import pythonIcon from '../assets/techstack/python.svg';
import javaIcon from '../assets/techstack/java.svg';
import javascriptIcon from '../assets/techstack/javascript.svg';
import reactIcon from '../assets/techstack/react.svg';
import typescriptIcon from '../assets/techstack/typescript.svg';
import nextjsIcon from '../assets/techstack/nextjs.svg';
import tailwindcssIcon from '../assets/techstack/tailwindcss.svg';
import bootstrapIcon from '../assets/techstack/bootstrap.svg';
import mysqlIcon from '../assets/techstack/mysql.svg';
import sqlserverIcon from '../assets/techstack/sqlserver.svg';
import gitIcon from '../assets/techstack/git.svg';
import githubIcon from '../assets/techstack/github.svg';
import visualstudiocodeIcon from '../assets/techstack/visualstudiocode.svg';
import visualstudioIcon from '../assets/techstack/visualstudio.svg';

const TechStack = () => {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const fadeVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    };

    const fadeLeftVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };


    const icons = [
        csharpIcon, cIcon, cplusplusIcon, pythonIcon, javaIcon, javascriptIcon,
        reactIcon, typescriptIcon, nextjsIcon, tailwindcssIcon, bootstrapIcon,
        mysqlIcon, sqlserverIcon, gitIcon, githubIcon, visualstudiocodeIcon, visualstudioIcon
    ];

  return (
    <section id="techstack" className="flex justify-center items-center pb-32">
    <div class="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-7">
            <div className="title flex justify-start">
                <motion.h2
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    className="font-mono text-black text-5xl font-semibold">
                        Tech Stack
                </motion.h2>
            </div>
            <motion.div
                variants={fadeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.3}}
                transition={{duration: 1, delay: 0.5}}
                className="content rounded border-2 border-black border-dashed px-4 py-2 max-w-full">
                    <div className="flex flex-wrap gap-5 justify-between">
                    {icons.map((icon, index) => (
                        <motion.div
                            key={index}
                            className="icon"
                            variants={fadeLeftVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            
                        >
                            <img src={icon} alt="tech icon" width="30" height="30" className=""/>
                        </motion.div>
                    ))}
                    </div>
            </motion.div>
        </div>
    </div>
</section>
)
}

export default TechStack