import type { ReactNode } from 'react';

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
      <div className={`w-full max-w-7xl mx-auto ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};
