import { ArrowLeft, CheckCircle, Clock, DollarSign, Zap } from 'lucide-react';
import { useRouter } from './Router';
import { services } from '../data/services';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ServiceDetail() {
  const { params, goBack } = useRouter();
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-foreground mb-4">Service Not Found</h1>
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
          Back to Services
        </button>
      </div>

      {/* Hero Section */}
      <section className="px-4 sm:px-8 lg:px-48 xl:px-72 2xl:px-96 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm mb-4">
              {service.category}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-muted-foreground">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                <span>{service.timeline}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <DollarSign className="w-5 h-5 mr-2 text-primary" />
                <span>{service.pricing.basic.price}</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src={`service ${service.slug.replace('-', ' ')}`}
              alt={service.title}
              className="w-full h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-8 lg:px-48 xl:px-72 2xl:px-96 py-12 sm:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 text-center">
            What's Included
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-background border border-border">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="px-4 sm:px-8 lg:px-48 xl:px-72 2xl:px-96 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 text-center">
            Technologies Used
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {service.technologies.map((tech, index) => (
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

      {/* Process Section */}
      <section className="px-4 sm:px-8 lg:px-48 xl:px-72 2xl:px-96 py-12 sm:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 text-center">
            Our Process
          </h2>
          <div className="space-y-6">
            {service.process.map((step, index) => (
              <div key={index} className="flex gap-4 p-6 bg-background border border-border">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 sm:px-8 lg:px-48 xl:px-72 2xl:px-96 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 text-center">
            Pricing Options
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Basic Package */}
            <div className="p-6 bg-background border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-2">Basic Package</h3>
              <p className="text-2xl font-semibold text-primary mb-4">{service.pricing.basic.price}</p>
              <ul className="space-y-3 mb-6">
                {service.pricing.basic.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
                Get Started
              </button>
            </div>

            {/* Premium Package */}
            <div className="p-6 bg-primary text-primary-foreground relative">
              <div className="absolute top-4 right-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Package</h3>
              <p className="text-2xl font-semibold mb-4">{service.pricing.premium.price}</p>
              <ul className="space-y-3 mb-6">
                {service.pricing.premium.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 bg-background text-foreground hover:bg-background/90 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-8 lg:px-48 xl:px-72 2xl:px-96 py-12 sm:py-16 bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              Start Your Project
            </button>
            <button className="px-8 py-3 border border-border text-foreground hover:bg-muted transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}