// import { ReactNode } from 'react';

interface AdvantageCardProps {
//   icon: ReactNode;
  title: string;
  desc: string;
  highlight?: string;
}

export default function AdvantageCard({  title, desc, highlight }: AdvantageCardProps) {
  return (
    <div className="group relative bg-zinc-900 dark:bg-white border border-zinc-800 dark:border-zinc-200 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00B074]/10">
      
      {/* Icon */}
      <div className="mb-6">
        <div className="w-14 h-14 flex items-center justify-center text-[#00B074] bg-zinc-800 dark:bg-zinc-100 rounded-2xl transition-transform group-hover:scale-110">
          {/* {icon} */}
        </div>
      </div>

      
      {highlight && (
        <div className="text-xs font-mono tracking-widest text-[#00B074] mb-3">
          {highlight}
        </div>
      )}

      {/* Title */}
      <h3 className="text-2xl font-bold text-white dark:text-zinc-950 mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-zinc-400 dark:text-zinc-500 leading-relaxed">
        {desc}
      </p>

      {/* Decorative bottom accent */}
      <div className="absolute bottom-6 right-6 text-7xl font-black text-zinc-800 dark:text-zinc-100/30 select-none transition-all group-hover:text-[#00B074]/10">
        0{highlight?.slice(0,1) || ''}
      </div>
    </div>
  );
}