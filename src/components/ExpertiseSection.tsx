import { Zap, Lightbulb, Target, Cpu, Users } from "lucide-react";
import { motion } from "framer-motion";
import ExpertiseCard from "./ExpertiseCard";
import type { ReactNode } from "react";
import type { Variants } from "framer-motion";

interface Expertise {
  id: number;
  icon: ReactNode;
  title: string;
  desc: string;
  tag: string;
}

const expertises: Expertise[] = [
  {
    id: 1,
    icon: <Lightbulb size={32} />,
    title: "Innovation",
    desc: "Conception d'expériences uniques et création de solutions avant-gardistes qui anticipent les besoins futurs des organisations.",
    tag: "CRÉATIVITÉ",
  },
  {
    id: 2,
    icon: <Target size={32} />,
    title: "Stratégie",
    desc: "Définition de visions claires et d'une feuille de route alignée sur vos objectifs business et culturels.",
    tag: "VISION",
  },
  {
    id: 3,
    icon: <Cpu size={32} />,
    title: "Technologie",
    desc: "Intégration intelligente de solutions digitales et physiques pour créer des environnements connectés et performants.",
    tag: "INGÉNIERIE",
  },
  {
    id: 4,
    icon: <Users size={32} />,
    title: "Organisation",
    desc: "Optimisation des processus humains et structuration d'équipes pour une collaboration fluide et productive.",
    tag: "HUMAIN",
  },
];


const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};



const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


export default function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="
        relative 
        py-20 md:py-28
        bg-zinc-950 dark:bg-zinc-50
        overflow-hidden
      "
    >

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(#27272a_1px,transparent_1px)]
            dark:bg-[radial-gradient(#e4e4e7_1px,transparent_1px)]
            [background-size:40px_40px]
            opacity-40
          "
        />
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">


        {/* Header */}
        <motion.div
          initial={{
            opacity:0,
            y:30
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{
            once:true
          }}
          transition={{
            duration:0.7
          }}
          className="text-center max-w-3xl mx-auto mb-16"
        >

          <div
            className="
              inline-flex items-center gap-2
              px-4 py-2
              rounded-full
              bg-zinc-900 dark:bg-white
              border border-zinc-700 dark:border-zinc-200
              mb-6
            "
          >
            <Zap
              size={16}
              className="text-[#00B074]"
            />

            <span
              className="
                text-xs font-bold
                tracking-widest
                uppercase
                text-zinc-400
              "
            >
              NOS DOMAINES D'EXPERTISE
            </span>

          </div>


          <h2
            className="
              text-4xl md:text-5xl
              font-black
              tracking-tight
              text-white dark:text-zinc-950
              mb-6
            "
          >
            Une expertise globale au service de vos{" "}
            <span className="text-[#00B074]">
              environnements
            </span>
          </h2>


          <p
            className="
              text-zinc-400
              dark:text-zinc-500
              text-lg
            "
          >
            Nous maîtrisons l'ensemble des dimensions nécessaires à la création
            d'espaces de travail intelligents et performants.
          </p>


        </motion.div>



        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once:true
          }}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >

          {expertises.map((item)=>(
            <motion.div
              key={item.id}
              variants={cardVariants}
            >

              <ExpertiseCard
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                tag={item.tag}
              />

            </motion.div>
          ))}


        </motion.div>



        {/* CTA */}
        <motion.div
          initial={{
            opacity:0,
            y:30
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{
            once:true
          }}
          transition={{
            delay:0.4
          }}
          className="text-center mt-16"
        >

          <button
            type="button"
            className="
              inline-flex
              items-center
              gap-3
              bg-white dark:bg-zinc-900
              text-zinc-950 dark:text-white
              hover:bg-[#00B074]
              hover:text-white
              px-8 py-4
              rounded-2xl
              font-semibold
              transition-all
              duration-300
              shadow-lg
            "
          >

            Découvrir nos réalisations

            <Zap size={20}/>

          </button>


        </motion.div>


      </div>

    </section>
  );
}