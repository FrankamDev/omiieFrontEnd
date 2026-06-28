import { useState } from 'react';
import { Target, Eye, Building2, Layers, ArrowRightCircle, CheckCircle2 } from 'lucide-react';

export default function AboutPreview() {
  const [activeStep, setActiveStep] = useState(0);

  const pillars = [
    {
      title: "Notre Mission",
      tagline: "Optimiser l'existant, connecter les énergies",
      icon: <Target size={22} />,
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
      icon: <Eye size={22} />,
      desc: "Nous projetons un monde où les bureaux physiques et les outils digitaux ne forment qu'un seul écosystème respirant, intelligent et auto-adaptatif.",
      details: [
        "Infrastructures auto-modulables en temps réel",
        "Souveraineté et sécurité absolue des données",
        "Empreinte carbone structurelle optimisée"
      ]
    }
  ];

  return (
    <section id="about" className="relative py-20 md:py-28 dark:bg-zinc-950 bg-zinc-50 border-y border-zinc-900 dark:border-zinc-200 overflow-hidden transition-colors duration-500">
      
      {/* Background Subtil */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_0.8px,transparent_1px)] dark:bg-[radial-gradient(#e4e4e7_0.8px,transparent_1px)] [background-size:28px_28px] opacity-40" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#00B074]/5 dark:bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 dark:bg-white border border-zinc-800 dark:border-zinc-200 mb-6">
            <Building2 size={16} className="text-[#00B074]" />
            <span className="text-xs font-bold tracking-[2px] uppercase text-zinc-400 dark:text-zinc-500">L'ADN d'OMIIE</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white dark:text-zinc-950 leading-tight mb-6">
            Nous créons des <span className="bg-gradient-to-r from-[#00B074] to-emerald-400 bg-clip-text text-transparent">environnements intelligents</span>.
          </h2>

          <p className="text-zinc-400 dark:text-zinc-500 text-lg max-w-2xl mx-auto">
            Là où l'architecture physique rencontre l'expérience numérique pour donner naissance à des lieux de travail vivants et performants.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT - SCHEMATIC VISUAL */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="dark:bg-zinc-900 bg-white border border-zinc-800 dark:border-zinc-200 rounded-3xl p-8 shadow-2xl shadow-black/30 dark:shadow-none aspect-[4/4.1] flex flex-col">
                
                <div className="flex justify-between items-center mb-8">
                  <div className="font-mono text-xs tracking-widest text-zinc-500 dark:text-zinc-400">ARCHITECTURE MAP</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00B074] rounded-full animate-pulse" />
                    <span className="text-xs text-[#00B074] font-medium">LIVE</span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center gap-8 relative">
                  {/* Layer 1 */}
                  <div className="group relative bg-zinc-800 dark:bg-zinc-100 border border-zinc-700 dark:border-zinc-300 rounded-2xl p-5 transition-all hover:border-[#00B074]">
                    <div className="absolute -top-3 left-6 px-3 py-0.5 dark:bg-zinc-900 bg-white text-[10px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 rounded">PHYSICAL</div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-xl bg-[#00B074]/10 flex items-center justify-center text-[#00B074]">
                        <Layers size={20} />
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="h-1.5 bg-zinc-700 dark:bg-zinc-300 rounded-full w-3/4 group-hover:w-full transition-all" />
                        <div className="h-1 bg-zinc-700 dark:bg-zinc-300 rounded-full w-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* Layer 2 */}
                  <div className="group relative bg-zinc-800 dark:bg-zinc-100 border border-zinc-700 dark:border-zinc-300 rounded-2xl p-5 transition-all hover:border-[#00B074]">
                    <div className="absolute -top-3 left-6 px-3 py-0.5 dark:bg-zinc-900 bg-white text-[10px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 rounded">DIGITAL</div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-xl bg-[#00B074]/10 flex items-center justify-center text-[#00B074]">
                        <Target size={20} />
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="h-1.5 bg-[#00B074] rounded-full w-5/6" />
                        <div className="h-1 bg-[#00B074]/60 rounded-full w-2/3" />
                      </div>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  <div className="absolute left-12 top-1/2 w-0.5 h-20 bg-gradient-to-b from-[#00B074] to-transparent" />
                </div>

                <div className="text-center text-[10px] font-mono text-zinc-500 dark:text-zinc-400 mt-6">
                  ALIGNEMENT TOTAL • SYNCHRONISATION CONTINUE
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - CONTENT */}
          <div className="lg:col-span-7">
            {/* Tabs */}
            <div className="flex border-b border-zinc-800 dark:border-zinc-200 mb-10">
              {pillars.map((pillar, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`pb-5 px-8 font-semibold text-lg tracking-tight transition-all relative ${
                    activeStep === idx 
                      ? 'text-white dark:text-zinc-950' 
                      : 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-200 dark:hover:text-zinc-700'
                  }`}
                >
                  {pillar.title}
                  {activeStep === idx && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00B074] to-emerald-500" />
                  )}
                </button>
              ))}
            </div>

            {/* Dynamic Content */}
            <div className="min-h-[340px] relative">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-500 ${
                    activeStep === idx 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-6 pointer-events-none'
                  }`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="mt-1 p-3 rounded-2xl bg-gradient-to-br from-[#00B074]/10 to-emerald-500/5 text-[#00B074] border border-[#00B074]/10">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white dark:text-zinc-900 mb-2">
                        {pillar.tagline}
                      </h3>
                      <p className="text-zinc-400 dark:text-zinc-500 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {pillar.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <div className="mt-1.5 w-5 h-5 rounded-full bg-[#00B074]/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 size={14} className="text-[#00B074]" />
                        </div>
                        <span className="text-zinc-300 dark:text-zinc-600 text-[15px] leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12">
              <button className="group inline-flex items-center gap-3 bg-white dark:bg-zinc-900 hover:bg-[#00B074] hover:text-white text-zinc-900 dark:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 border border-zinc-700 dark:border-zinc-200">
                Découvrir notre approche
                <ArrowRightCircle size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}