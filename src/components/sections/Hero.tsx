import { motion } from 'framer-motion';
import { TypewriterText } from '../effects/TypewriterText';
import { TextGradient } from '../common/TextGradient';
import { SectionWrapper } from '../layout/SectionWrapper';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const typewriterWords = [
    'DevOps Engineer',
    'Platform Engineer',
    'Solution Architect',
    'AI/ML Expert',
  ];

  return (
    <SectionWrapper
      id="hero"
      className="pt-32 md:pt-40"
      containerClassName="flex flex-col items-center justify-center gap-8 text-center"
    >
      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="space-y-4"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <TextGradient>Yamaç TAN</TextGradient>
        </h1>

        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mt-4 h-20 md:h-24">
          <TypewriterText
            words={typewriterWords}
            typingSpeed={80}
            deletingSpeed={40}
            delayBetweenWords={2500}
          />
        </div>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed"
      >
        Building scalable infrastructure, optimizing cloud platforms, and pushing the boundaries of AI systems.
        Specializing in Platform Engineering, DevOps Engineering, and AI systems.
      </motion.p>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-accent"
      >
        <ArrowDown size={32} />
      </motion.div>
    </SectionWrapper>
  );
};
