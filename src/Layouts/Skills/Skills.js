import "./Skills.scss";
import { useMediaQuery } from 'react-responsive'
import { motion } from "framer-motion";
import { FadeInWhenVisibleMobile, FadeInWhenVisible, container } from '../../Utils/animations'
import pug from '../../Assets/pug.svg'
import scss from '../../Assets/scss.svg'
import javascript from '../../Assets/javascript.svg'
import react from '../../Assets/react.svg'
import webpack from '../../Assets/webpack.svg'
import figma from '../../Assets/figma.svg'


const skills = [
  {
    id: 1,
    title: 'Pug',
    image: pug
  },
  {
    id: 2,
    title: 'SCSS',
    image: scss
  },
  {
    id: 3,
    title: 'JavaScript',
    image: javascript
  },
  {
    id: 4,
    title: 'React',
    image: react
  },
  {
    id: 5,
    title: 'Webpack',
    image: webpack
  },
  {
    id: 6,
    title: 'Figma',
    image: figma
  },
]


function Skills() {

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
        <FadeInWhenVisible duration={.3} delayChildren={.3} staggerChildren={.3} name={'row row-skills'}>
          <motion.h1 variants={container} className='column'> Skills </motion.h1>
          <div className='column'>
            <FadeInWhenVisible duration={.3} delayChildren={.3} staggerChildren={.3} name={'row'}>
            {
              skills.map(skill => (
                <motion.div className='column' key={skill.id} variants={container}>
                  <div className='skill'>
                    <div className='skill-image' style={{ backgroundImage: `url(${skill.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
                    <h3>{skill.title}</h3>
                  </div>
                </motion.div>
              ))
            }
            </FadeInWhenVisible>
          </div>
        </FadeInWhenVisible>
      }
      {
        isMobile &&
        <div className='row row-skills'>
          <FadeInWhenVisibleMobile delay={.3} duration={.3} name={'column'}>
            <h1> Skills </h1>
          </FadeInWhenVisibleMobile>
          <div className='column'>
            <div className='row'>
              {
                skills.map(skill => (
                  <FadeInWhenVisibleMobile delay={.3} duration={.3} name={'column'} key={skill.id} variants={container}>
                    <div className='skill'>
                      <div className='skill-image' style={{ backgroundImage: `url(${skill.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
                      <h3>{skill.title}</h3>
                    </div>
                  </FadeInWhenVisibleMobile>
                ))
              }
            </div>
          </div>
        </div>
      }
    </motion.div>
  );
}

export default Skills;
