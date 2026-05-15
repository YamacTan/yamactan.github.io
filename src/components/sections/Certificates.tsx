import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../effects/ScrollReveal';
import { certificatesData } from '../../data/certificates';
import { Award, Cloud, Brain, Code } from 'lucide-react';

type CertificateCategory = 'all' | 'cloud-devops' | 'ai-ml' | 'programming';

const categoryConfig = {
  all: {
    label: 'All Certificates',
    icon: Award,
    color: 'text-slate-400',
  },
  'cloud-devops': {
    label: 'Cloud & DevOps',
    icon: Cloud,
    color: 'text-blue-400',
  },
  'ai-ml': {
    label: 'AI & ML',
    icon: Brain,
    color: 'text-purple-400',
  },
  programming: {
    label: 'Programming',
    icon: Code,
    color: 'text-green-400',
  },
};

export const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState<CertificateCategory>('all');

  const filteredCertificates =
    activeCategory === 'all'
      ? certificatesData
      : certificatesData.filter((cert) => cert.category === activeCategory);

  const categoryCounts = {
    all: certificatesData.length,
    'cloud-devops': certificatesData.filter(
      (c) => c.category === 'cloud-devops'
    ).length,
    'ai-ml': certificatesData.filter((c) => c.category === 'ai-ml').length,
    programming: certificatesData.filter((c) => c.category === 'programming')
      .length,
  };

  return (
    <ScrollReveal>
      <div className="space-y-8">
        {/* Category Title */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-gradient-to-b from-[#FF6B00] to-transparent rounded-full" />
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            Certificates & Credentials
          </h3>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-3">
          {(Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>).map(
            (category) => {
              const Icon =
                categoryConfig[category as CertificateCategory].icon;
              const isActive = activeCategory === category;

              return (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category as CertificateCategory)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg
                    transition-all duration-300
                    ${
                      isActive
                        ? 'bg-[#FF6B00] text-black border border-[#FF6B00]'
                        : 'bg-neutral-900/40 text-slate-400 border border-white/10 hover:border-[#FF6B00]/30'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">
                    {categoryConfig[category as CertificateCategory].label}
                  </span>
                  <span
                    className={`
                      text-xs font-mono
                      ${isActive ? 'text-black' : 'text-slate-500'}
                    `}
                  >
                    ({categoryCounts[category as CertificateCategory]})
                  </span>
                </motion.button>
              );
            }
          )}
        </div>

        {/* Certificates Grid */}
        <motion.div layout className="space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {filteredCertificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group"
                >
                  <a
                    href={cert.credentialUrl || '#'}
                    target={cert.credentialUrl ? '_blank' : undefined}
                    rel={cert.credentialUrl ? 'noopener noreferrer' : undefined}
                    className="block h-full"
                  >
                    <div
                      className="
                        h-full p-4 md:p-5 rounded-lg
                        bg-neutral-900/40 backdrop-blur-md
                        border border-white/10
                        hover:border-[#FF6B00]/30 hover:bg-neutral-900/60
                        transition-all duration-300
                        cursor-pointer
                        flex flex-col justify-between
                      "
                    >
                      <div className="space-y-3 flex-1">
                        {/* Badge - Category */}
                        <div className="flex items-start justify-between gap-2">
                          <span
                            className="
                              inline-block px-2 py-1 text-xs font-medium rounded
                              bg-[#FF6B00]/10 text-[#FF6B00]
                              border border-[#FF6B00]/20
                            "
                          >
                            {categoryConfig[cert.category].label}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="text-base md:text-lg font-semibold text-white group-hover:text-[#FF6B00] transition-colors leading-snug">
                          {cert.title}
                        </h4>

                        {/* Issuer */}
                        <p className="text-sm text-slate-400">
                          {cert.issuer}
                        </p>
                      </div>

                      {/* Date */}
                      <div className="pt-3 border-t border-white/5">
                        <p className="text-xs text-slate-500 font-mono">
                          {cert.date}
                          {cert.credentialId && ` • ID: ${cert.credentialId}`}
                        </p>
                        {cert.credentialUrl && (
                          <p className="text-xs text-[#FF6B00] mt-1">
                            View Credential →
                          </p>
                        )}
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400">
              No certificates in this category yet.
            </p>
          </div>
        )}
      </div>
    </ScrollReveal>
  );
};
