interface TestimonialCardProps {
  image: string;
  name: string;
  position: string;
  company: string;
  testimonial: string;
}

export default function TestimonialCard({ 
  image, 
  name, 
  position, 
  company, 
  testimonial 
}: TestimonialCardProps) {
  return (
    <div className="bg-zinc-900 dark:bg-white border border-zinc-800 dark:border-zinc-200 rounded-3xl p-8 flex flex-col h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#00B074]/10">
      
      {/* Quote Icon */}
      <div className="text-5xl text-[#00B074]/20 mb-6">“</div>

      {/* Testimonial Text */}
      <p className="text-zinc-300 dark:text-zinc-600 text-[15.5px] leading-relaxed flex-1 mb-8">
        {testimonial}
      </p>

      {/* Client Info */}
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 rounded-2xl overflow-hidden border border-zinc-700 dark:border-zinc-300 flex-shrink-0">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div>
          <h4 className="font-semibold text-white dark:text-zinc-950">{name}</h4>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            {position} • {company}
          </p>
        </div>
      </div>
    </div>
  );
}