import { useState, useEffect, useCallback } from 'react';

interface TypeWriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  repeat?: boolean;
  repeatDelay?: number;
  onComplete?: () => void;
}

export function TypeWriter({ 
  text, 
  delay = 1000, 
  speed = 100, 
  className = '', 
  showCursor = true,
  repeat = false,
  repeatDelay = 10000,
  onComplete 
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showCursorBlink, setShowCursorBlink] = useState(true);
  const [cycleCount, setCycleCount] = useState(0);

  // Reset function to restart the typing animation
  const resetTyping = useCallback(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsTyping(false);
    setCycleCount(prev => prev + 1);
  }, []);

  // Initial start and repeat logic
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay, cycleCount]); // Depend on cycleCount to restart

  // Typing logic
  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      // Typing completed
      setIsTyping(false);
      
      if (onComplete) {
        onComplete();
      }

      // Set up repeat if enabled
      if (repeat) {
        const repeatTimeout = setTimeout(() => {
          resetTyping();
        }, repeatDelay);

        return () => clearTimeout(repeatTimeout);
      }
    }
  }, [currentIndex, isTyping, text, speed, onComplete, repeat, repeatDelay, resetTyping]);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursorBlink(prev => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span 
          className={`inline-block w-1 h-[1em] bg-primary ml-1 ${
            showCursorBlink ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-100`}
          style={{ 
            verticalAlign: 'text-top',
            marginTop: '0.1em'
          }}
        />
      )}
    </span>
  );
}