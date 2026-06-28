import { useState } from 'react';
import { Zap, Lightbulb, Monitor, Building2, Users } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    id: 1,
    icon: <Lightbulb size={32} />,
    title: "Conseil Stratégique",
    desc: "Audit complet de vos environnements de travail et définition d'une feuille de route personnalisée pour une transformation réussie.",
    tag: "STRATÉGIE"
  },
  {
    id: 2,
    icon: <Monitor size={32} />,
    title: "Transformation Digitale",
    desc: "Conception et déploiement d'interfaces intelligentes qui synchronisent espaces physiques et outils numériques.",
    tag: "DIGITAL"
  },
  {
    id: 3,
    icon: <Building2 size={32} />,
    title: "Solutions Entreprises",
    desc: "Aménagement d'espaces de travail hybrides, ergonomiques et technologiques adaptés à la culture de votre organisation.",
    tag: "AMÉNAGEMENT"
  },
  {
    id: 4,
    icon: <Users size={32} />,
    title: "Accompagnement",
    desc: "Formation des équipes, suivi post-déploiement et optimisation continue pour maximiser l'adoption et la performance.",
    tag: "HUMAIN"
  }
];

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
console.log(hoveredId);

  return (
    <section id="services" className="relative py-20 md:py-28 bg-zinc-950 bg-zinc-50 transition-colors duration-500 overflow-hidden">
      
      {/* Background Subtil */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] dark:bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 dark:bg-white border border-zinc-700 dark:border-zinc-200 mb-6">
            <Zap className="text-[#00B074]" size={16} />
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">NOS EXPERTISES</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white dark:text-zinc-950 mb-6">
            Des solutions sur-mesure pour des environnements <span className="text-[#00B074]">intelligents</span>.
          </h2>

          <p className="text-zinc-400 dark:text-zinc-500 text-lg">
            Nous intervenons à toutes les étapes de votre transformation : du conseil stratégique à l'accompagnement humain.
          </p>
        </div>

        {/* Grid des Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
              tag={service.tag}
              onHover={(isHovering) => setHoveredId(isHovering ? service.id : null)}
            />
          ))}
        </div>

        {/* CTA Global */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-3 bg-white dark:bg-zinc-900 hover:bg-[#00B074] hover:text-white text-zinc-950 dark:text-white px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 shadow-lg">
            Discuter de votre projet
            <Zap size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}