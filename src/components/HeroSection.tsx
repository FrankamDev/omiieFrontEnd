import  { useState } from 'react';
import { 
  Sparkles, ArrowUpRight, Play, CheckCircle2, Shield, 
  Wifi, Battery, Cpu, Compass, Layers, TrendingUp, Monitor, Smartphone 
} from 'lucide-react'; // Remplace par ta bibliothèque d'icônes (lucide-react)

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('space');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden selection:bg-[#00B074]/30 selection:text-zinc-900 dark:selection:text-white">
      
      {/* BACKGROUND - Ultra Minimalist Technical Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(228,228,231,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.3)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(39,39,42,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(39,39,42,0.25)_1px,transparent_1px)] [background-size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_40%,transparent_100%)]"></div>
        
        {/* Soft Ambient Textures (No harsh lighting) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-emerald-500/10 via-teal-500/5 to-transparent dark:from-[#00B074]/5 dark:via-zinc-950/0 rounded-full blur-[120px] opacity-70"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            
            {/* Premium Micro-Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/50 w-fit mx-auto lg:mx-0 mb-6 backdrop-blur-sm shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#00B074] relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B074] opacity-75"></span>
              </span>
              <span className="text-[10px] font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                Architecture & Digital
                <Sparkles size={10} className="text-[#00B074]" />
              </span>
            </div>

            {/* High-End Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.05] mb-6">
              Orchestrez vos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B074] via-emerald-500 to-teal-500 dark:from-[#00B074] dark:to-emerald-400">milieux</span> <br className="hidden sm:inline" />
              & <span className="relative inline-block text-zinc-900 dark:text-white">interfaces<span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#00B074]/20 rounded-full"></span></span> d'entreprise.
            </h1>

            {/* Description Text */}
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed font-normal">
              OMIIE réinvente la convergence spatiale. Nous fusionnons l'ergonomie physique de vos environnements avec des architectures applicatives ultra-fluides, conçues pour la performance collective.
            </p>

            {/* Actions Buttons (Refined & Smaller) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
              <button className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-[#00B074] hover:bg-[#009662] dark:bg-[#00B074] dark:hover:bg-[#00c783] text-white px-6 py-3 rounded-xl text-xs font-bold shadow-[0_4px_12px_rgba(0,176,116,0.15)] hover:shadow-[0_6px_20px_rgba(0,176,116,0.25)] dark:shadow-none transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
                Lancer ma transition
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
              
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white dark:bg-zinc-900/40 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800/80 px-6 py-3 rounded-xl text-xs font-bold shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
                <Play size={12} fill="currentColor" className="text-[#00B074]" />
                Découvrir la méthode
              </button>
            </div>

            {/* Trust Anchors - Cleaner Layout */}
            <div className="mt-10 pt-6 border-t border-zinc-100 dark:border-zinc-900 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#00B074]" />
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Norme ergonomique ISO</span>
              </div>
              <div className="w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full hidden sm:inline-block"></div>
              <div className="flex items-center gap-2">
                <Shield size={14} className="text-[#00B074]" />
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Chiffrement & Sécurité locale</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: HIGH-TECH SMARTPHONE MOCKUP */}
          <div className="lg:col-span-5 w-full flex items-center justify-center relative">
            
            {/* Subtle backlight glow */}
            <div className="absolute w-60 h-[460px] bg-emerald-500/5 dark:bg-[#00B074]/5 rounded-[40px] blur-[50px] pointer-events-none"></div>
            
            {/* SMARTPHONE CONTAINER */}
            <div className="relative w-[290px] h-[580px] rounded-[44px] border-[10px] border-zinc-900 dark:border-zinc-900 bg-zinc-950 dark:bg-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] p-2.5 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:scale-[1.01]">
              
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-zinc-900 dark:bg-black rounded-full z-30 flex items-center justify-between px-3">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-950"></div>
                <div className="w-2.5 h-1 rounded-full bg-zinc-800/80"></div>
              </div>

              {/* System Status Bar */}
              <div className="flex items-center justify-between px-4 pt-1 pb-2 text-[9px] font-semibold text-zinc-400 dark:text-zinc-500 z-20 font-mono select-none">
                <span>09:41</span>
                <div className="flex items-center gap-1">
                  <Wifi size={8} />
                  <span>5G</span>
                  <Battery size={10} />
                </div>
              </div>

              {/* NATIVE APP SIMULATION */}
              <div className="flex-grow w-full rounded-[34px] bg-zinc-50 dark:bg-zinc-950 p-3.5 flex flex-col justify-between overflow-hidden relative border border-zinc-200/50 dark:border-zinc-900/40">
                
                {/* App Header */}
                <div className="flex items-center justify-between border-b border-zinc-200/60 dark:border-zinc-900 pb-2.5 mt-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-zinc-900 dark:bg-zinc-900 flex items-center justify-center text-[#00B074] border border-zinc-200/10">
                      <Cpu size={13} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-zinc-900 dark:text-zinc-50 leading-none">OMIIE Hub</h4>
                      <p className="text-[7px] text-zinc-400 dark:text-zinc-500 font-mono mt-0.5">Workspace OS v1.0</p>
                    </div>
                  </div>
                  <span className="flex h-1.5 w-1.5 rounded-full bg-[#00B074]"></span>
                </div>

                {/* Tab Segment Switcher */}
                <div className="grid grid-cols-2 bg-zinc-200/50 dark:bg-zinc-900/80 p-0.5 rounded-lg my-2.5 border border-zinc-200/10">
                  <button 
                    onClick={() => setActiveTab('space')}
                    className={`py-1 rounded-md text-[9px] font-bold transition-all duration-300 ${activeTab === 'space' ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] border-zinc-200/10' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
                  >
                    Espaces Physiques
                  </button>
                  <button 
                    onClick={() => setActiveTab('interface')}
                    className={`py-1 rounded-md text-[9px] font-bold transition-all duration-300 ${activeTab === 'interface' ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] border-zinc-200/10' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
                  >
                    Outils Digitaux
                  </button>
                </div>

                {/* DYNAMIC CONTENT CONTAINER WITH SMOOTH ANIMATION */}
                <div className="flex-grow flex flex-col justify-start py-0.5 overflow-hidden relative">
                  <div className={`transition-all duration-300 transform space-y-2 ${activeTab === 'space' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none absolute inset-x-0'}`}>
                    
                    {/* Card 1: Acoustic */}
                    <div className="bg-white dark:bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-200/60 dark:border-zinc-900 shadow-[0_1px_3px_rgba(0,0,0,0.01)]">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[7.5px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Acoustique & Espace</span>
                        <span className="text-[8.5px] font-mono font-bold text-[#00B074]">Stable</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Compass size={11} className="text-zinc-400" />
                          <span className="text-[10px] font-medium text-zinc-800 dark:text-zinc-200">Open-Space Nord</span>
                        </div>
                        <span className="text-[10px] font-semibold text-zinc-900 dark:text-zinc-100">21.5°C</span>
                      </div>
                      <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-1 rounded-full mt-2 overflow-hidden">
                        <div className="bg-[#00B074] h-full w-[82%] rounded-full"></div>
                      </div>
                    </div>

                    {/* Card 2: Furniture */}
                    <div className="bg-white dark:bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-200/60 dark:border-zinc-900 shadow-[0_1px_3px_rgba(0,0,0,0.01)]">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <CheckCircle2 size={11} className="text-[#00B074]" />
                        <span className="text-[10px] font-medium text-zinc-800 dark:text-zinc-200">Mobilier dynamique</span>
                      </div>
                      <p className="text-[8px] text-zinc-400 dark:text-zinc-500 leading-normal">Postes motorisés synchronisés.</p>
                    </div>

                    {/* Summary Badge */}
                    <div className="bg-[#00B074]/5 dark:bg-[#00B074]/5 p-2 rounded-lg border border-[#00B074]/15 text-center">
                      <span className="text-[9px] font-medium text-zinc-700 dark:text-zinc-300">Qualité globale : <span className="text-[#00B074] font-bold">94%</span></span>
                    </div>
                  </div>

                  <div className={`transition-all duration-300 transform space-y-2 ${activeTab === 'interface' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none absolute inset-x-0'}`}>
                    
                    {/* Card 1: API */}
                    <div className="bg-white dark:bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-200/60 dark:border-zinc-900 shadow-[0_1px_3px_rgba(0,0,0,0.01)]">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[7.5px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Synchronisation SaaS</span>
                        <TrendingUp size={10} className="text-[#00B074]" />
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <Layers size={11} className="text-zinc-400" />
                          <span className="text-[10px] font-medium text-zinc-800 dark:text-zinc-200">Flux d'API Connectés</span>
                        </div>
                        <span className="text-[7.5px] font-mono font-bold bg-[#00B074]/10 text-[#00B074] px-1 py-0.5 rounded">Live</span>
                      </div>
                      {/* Clean Audio-like Waveform */}
                      <div className="flex gap-1 items-end h-5 pt-1">
                        <div className="w-[3px] h-2 bg-[#00B074] rounded-full"></div>
                        <div className="w-[3px] h-4 bg-[#00B074] rounded-full"></div>
                        <div className="w-[3px] h-3 bg-[#00B074] rounded-full"></div>
                        <div className="w-[3px] h-5 bg-[#00B074]/30 rounded-full"></div>
                        <div className="w-[3px] h-4 bg-[#00B074] rounded-full"></div>
                      </div>
                    </div>

                    {/* Card 2: Security */}
                    <div className="bg-white dark:bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-200/60 dark:border-zinc-900 shadow-[0_1px_3px_rgba(0,0,0,0.01)]">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Shield size={11} className="text-[#00B074]" />
                        <span className="text-[10px] font-medium text-zinc-800 dark:text-zinc-200">Passerelle cryptée SSO</span>
                      </div>
                      <p className="text-[8px] text-zinc-400 dark:text-zinc-500 leading-normal">Authentification unique de bout en bout.</p>
                    </div>
                  </div>
                </div>

                {/* Simulated Bottom Navigation */}
                <div className="border-t border-zinc-200/60 dark:border-zinc-900 pt-2.5 flex justify-around text-zinc-400 dark:text-zinc-600 select-none">
                  <div className="flex flex-col items-center text-[#00B074] cursor-pointer">
                    <Monitor size={12} />
                    <span className="text-[6.5px] font-bold mt-0.5">Hub</span>
                  </div>
                  <div className="flex flex-col items-center hover:text-zinc-700 dark:hover:text-zinc-300 cursor-pointer transition-colors">
                    <Compass size={12} />
                    <span className="text-[6.5px] font-medium mt-0.5">Milieux</span>
                  </div>
                  <div className="flex flex-col items-center hover:text-zinc-700 dark:hover:text-zinc-300 cursor-pointer transition-colors">
                    <Layers size={12} />
                    <span className="text-[6.5px] font-medium mt-0.5">Services</span>
                  </div>
                </div>

              </div>
            </div>

            {/* FLOATING CARD 1 - Left Desktop Only */}
            <div className="absolute -left-10 bottom-16 hidden xl:flex items-center gap-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md p-3.5 rounded-xl border border-zinc-200/70 dark:border-zinc-800/60 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-none max-w-[180px] transition-transform duration-300 hover:-translate-y-1">
              <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-[#00B074]">
                <Smartphone size={16} />
              </div>
              <div>
                <h5 className="text-[11px] font-bold text-zinc-900 dark:text-zinc-50">Interface Tactile</h5>
                <p className="text-[9px] text-zinc-400 dark:text-zinc-500 leading-tight mt-0.5">Contrôle instantané de site.</p>
              </div>
            </div>

            {/* FLOATING CARD 2 - Right Desktop Only */}
            <div className="absolute -right-6 top-16 hidden xl:flex items-center gap-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md p-3.5 rounded-xl border border-zinc-200/70 dark:border-zinc-800/60 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-none max-w-[180px] transition-transform duration-300 hover:-translate-y-1">
              <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-[#00B074]">
                <Cpu size={16} />
              </div>
              <div>
                <h5 className="text-[11px] font-bold text-zinc-900 dark:text-zinc-50">Intégration API</h5>
                <p className="text-[9px] text-zinc-400 dark:text-zinc-500 leading-tight mt-0.5">Synchro immédiate.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}