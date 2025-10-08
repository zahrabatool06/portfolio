import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device supports hover (non-touch devices)
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia('(hover: none)').matches || window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: Event) => {
      setIsHovering(true);
      const target = e.target as HTMLElement;
      // Check if it's a button or button-like element
      const isButtonElement = target.tagName === 'BUTTON' || 
                             target.getAttribute('role') === 'button' ||
                             target.closest('button') !== null ||
                             target.classList.contains('btn') ||
                             (target.tagName === 'A' && target.getAttribute('href'));
      setIsButton(isButtonElement);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setIsButton(false);
    };

    // Add event listeners for mouse movement
    document.addEventListener('mousemove', updateMousePosition);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('resize', checkIsMobile);
      document.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Don't render custom cursor on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed top-0 left-0 bg-primary pointer-events-none z-[9999] transition-all duration-200 ease-out"
        style={{
          width: isButton ? '12px' : '8px',
          height: isButton ? '12px' : '8px',
          transform: `translate(${mousePosition.x - (isButton ? 6 : 4)}px, ${mousePosition.y - (isButton ? 6 : 4)}px)`,
          borderRadius: isButton ? '0' : '50%',
        }}
      />
      
      {/* Cursor ring */}
      <div
        className="fixed top-0 left-0 border border-primary/50 pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          width: isButton ? '32px' : isHovering ? '48px' : '32px',
          height: isButton ? '32px' : isHovering ? '48px' : '32px',
          transform: `translate(${mousePosition.x - (isButton ? 16 : isHovering ? 24 : 16)}px, ${mousePosition.y - (isButton ? 16 : isHovering ? 24 : 16)}px)`,
          opacity: isHovering ? 0.8 : 0.3,
          borderRadius: isButton ? '0' : '50%',
        }}
      />
    </>
  );
}