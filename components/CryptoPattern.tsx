import { Bitcoin, DollarSign, TrendingUp, Shield, Zap } from 'lucide-react';

interface CryptoPatternProps {
  density?: 'light' | 'medium' | 'heavy';
  className?: string;
}

export function CryptoPattern({ density = 'medium', className = '' }: CryptoPatternProps) {
  const icons = [Bitcoin, DollarSign, TrendingUp, Shield, Zap];
  
  const getPatternCount = () => {
    switch (density) {
      case 'light': return 15;
      case 'medium': return 25;
      case 'heavy': return 40;
      default: return 25;
    }
  };

  const generatePatternElements = () => {
    const elements = [];
    const count = getPatternCount();
    
    for (let i = 0; i < count; i++) {
      const IconComponent = icons[Math.floor(Math.random() * icons.length)];
      const size = Math.random() * 20 + 16; // 16-36px
      const opacity = Math.random() * 0.1 + 0.05; // 0.05-0.15
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const rotation = Math.random() * 360;
      const animationDelay = Math.random() * 20;
      const animationDuration = Math.random() * 15 + 20; // 20-35s
      
      elements.push(
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            transform: `rotate(${rotation}deg)`,
            opacity,
            animation: `cryptoFloat ${animationDuration}s ease-in-out infinite`,
            animationDelay: `${animationDelay}s`,
          }}
        >
          <IconComponent 
            size={size} 
            className="text-primary/30 dark:text-primary/20" 
          />
        </div>
      );
    }
    
    return elements;
  };

  return (
    <>
      <style>
        {`
          @keyframes cryptoFloat {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            25% {
              transform: translateY(-20px) rotate(90deg);
            }
            50% {
              transform: translateY(-10px) rotate(180deg);
            }
            75% {
              transform: translateY(-30px) rotate(270deg);
            }
          }
        `}
      </style>
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {generatePatternElements()}
      </div>
    </>
  );
}