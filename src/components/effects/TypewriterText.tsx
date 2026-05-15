import { useTypewriter } from '../../hooks/useTypewriter';

interface TypewriterTextProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export const TypewriterText = ({
  words,
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
}: TypewriterTextProps) => {
  const text = useTypewriter(words, typingSpeed, deletingSpeed, delayBetweenWords);

  return (
    <span className={`typewriter ${className}`}>
      {text}
      <span className="ml-1 inline-block w-1 h-8 md:h-12 bg-accent animate-pulse" />
    </span>
  );
};
