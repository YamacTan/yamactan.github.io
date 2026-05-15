import { motion } from 'framer-motion';
import { ScrollReveal } from '../effects/ScrollReveal';
import { academicProjectsData } from '../../data/academic-projects';

export const AcademicProjects = () => {
  return (
    <ScrollReveal>
      <div className="space-y-6">
        {/* Category Title */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-gradient-to-b from-[#FF6B00] to-transparent rounded-full" />
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            Academic Projects
          </h3>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.05 }}
        >
          {academicProjectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div
                className="
                  h-full p-4 md:p-5 rounded-lg
                  bg-neutral-900/40 backdrop-blur-md
                  border border-white/10
                  hover:border-[#FF6B00]/30 hover:bg-neutral-900/60
                  transition-all duration-300
                  cursor-default
                  flex flex-col justify-between
                "
              >
                <div className="space-y-2 flex-1">
                  <h4 className="text-base md:text-lg font-semibold text-white group-hover:text-[#FF6B00] transition-colors leading-snug">
                    {project.title}
                  </h4>
                  {project.description && (
                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  )}
                </div>

                {/* Year Badge */}
                <div className="pt-3 mt-auto">
                  <span
                    className="
                      inline-block px-2.5 py-1 text-xs font-mono
                      bg-[#FF6B00]/10 text-[#FF6B00] rounded-md
                      border border-[#FF6B00]/20
                    "
                  >
                    {project.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </ScrollReveal>
  );
};
