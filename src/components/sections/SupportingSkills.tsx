import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import type { SupportingSkill } from '../../types';

type IconName = keyof typeof Icons;
type SkillCategory = 'programming' | 'databases' | 'devtools';

interface SupportingSkillsProps {
  skills: {
    [key: string]: SupportingSkill[];
  };
}

const categoryConfig = {
  programming: {
    label: 'Programming Languages',
    icon: 'Code2',
  },
  databases: {
    label: 'Databases',
    icon: 'Database',
  },
  devtools: {
    label: 'Developer Tools',
    icon: 'GitBranch',
  },
};

export const SupportingSkills = ({ skills }: SupportingSkillsProps) => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(
    'programming'
  );

  const currentSkills = skills[activeCategory] || [];

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-gradient-to-b from-[#FF6B00] to-transparent rounded-full" />
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Supporting Skills
          </h3>
        </div>
        <p className="text-slate-400 text-base md:text-lg">
          Additional programming languages, databases, and development tools
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {(Object.keys(categoryConfig) as SkillCategory[]).map((category) => {
          const Icon =
            Icons[
              categoryConfig[category].icon as IconName
            ] as React.ComponentType<{ size: number; className: string }>;
          const isActive = activeCategory === category;

          return (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-lg
                transition-all duration-300 font-medium
                ${
                  isActive
                    ? 'bg-[#FF6B00] text-black border border-[#FF6B00] shadow-[0_0_20px_rgba(255,107,0,0.3)]'
                    : 'bg-neutral-900/40 text-slate-400 border border-white/10 hover:border-[#FF6B00]/30'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {Icon && (
                <Icon
                  size={18}
                  className={isActive ? 'text-black' : 'text-[#FF6B00]'}
                />
              )}
              <span className="text-sm md:text-base">
                {categoryConfig[category].label}
              </span>
              <span
                className={`
                  text-xs font-mono font-semibold
                  ${isActive ? 'text-black' : 'text-slate-500'}
                `}
              >
                ({currentSkills.length})
              </span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {currentSkills.map((skill, index) => {
            const SkillIcon =
              Icons[skill.icon as IconName] as React.ComponentType<{
                size: number;
                className: string;
              }>;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div
                  className="
                    p-4 rounded-lg
                    bg-neutral-900/40 backdrop-blur-md
                    border border-white/10
                    hover:border-[#FF6B00]/30 hover:bg-neutral-900/60
                    transition-all duration-300
                    hover:shadow-[0_0_20px_rgba(255,107,0,0.15)]
                    flex flex-col items-center justify-center
                    gap-2 min-h-[100px]
                    group cursor-default
                  "
                >
                  {SkillIcon && (
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#FF6B00]/10 transition-colors">
                      <SkillIcon
                        size={20}
                        className="text-[#FF6B00]"
                      />
                    </div>
                  )}
                  <h4 className="text-sm md:text-base font-semibold text-white text-center group-hover:text-[#FF6B00] transition-colors">
                    {skill.name}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
