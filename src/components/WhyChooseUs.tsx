import { Shield, Users, Award, Clock, Zap } from 'lucide-react';
import AdvantageCard from './AdvantageCard';

const advantages = [
  {
    icon: <Shield size={32} />,
    title: "Approche personnalisée",
    desc: "Chaque projet est unique. Nous prenons le temps de comprendre en profondeur votre culture, vos besoins et vos ambitions.",
    highlight: "SUR-MESURE"
  },
  {
    icon: <Users size={32} />,
    title: "Expertise professionnelle",
    desc: "Une équipe multidisciplinaire alliant architectes d'intérieur, ingénieurs UX et experts en transformation digitale.",
    highlight: "MULTI-EXPERTISE"
  },
  {
    icon: <Award size={32} />,
    title: "Solutions adaptées",
    desc: "Des solutions concrètes, scalables et évolutives qui s'intègrent parfaitement à votre écosystème existant.",
    highlight: "INTÉGRATION"
  },
  {
    icon: <Clock size={32} />,
    title: "Accompagnement durable",
    desc: "Un suivi sur le long terme avec optimisation continue et support dédié pour garantir des résultats pérennes.",
    highlight: "LONG TERME"
  }
];

export default function WhyChooseUs() {
  return (
    <section id="whyus" className="relative py-20 md:py-28 bg-zinc-950 dark:bg-zinc-50 transition-colors duration-500 overflow-hidden">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] dark:bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 dark:bg-white border border-zinc-700 dark:border-zinc-200 mb-6">
            <Zap className="text-[#00B074]" size={16} />
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">POURQUOI NOUS CHOISIR</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white dark:text-zinc-950 mb-6">
            Une différence <span className="text-[#00B074]">concrète</span> à chaque étape.
          </h2>

          <p className="text-zinc-400 dark:text-zinc-500 text-lg">
            Nous ne vendons pas juste des aménagements. Nous construisons des partenariats durables basés sur l’excellence et la confiance.
          </p>
        </div>

        {/* Grid des Avantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              // icon={advantage.icon}
              title={advantage.title}
              desc={advantage.desc}
              highlight={advantage.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}