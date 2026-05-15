import { socialsData } from '../../data/socials';
import * as Icons from 'lucide-react';
import { Button } from '../common/Button';

type IconName = keyof typeof Icons;

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-bg-primary py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {socialsData.map((social) => {
              const Icon = Icons[social.icon as IconName] as React.ComponentType<{ size: number; className: string }>;
              return Icon ? (
                <Button
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  variant="secondary"
                  className="p-3 hover:bg-accent/10"
                  aria-label={social.label}
                >
                  <Icon size={20} className="text-accent" />
                </Button>
              ) : null;
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-slate-500 text-sm">
            <p>
              Built with React, Vite & Tailwind CSS • Deployed on GitHub Pages
            </p>
            <p className="mt-2">
              © {new Date().getFullYear()} Yamactan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
