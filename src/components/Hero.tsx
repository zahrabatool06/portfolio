import { ArrowDown, Download } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TypeWriter } from './TypeWriter';
import { CryptoPattern } from './CryptoPattern';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 relative">
      <CryptoPattern density="light" />
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-[200px] relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[320px] overflow-hidden border-4 border-primary/20">
                <ImageWithFallback 
                  src="https://fra.cloud.appwrite.io/v1/storage/buckets/assets/files/68e6bc030003f38ca584/view?project=68cfd5c00003daed9c5d&mode=admin"
                  alt="Shah Nawaz"
                  className="w-full h-full object-cover rounded-[232px]"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 max-w-4xl">
            <div className="space-y-4">
              <p className="text-primary text-lg">Elite Crypto P2P Expert</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <TypeWriter 
                  text="Shah Nawaz"
                  delay={800}
                  speed={120}
                  className="inline-block"
                  repeat={true}
                  repeatDelay={10000}
                />
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground">
                Blockchain Specialist & P2P Trading Expert
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Elite Crypto P2P Expert with 500,000+ proven transactions. Specializing in secure 
              blockchain solutions across Binance, KuCoin, OKX, and offline networks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                View My Work
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-border hover:bg-accent">
                <Download className="mr-2 w-4 h-4" />
                Download CV
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-8 border-t border-border justify-center">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-foreground">8+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-foreground">500K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Successful Orders</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-foreground">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-foreground">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20">
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}