import { GraduationCap, Award, BookOpen, TrendingUp, Star, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';

const educations = [
  {
    degree: "M-Phil in Business Commerce",
    institution: "University of Education, Lahore",
    location: "Lahore, Pakistan",
    year: "2022 - 2025",
    description: "Advanced postgraduate studies in business commerce with focus on digital finance, e-commerce, and modern trading systems. Specializing in cryptocurrency markets and P2P trading ecosystems.",
    achievements: [
      "Research focus on cryptocurrency P2P trading dynamics",
      "Advanced studies in digital commerce and fintech",
      "Specialized in risk management and market analysis"
    ],
    icon: GraduationCap,
    gradient: "from-primary/10 via-blue-500/10 to-purple-500/10",
    accentColor: "text-blue-400",
    prestige: "Postgraduate"
  },
  {
    degree: "Bachelor of Science in English",
    institution: "University of Education, Lahore",
    location: "Lahore, Pakistan", 
    year: "2018 - 2022",
    description: "Comprehensive undergraduate program in English language and literature, developing strong communication and analytical skills essential for international business and client relations.",
    achievements: [
      "Developed exceptional communication skills",
      "Strong foundation in professional writing",
      "Enhanced cross-cultural understanding for global markets"
    ],
    icon: BookOpen,
    gradient: "from-green-500/10 via-primary/10 to-emerald-500/10",
    accentColor: "text-green-400",
    prestige: "Undergraduate"
  }
];

const certifications = [
  {
    title: "Blockchain: Beyond the Basics",
    issuer: "LinkedIn Learning",
    year: "Sep 2025",
    description: "Advanced understanding of blockchain technology, distributed ledgers, and their practical applications in modern finance.",
    skills: "Blockchain",
    icon: Award,
    gradient: "from-orange-500/15 to-yellow-500/15",
    borderColor: "border-orange-500/20",
    accentColor: "text-orange-400"
  },
  {
    title: "Cryptocurrency Foundations", 
    issuer: "LinkedIn Learning",
    year: "Sep 2025",
    description: "Comprehensive foundation in cryptocurrency concepts, trading mechanisms, and digital asset management.",
    skills: "Cryptocurrency",
    icon: Award,
    gradient: "from-blue-500/15 to-indigo-500/15",
    borderColor: "border-blue-500/20",
    accentColor: "text-blue-400"
  },
  {
    title: "Getting Started as a Customer Support Specialist",
    issuer: "LinkedIn Learning",
    year: "Sep 2025", 
    description: "Professional training in customer service excellence, support best practices, and client relationship management.",
    skills: "Customer Support",
    icon: Award,
    gradient: "from-green-500/15 to-emerald-500/15",
    borderColor: "border-green-500/20",
    accentColor: "text-green-400"
  },
  {
    title: "What Is Web3?",
    issuer: "LinkedIn Learning",
    year: "Sep 2025",
    description: "Understanding the fundamentals of Web3, decentralized technologies, and the future of internet infrastructure.",
    skills: "Blockchain",
    icon: Award,
    gradient: "from-purple-500/15 to-pink-500/15",
    borderColor: "border-purple-500/20",
    accentColor: "text-purple-400"
  },
  {
    title: "English Access Micro Scholarship Programme",
    issuer: "University of Education, Lahore",
    year: "Mar 2021",
    description: "Certificate of Graduation in English language proficiency, business communication, grammar, and teaching methodologies.",
    skills: "English · Business English · Grammar · Teaching",
    icon: Award,
    gradient: "from-red-500/15 to-orange-500/15",
    borderColor: "border-red-500/20",
    accentColor: "text-red-400"
  }
];

const skills = [
  {
    title: "Cryptocurrency Trading (P2P)",
    description: "Expert in peer-to-peer cryptocurrency trading on major platforms including Binance and Paxful.",
    icon: Award,
    gradient: "from-orange-500/15 to-yellow-500/15",
    borderColor: "border-orange-500/20",
    accentColor: "text-orange-400"
  },
  {
    title: "Risk Management & Fraud Prevention", 
    description: "Advanced skills in identifying, assessing, and mitigating risks in crypto P2P transactions.",
    icon: Award,
    gradient: "from-blue-500/15 to-indigo-500/15",
    borderColor: "border-blue-500/20",
    accentColor: "text-blue-400"
  },
  {
    title: "Customer Service & Relationship",
    description: "Building and maintaining strong client relationships with focus on trust and reliability.",
    icon: Award,
    gradient: "from-red-500/15 to-pink-500/15",
    borderColor: "border-red-500/20",
    accentColor: "text-red-400"
  },
  {
    title: "Market Analysis & Strategy",
    description: "Deep understanding of cryptocurrency markets, trends, and strategic trading approaches.",
    icon: Award,
    gradient: "from-green-500/15 to-emerald-500/15",
    borderColor: "border-green-500/20",
    accentColor: "text-green-400"
  },
  {
    title: "Blockchain & DeFi Knowledge",
    description: "Comprehensive understanding of blockchain technology and decentralized finance ecosystems.",
    icon: Award,
    gradient: "from-purple-500/15 to-pink-500/15",
    borderColor: "border-purple-500/20",
    accentColor: "text-purple-400"
  }
];



export function Education() {
  return (
    <section className="py-12 md:py-20 bg-background relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary transform rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-primary transform -rotate-12"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-primary transform rotate-45"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-primary transform -rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-[200px] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-primary mb-8 group hover:from-primary/20 hover:to-primary/10 transition-all duration-500 hover:scale-105">
            <GraduationCap className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="caption">Education & Skills</span>
          </div>
          <h2 className="heading-3 mb-8 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
            Education & Expertise
          </h2>
          <p className="body-large text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Strong academic foundation combined with specialized skills in cryptocurrency P2P trading, 
            risk management, and digital commerce from University of Education, Lahore.
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-20 md:mb-24">
          <div className="flex items-center justify-center mb-12 md:mb-16">
            <div className="flex items-center gap-3">
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-16"></div>
              <h3 className="heading-5 text-center">Formal Education</h3>
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-16"></div>
            </div>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {educations.map((edu, index) => (
              <Card key={index} className="group relative overflow-hidden border border-border bg-card hover:shadow-2xl transition-all duration-700 hover:scale-[1.02]">
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                {/* Prestige Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary border border-primary/20 text-xs">
                    <Star className="h-3 w-3" />
                    <span className="caption">{edu.prestige}</span>
                  </div>
                </div>
                
                <div className="relative z-10 p-8">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="relative">
                      <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/90 group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <edu.icon className="h-7 w-7" />
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <h4 className="heading-6 group-hover:text-primary transition-colors duration-300">
                        {edu.degree}
                      </h4>
                      <div className={`font-medium ${edu.accentColor} transition-colors duration-300`}>
                        {edu.institution}
                      </div>
                      <div className="body-small text-muted-foreground">
                        {edu.location} • {edu.year}
                      </div>
                    </div>
                  </div>
                  
                  <p className="body-base text-muted-foreground mb-8 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <h5 className="caption text-primary">Key Achievements</h5>
                    </div>
                    <ul className="space-y-3">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 group/item">
                          <ChevronRight className="h-4 w-4 mt-0.5 text-primary/60 group-hover/item:text-primary group-hover/item:translate-x-1 transition-all duration-300 flex-shrink-0" />
                          <span className="body-small text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="mb-20 md:mb-24">
          <div className="flex items-center justify-center mb-12 md:mb-16">
            <div className="flex items-center gap-3">
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-16"></div>
              <h3 className="heading-5 text-center">Professional Certifications</h3>
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-16"></div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="group relative overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 p-6 text-center">
                  <div className="relative mb-6">
                    <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 text-primary w-fit mx-auto group-hover:from-primary group-hover:to-primary/90 group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <cert.icon className="h-8 w-8" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                  </div>
                  
                  <h4 className="heading-6 mb-3 group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h4>
                  
                  <div className={`body-small font-medium mb-2 ${cert.accentColor} transition-colors duration-300`}>
                    {cert.issuer}
                  </div>
                  
                  <div className="body-small text-muted-foreground mb-4">
                    {cert.year}
                  </div>
                  
                  <p className="body-small text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300 mb-4">
                    {cert.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 text-primary">
                    <span className="caption">{cert.skills}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div className="mb-20 md:mb-24">
          <div className="flex items-center justify-center mb-12 md:mb-16">
            <div className="flex items-center gap-3">
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-16"></div>
              <h3 className="heading-5 text-center">Core Skills & Expertise</h3>
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-16"></div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="group relative overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 p-6">
                  <div className="relative mb-6">
                    <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 text-primary w-fit group-hover:from-primary group-hover:to-primary/90 group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <skill.icon className="h-8 w-8" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                  </div>
                  
                  <h4 className="heading-6 mb-3 group-hover:text-primary transition-colors duration-300">
                    {skill.title}
                  </h4>
                  
                  <p className="body-small text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {skill.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>



        {/* Statistics */}
        <div className="pt-12 md:pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2", label: "Academic Degrees", icon: GraduationCap },
              { value: "5", label: "Certifications", icon: Award },
              { value: "5+", label: "Core Skills", icon: TrendingUp },
              { value: "4+", label: "Years P2P Trading", icon: Star }
            ].map((stat, index) => (
              <div key={index} className="group space-y-3">
                <div className="relative mx-auto w-fit">
                  <div className="p-3 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </div>
                <div className="space-y-1">
                  <div className="heading-4 text-primary group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="caption text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}