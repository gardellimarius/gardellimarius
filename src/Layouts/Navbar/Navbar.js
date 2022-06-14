import React from 'react';
import './Navbar.scss'
import { motion } from "framer-motion";
import { FadeInWhenVisible, container } from '../../Utils/animations'

function Navbar() {

  return (
    <FadeInWhenVisible duration={.3} delayChildren={.3} staggerChildren={.15} name={'navbar'}>
      <motion.div variants={container} className='navbar--logo'></motion.div>
      <motion.div variants={container} className='navbar--text'>gardellimarius</motion.div>
    </FadeInWhenVisible>
  );
}

export default Navbar;
