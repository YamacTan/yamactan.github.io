import * as Icons from 'lucide-react';
import { Badge } from '../common/Badge';

type IconName = keyof typeof Icons;

interface FeaturedSkillProps {
  name: string;
  description: string;
  icon: string;
  achievements: string[];
  relatedTech: string[];
}

export const FeaturedSkill = ({
  name,
  description,
  icon,
  achievements,
  relatedTech,
}: FeaturedSkillProps) => {
  const IconComponent = Icons[icon as IconName] as React.ComponentType<{
    size: number;
    className: string;
  }> | undefined;

  return (
    <div className="group">
      <div
        className="
          relative overflow-hidden rounded-2xl p-8 md:p-10
          bg-gradient-to-br from-neutral-900/80 to-neutral-900/40
          backdrop-blur-md border border-[#FF6B00]/30
          hover:border-[#FF6B00]/50
          transition-all duration-500
          shadow-[0_0_60px_rgba(255,107,0,0.15)]
          hover:shadow-[0_0_80px_rgba(255,107,0,0.25)]
        "
      >
        <div
          className="
            absolute inset-0 opacity-0 group-hover:opacity-100
            transition-opacity duration-500
            pointer-events-none
          "
        >
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#FF6B00]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-6">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#FF6B00] text-sm font-semibold tracking-wider uppercase">
                  Featured Expertise
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {name}
              </h2>
            </div>

            {IconComponent && (
              <div className="flex-shrink-0 p-4 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20">
                <IconComponent size={32} className="text-[#FF6B00]" />
              </div>
            )}
          </div>

          <p className="text-lg text-slate-300 leading-relaxed">
            {description}
          </p>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Key Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {achievements.map((achievement) => (
                <div key={achievement} className="flex items-start gap-3">
                  <span className="text-[#FF6B00] mt-1 flex-shrink-0 font-bold">
                    ✓
                  </span>
                  <span className="text-slate-300 text-sm md:text-base">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Related Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {relatedTech.map((tech) => (
                <div key={tech}>
                  <Badge variant="accent">{tech}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="
            absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FF6B00] via-[#FF6B00] to-transparent
            w-0 group-hover:w-full transition-all duration-700
          "
        />
      </div>
    </div>
  );
};
