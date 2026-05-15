import { motion } from 'framer-motion';
import { SectionWrapper } from '../layout/SectionWrapper';
import { ScrollReveal } from '../effects/ScrollReveal';
import { socialsData } from '../../data/socials';
import * as Icons from 'lucide-react';
import { Mail } from 'lucide-react';

type IconName = keyof typeof Icons;

export const Contact = () => {
  return (
    <SectionWrapper
      id="contact"
      className="py-20 md:py-32"
      containerClassName="max-w-2xl mx-auto space-y-12"
    >
      {/* Section Title */}
      <ScrollReveal>
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Interested in collaboration or have a question? Feel free to reach out.
          </p>
        </div>
      </ScrollReveal>

      {/* Social Links */}
      <ScrollReveal>
        <div className="flex flex-wrap justify-center gap-4">
          {socialsData.map((social) => {
            const Icon = Icons[social.icon as IconName] as React.ComponentType<{
              size: number;
              className: string;
            }>;
            return Icon ? (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-lg glass-effect-md border border-slate-700 hover:border-accent hover:shadow-glow-orange transition-all duration-300 group"
                aria-label={social.label}
              >
                <Icon size={24} className="text-slate-400 group-hover:text-accent transition-colors" />
              </motion.a>
            ) : null;
          })}
        </div>
      </ScrollReveal>

      {/* Email Contact */}
      <ScrollReveal>
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-slate-400 mb-4">Reach out directly:</p>
          <div className="flex items-center justify-center gap-2">
            <Mail size={20} className="text-accent" />
            <a
              href="mailto:yamac.tan@gmail.com"
              className="text-accent hover:text-orange-400 transition-colors font-mono text-lg"
            >
              contact@yamactan.dev
            </a>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
};
