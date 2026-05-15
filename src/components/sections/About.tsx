import { motion } from 'framer-motion';
import { SectionWrapper } from '../layout/SectionWrapper';
import { ScrollReveal } from '../effects/ScrollReveal';
import { BentoCard } from '../common/BentoCard';
import { ExpandableTimelineCard } from '../common/ExpandableTimelineCard';
import { skillsData } from '../../data/skills';
import { experienceData } from '../../data/experience';
import { educationData } from '../../data/education';

export const About = () => {
  return (
    <SectionWrapper
      id="about"
      className="py-20 md:py-32"
      containerClassName="space-y-24"
    >
      {/* Section Header */}
      <ScrollReveal>
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Expertise & <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl">
            Specialized in building scalable infrastructure, optimizing cloud platforms, 
            and architecting AI systems. From Kubernetes orchestration to LLM deployment.
          </p>
        </div>
      </ScrollReveal>

      {/* Bento Grid - All Categories Combined */}
      <div className="space-y-16">
        {skillsData.map((skillCategory, categoryIndex) => (
          <ScrollReveal key={skillCategory.category} delay={categoryIndex * 0.1}>
            <div className="space-y-6">
              {/* Category Title - Minimalist */}
              <div className="flex items-center gap-3">
                <div className="h-8 w-1 bg-gradient-to-b from-[#FF6B00] to-transparent rounded-full" />
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {skillCategory.category}
                </h3>
              </div>

              {/* Bento Grid Layout */}
              <motion.div
                className="
                  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4
                  auto-rows-max lg:auto-rows-[200px]
                "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, staggerChildren: 0.05 }}
              >
                {skillCategory.skills.map((skill, index) => (
                  <BentoCard
                    key={skill.name}
                    title={skill.name}
                    description={skill.description}
                    icon={skill.icon}
                    span={
                      skill.span
                        ? `col-span-1 ${skill.span}`
                        : 'col-span-1'
                    }
                    index={index}
                  />
                ))}
              </motion.div>
            </div>
          </ScrollReveal>
        ))}
      </div>

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
    </SectionWrapper>
  );
};
