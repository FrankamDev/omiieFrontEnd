import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    name: "Sophie Laurent",
    position: "Directrice des Opérations",
    company: "Banque Verde",
    testimonial: "OMIIE a complètement transformé notre siège social. L'approche à la fois architecturale et digitale a permis une adoption exceptionnelle de nos équipes. Le résultat dépasse largement nos attentes."
  },
  {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    name: "Marc Dubois",
    position: "CEO & Fondateur",
    company: "TechNova",
    testimonial: "Travailler avec OMIIE a été une révélation. Ils ont su comprendre notre culture startup tout en nous apportant une vision stratégique long terme."
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    name: "Aïcha Diallo",
    position: "Directrice Expérience Collaborateur",
    company: "Harmonie Group",
    testimonial: "Enfin un partenaire qui pense vraiment 'humain' avant tout. Les espaces créés sont beaux, intelligents et surtout, nos collaborateurs s'y sentent vraiment bien."
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section id="testimonials" className="relative py-20 md:py-28 bg-zinc-950 dark:bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 dark:bg-white border border-zinc-700 dark:border-zinc-200 mb-6">
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">CE QU'ILS EN DISENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white dark:text-zinc-950">
            Des clients qui nous font confiance
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          
          {/* Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-zinc-900 dark:bg-white p-4 rounded-full shadow-lg hover:bg-[#00B074] hover:text-white transition-all z-10"
          >
            <ChevronLeft size={26} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-zinc-900 dark:bg-white p-4 rounded-full shadow-lg hover:bg-[#00B074] hover:text-white transition-all z-10"
          >
            <ChevronRight size={26} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-[#00B074] scale-125' 
                    : 'bg-zinc-600 dark:bg-zinc-400 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}