import { motion } from 'framer-motion';

const SectionWrapper = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={`section-padding ${className}`}
    >
      <div className="container-custom">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;
