import type { ReactNode } from 'react';

interface GlowBorderProps {
  children: ReactNode;
  className?: string;
  animated?: boolean;
}

export const GlowBorder = ({
  children,
  className = '',
  animated = false,
}: GlowBorderProps) => {
  const animationClass = animated ? 'animate-pulse-glow' : '';

  return (
    <div
      className={`glow-border rounded-lg p-4 ${animationClass} ${className}`}
    >
      {children}
    </div>
  );
};
