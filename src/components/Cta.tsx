import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-28 md:py-36 bg-zinc-950 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#00B074_1px,transparent_1px)] [background-size:60px_60px] opacity-10" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black tracking-[-2px] text-white leading-none mb-8">
          Prêt à passer à l’étape<br /> 
          <span className="bg-gradient-to-r from-[#00B074] to-emerald-400 bg-clip-text text-transparent">supérieure ?</span>
        </h2>

        <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto">
          Transformons ensemble vos idées en environnements de travail exceptionnels.
        </p>

        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="group bg-white text-zinc-950 hover:bg-[#00B074] hover:text-white px-12 py-6 rounded-3xl text-xl font-semibold flex items-center gap-4 mx-auto transition-all duration-300 hover:shadow-2xl hover:shadow-[#00B074]/40"
        >
          Contactez OMIIE maintenant
          <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </section>
  );
}