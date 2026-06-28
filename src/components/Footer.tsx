import { Mail, Phone, MapPin} from 'lucide-react';

import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 dark:bg-zinc-50 border-t border-zinc-800 dark:border-zinc-200 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Colonne Logo + Description */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-gradient-to-br from-[#00B074] to-emerald-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-black text-2xl">O</span>
              </div>
              <span className="text-3xl font-black tracking-tighter text-white dark:text-zinc-950">
                OMIIE
              </span>
            </div>

            <p className="text-zinc-400 dark:text-zinc-500 max-w-md text-[15.5px] leading-relaxed">
              Nous concevons les environnements de travail de demain : intelligents, humains et performants.
            </p>

            <SocialIcons iconSize={22} gap='gap-5' className='mt-8'/>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white dark:text-zinc-950 mb-5">Navigation</h4>
            <ul className="space-y-3 text-zinc-400 dark:text-zinc-500">
              <li><a href="/" className="hover:text-white dark:hover:text-zinc-950 transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-white dark:hover:text-zinc-950 transition-colors">À propos</a></li>
              <li><a href="#services" className="hover:text-white dark:hover:text-zinc-950 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-white dark:hover:text-zinc-950 transition-colors">Réalisations</a></li>
              <li><a href="#expertise" className="hover:text-white dark:hover:text-zinc-950 transition-colors">Expertise</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white dark:text-zinc-950 mb-5">Services</h4>
            <ul className="space-y-3 text-zinc-400 dark:text-zinc-500">
              <li><a href="/" className="hover:text-white dark:hover:text-zinc-950 transition-colors">Conseil Stratégique</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-zinc-950 transition-colors">Transformation Digitale</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-zinc-950 transition-colors">Aménagement d’Espaces</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-zinc-950 transition-colors">Accompagnement</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-white dark:text-zinc-950 mb-5">Contact</h4>
            
            <div className="space-y-5 text-zinc-400 dark:text-zinc-500">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 text-[#00B074]" />
                <div>
                  <p>237 Avenue de l’Innovation</p>
                  <p>Yaoundé & Douala, Cameroun</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#00B074]" />
                <p>+237 690 46 18 30</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} className="text-[#00B074]" />
                <a href="mailto:contact@omiie.fr" className="hover:text-white dark:hover:text-zinc-950 transition-colors">
                  contact@omiie.fr
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-10">
              <p className="text-sm font-medium text-white dark:text-zinc-950 mb-3">Restez informé</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="bg-zinc-900 dark:bg-zinc-100 border border-zinc-700 dark:border-zinc-300 text-white dark:text-zinc-950 px-5 py-3 rounded-l-2xl focus:outline-none w-full text-sm"
                />
                <button className="bg-[#00B074] hover:bg-emerald-600 px-6 rounded-r-2xl text-sm font-semibold transition-colors">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 dark:border-zinc-200 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
          <p>© 2026 OMIIE. Tous droits réservés.</p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white dark:hover:text-zinc-950 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white dark:hover:text-zinc-950 transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white dark:hover:text-zinc-950 transition-colors">CGV</a>
          </div>

          <p className="mt-4 md:mt-0 text-xs">Conçu avec passion pour l’avenir du travail.</p>
        </div>
      </div>
    </footer>
  );
}