import { useEffect, useRef } from 'react';

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
};

const GOLD = { r: 221, g: 181, b: 91 };

/**
 * Lightweight canvas layer for the hero. It keeps all rendering outside React's
 * reconciliation loop and only joins nearby points while the cursor is in view.
 */
export default function TimeNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: 0, y: 0, active: false };
    let points: Point[] = [];
    let width = 0;
    let height = 0;
    let frameId = 0;

    const createPoints = () => {
      const count = Math.max(42, Math.min(100, Math.round((width * height) / 24000)));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        radius: Math.random() * 1.15 + 0.35,
        opacity: Math.random() * 0.42 + 0.28,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createPoints();
    };

    const updatePointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      pointer.x = x;
      pointer.y = y;
      pointer.active = x >= 0 && x <= width && y >= 0 && y <= height;
    };

    const clearPointer = () => {
      pointer.active = false;
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      if (!reducedMotion) {
        points.forEach((point) => {
          point.x += point.vx;
          point.y += point.vy;

          if (point.x < -8 || point.x > width + 8) point.vx *= -1;
          if (point.y < -8 || point.y > height + 8) point.vy *= -1;
        });
      }

      if (pointer.active) {
        const nearby = points.filter((point) => {
          const dx = point.x - pointer.x;
          const dy = point.y - pointer.y;
          return dx * dx + dy * dy < 190 * 190;
        });

        for (let i = 0; i < nearby.length; i += 1) {
          const first = nearby[i];
          for (let j = i + 1; j < nearby.length; j += 1) {
            const second = nearby[j];
            const dx = first.x - second.x;
            const dy = first.y - second.y;
            const distance = Math.hypot(dx, dy);

            if (distance < 130) {
              const alpha = (1 - distance / 130) * 0.34;
              context.beginPath();
              context.moveTo(first.x, first.y);
              context.lineTo(second.x, second.y);
              context.strokeStyle = `rgba(${GOLD.r}, ${GOLD.g}, ${GOLD.b}, ${alpha})`;
              context.lineWidth = 0.65;
              context.stroke();
            }
          }
        }
      }

      points.forEach((point) => {
        const cursorDistance = pointer.active ? Math.hypot(point.x - pointer.x, point.y - pointer.y) : Infinity;
        const activeGlow = cursorDistance < 190 ? (1 - cursorDistance / 190) : 0;
        context.beginPath();
        context.arc(point.x, point.y, point.radius + activeGlow * 0.9, 0, Math.PI * 2);
        context.fillStyle = `rgba(${GOLD.r}, ${GOLD.g}, ${GOLD.b}, ${Math.min(0.9, point.opacity + activeGlow * 0.45)})`;
        context.fill();
      });

      if (!reducedMotion) frameId = window.requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    window.addEventListener('pointermove', updatePointer, { passive: true });
    window.addEventListener('blur', clearPointer);
    resize();
    draw();

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener('pointermove', updatePointer);
      window.removeEventListener('blur', clearPointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="time-network" aria-hidden="true" />;
}
