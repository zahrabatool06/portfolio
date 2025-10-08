import { Bitcoin, Shield, TrendingUp, Users, DollarSign, Zap, ChevronRight, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useRouter } from './Router';
import { CryptoPattern } from './CryptoPattern';

export function Services() {
  const { navigate } = useRouter();
  
  const serviceData = [
    {
      slug: 'p2p-trading',
      icon: Bitcoin,
      title: 'P2P Crypto Trading',
      description: 'Expert peer-to-peer cryptocurrency trading services across major exchanges with guaranteed security.',
      features: ['Multi-Platform Trading', 'Real-time Price Analysis', 'Risk Management', 'Secure Transactions']
    },
    {
      slug: 'blockchain-security',
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Advanced security protocols and risk assessment for safe cryptocurrency transactions.',
      features: ['Transaction Security', 'Wallet Protection', 'Smart Contract Audits', 'Fraud Prevention']
    },
    {
      slug: 'market-analysis',
      icon: TrendingUp,
      title: 'Crypto Market Analysis',
      description: 'Professional market analysis and trading strategies for optimal cryptocurrency investments.',
      features: ['Technical Analysis', 'Market Trends', 'Price Predictions', 'Investment Strategies']
    },
    {
      slug: 'portfolio-management',
      icon: DollarSign,
      title: 'Portfolio Management',
      description: 'Comprehensive cryptocurrency portfolio management and optimization services.',
      features: ['Asset Diversification', 'Risk Assessment', 'Performance Tracking', 'Profit Optimization']
    },
    {
      slug: 'trading-consultation',
      icon: Users,
      title: 'Trading Consultation',
      description: 'Expert consultation services for individuals and businesses entering crypto trading.',
      features: ['Strategy Development', 'Platform Selection', 'Training & Education', 'Ongoing Support']
    }
  ];
  


  return (
    <section id="services" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-[200px]">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Services</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional cryptocurrency and blockchain services backed by 500,000+ successful 
            transactions and unmatched expertise across all major trading platforms.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {serviceData.map((service, index) => {
            const cardColors = [
              'bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800',
              'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800', 
              'bg-purple-50 border-purple-200 dark:bg-purple-950 dark:border-purple-800',
              'bg-orange-50 border-orange-200 dark:bg-orange-950 dark:border-orange-800',
              'bg-pink-50 border-pink-200 dark:bg-pink-950 dark:border-pink-800',
              'bg-cyan-50 border-cyan-200 dark:bg-cyan-950 dark:border-cyan-800'
            ];
            const iconColors = [
              'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400',
              'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400',
              'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400',
              'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400',
              'bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-400',
              'bg-cyan-100 text-cyan-600 dark:bg-cyan-900 dark:text-cyan-400'
            ];
            
            return (
              <Card 
                key={index} 
                className={`w-full ${cardColors[index]} hover:shadow-xl transition-all duration-300 group md:sticky md:top-20 relative overflow-hidden`}
                style={{ zIndex: index + 1 }}
              >
                <CryptoPattern density="light" className="opacity-30" />
                <div className="flex flex-col space-y-4 sm:space-y-6 p-4 sm:p-6 md:p-8 relative z-10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 ${iconColors[index]} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl text-foreground">{service.title}</CardTitle>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      {service.description}
                    </p>
                    <div className="flex flex-col gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <ChevronRight className={`w-4 h-4 mr-3 ${iconColors[index].includes('blue') ? 'text-blue-500' : 
                                          iconColors[index].includes('green') ? 'text-green-500' :
                                          iconColors[index].includes('purple') ? 'text-purple-500' :
                                          iconColors[index].includes('orange') ? 'text-orange-500' :
                                          iconColors[index].includes('pink') ? 'text-pink-500' : 'text-cyan-500'}`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => navigate(`/service/${service.slug}`)}
                      className="mt-6 inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}

      </div>
    </section>
  );
}