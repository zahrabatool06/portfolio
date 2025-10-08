import { ArrowRight, TrendingUp } from 'lucide-react';
import { Card, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRouter } from './Router';
import { caseStudies } from '../data/caseStudies';
import { CryptoPattern } from './CryptoPattern';

export function Portfolio() {
  const { navigate } = useRouter();

  // Map case studies to portfolio format
  const projects = caseStudies.map(caseStudy => ({
    id: caseStudy.slug,
    title: caseStudy.title,
    category: caseStudy.category,
    description: caseStudy.description,
    image: caseStudy.images.hero,
    technologies: caseStudy.technologies,
    slug: caseStudy.slug
  }));

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-[200px]">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Portfolio</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of successful crypto P2P trading projects, blockchain solutions, and trading automation systems.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => {

            
            return (
              <Card 
                key={project.id} 
                className="w-full bg-card border border-border hover:shadow-xl transition-all duration-300 group md:sticky md:top-20 relative overflow-hidden"
                style={{ zIndex: index + 1 }}
              >
                <CryptoPattern density="light" className="opacity-30" />
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 p-4 sm:p-6 md:p-8 relative z-10">
                  {/* Image Section */}
                  <div className="lg:w-1/3 flex-shrink-0">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:w-2/3 space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <CardTitle className="text-xl sm:text-2xl text-foreground">{project.title}</CardTitle>
                    </div>
                    
                    <div className="space-y-4 sm:space-y-6">
                      <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <button
                        onClick={() => navigate(`/case-study/${project.slug}`)}
                        className="mt-6 inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors group"
                      >
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>


      </div>
    </section>
  );
}