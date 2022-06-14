import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.scss'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion';
import {FadeInWhenVisibleMobile, FadeInWhenVisible, container } from '../../Utils/animations'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oddu1rq', 'template_h28sv7o', form.current, 'CaIC8eh_PHmQsqg-_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const isMobile = useMediaQuery({
    query: '(max-width: 640px)'
  })

  const isTablet = useMediaQuery({
    query: '(min-width: 640px)'
  })

  return (
    <motion.div exit={{ opacity: 0 }} className='container-inner'>
    {
      isTablet &&
      <FadeInWhenVisible duration={.3} delayChildren={.6} staggerChildren={.3} name={'row row-contact'}>
        <motion.h1 variants={container} className='column'> Contact </motion.h1>
        <motion.div variants={container} className='column'>
          <form ref={form} onSubmit={sendEmail}>
            <input placeholder='Enter your full name' type='text' name='user_name' />
            <input placeholder='Enter your email address' type='email' name='user_email' />
            <textarea placeholder='Tell me' name='message' />
            <input className='button' type='submit' value='Send' />
          </form>
        </motion.div>
      </FadeInWhenVisible>
    }
    {
      isMobile &&
      <div className='row row-contact'>
        <FadeInWhenVisibleMobile delay={.3} duration={.3} name={'column'}>
         <h1> Contact </h1>
        </FadeInWhenVisibleMobile>
        <FadeInWhenVisibleMobile delay={.3} duration={.3} name={'column'}>
          <form ref={form} onSubmit={sendEmail}>
            <input placeholder='Enter your full name' type='text' name='user_name' />
            <input placeholder='Enter your email address' type='email' name='user_email' />
            <textarea placeholder='Tell me' name='message' />
            <input className='button' type='submit' value='Send' />
          </form>
        </FadeInWhenVisibleMobile>
      </div>
    }
    </motion.div>
  );
}

export default Contact;
