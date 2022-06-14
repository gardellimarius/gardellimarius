import React from 'react'
import {useParams, Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { motion } from "framer-motion";
import { FadeInWhenVisible, FadeAnimation, container } from '../../Utils/animations'
import './ProjectDetails.scss'
import tmdbOneBg from '../../Assets/tmdb-1-bg.webp'
import mojaveOneBg from '../../Assets/mojave-1-bg.webp'
import tmdbOneSm from '../../Assets/tmdb-1-sm.webp'
import mojaveOneSm from '../../Assets/mojave-1-sm.webp'
import tmdbTwoBg from '../../Assets/tmdb-2-bg.webp'
import mojaveTwoBg from '../../Assets/mojave-2-bg.webp'
import tmdbTwoSm from '../../Assets/tmdb-2-sm.webp'
import mojaveTwoSm from '../../Assets/mojave-2-sm.webp'
import tmdbThreeBg from '../../Assets/tmdb-3-bg.webp'
import mojaveThreeBg from '../../Assets/mojave-3-bg.webp'
import tmdbThreeSm from '../../Assets/tmdb-3-sm.webp'
import mojaveThreeSm from '../../Assets/mojave-3-sm.webp'


const projects = [
  {
    id: 1,
    title: 'TMDB',
    tag: 'react',
    description: 'This is a movie app made using react-hooks, react-router-dom, react-responsive-carousel and react-responsive.',
    github: 'https://github.com/gardellimarius/tmdb',
    live: '',
    desktopOneImage: tmdbOneBg,
    mobileOneImage: tmdbOneSm,
    desktopTwoImage: tmdbTwoBg,
    mobileTwoImage: tmdbTwoSm,
    desktopThreeImage: tmdbThreeBg,
    mobileThreeImage: tmdbThreeSm
  },
  {
    id: 2,
    title: 'Mojave Desert',
    tag: 'javascript',
    description: 'This is a landing page built with Pug, SCSS, GSAP and ScrollTrigger. It is responsive and supports light and dark theme modes based on the OS setting.',
    github: 'https://github.com/gardellimarius/mojave-desert',
    live: 'https://gardellimarius.github.io/mojave-desert/dist/',
    desktopOneImage: mojaveOneBg,
    mobileOneImage: mojaveOneSm,
    desktopTwoImage: mojaveTwoBg,
    mobileTwoImage: mojaveTwoSm,
    desktopThreeImage: mojaveThreeBg,
    mobileThreeImage: mojaveThreeSm
  }
]


function ProjectDetails() {

  const { title } = useParams();
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)'
  })

  const isTablet = useMediaQuery({
    query: '(min-width: 640px)'
  })

  return (
    <motion.div exit={{ opacity: 0 }} className='container-inner'>
      {
        projects.filter(project => project.title === title).map((project) => (
          <div className='row row-project-details' key={project.id}>
            <FadeInWhenVisible duration={.3} delayChildren={.6} staggerChildren={.3} name={'column column-text'}>
              <Link to ={`/`}>
                <motion.div variants={container} className='back'>
                  <span class="arrow"></span>
                  <span class="arrow"></span>
                  <span class="arrow"></span>
                </motion.div>
              </Link>
              <motion.h1 variants={container}>
                {project.title}
              </motion.h1>
              <motion.h2 variants={container}>
                {project.tag}
              </motion.h2>
              <motion.h3 variants={container}>
                {project.description}
              </motion.h3>
              <div className='buttons'>
                <motion.a variants={container} href={project.github} className='button github-button'>GitHub</motion.a>
                <motion.a variants={container} href={project.live} className='button live-button'>Preview</motion.a>
              </div>
            </FadeInWhenVisible>
            {
              isMobile &&
              <FadeInWhenVisible duration={.3} delayChildren={1.2} staggerChildren={.3} name={'column column-image'}>
                <FadeAnimation name={'project-image--image'} style={{'--ratio':9/16, backgroundImage: `url(${project.mobileOneImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} duration={.3} delay={2.4} />
                <FadeAnimation name={'project-image--image'} style={{'--ratio':9/16, backgroundImage: `url(${project.mobileTwoImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} duration={.3} delay={.3} />
                <FadeAnimation name={'project-image--image'} style={{'--ratio':9/16, backgroundImage: `url(${project.mobileThreeImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} duration={.3} delay={.3} />
              </FadeInWhenVisible>
            }
            {
              isTablet &&
              <FadeInWhenVisible duration={.3} delayChildren={2.4} staggerChildren={.3} name={'column column-image'}>
                <motion.div variants={container} className='project-image--image' style={{'--ratio':16/9, backgroundImage: `url(${project.desktopOneImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}/>
                <motion.div variants={container} className='project-image--image' style={{'--ratio':16/9, backgroundImage: `url(${project.desktopTwoImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}/>
                <FadeAnimation name={'project-image--image'} style={{'--ratio':16/9, backgroundImage: `url(${project.desktopThreeImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} duration={.3} delay={.3} />
              </FadeInWhenVisible>
            }
          </div>
        ))
      }
    </motion.div>
  );
}

export default ProjectDetails;
