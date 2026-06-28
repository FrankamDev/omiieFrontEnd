interface StatCardProps {
  number: string;
  label: string;
  suffix?: string;
  desc?: string;
}

export default function StatCard({ number, label, suffix = "", desc }: StatCardProps) {
  return (
    <div className="group bg-zinc-900 dark:bg-white border border-zinc-800 dark:border-zinc-200 rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00B074]/10">
      
      <div className="text-6xl md:text-7xl font-black tracking-tighter text-white dark:text-zinc-950 mb-3 transition-all group-hover:text-[#00B074]">
        {number}
        <span className="text-5xl text-[#00B074]">{suffix}</span>
      </div>

      <h3 className="text-xl font-semibold text-white dark:text-zinc-950 mb-2">
        {label}
      </h3>

      {desc && (
        <p className="text-zinc-400 dark:text-zinc-500 text-sm leading-relaxed">
          {desc}
        </p>
      )}
    </div>
  );
}