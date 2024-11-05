import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
    const fadeVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    };
  return (
    <section id="footer" className="font-mono">
        <div className="container mx-auto px-4">
            <div className="title flex justify-center items-center">
                <motion.p
                    variants={fadeVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.3}}
                    transition={{duration: 1, delay: 0.5}}
                    className="text-center"
                >
                    &copy; 2024 I Made Yuda Kusuma. All rights reserved.
                </motion.p>
            </div>
        </div>
    </section>
  )
}

export default Footer