import { Zap } from 'lucide-react';
import StatCard from './StatCard';

const stats = [
  {
    number: "50",
    suffix: "+",
    label: "Projets réalisés",
    desc: "Dans des secteurs variés et complexes"
  },
  {
    number: "20",
    suffix: "+",
    label: "Entreprises accompagnées",
    desc: "De startups aux grands groupes"
  },
  {
    number: "5",
    suffix: "",
    label: "Domaines d'expertise",
    desc: "Couvrant tout le spectre de la transformation"
  },
  {
    number: "98",
    suffix: "%",
    label: "Taux de satisfaction",
    desc: "Mesuré sur nos clients post-projet"
  }
];

export default function StatsSection() {
  return (
    <section className="relative py-20 md:py-24 bg-zinc-950 dark:bg-zinc-50 border-y border-zinc-800 dark:border-zinc-200 transition-colors duration-500">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 dark:bg-white border border-zinc-700 dark:border-zinc-200 mb-6">
            <Zap className="text-[#00B074]" size={16} />
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">EN CHIFFRES</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white dark:text-zinc-950">
            Des résultats <span className="text-[#00B074]">concrets</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              desc={stat.desc}
            />
          ))}
        </div>

      </div>
    </section>
  );
}