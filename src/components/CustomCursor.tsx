'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PremiumNailCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 768) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    document.body.style.cursor = 'none';

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.05, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.05, ease: "power3" });

    const handleMove = (e: MouseEvent) => {
      xTo(e.clientX - 32); 
      yTo(e.clientY - 32);
    };

    const handleOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('button, a, .interactive');
      if (target) {
        gsap.to(cursor, { rotation: -25, scale: 1.1, duration: 0.3 });
      }
    };

    const handleOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('button, a, .interactive');
      if (target) {
        gsap.to(cursor, { rotation: 0, scale: 1, duration: 0.3 });
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-[9999] bg-contain bg-no-center transition-opacity duration-300"
      style={{
        backgroundImage: 'url(/cursor.svg)',
        willChange: 'transform',
      }}
    />
  );
};

export default PremiumNailCursor;