import { useEffect, useRef } from 'react';

export default function CursorAnimation() {
  const canvasRef = useRef(null);
  const clearTimerRef = useRef(null);

  useEffect(() => {
    const section = document.getElementById('interactive-section');
    const canvas = canvasRef.current;

    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d');

    canvas.width = section.clientWidth;
    canvas.height = section.clientHeight;

    let drawing = false;
    let lastX = 0;
    let lastY = 0;

    const clearCanvasAfterDelay = () => {
      if (clearTimerRef.current) {
        clearTimeout(clearTimerRef.current);
      }

      clearTimerRef.current = setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 2000); // change to 3000 for 3s, etc
    };

    const handleMouseEnter = (e) => {
      drawing = true;
      const rect = section.getBoundingClientRect();
      lastX = e.clientX - rect.left;
      lastY = e.clientY - rect.top;
    };

    const handleMouseMove = (e) => {
      if (!drawing) return;
    
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
    
      // Calculate movement distance
      const dx = x - lastX;
      const dy = y - lastY;
    
      // Shorten the line by 80% (draw only 20% of it)
      const reducedX = lastX + dx * 0.2;
      const reducedY = lastY + dy * 0.2;
    
      ctx.strokeStyle = 'lime';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
    
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(reducedX, reducedY);
      ctx.stroke();
    
      // Update last position to the shortened end
      lastX = reducedX;
      lastY = reducedY;
    
      clearCanvasAfterDelay();
    };
    

    const handleMouseLeave = () => {
      drawing = false;
    };

    section.addEventListener('mouseenter', handleMouseEnter);
    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      section.removeEventListener('mouseenter', handleMouseEnter);
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);

      if (clearTimerRef.current) {
        clearTimeout(clearTimerRef.current);
      }
    };
  }, []);

  

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
}
