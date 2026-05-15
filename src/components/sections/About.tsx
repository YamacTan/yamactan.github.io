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
