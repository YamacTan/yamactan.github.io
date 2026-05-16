import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto"
    >
      <motion.nav
        layout
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`
          relative
          backdrop-blur-md bg-neutral-900/70
          border border-white/10
          transition-all duration-300
          flex items-center justify-between
          ${isOpen 
            ? 'w-full rounded-2xl px-6 py-6' 
            : 'max-w-4xl rounded-full px-6 md:px-8 py-3.5 md:py-4 shadow-lg'
          }
        `}
      >
        {/* Logo */}
        <a 
          href="#hero" 
          className="flex items-center gap-2 flex-shrink-0 group"
          onClick={handleNavClick}
        >
          <motion.div 
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B00] to-orange-600 flex items-center justify-center group-hover:shadow-glow-orange transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-black font-bold text-lg">Y</span>
          </motion.div>
          <span className="font-bold text-white hidden sm:inline text-sm md:text-base">
            Yamaç TAN
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="relative px-3 py-2 text-slate-400 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              {/* Hover pill background */}
              <motion.div
                className="absolute inset-0 bg-[#FF6B00]/10 rounded-full -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Link text */}
              <motion.span
                className="relative text-sm font-medium"
                initial={{ color: '#cbd5e1' }}
                whileHover={{ color: '#FF6B00' }}
                transition={{ duration: 0.3 }}
              >
                {link.label}
              </motion.span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} className="text-accent" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} className="text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Mobile Menu - Expanded inside capsule */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 mt-0 w-full"
          >
            <div className="flex flex-col gap-2 pt-4 pb-6 px-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative px-4 py-3 text-slate-400 transition-all duration-300 group rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Hover pill background */}
                  <motion.div
                    className="absolute inset-0 bg-[#FF6B00]/10 rounded-lg -z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Link text */}
                  <motion.span
                    className="relative text-sm font-medium"
                    initial={{ color: '#cbd5e1' }}
                    whileHover={{ color: '#FF6B00' }}
                    transition={{ duration: 0.3 }}
                  >
                    {link.label}
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
