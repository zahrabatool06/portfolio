import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-accent/10 border-t border-border">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-[200px] py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold">S</span>
              </div>
              <span className="text-lg sm:text-xl font-semibold text-foreground">Shah Nawaz</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed">
              Elite Crypto P2P Expert specializing in secure peer-to-peer cryptocurrency trading, 
              risk management, and blockchain technology solutions for global markets.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-sm sm:text-base font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="#about" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#services" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#portfolio" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
              <a href="#contact" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-sm sm:text-base font-semibold text-foreground">Services</h4>
            <nav className="flex flex-col space-y-2">
              <span className="text-sm sm:text-base text-muted-foreground">P2P Trading</span>
              <span className="text-sm sm:text-base text-muted-foreground">Risk Management</span>
              <span className="text-sm sm:text-base text-muted-foreground">Market Analysis</span>
              <span className="text-sm sm:text-base text-muted-foreground">Trading Bots</span>
              <span className="text-sm sm:text-base text-muted-foreground">Consulting</span>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2 text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            <span>© 2024 Shah Nawaz. Made with</span>
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and lots of coffee.</span>
            </div>
          </div>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}