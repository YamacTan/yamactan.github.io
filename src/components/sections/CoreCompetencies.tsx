import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import type { CoreCompetency } from '../../types';
import { Badge } from '../common/Badge';

type IconName = keyof typeof Icons;

interface CoreCompetenciesProps {
  competencies: CoreCompetency[];
}

export const CoreCompetencies = ({ competencies }: CoreCompetenciesProps) => {
  return (
    <div className="space-y-8">
      {/* Section Title */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-gradient-to-b from-[#FF6B00] to-transparent rounded-full" />
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Core Competencies
          </h3>
        </div>
        <p className="text-slate-400 text-base md:text-lg">
          Advanced expertise across infrastructure, cloud platforms, and AI systems
        </p>
      </div>

      {/* Bento Grid */}
      <motion.div
        className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4
          auto-rows-max lg:auto-rows-[220px]
        "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, staggerChildren: 0.08 }}
      >
        {competencies.map((competency, index) => {
          const IconComponent = Icons[
            competency.icon as IconName
          ] as React.ComponentType<{
            size: number;
            className: string;
          }> | undefined;

          return (
            <motion.div
              key={competency.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`${competency.span || 'col-span-1'} group`}
            >
              <div
                className="
                  h-full p-6 rounded-xl
                  bg-neutral-900/40 backdrop-blur-md
                  border border-white/10
                  hover:border-[#FF6B00]/30 hover:bg-neutral-900/60
                  transition-all duration-300
                  hover:shadow-[0_0_30px_rgba(255,107,0,0.15)]
                  flex flex-col justify-between
                  cursor-default
                "
              >
                {/* Header with Icon */}
                <div className="space-y-4 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-lg md:text-xl font-semibold text-white group-hover:text-[#FF6B00] transition-colors leading-snug flex-1">
                      {competency.title}
                    </h4>
                    {IconComponent && (
                      <div className="flex-shrink-0 p-2 rounded-lg bg-white/5 group-hover:bg-[#FF6B00]/10 transition-colors">
                        <IconComponent
                          size={20}
                          className="text-[#FF6B00]"
                        />
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {competency.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {competency.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.08 + techIndex * 0.05) }}
                      >
                        <Badge variant="default" className="text-xs">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
