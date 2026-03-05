'use client';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onFinished }: { onFinished?: () => void }) {
  const [isMounted, setIsMounted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => (prev < 90 ? prev + 5 : prev));
    }, 150);

    const handleLoad = () => {
      setPercent(100);
      setTimeout(() => {
        setFadeOut(true);

        if (onFinished) onFinished(); 

        setTimeout(() => setIsMounted(true), 1000);
      }, 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      clearInterval(interval);
    };
  }, [onFinished]);

  if (isMounted) return null;

  return (
    <div className={`
      fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f8f6f6] transition-opacity duration-1000 ease-in-out
      ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}
    `}>
      <div className="relative flex flex-col items-center">
        <div className="relative">
          <span className="material-symbols-outlined text-7xl text-primary animate-pulse">
            face_5
          </span>
          <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping"></div>
        </div>

        <h1 className="mt-6 text-3xl font-light text-slate-800 tracking-[0.3em] uppercase">
          AURA
        </h1>
        <p className="mt-2 text-[10px] text-slate-400 tracking-[0.2em] uppercase text-center">
          Beauty Studio
        </p>

        <div className="mt-10 flex flex-col items-center gap-2">
          <div className="h-[2px] w-64 overflow-hidden rounded-full bg-slate-200 relative">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-out shadow-[0_0_15px_#D4AF37]"
              style={{ width: `${percent}%` }}
            ></div>
          </div>
          <span className="text-[12px] font-medium text-primary mt-2 tabular-nums">
            {percent}%
          </span>
        </div>
      </div>
    </div>
  );
}