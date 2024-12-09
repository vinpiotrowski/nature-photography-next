
'use client'; // This is a client component
import {motion} from 'framer-motion'

export const FadeInWhenVisible = ({ children, className, delay=0 }) => {
  return (
    <motion.div
      className={ className }
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.7 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
    >
      {children}
    </motion.div>
  );
}

export const ScaleInAnimation = ({children, className, delay=0}) => {
  return (
    <motion.div
      className={ className }
      initial={{ opacity: 0, scale: 0.5, y: 49 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
          duration: 0.25,
          delay: delay,
          type: 'spring',
          bounce: 0.35,
          duration: 1.4
    }}>
      {children}
    </motion.div>
  );
}

export const ScaleInWhenViewAnimation = ({children, className, isInView=false, delay=0}) => {
  return (
    <motion.div
      className={ className }
      initial={{ opacity: 0, scale: 0.5, y: 49 }}
      animate={
        isInView && {
        opacity: 1, scale: 1, y: 0,
        transition: {
          duration: 0.25,
          delay: delay,
          type: 'spring',
          bounce: 0.35,
          duration: 1.4
        }
      }}
    >
      {children}
    </motion.div>
  );
}


export const LightRaysAnimation = ({children, className, index=0, delay=0}) => {
  return (
    <motion.div
      className={ className }
      initial={{ opacity: 0, rotate: index % 2 ? 21 : -21, y: 35 }}
      whileInView={{ opacity: 1, rotate: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{
          duration: 0.25,
          delay: delay,
          type: 'spring', 
          bounce: 0.35,
          duration: 1.4
      }}>
      { children}
    </motion.div>
  );
}

export const BrightenImageAnimation = ({ children, className, delay=0 }) => {
  return (
    <motion.div
      className={ className }
      initial={{opacity: 0.5}}
      viewport={{ once: true }}
      animate={{
        opacity: [0.5, 0.84],
      }}
      transition={{
        delay: 1.4,
        duration: 2.1,
      }}
    >
      {children}
    </motion.div>
  );
}

