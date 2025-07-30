import { useEffect, useRef } from "react";

export default function CursorTrailCanvas() {
  const canvasRef = useRef(null);
  const trailRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const maxTrailAge = 400; // ms

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      trailRef.current = trailRef.current.filter(p => now - p.time < maxTrailAge);

      ctx.lineWidth = 2.5; // thinner = less blob
      // ctx.lineCap = "round";
      // ctx.lineJoin = "round";

      if (trailRef.current.length > 1) {
        for (let i = 0; i < trailRef.current.length - 1; i++) {
          const p1 = trailRef.current[i];
          const p2 = trailRef.current[i + 1];
          const age = now - p1.time;
          const alpha = 1 - age / maxTrailAge;

          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 255, 0, ${alpha})`; // green line
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      requestAnimationFrame(draw);
    };

    const addPoint = (x, y) => {
      trailRef.current.push({ x, y, time: Date.now() });
    };

    const handleMouseMove = (e) => addPoint(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        addPoint(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
}







