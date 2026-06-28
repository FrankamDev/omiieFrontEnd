// import { ReactNode } from 'react';

interface StepCardProps {
  number: number;
  title: string;
  desc: string;
//   icon: ReactNode;
  isLast?: boolean;
}

export default function StepCard({ number, title, desc, isLast }: StepCardProps) {
  return (
    <div className="relative group">
      {/* Card */}
      <div className="bg-zinc-900 dark:bg-white border border-zinc-800 dark:border-zinc-200 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00B074]/10">
        
        {/* Numéro + Icon */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 flex items-center justify-center bg-zinc-800 dark:bg-zinc-100 text-[#00B074] rounded-2xl font-bold text-2xl border border-zinc-700 dark:border-zinc-200">
            {number}
          </div>
          <div className="text-[#00B074]">
            OK
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white dark:text-zinc-950 mb-3">
          {title}
        </h3>
        
        <p className="text-zinc-400 dark:text-zinc-500 leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Ligne de connexion (sauf la dernière) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-zinc-700 to-transparent z-[-1]" />
      )}
    </div>
  );
}