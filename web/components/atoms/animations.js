import {motion} from 'framer-motion'

const FadeInWhenVisible = ({ children }) => {
    return (
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ delay: 0, duration: 1.4 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.95}
        }}
      >
        {children}
      </motion.div>
    );
  }

  export default FadeInWhenVisible