import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className='flex flex-col gap-10'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My tools and technologies</p>
        <h2 className={styles.sectionHeadText}>
          <span className='text-[#c4a1fb]'>Skills & Stack</span>
        </h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-5'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");