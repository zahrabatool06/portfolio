import { ArrowLeft, Calendar, Tag, Quote } from 'lucide-react';
import { useRouter } from './Router';
import { caseStudies } from '../data/caseStudies';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CaseStudyDetail() {
  const { params, goBack } = useRouter();
  const caseStudy = caseStudies.find(cs => cs.slug === params.slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-foreground mb-4">Case Study Not Found</h1>
          <button
            onClick={goBack}
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="px-4 sm:px-8 lg:px-48 xl:px-72 2xl:px-96 pt-20 sm:pt-24 pb-8">
        <button
          onClick={goBack}
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </button>
      </div>

      {/* Hero Section */}
      <section className="px-4 sm:px-8 lg:px-48 xl:px-72 2xl:px-96 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm">
              <Tag className="w-3 h-3 mr-1" />
              {caseStudy.category}
            </span>
            <span className="inline-flex items-center text-muted-foreground text-sm">
              <Calendar className="w-3 h-3 mr-1" />
              {caseStudy.year}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            {caseStudy.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            {caseStudy.client}
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {caseStudy.description}
          </p>



          {/* Hero Image */}
          <div className="relative mb-12">
            <ImageWithFallback
              src={caseStudy.images.hero}
              alt={caseStudy.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="px-4 sm:px-8 lg:px-48 xl:px-72 2xl:px-96 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 text-center">
            Key Results
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudy.metrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-background border border-border">
                <div className="text-2xl sm:text-3xl font-semibold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="px-4 sm:px-8 lg:px-48 xl:px-72 2xl:px-96 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="px-4 sm:px-8 lg:px-48 xl:px-72 2xl:px-96 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 text-center">
            Technologies Used
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {caseStudy.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-8 lg:px-48 xl:px-72 2xl:px-96 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 text-center">
            Key Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {caseStudy.features.map((feature, index) => (
              <div key={index} className="p-4 bg-background border border-border">
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-4 sm:px-8 lg:px-48 xl:px-72 2xl:px-96 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 text-center">
            Project Outcomes
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-background border border-border">
                <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                <span className="text-foreground">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="px-4 sm:px-8 lg:px-48 xl:px-72 2xl:px-96 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
            <blockquote className="text-xl text-foreground mb-6 leading-relaxed">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div>
                <cite className="font-semibold text-foreground not-italic">
                  {caseStudy.testimonial.author}
                </cite>
                <p className="text-muted-foreground text-sm">
                  {caseStudy.testimonial.position}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="px-4 sm:px-8 lg:px-48 xl:px-72 2xl:px-96 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 text-center">
            Project Gallery
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {caseStudy.images.gallery.map((image, index) => (
              <div key={index} className="relative">
                <ImageWithFallback
                  src={image}
                  alt={`${caseStudy.title} - Image ${index + 1}`}
                  className="w-full h-48 sm:h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-8 lg:px-48 xl:px-72 2xl:px-96 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Ready for Your Next Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's create something amazing together. Get in touch to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              Start Your Project
            </button>
            <button 
              onClick={goBack}
              className="px-8 py-3 border border-border text-foreground hover:bg-muted transition-colors"
            >
              View More Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}