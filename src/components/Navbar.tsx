import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';

// Types
export interface NavLink {
  id: string;
  name: string;
  href: string;
}

// Mock Data
const MOCK_NAV_LINKS: NavLink[] = [
  { id: '1', name: 'Accueil', href: '#home' },
  { id: '2', name: 'À propos', href: '#about' },
  { id: '3', name: 'Services', href: '#services' },
  { id: '4', name: 'Réalisations', href: '#portfolio' },
  { id: '5', name: 'Contact', href: '#contact' },
];

// Variants (corrigés pour TS + verbatimModuleSyntax)
const menuVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring" as const, 
      stiffness: 80, 
      damping: 15,
      staggerChildren: 0.05,
      delayChildren: 0.1 
    }
  },
  exit: { 
    opacity: 0, 
    y: "-100%",
    transition: { 
      ease: "easeInOut" as const, 
      duration: 0.3,
      staggerChildren: 0.03,
      staggerDirection: -1 as const
    }
  }
} as const;

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring" as const, stiffness: 100 } 
  },
  exit: { opacity: 0, x: -10 }
} as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [navLinks] = useState<NavLink[]>(MOCK_NAV_LINKS);

  // Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Bloquer le scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* LOGO */}
          <div className="flex items-center gap-2 z-50">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-omie-green to-emerald-600 rounded-xl md:rounded-2xl flex items-center justify-center">
              <span className="text-white font-black text-lg md:text-xl tracking-tighter">O</span>
            </div>
            <span className="text-2xl md:text-3xl font-black tracking-[-1.5px] md:tracking-[-2px] text-zinc-950 dark:text-white">
              OMIIE
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-x-10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="relative text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-omie-green group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* ACTIONS DESKTOP */}
          <div className="hidden md:flex items-center gap-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Changer de thème"
            >
              <div className="relative w-5 h-5">
                <Sun className={`absolute inset-0 text-omie-green transition-all duration-500 ${darkMode ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} size={20} />
                <Moon className={`absolute inset-0 text-omie-green transition-all duration-500 ${darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} size={20} />
              </div>
            </motion.button>

            <button className="group flex items-center gap-2 bg-zinc-900 hover:bg-black dark:bg-omie-green dark:hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg shadow-omie-green/10 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.985]">
              Parler à un expert
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center gap-2 md:hidden z-50">
            <motion.button
              whileTap={{ scale: 0.90 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 active:bg-zinc-200 dark:active:bg-zinc-800"
              aria-label="Changer de thème"
            >
              {darkMode ? <Sun size={20} className="text-omie-green" /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.90 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white active:bg-zinc-200 dark:active:bg-zinc-800"
              aria-label="Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 bg-white/95 dark:bg-zinc-950/98 backdrop-blur-2xl z-40 flex flex-col h-screen"
          >
            <div className="flex-1 overflow-y-auto pt-24 px-6 pb-6 flex flex-col justify-between">
              <div className="flex flex-col gap-y-5">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    variants={linkVariants}
                    className="inline-block text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-200 active:text-omie-green dark:active:text-omie-green py-1.5 w-full"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <motion.div 
                variants={linkVariants}
                className="w-full pt-6 border-t border-zinc-100 dark:border-zinc-900"
              >
                <motion.button 
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-omie-green text-white py-4 rounded-2xl text-base font-semibold shadow-lg shadow-omie-green/20 active:bg-emerald-600 transition-colors flex items-center justify-center gap-2"
                >
                  Parler à un expert
                  <ArrowRight size={18} />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}