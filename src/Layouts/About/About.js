import "./About.scss";
import { motion } from "framer-motion";
import { FadeInWhenVisible, container } from '../../Utils/animations';

function About() {

  return (
    <motion.div exit={{ opacity: 0 }} className='container-inner'>
      <>
       <FadeInWhenVisible duration={.3} delayChildren={.6} staggerChildren={.15} name={'row row-about'}>
         <motion.h1  className='column' variants={container}>About me</motion.h1>
         <motion.h2  className='column' variants={container}>Hi, I’m Marius and I’m a software engineer, specialized in building modern websites.</motion.h2>
       </FadeInWhenVisible>
      </>
    </motion.div>
  );
}

export default About;
