import ProjectCard from './ProjectCard';

const projects = [
  {
    image: "/images/projects/project-1.jpg", // Remplace par tes vraies images
    title: "Siège Social - Banque Verde",
    desc: "Transformation complète d'un immeuble de 12 000 m² en espace de travail hybride intelligent.",
    category: "Corporate",
    client: "BANQUE VERDE"
  },
  {
    image: "/images/projects/project-2.jpg",
    title: "Campus Innovation - TechNova",
    desc: "Création d'un campus collaboratif de 8 000 m² alliant espaces de travail, labs et zones de créativité.",
    category: "Innovation",
    client: "TECHNOVA"
  },
  {
    image: "/images/projects/project-3.jpg",
    title: "Espace Well-Being - Harmonie Group",
    desc: "Aménagement centré sur le bien-être avec intégration de technologies de monitoring environnemental.",
    category: "Wellness",
    client: "HARMONIE GROUP"
  },
  {
    image: "/images/projects/project-4.jpg",
    title: "Siège Régional - ÉcoLogis",
    desc: "Bâtiment à énergie positive combinant architecture bioclimatique et solutions digitales avancées.",
    category: "Éco-Responsable",
    client: "ÉCOLOGIS"
  }
];

export default function ProjectsPreview() {
  return (
    <section id="projects" className="relative py-20 md:py-28 bg-zinc-950 dark:bg-zinc-50 transition-colors duration-500 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 dark:bg-white border border-zinc-700 dark:border-zinc-200 mb-6">
              <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">RÉALISATIONS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white dark:text-zinc-950">
              Des projets qui <span className="text-[#00B074]">transforment</span>.
            </h2>
          </div>
          
          <a href="#portfolio" className="text-[#00B074] font-semibold flex items-center gap-2 hover:gap-3 transition-all mt-4 lg:mt-0">
            Voir tous les projets →
          </a>
        </div>

        {/* Grid des Projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              desc={project.desc}
              category={project.category}
              client={project.client}
            />
          ))}
        </div>
      </div>
    </section>
  );
}