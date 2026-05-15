import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FF6B00]/30 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-yellow-400 group-hover:text-yellow-300 transition-colors" />
      ) : (
        <Moon size={20} className="text-slate-400 group-hover:text-slate-300 transition-colors" />
      )}
    </motion.button>
  );
};
