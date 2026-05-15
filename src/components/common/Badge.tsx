interface BadgeProps {
  children: string;
  variant?: 'default' | 'accent' | 'outline';
  className?: string;
}

export const Badge = ({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) => {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-300';

  const variants = {
    default: 'bg-white/10 text-slate-400 border border-white/10',
    accent: 'bg-accent/10 text-accent border border-accent/30',
    outline: 'border border-accent text-accent hover:bg-accent/5',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
