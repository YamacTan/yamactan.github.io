import { motion } from 'framer-motion';
import { SectionWrapper } from '../layout/SectionWrapper';
import { ScrollReveal } from '../effects/ScrollReveal';
import { Card } from '../common/Card';
import { skillsData } from '../../data/skills';
import { experienceData } from '../../data/experience';

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionWrapper
      id="about"
      className="py-20 md:py-32"
      containerClassName="space-y-20"
    >
      {/* Section Title */}
      <ScrollReveal>
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Tech <span className="text-gradient">Stack & Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of the technologies and platforms I work with
          </p>
        </div>
      </ScrollReveal>

      {/* Tech Matrix - Bento Grid */}
      <div className="space-y-12">
        {skillsData.map((skillCategory, categoryIndex) => (
          <ScrollReveal key={skillCategory.category} delay={categoryIndex * 0.1}>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                {skillCategory.category}
              </h3>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skillCategory.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className={skill.span || 'col-span-1'}
                  >
                    <Card
                      className="h-full p-6 flex flex-col justify-center items-center text-center group cursor-pointer"
                      hover={true}
                    >
                      <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold text-white mb-1">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-slate-400">
                        {skill.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Timeline */}
      <ScrollReveal>
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">
            Experience
          </h3>

          <div className="space-y-4">
            {experienceData.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                {/* Timeline line and dot */}
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-accent border-2 border-bg-primary" />
                {index < experienceData.length - 1 && (
                  <div className="absolute left-[7px] top-6 w-0.5 h-20 bg-gradient-to-b from-accent to-transparent" />
                )}

                <Card className="p-4 border-l-2 border-accent">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h4 className="font-semibold text-white text-lg">
                        {entry.position}
                      </h4>
                      <p className="text-slate-400">{entry.company}</p>
                    </div>
                    <p className="text-sm text-accent font-mono">
                      {entry.period}
                    </p>
                  </div>
                  {entry.current && (
                    <div className="mt-2">
                      <span className="inline-block px-2 py-1 bg-accent/10 border border-accent/30 text-accent text-xs font-medium rounded">
                        Currently
                      </span>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
};
