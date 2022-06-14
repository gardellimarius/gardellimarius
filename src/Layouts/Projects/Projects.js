import "./Projects.scss";
import { useMediaQuery } from 'react-responsive'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import { FadeInWhenVisible, FadeInWhenVisibleMobile, container } from '../../Utils/animations'
import tmdbOneBg from '../../Assets/tmdb-1-bg.webp'
import mojaveOneBg from '../../Assets/mojave-1-bg.webp'
import tmdbOneSm from '../../Assets/tmdb-1-sm.webp'
import mojaveOneSm from '../../Assets/mojave-1-sm.webp'

const projects = [
  {
    id: 1,
    title: 'TMDB',
    tag: 'react',
    desktopImage: tmdbOneBg,
    mobileImage: tmdbOneSm
  },
  {
    id: 2,
    title: 'Mojave Desert',
    tag: 'javascript',
    desktopImage: mojaveOneBg,
    mobileImage: mojaveOneSm
  }
]


function Projects() {

  const isMobile = useMediaQuery({
    query: '(max-width: 640px)'
  })

  const isTablet = useMediaQuery({
    query: '(min-width: 640px)'
  })

  return (
    <motion.div exit={{ opacity: 0 }} className='container-inner'>
      <>
        {
          isMobile &&
          <div className='row row-projects'>
            {
              projects.map(project => (
                <FadeInWhenVisibleMobile delay={1.2} duration={.3} name={'column'} key={project.id}>
                  <Link to ={`/${project.title}`}>
                    <motion.div className='column-image'>
                      <motion.div whileHover={{scale: 1.1, transition: { duration: .3 }}} className='column-image-inner' style={{'--ratio':9/16, backgroundImage: `url(${project.mobileImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                      </motion.div>
                    </motion.div>
                  </Link>
                  <h2>{project.title}</h2>
                  <h3>{project.tag}</h3>
                </FadeInWhenVisibleMobile>
              ))
            }
          </div>
        }
        {
          isTablet &&
          <FadeInWhenVisible duration={.3} delayChildren={1.2} staggerChildren={.3} name={'row row-projects'}>
            {
              projects.map(project => (
                <motion.div variants={container} className='column' key={project.id}>
                  <Link to ={`/${project.title}`}>
                    <motion.div className='column-image'>
                      <motion.div whileHover={{scale: 1.1, transition: { duration: .3 }}} className='column-image-inner' style={{'--ratio':16/9, backgroundImage: `url(${project.desktopImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                      </motion.div>
                    </motion.div>
                  </Link>
                  <h2>{project.title}</h2>
                  <h3>{project.tag}</h3>
                </motion.div>
              ))
            }
          </FadeInWhenVisible>
        }
      </>
    </motion.div>
  );
}

export default Projects;
