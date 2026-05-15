import { SectionWrapper } from '../layout/SectionWrapper';
import { ScrollReveal } from '../effects/ScrollReveal';
import { ExpandableTimelineCard } from '../common/ExpandableTimelineCard';
import { AcademicProjects } from './AcademicProjects';
import { Certificates } from './Certificates';
import { experienceData } from '../../data/experience';
import { educationData } from '../../data/education';

export const About = () => {
  return (
    <SectionWrapper
      id="about"
      className="py-20 md:py-32"
      containerClassName="space-y-24"
    >
      {/* Section Intro */}
      <ScrollReveal>
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            From internships to leadership roles in cloud infrastructure and AI systems. 
            Building expertise through hands-on experience and continuous learning.
          </p>
        </div>
      </ScrollReveal>

      {/* Timeline - Experience */}
      <ScrollReveal>
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-gradient-to-b from-[#FF6B00] to-transparent rounded-full" />
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Experience
            </h3>
          </div>

          <div className="space-y-3">
            {experienceData.map((entry, index) => (
              <ExpandableTimelineCard
                key={entry.id}
                title={entry.position}
                subtitle={entry.company}
                period={entry.period}
                details={entry.details}
                technologies={entry.technologies}
                isCurrent={entry.current}
                index={index}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Timeline - Education */}
      <ScrollReveal>
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-gradient-to-b from-[#FF6B00] to-transparent rounded-full" />
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Education
            </h3>
          </div>

          <div className="space-y-3">
            {educationData.map((entry, index) => (
              <ExpandableTimelineCard
                key={entry.id}
                title={entry.degree}
                subtitle={`${entry.school} • ${entry.field}`}
                period={entry.period}
                details={entry.details}
                technologies={entry.skills}
                index={index}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Academic Projects Section */}
      <ScrollReveal>
        <AcademicProjects />
      </ScrollReveal>

      {/* Certificates Section */}
      <ScrollReveal>
        <Certificates />
      </ScrollReveal>
    </SectionWrapper>
  );
};
