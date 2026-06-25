import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#c4a1fb]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#c4a1fb]'>Mayur</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Embedded Software Engineer focused on STM32, Embedded C, RTOS, <br className='sm:block hidden' />
            and real-time system development.
          </p>
          <div className='mt-5 z-10 relative'>
            <a
              href='https://drive.google.com/file/d/1mQNwWwX8v7LZvQbHxf_X_A8RSC2l0UDp/view?usp=drive_link'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-[#c4a1fb] hover:bg-[#b085fa] text-primary font-bold py-3 px-6 rounded-xl transition duration-300 ease-in-out shadow-lg hover:shadow-[#c4a1fb]/50 outline-none w-fit inline-block'
            >
              View Resume
            </a>
          </div>
        </div>

      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;