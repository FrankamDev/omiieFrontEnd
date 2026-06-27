import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Gestion du Dark Mode sur tout le site (body)
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800 transition-colors duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO OMIIE */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-black tracking-wider text-zinc-950 dark:text-white">
              OMIIE<span className="text-omie-green">.</span>
            </span>
          </div>

          {/* DESKTOP MENU (Caché sur mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-omie-green dark:text-zinc-300 dark:hover:text-omie-green transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* BOUTONS ACTIONS (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Toggle Dark/Light */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={20} className="text-omie-green" /> : <Moon size={20} />}
            </button>

            {/* CTA Button */}
            <button className="flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800 dark:bg-omie-green dark:hover:bg-omie-darkGreen text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm">
              Parler à un expert
              <ArrowRight size={16} />
            </button>
          </div>

          {/* INTERFACES MOBILE (90% de tes utilisateurs) */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Toggle Dark Mode Mobile */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
            >
              {darkMode ? <Sun size={20} className="text-omie-green" /> : <Moon size={20} />}
            </button>

            {/* Bouton Burger Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* MENU MOBILE DROP DOWN */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-omie-green dark:hover:text-omie-green transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
            <button className="w-full flex items-center justify-center gap-2 bg-omie-green text-white py-3.5 rounded-xl text-base font-semibold shadow-md active:scale-[0.98] transition-all">
              Parler à un expert
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;