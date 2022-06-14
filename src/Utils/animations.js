import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const container = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 }
}

export function FadeInWhenVisibleMobile({children, delay, duration, name}) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div className={`${name}`}
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{delay: delay, duration: duration }}
      variants={container}
    >
    {children}
    </motion.div>
  );
}


export function FadeAnimation({ children, delay, duration, name, style }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div className={`${name}`} style={style} 
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: duration, delay: delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 5 }
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInWhenVisible({ children, duration, staggerChildren, delayChildren, name }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div className={`${name}`}
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: duration, delayChildren: delayChildren, staggerChildren: staggerChildren }}
      variants={container}
    >
      {children}
    </motion.div>
  );
}
