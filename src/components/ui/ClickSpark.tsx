import React, { useRef, useEffect, ReactNode } from 'react';

interface ClickSparkProps {
  children: ReactNode;
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
}

export function ClickSpark({
  children,
  sparkColor = 'rgba(255, 255, 255, 0.4)',
  sparkSize = 6,
  sparkRadius = 15,
  sparkCount = 6,
  duration = 400
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];
    let animationFrame: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.life -= 16 / duration; // roughly 60fps
        if (p.life <= 0) {
          particles.splice(i, 1);
        } else {
          p.x += p.vx;
          p.y += p.vy;
          ctx.beginPath();
          ctx.arc(p.x, p.y, sparkSize * p.life, 0, Math.PI * 2);
          ctx.fillStyle = sparkColor;
          ctx.globalAlpha = p.life;
          ctx.fill();
        }
      });
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    const handleClick = (e: MouseEvent) => {
      for (let i = 0; i < sparkCount; i++) {
        const angle = (Math.PI * 2 / sparkCount) * i;
        const velocity = Math.random() * 2 + 1;
        particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 1
        });
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrame);
    };
  }, [sparkColor, sparkSize, sparkCount, duration]);

  return (
    <>
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 pointer-events-none z-[9999]" 
      />
      {children}
    </>
  );
}
