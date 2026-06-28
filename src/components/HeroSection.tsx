import { useState } from 'react';
import { 
  Sparkles, ArrowUpRight, Play, CheckCircle2, Shield, 
  Wifi, Battery, Cpu, Compass, Layers, TrendingUp, Monitor, Smartphone 
} from 'lucide-react';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<'space' | 'interface'>('space');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 md:pt-32 overflow-hidden dark:bg-zinc-950 bg-white transition-colors duration-500">
      
      {/* Background Technique Sophistiqué */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grille subtile */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
        
        {/* Glows ambiants */}
        <div className="absolute top-20 left-1/3 w-[600px] h-[600px] bg-emerald-500/10 dark:bg-[#00B074]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-teal-500/10 dark:bg-emerald-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Colonne Gauche - Contenu */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Badge Premium */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 backdrop-blur-md mx-auto lg:mx-0">
              <div className="w-2 h-2 rounded-full bg-[#00B074] relative">
                <div className="absolute inset-0 bg-[#00B074] rounded-full animate-ping" />
              </div>
              <span className="text-xs font-semibold tracking-[2px] uppercase text-zinc-500 dark:text-zinc-400">Intelligence Spatiale & Digitale</span>
              <Sparkles size={14} className="text-[#00B074]" />
            </div>

            {/* Titre Principal */}
            <h1 className="text-5xl md:text-6xl lg:text-[68px] font-black tracking-tighter leading-[1.05] text-zinc-950 dark:text-white">
              Des <span className="bg-gradient-to-r from-[#00B074] via-emerald-500 to-teal-400 bg-clip-text text-transparent">espaces</span> qui<br />
              pensent comme vous.
            </h1>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              OMIIE fusionne architecture physique et expérience numérique pour créer des environnements de travail intelligents, fluides et inspirants.
            </p>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="group flex items-center justify-center gap-3 bg-[#00B074] hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold text-base shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:-translate-y-0.5 active:scale-[0.985] transition-all duration-300">
                Démarrer un projet
                <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
              </button>

              <button className="group flex items-center justify-center gap-3 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 px-8 py-4 rounded-2xl font-semibold text-base transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900">
                <Play size={18} className="text-[#00B074]" fill="currentColor" />
                Voir la démo
              </button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 pt-8 text-sm">
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
                <CheckCircle2 size={18} className="text-[#00B074]" />
                <span>ISO 9241-210</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
                <Shield size={18} className="text-[#00B074]" />
                <span>Sécurité Souveraine</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
                <TrendingUp size={18} className="text-[#00B074]" />
                <span>+47% productivité</span>
              </div>
            </div>
          </div>

          {/* Colonne Droite - Mockup Smartphone */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative">
              {/* Glow arrière */}
              <div className="absolute -inset-10 bg-gradient-to-br from-[#00B074]/20 to-transparent dark:from-[#00B074]/10 rounded-[60px] blur-3xl -z-10" />

              {/* Smartphone */}
              <div className="relative w-[300px] h-[620px] bg-black rounded-[52px] p-3 shadow-2xl shadow-black/60 border border-zinc-800 transition-transform duration-700 hover:rotate-[1deg] hover:scale-[1.03]">
                
                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center px-4">
                  <div className="flex-1 h-1 bg-zinc-800 rounded-full" />
                </div>

                {/* Status Bar */}
                <div className="flex justify-between text-[10px] text-zinc-400 px-6 pt-6 font-mono">
                  <span>09:41</span>
                  <div className="flex items-center gap-1.5">
                    <Wifi size={12} />
                    <Battery size={14} />
                  </div>
                </div>

                {/* Écran de l'app */}
                <div className="mt-8 bg-zinc-50 dark:bg-zinc-950 h-[480px] rounded-[38px] overflow-hidden border border-zinc-200 dark:border-zinc-900 relative">
                  
                  {/* Header App */}
                  <div className="px-5 pt-6 pb-4 border-b border-zinc-200 dark:border-zinc-900 flex items-center gap-3">
                    <div className="w-9 h-9 bg-zinc-900 rounded-2xl flex items-center justify-center text-[#00B074]">
                      <Cpu size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">OMIIE Hub</p>
                      <p className="text-xs text-zinc-400">Environnement Intelligent</p>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="px-5 pt-4">
                    <div className="bg-zinc-100 dark:bg-zinc-900 p-1 rounded-2xl flex">
                      <button
                        onClick={() => setActiveTab('space')}
                        className={`flex-1 py-3 text-sm font-semibold rounded-xl transition-all ${activeTab === 'space' ? 'bg-white dark:bg-zinc-800 shadow-sm' : 'text-zinc-500'}`}
                      >
                        Espaces
                      </button>
                      <button
                        onClick={() => setActiveTab('interface')}
                        className={`flex-1 py-3 text-sm font-semibold rounded-xl transition-all ${activeTab === 'interface' ? 'bg-white dark:bg-zinc-800 shadow-sm' : 'text-zinc-500'}`}
                      >
                        Digital
                      </button>
                    </div>
                  </div>

                  {/* Contenu Dynamique */}
                  <div className="p-5 relative h-[310px]">
                    {/* Tab Espaces */}
                    <div className={`space-y-4 transition-all duration-500 ${activeTab === 'space' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none absolute'}`}>
                      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-sm">
                        <div className="flex justify-between text-sm mb-3">
                          <span className="font-medium">Open Space - Nord</span>
                          <span className="text-emerald-500 font-mono">21.4°C</span>
                        </div>
                        <div className="h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full w-[84%] bg-gradient-to-r from-[#00B074] to-emerald-500 rounded-full" />
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="flex-1 bg-white dark:bg-zinc-900 rounded-2xl p-4 text-center">
                          <Compass className="mx-auto mb-2 text-[#00B074]" size={22} />
                          <p className="text-xs font-medium">Luminosité optimale</p>
                        </div>
                        <div className="flex-1 bg-white dark:bg-zinc-900 rounded-2xl p-4 text-center">
                          <Layers className="mx-auto mb-2 text-[#00B074]" size={22} />
                          <p className="text-xs font-medium">Acoustique</p>
                        </div>
                      </div>
                    </div>

                    {/* Tab Digital */}
                    <div className={`space-y-4 transition-all duration-500 ${activeTab === 'interface' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none absolute'}`}>
                      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Synchronisation Live</span>
                          <TrendingUp className="text-[#00B074]" size={18} />
                        </div>
                        <div className="flex gap-1 h-8 items-end">
                          {[60, 85, 45, 92, 70].map((h, i) => (
                            <div key={i} className="bg-[#00B074] rounded-t w-3 flex-1" style={{ height: `${h}%` }} />
                          ))}
                        </div>
                      </div>

                      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 flex items-center gap-3">
                        <Shield className="text-[#00B074]" size={24} />
                        <div>
                          <p className="font-medium text-sm">SSO Sécurisé</p>
                          <p className="text-xs text-zinc-500">Authentification active</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Bottom */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-around text-xs text-zinc-400">
                    <div className="flex flex-col items-center text-[#00B074]">
                      <Monitor size={18} />
                      <span className="mt-1">Hub</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Compass size={18} />
                      <span className="mt-1">Espaces</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Layers size={18} />
                      <span className="mt-1">Équipe</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -left-8 bottom-12 hidden xl:block bg-white dark:bg-zinc-900/90 backdrop-blur-xl p-4 rounded-3xl shadow-xl border border-zinc-100 dark:border-zinc-800 w-52 transition-all hover:-translate-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                    <Smartphone size={20} className="text-[#00B074]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Contrôle Tactile</p>
                    <p className="text-xs text-zinc-500">Environnement en temps réel</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 top-20 hidden xl:block bg-white dark:bg-zinc-900/90 backdrop-blur-xl p-4 rounded-3xl shadow-xl border border-zinc-100 dark:border-zinc-800 w-52 transition-all hover:-translate-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-zinc-900 flex items-center justify-center">
                    <Cpu size={20} className="text-[#00B074]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">IA Intégrée</p>
                    <p className="text-xs text-zinc-500">Optimisation automatique</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}