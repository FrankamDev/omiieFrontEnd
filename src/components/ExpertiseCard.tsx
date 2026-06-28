import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface ExpertiseCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  tag: string;
}

export default function ExpertiseCard({
  icon,
  title,
  desc,
  tag,
}: ExpertiseCardProps) {
  return (
    <div
      className="
        group relative
        bg-zinc-900 dark:bg-white
        border border-zinc-800 dark:border-zinc-200
        rounded-3xl
        p-8
        flex flex-col
        h-full
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        hover:shadow-[#00B074]/10
      "
    >

      {/* Icon */}
      <div className="mb-8 transition-transform duration-500 group-hover:scale-110">
        <div
          className="
            w-16 h-16
            flex items-center justify-center
            text-[#00B074]
            bg-zinc-800 dark:bg-zinc-100
            rounded-2xl
          "
        >
          {icon}
        </div>
      </div>


      {/* Tag */}
      <span
        className="
          inline-block
          px-3 py-1
          text-xs
          font-mono
          tracking-widest
          bg-zinc-800 dark:bg-zinc-100
          text-[#00B074]
          rounded-full
          mb-4
          w-fit
        "
      >
        {tag}
      </span>


      {/* Title */}
      <h3
        className="
          text-2xl
          font-bold
          text-white dark:text-zinc-950
          mb-4
          leading-tight
        "
      >
        {title}
      </h3>


      {/* Description */}
      <p
        className="
          text-zinc-400
          dark:text-zinc-500
          flex-1
          leading-relaxed
          mb-8
        "
      >
        {desc}
      </p>


      {/* Button */}
      <button
        type="button"
        className="
          mt-auto
          flex items-center gap-2
          text-sm
          font-semibold
          text-[#00B074]
          group-hover:gap-3
          transition-all duration-300
        "
      >
        Explorer

        <ArrowRight
          size={18}
          className="
            transition-transform duration-300
            group-hover:translate-x-1
          "
        />
      </button>


      {/* Hover Accent Line */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-0.5
          bg-gradient-to-r
          from-[#00B074]
          to-transparent
          scale-x-0
          group-hover:scale-x-100
          transition-transform
          origin-left
        "
      />

    </div>
  );
}