import { motion } from "framer-motion";
import './Footer.scss';
import { FadeInWhenVisible, container } from '../../Utils/animations'

const social = [
  {
    id: 1,
    title: 'Twitter',
    url: 'https://twitter.com/gardelli_marius',
  },
  {
    id: 2,
    title: 'Instagram',
    url: 'https://instagram.com/mariusgardelli',
  },
  {
    id: 3,
    title: 'GitHub',
    url: 'https://github.com/gardellimarius'
  }
]

function Footer() {

  return (
    <div className='container-inner'>
      <FadeInWhenVisible name={'row footer'} duration={.3} staggerChildren={.15} delayChildren={.15}>
        {
          social.map(item => (
            <motion.a href={item.url} key={item.id} variants={container} >{item.title}</motion.a>
          ))
        }
      </FadeInWhenVisible>
    </div>
  );
}

export default Footer;
