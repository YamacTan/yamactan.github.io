import type { ReactNode } from 'react';

interface TextGradientProps {
  children: ReactNode;
  className?: string;
}

export const TextGradient = ({
  children,
  className = '',
}: TextGradientProps) => {
  return (
    <span className={`text-gradient ${className}`}>
      {children}
    </span>
  );
};
