import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

type IconName = keyof typeof Icons;

interface BentoCardProps {
  title: string;
  description: string;
  icon: string;
  span?: string;
  index?: number;
}

export const BentoCard = ({
  title,
  description,
  icon,
  span = 'col-span-1',
  index = 0,
}: BentoCardProps) => {
  const IconComponent = Icons[icon as IconName] as React.ComponentType<{
    size: number;
    className: string;
  }> | undefined;

  return (
    <motion.div
      className={`${span} group relative overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div
        className="
          h-full rounded-2xl p-6 md:p-8
          bg-neutral-900/50 backdrop-blur-md
          border border-white/10
          transition-all duration-300
          hover:border-[#FF6B00]/50 hover:bg-neutral-900/70
          hover:shadow-[0_0_30px_rgba(255,107,0,0.15)]
          cursor-default
        "
      >
        {/* Content Layout */}
        <div className="flex flex-col h-full justify-between">
          {/* Icon - Top Right */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1 pr-4">
              {/* Title & Description */}
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 leading-tight">
                {title}
              </h3>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Icon - Positioned Top Right */}
            {IconComponent && (
              <div
                className="
                  flex-shrink-0 p-2.5 rounded-lg
                  bg-white/5 group-hover:bg-[#FF6B00]/10
                  transition-all duration-300
                "
              >
                <IconComponent size={24} className="text-[#FF6B00]" />
              </div>
            )}
          </div>
        </div>

        {/* Hover Line Accent */}
        <div
          className="
            absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FF6B00] to-transparent
            w-0 group-hover:w-full transition-all duration-500
          "
        />
      </div>
    </motion.div>
  );
};
