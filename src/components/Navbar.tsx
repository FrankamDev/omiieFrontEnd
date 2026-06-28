import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // ← Dark par défaut

  // Gestion du Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Réalisations', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-omie-green to-emerald-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-black text-xl tracking-tighter">O</span>
            </div>
            <span className="text-3xl font-black tracking-[-2px] text-zinc-950 dark:text-white">
              OMIIE
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
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
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-300 group"
              aria-label="Changer de thème"
            >
              <div className="relative w-5 h-5">
                <Sun 
                  size={20} 
                  className={`absolute inset-0 text-omie-green transition-all duration-500 ${darkMode ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} 
                />
                <Moon 
                  size={20} 
                  className={`absolute inset-0 text-omie-green transition-all duration-500 ${darkMode ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} 
                />
              </div>
            </button>

            {/* CTA */}
            <button className="flex items-center gap-2 bg-zinc-900 hover:bg-black dark:bg-omie-green dark:hover:bg-emerald-500 text-white px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 shadow-lg shadow-omie-green/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.985]">
              Parler à un expert
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
              aria-label="Changer de thème"
            >
              {darkMode ? <Sun size={22} className="text-omie-green" /> : <Moon size={22} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white transition-all"
              aria-label="Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU - Full Screen avec belle animation */}
      <div
        className={`md:hidden fixed inset-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl z-50 transition-all duration-500 ease-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8">
          <div className="flex-1 flex flex-col gap-y-6">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-medium text-zinc-800 dark:text-zinc-200 hover:text-omie-green dark:hover:text-omie-green transition-all duration-300 py-2 transform"
                style={{
                  transitionDelay: `${index * 50}ms`,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Mobile */}
          <div className="pb-12">
            <button 
              onClick={() => setIsOpen(false)}
              className="w-full bg-omie-green hover:bg-emerald-600 text-white py-5 rounded-3xl text-xl font-semibold shadow-xl shadow-omie-green/30 active:scale-[0.985] transition-all flex items-center justify-center gap-3"
            >
              Parler à un expert
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;