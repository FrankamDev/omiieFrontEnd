import { useState } from 'react';
import { Target, Eye, Building2, Layers, ArrowRightCircle } from 'lucide-react'; // À adapter selon ton package (ex: lucide-react)

export default function AboutPreview() {
  const [activeStep, setActiveStep] = useState(0);

  const pillars = [
    {
      title: "Notre Mission",
      tagline: "Optimiser l'existant, connecter les énergies",
      icon: <Target className="text-[#00B074]" size={16} />,
      desc: "Nous concevons des environnements d'entreprise d'une fluidité absolue. En restructurant vos milieux physiques et en intégrant des interfaces de contrôle agiles, nous permettons à vos talents de se concentrer sur ce qu'ils font de mieux.",
      details: [
        "Réduction des frictions spatiales quotidiennes",
        "Éradication des silos applicatifs",
        "Espaces ergonomiques sains et durables"
      ]
    },
    {
      title: "Notre Vision",
      tagline: "L'harmonie totale entre l'Humain et son cadre",
      icon: <Eye className="text-[#00B074]" size={16} />,
      desc: "Nous projetons un monde où les bureaux physiques et les outils digitaux ne forment qu'un seul écosystème respirant, intelligent et auto-adaptatif. OMIIE se positionne comme le chef d'orchestre de cette transition.",
      details: [
        "Infrastructures auto-modulables en temps réel",
        "Souveraineté et sécurité absolue des données",
        "Empreinte carbone structurelle optimisée"
      ]
    }
  ];

  return (
    <section id="about" className="relative py-16 md:py-24 dark:bg-zinc-50 bg-zinc-950 border-y border-zinc-200/50 dark:border-zinc-900 transition-colors duration-500 overflow-hidden">
      
      {/* BACKGROUND - Minimal Technical Dots */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:2rem_2rem] [mask-image:radial-gradient(circle_at_center,#000_60%,transparent_100%)] opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full dark:bg-zinc-100 bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-4">
            <Building2 size={10} className="text-[#00B074]" />
            Qui est OMIIE ?
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 mb-4 leading-tight">
            L'architecte de vos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B074] to-emerald-500 dark:from-[#00B074] dark:to-emerald-400">environnements hybrides</span>.
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Né de la fusion entre l'ingénierie d'espace et les technologies d'interfaces logicielles, OMIIE redéfinit la manière dont les entreprises collaborent, s'organisent et évoluent au quotidien.
          </p>
        </div>

        {/* MAIN STRUCTURAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: SCHEMATIC FLOW MAP */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[4/5] bg-white dark:bg-zinc-900/40 backdrop-blur-sm rounded-2xl border border-zinc-200 dark:border-zinc-900 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] dark:shadow-none flex flex-col justify-between overflow-hidden">
              
              {/* Technical Header */}
              <div className="flex justify-between items-center border-b border-zinc-100 dark:border-zinc-900 pb-3">
                <span className="text-[9px] font-mono font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">omiie_architecture_map</span>
                <span className="flex h-1.5 w-1.5 rounded-full bg-[#00B074] relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B074] opacity-75"></span>
                </span>
              </div>

              {/* Blueprint Content */}
              <div className="relative flex-grow flex flex-col justify-center gap-5 my-6">
                
                {/* Layer 1 — Physical Spaces */}
                <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 rounded-xl p-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.01)] transition-colors duration-300 hover:border-[#00B074]/30 group">
                  <span className="absolute -top-2 left-3 px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[7px] font-mono font-bold rounded text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Niveau 1 — Espaces
                  </span>
                  <div className="flex gap-3 items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#00B074] group-hover:scale-125 transition-transform"></div>
                    <div className="space-y-1.5 flex-grow">
                      <div className="w-24 h-1.5 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                      <div className="w-16 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Layer 2 — Digital Interfaces */}
                <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 rounded-xl p-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.01)] transition-colors duration-300 hover:border-[#00B074]/30 group">
                  <span className="absolute -top-2 left-3 px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[7px] font-mono font-bold rounded text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Niveau 2 — Interfaces
                  </span>
                  <div className="flex gap-3 items-center">
                    <div className="p-1 rounded bg-[#00B074]/10 text-[#00B074]">
                      <Layers size={11} />
                    </div>
                    <div className="space-y-1.5 flex-grow">
                      <div className="w-32 h-1.5 bg-[#00B074]/20 dark:bg-[#00B074]/30 rounded-full"></div>
                      <div className="w-20 h-1 bg-[#00B074]/5 dark:bg-[#00B074]/10 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Engineering Grid Underlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#00B074_0.5px,transparent_0.5px)] [background-size:10px_10px] opacity-10 pointer-events-none"></div>
              </div>

              {/* Technical Footer */}
              <div className="border-t border-zinc-100 dark:border-zinc-900 pt-3 flex justify-between items-center text-[9px] font-mono text-zinc-400 dark:text-zinc-500">
                <span>Alignement structurel</span>
                <span className="text-[#00B074] font-semibold">100% Cohérent</span>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: CORE PILLARS & ACCORDION-TAB */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            
            {/* Minimalist Navigation Line */}
            <div className="flex gap-6 border-b border-zinc-200 dark:border-zinc-900 mb-6">
              {pillars.map((pillar, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`pb-3 text-sm font-bold tracking-tight relative transition-all duration-300 ${
                    activeStep === idx 
                      ? 'text-zinc-900 dark:text-zinc-50' 
                      : 'text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400'
                  }`}
                >
                  {pillar.title}
                  {activeStep === idx && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00B074] rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Content Display with Fixed Height Constraints */}
            <div className="min-h-[220px] flex flex-col justify-between relative overflow-hidden">
              {pillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className={`transition-all duration-300 transform space-y-4 ${
                    activeStep === idx 
                      ? 'opacity-100 translate-y-0 relative' 
                      : 'opacity-0 translate-y-2 pointer-events-none absolute inset-x-0'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-[#00B074]/10 dark:bg-[#00B074]/20 text-[#00B074]">
                      {pillar.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-50">
                      {pillar.tagline}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl">
                    {pillar.desc}
                  </p>

                  {/* Refined Check List */}
                  <ul className="space-y-2 pt-1">
                    {pillar.details.map((detail, index) => (
                      <li key={index} className="flex items-center gap-2.5">
                        <span className="h-1 w-1 rounded-full bg-[#00B074]"></span>
                        <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Action Button CTA */}
              <div className="flex items-center mt-6 pt-2">
                <button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800/80 text-white dark:text-zinc-100 px-5 py-2.5 rounded-xl text-xs font-semibold border border-transparent dark:border-zinc-800/60 shadow-sm transition-all duration-300">
                  En savoir plus sur nous
                  <ArrowRightCircle size={13} className="text-zinc-400 group-hover:text-[#00B074] group-hover:translate-x-0.5 transition-all duration-200" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}