import { ScrollReveal } from '../effects/ScrollReveal';
import { SectionWrapper } from '../layout/SectionWrapper';
import { FeaturedSkill } from './FeaturedSkill';
import { CoreCompetencies } from './CoreCompetencies';
import { SupportingSkills } from './SupportingSkills';
import {
  primaryExpertise,
  coreCompetencies,
  supportingSkills,
} from '../../data/expertise-layers';

export const SkillsSection = () => {
  return (
    <SectionWrapper
      id="skills"
      className="pt-20 pb-6 md:pt-32 md:pb-12"
      containerClassName="space-y-16"
    >
      {/* Intro */}
      <ScrollReveal>
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Specialized in building scalable infrastructure, optimizing cloud platforms, 
            and architecting AI systems. From Kubernetes orchestration to deep learning frameworks.
          </p>
        </div>
      </ScrollReveal>

      {/* Tier 1: Featured Expertise */}
      <ScrollReveal>
        <FeaturedSkill
          name={primaryExpertise.name}
          description={primaryExpertise.description}
          icon={primaryExpertise.icon}
          achievements={primaryExpertise.achievements}
          relatedTech={primaryExpertise.relatedTech}
        />
      </ScrollReveal>

      {/* Tier 2: Core Competencies */}
      <ScrollReveal>
        <CoreCompetencies competencies={coreCompetencies} />
      </ScrollReveal>

      {/* Tier 3: Supporting Skills */}
      <ScrollReveal>
        <SupportingSkills skills={supportingSkills} />
      </ScrollReveal>
    </SectionWrapper>
  );
};
