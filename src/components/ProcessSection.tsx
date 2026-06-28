
import { 
  Search, 
  Lightbulb, 
  Hammer, 
  TrendingUp, 
  Zap 
} from 'lucide-react';
import StepCard from './StepCard';


const steps = [
  {
    number: 1,
    title: "Analyse du besoin",
    desc: "Étude approfondie de vos environnements actuels, identification des points de friction et compréhension fine de vos objectifs stratégiques.",
    icon: <Search size={28} />
  },
  {
    number: 2,
    title: "Proposition de solution",
    desc: "Présentation d'une stratégie sur-mesure avec des scénarios d'aménagement, des solutions technologiques et une estimation détaillée.",
    icon: <Lightbulb size={28} />
  },
  {
    number: 3,
    title: "Mise en œuvre",
    desc: "Exécution du projet avec une gestion agile : conception, aménagement, intégration technologique et formation des équipes.",
    icon: <Hammer size={28} />
  },
  {
    number: 4,
    title: "Suivi & Optimisation",
    desc: "Accompagnement post-projet avec suivi des performances, ajustements continus et optimisation pour maximiser le ROI.",
    icon: <TrendingUp size={28} />
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-20 md:py-28 bg-zinc-950 dark:bg-zinc-50 transition-colors duration-500 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] dark:bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 dark:bg-white border border-zinc-700 dark:border-zinc-200 mb-6">
            <Zap className="text-[#00B074]" size={16} />
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">NOTRE MÉTHODOLOGIE</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white dark:text-zinc-950 mb-6">
            Un processus clair, <span className="text-[#00B074]">efficace</span> et transparent.
          </h2>

          <p className="text-zinc-400 dark:text-zinc-500 text-lg">
            Nous suivons une méthodologie éprouvée en 4 phases pour garantir le succès de chaque projet.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              desc={step.desc}
            //   icon={step.icon}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-3 bg-white dark:bg-zinc-900 hover:bg-[#00B074] hover:text-white text-zinc-950 dark:text-white px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 shadow-lg">
            Lancer mon projet avec OMIIE
            <Zap size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}