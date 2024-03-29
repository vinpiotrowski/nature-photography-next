import {motion} from 'framer-motion'

const FadeInWhenVisible = ({ children, delay=0 }) => {
    return (
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ delay: delay, duration: 1.4 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 }
        }}
      >
        {children}
      </motion.div>
    );
  }

  export default FadeInWhenVisible