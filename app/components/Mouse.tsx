"use client";
import { useEffect, useRef, useState } from "react";

export default function MouseFollow() {
  const containerRef = useRef<HTMLDivElement>(null);

  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let raf: number;

    function animate() {
      current.current.x += (target.current.x - current.current.x) * 0.15;
      current.current.y += (target.current.y - current.current.y) * 0.15;

      const el = containerRef.current?.querySelector(
        ".cursor"
      ) as HTMLDivElement;

      if (el) {
        el.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%) scale(${visible ? 1 : 0})`;
      }

      raf = requestAnimationFrame(animate);
    }

    animate();
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current!.getBoundingClientRect();
    target.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative mt-20 h-[500px] w-[500px] overflow-hidden rounded-3xl bg-neutral-900"
    >
      <div className="cursor pointer-events-none absolute left-0 top-0 h-10 w-10 rounded-full bg-orange-500 transition-opacity" />
    </div>
  );
}
