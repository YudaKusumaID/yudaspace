import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Home = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const [hover, setHover] = useState(false);
  const buttonTextTop = "Find out";
  const buttonTextBottom = "Find out";

  return (
    <section id="home" className="min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-7">
          <div className="title flex items-center justify-center">
            <motion.h1
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0 }}
              className="font-mono font-bold text-7xl md:text-titleDesktop"
            >
              Hello
            </motion.h1>
          </div>
          <div className="intro flex flex-col items-center justify-center">
            <motion.strong
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.5 }}
              className="font-mono font-normal text-2xl text-center"
            >
              I'm I Made Yuda Kusuma
            </motion.strong>
            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 1 }}
              className="mt-3 font-mono"
            >
              Backend and Low Level Programmer.
            </motion.p>
          </div>
          <div className="findout flex items-center justify-center mt-7">
            <motion.button
              className="bg-black text-white font-mono text-2xl px-6 py-3 rounded overflow-hidden relative"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                minHeight: '3.5rem',
                minWidth: '10rem',
              }}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 1.5 }}
            >
                <Link
                to="profile"
                smooth={true}
                duration={800}
                className="bg-black text-white font-mono text-2xl px-6 py-3 rounded cursor-pointer"
              >
              <div className="absolute inset-0 flex justify-center items-center">
                {buttonTextTop.split("").map((char, i) => (
                  <motion.span
                    key={`top-${i}`}
                    initial={{ y: 0 }}
                    animate={{ y: hover ? "-150%" : 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
                    className="inline-block"
                    style={{ width: char === " " ? "0.5rem" : "auto" }} // add space
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <div className="absolute inset-0 flex justify-center items-center">
                {buttonTextBottom.split("").map((char, i) => (
                  <motion.span
                    key={`bottom-${i}`}
                    initial={{ y: "100%" }}
                    animate={{ y: hover ? 0 : "300%" }}
                    transition={{ delay: i * 0.05, duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
                    className="inline-block"
                    style={{ width: char === " " ? "0.5rem" : "auto" }} // add space
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
