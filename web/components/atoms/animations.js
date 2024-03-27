import {motion} from 'framer-motion'

const FadeInWhenVisible = ({ children }) => {
    return (
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ delay: 0, duration: 0.7 }}
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