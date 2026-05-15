import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
  containerClassName?: string;
}

export const SectionWrapper = ({
  children,
  id,
  className = '',
  containerClassName = '',
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`section-container scroll-anchor ${className}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`w-full max-w-7xl mx-auto ${containerClassName}`}
      >
        {children}
      </motion.div>
    </section>
  );
};
