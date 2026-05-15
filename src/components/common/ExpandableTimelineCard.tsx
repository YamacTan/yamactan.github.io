import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Badge } from './Badge';

interface ExpandableTimelineCardProps {
  title: string;
  subtitle: string;
  period: string;
  details?: string[];
  technologies?: string[];
  isCurrent?: boolean;
  index?: number;
}

export const ExpandableTimelineCard = ({
  title,
  subtitle,
  period,
  details = [],
  technologies = [],
  isCurrent = false,
  index = 0,
}: ExpandableTimelineCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="
          w-full text-left p-4 md:p-6 rounded-xl
          bg-neutral-900/40 backdrop-blur-md
          border border-white/10
          hover:border-[#FF6B00]/30 hover:bg-neutral-900/60
          transition-all duration-300
          cursor-pointer
          focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/50
        "
      >
        {/* Header - Always Visible */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h4 className="font-semibold text-white text-lg group-hover:text-[#FF6B00] transition-colors">
                {title}
              </h4>
              {isCurrent && (
                <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/30">
                  Active
                </span>
              )}
            </div>
            <p className="text-sm text-slate-400 mb-2">{subtitle}</p>
            <p className="text-xs text-slate-500 font-mono">{period}</p>
          </div>

          {/* Expand Icon */}
          {(details.length > 0 || technologies.length > 0) && (
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 mt-1"
            >
              <ChevronDown
                size={20}
                className="text-slate-400 group-hover:text-[#FF6B00] transition-colors"
              />
            </motion.div>
          )}
        </div>
      </button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (details.length > 0 || technologies.length > 0) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div
              className="
                mt-2 p-4 md:p-6 rounded-xl rounded-t-none
                bg-neutral-900/30 backdrop-blur-md
                border border-t-0 border-white/10
                border-[#FF6B00]/20
              "
            >
              <div className="space-y-6">
                {/* Details / Responsibilities */}
                {details.length > 0 && (
                  <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-white">
                      Responsibilities & Achievements
                    </h5>
                    <ul className="space-y-2">
                      {details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex gap-3 text-sm text-slate-400"
                        >
                          <span className="text-[#FF6B00] mt-1 flex-shrink-0">
                            →
                          </span>
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies / Skills */}
                {technologies.length > 0 && (
                  <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-white">
                      Technologies & Tools
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, idx) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <Badge variant="accent">{tech}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
