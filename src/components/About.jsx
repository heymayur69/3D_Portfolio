import React from 'react';
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles'
import { services, labTools } from '../constants'
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-full max-w-[280px] sm:max-w-[250px] mx-auto'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h1 className={`${styles.heroHeadText} text-white`}>
          <span className='text-[#c4a1fb]'>Overview</span>
        </h1>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Dedicated Embedded Systems Engineer with hands-on experience in STM32, Embedded C, FreeRTOS, Linux Device Drivers, and communication protocols including UART, SPI, I2C, and CAN. Experienced in firmware development, peripheral interfacing, hardware debugging, and real-time embedded system design. Built projects involving CAN-based vehicle monitoring, Linux kernel modules, and EMG-based human-machine interfaces. Passionate about solving real-world engineering problems and continuously learning new technologies in embedded software and firmware development.
      </motion.p>

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className='mt-20'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Hands-on experience</p>
          <h2 className='text-white font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[26px]'>
            Lab Equipment & Tools
          </h2>
        </motion.div>

        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-stretch'>
          {labTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              variants={fadeIn("up", "spring", index * 0.1, 0.55)}
              className='bg-tertiary p-5 rounded-2xl w-full border border-[#c4a1fb]/10 hover:border-[#c4a1fb]/60 transition duration-300 max-w-[280px] sm:max-w-none mx-auto'
            >
              <h3 className='text-white text-[18px] font-bold'>{tool.name}</h3>
              <p className='text-secondary text-[14px] mt-2 leading-[20px]'>{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </>
  );
};

export default SectionWrapper(About, "about");