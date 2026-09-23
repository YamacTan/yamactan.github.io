import { TypewriterText } from '../effects/TypewriterText';
import { TextGradient } from '../common/TextGradient';
import { SectionWrapper } from '../layout/SectionWrapper';

export const Hero = () => {
  const typewriterWords = [
    'DevOps & Cloud Platform Engineer',
    'Solution Architect',
    'AI/ML Expert',
  ];

  return (
    <SectionWrapper
      id="hero"
      className="pt-40 md:pt-48"
      containerClassName="flex flex-col items-center justify-center gap-8 text-center"
    >
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <TextGradient>Yamaç TAN, M.Sc.</TextGradient>
        </h1>

        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-[#FF6B00] via-[#FF8C42] to-[#FFA500] bg-clip-text text-transparent mt-4 h-20 md:h-24">
          <TypewriterText
            words={typewriterWords}
            typingSpeed={80}
            deletingSpeed={40}
            delayBetweenWords={2500}
          />
        </div>
      </div>

      <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
        Designing resilient platforms and scalable cloud-native architectures.
        Focused on SRE, DevOps, and high-performance solution design.
        Engineering robust foundations that empower intelligent systems and complex ecosystems.
      </p>
    </SectionWrapper>
  );
};
