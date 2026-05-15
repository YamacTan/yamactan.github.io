import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'glow';
}

export const Card = ({
  children,
  className = '',
  hover = true,
  variant = 'default',
}: CardProps) => {
  const baseStyles = 'rounded-xl border transition-all duration-300';

  const variants = {
    default: 'glass-effect-md border-slate-700',
    glow: 'glow-border',
  };

  const hoverStyles = hover ? 'hover:border-accent hover:shadow-glow-orange hover:scale-105 hover:bg-white/[0.12]' : '';

  return (
    <motion.div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
    >
      {children}
    </motion.div>
  );
};
