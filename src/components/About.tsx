import { Shield, TrendingUp, Users, Globe, Award, Target } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function About() {
  const skills = [
    { name: 'P2P Trading', percentage: 98, color: 'bg-purple-500' },
    { name: 'Blockchain Analysis', percentage: 95, color: 'bg-blue-500' },
    { name: 'Risk Management', percentage: 92, color: 'bg-green-500' },
    { name: 'Multi-Platform Operations', percentage: 96, color: 'bg-orange-500' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: '100% success rate with advanced security protocols and risk assessment strategies.'
    },
    {
      icon: TrendingUp,
      title: 'Proven Performance',
      description: '500,000+ successful P2P orders completed across major crypto exchanges.'
    },
    {
      icon: Globe,
      title: 'Multi-Platform Expert',
      description: 'Extensive experience across Binance, KuCoin, OKX, and offline trading networks.'
    },
    {
      icon: Users,
      title: 'Trusted Partner',
      description: 'Building long-term relationships with thousands of satisfied clients worldwide.'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-[200px]">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Elite Crypto P2P Expert with 500,000+ Proven Transactions. Specializing in secure blockchain solutions across Binance, KuCoin, OKX, and offline networks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 sm:mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                Elite Crypto P2P Specialist & Blockchain Expert
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Your trusted partner for seamless crypto trading with unparalleled expertise and a 
                100% transaction success rate. With extensive experience across major platforms 
                including Binance, KuCoin, OKX, and offline networks, I've built my reputation on 
                trust, security, and consistent results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in secure blockchain solutions, delivering trusted P2P trading services 
                with advanced risk management protocols. When businesses and individuals need reliable 
                crypto trading expertise, they turn to proven performance and real-world experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground transition-colors duration-300">
                <Award className="w-4 h-4 text-primary transition-colors duration-300" />
                <span>500,000+ Successful Orders</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground transition-colors duration-300">
                <Target className="w-4 h-4 text-primary transition-colors duration-300" />
                <span>100% Success Rate</span>
              </div>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Core Expertise</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-muted-foreground text-sm">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const cardColors = [
              'bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800',
              'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800',
              'bg-purple-50 border-purple-200 dark:bg-purple-950 dark:border-purple-800',
              'bg-orange-50 border-orange-200 dark:bg-orange-950 dark:border-orange-800'
            ];
            const iconColors = [
              'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400',
              'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400',
              'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400',
              'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400'
            ];
            
            return (
              <Card key={index} className={`${cardColors[index]} hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${iconColors[index]} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}