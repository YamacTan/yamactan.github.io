import { motion } from 'framer-motion';
import { SectionWrapper } from '../layout/SectionWrapper';
import { ScrollReveal } from '../effects/ScrollReveal';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { Card } from '../common/Card';
import { projectsData } from '../../data/projects';
import { ExternalLink } from 'lucide-react';

export const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
      id="projects"
      className="py-20 md:py-32"
      containerClassName="space-y-16"
    >
      {/* Section Title */}
      <ScrollReveal>
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Showcasing my most impactful work in DevOps, Platform Engineering, and AI Systems
          </p>
        </div>
      </ScrollReveal>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projectsData.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Card
              className="h-full p-6 flex flex-col justify-between hover:scale-105 hover:shadow-glow-orange-lg"
              hover={true}
            >
              {/* Project Header */}
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <div className="inline-block mb-4">
                      <Badge variant="accent">Featured</Badge>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="space-y-4 mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-white/10">
                {project.github && (
                  <Button
                    href={project.github}
                    target="_blank"
                    variant="secondary"
                    className="flex-1 gap-2 text-sm"
                  >
                    🔗
                    GitHub
                  </Button>
                )}
                {project.liveDemo && (
                  <Button
                    href={project.liveDemo}
                    target="_blank"
                    variant="primary"
                    className="flex-1 gap-2 text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <ScrollReveal>
        <div className="text-center pt-8">
          <p className="text-slate-400 mb-6">
            Interested in exploring more projects? More is on the way!
          </p>
          <Button
            href="https://github.com/yamactan"
            target="_blank"
            variant="outline"
            className="gap-2"
          >
            🔗
            View GitHub Profile
          </Button>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
};
