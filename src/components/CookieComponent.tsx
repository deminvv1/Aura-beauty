"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CookieProps {
  onOpenPrivacy: () => void;
}

const RealisticCookie = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="cookieBg" cx="42%" cy="38%" r="58%">
        <stop offset="0%" stopColor="#E8A855" />
        <stop offset="55%" stopColor="#C97B2A" />
        <stop offset="100%" stopColor="#9A5318" />
      </radialGradient>
      <radialGradient id="choc" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stopColor="#5C3A1E" />
        <stop offset="100%" stopColor="#3B2010" />
      </radialGradient>
    </defs>

    {/* Cookie base */}
    <circle cx="50" cy="50" r="46" fill="#8B4510" opacity="0.3" />
    <circle cx="50" cy="48" r="46" fill="url(#cookieBg)" />

    {/* Surface texture lines */}
    <path d="M24 36 Q38 32 52 38 Q66 44 78 40" fill="none" stroke="#A0621A" strokeWidth="1.2" opacity="0.35" />
    <path d="M18 50 Q34 45 50 51 Q66 57 82 52" fill="none" stroke="#A0621A" strokeWidth="1.2" opacity="0.35" />
    <path d="M22 64 Q38 59 54 65 Q68 70 80 66" fill="none" stroke="#A0621A" strokeWidth="1.2" opacity="0.3" />

    {/* Chocolate chips */}
    <rect x="34" y="28" width="14" height="9" rx="2.5" fill="url(#choc)" transform="rotate(-18 41 32)" />
    <rect x="55" y="24" width="12" height="8" rx="2.5" fill="url(#choc)" transform="rotate(12 61 28)" />
    <rect x="60" y="50" width="13" height="8" rx="2.5" fill="url(#choc)" transform="rotate(-8 66 54)" />
    <rect x="28" y="54" width="11" height="7" rx="2.5" fill="url(#choc)" transform="rotate(20 33 57)" />
    <rect x="44" y="64" width="13" height="8" rx="2.5" fill="url(#choc)" transform="rotate(-12 50 68)" />
    <rect x="22" y="38" width="10" height="6" rx="2" fill="url(#choc)" transform="rotate(10 27 41)" />
    <rect x="67" y="36" width="9" height="6" rx="2" fill="url(#choc)" transform="rotate(-5 71 39)" />

    {/* Crumbs */}
    <circle cx="48" cy="18" r="2.5" fill="#C97B2A" opacity="0.6" />
    <circle cx="76" cy="30" r="2" fill="#C97B2A" opacity="0.55" />
    <circle cx="80" cy="62" r="2" fill="#C97B2A" opacity="0.5" />
    <circle cx="20" cy="62" r="2.5" fill="#C97B2A" opacity="0.55" />

    {/* Highlight sheen */}
    <ellipse cx="36" cy="30" rx="16" ry="9" fill="white" opacity="0.06" transform="rotate(-25 36 30)" />
  </svg>
);

const CookieComponent = ({ onOpenPrivacy }: CookieProps) => {
  const [stage, setStage] = useState<"hidden" | "journey" | "expanded">(
    "hidden",
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const consent = localStorage.getItem("aura_cookie_consent");
    if (!consent) {
      const timer1 = setTimeout(() => setStage("journey"), 1800);
      return () => clearTimeout(timer1);
    }
  }, []);

  const handleJourneyEnd = () => {
    if (stage === "journey") {
      setStage("expanded");
    }
  };

  const handleAccept = () => {
    localStorage.setItem("aura_cookie_consent", "true");
    setStage("hidden");
  };

  // Сброс для теста (Shift + R)
  useEffect(() => {
    const handleReset = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key.toLowerCase() === "r") {
        localStorage.removeItem("aura_cookie_consent");
        window.location.reload();
      }
    };
    window.addEventListener("keydown", handleReset);
    return () => window.removeEventListener("keydown", handleReset);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {stage !== "hidden" && (
        <motion.div
          layout
          ref={containerRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "circOut" },
          }}
          exit={{ opacity: 0, scale: 0.7, transition: { duration: 0.5 } }}
          className={`fixed z-[100] cursor-default transition-all duration-300 ${
            stage === "journey"
              ? "animate-cookie-journey flex items-center justify-center"
              : "bottom-6 left-6 right-6 md:right-auto md:left-10 md:max-w-[420px] rounded-[32px] bg-black/80 backdrop-blur-3xl border border-white/10 p-10 shadow-2xl overflow-hidden"
          }`}
          onAnimationEnd={handleJourneyEnd}
        >
          {stage === "journey" ? (
            <motion.div layout="position" className="animate-bounce-slow">
              <RealisticCookie />
            </motion.div>
          ) : (
            <motion.div
              layout="position"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
              className="relative z-10"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[80px] pointer-events-none" />

              <h4 className="text-white text-xl font-bold tracking-tight mb-4">
                Aura Details
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                В Aura мы верим: идеальный сервис — как свежее печенье,
                оставляет приятное послевкусие и желание вернуться. Мы
                используем Cookie, чтобы ваш визит на сайт был таким же сладким
                и безупречным, как ваш новый образ.
              </p>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  onOpenPrivacy();
                }}
                className="block text-center mb-6 text-[9px] uppercase tracking-[0.2em] text-slate-500 hover:text-primary transition-colors duration-500"
              >
                Искусство конфиденциальности Aura
              </button>

              <div className="flex gap-4 items-center">
                <button
                  onClick={handleAccept}
                  className="interactive flex-1 bg-white text-black text-[14px] font-bold uppercase tracking-[0.2em] py-4.5 rounded-full hover:bg-primary hover:text-white transition-all duration-500"
                >
                  Принять
                </button>
                <button
                  onClick={() => setStage("hidden")}
                  className="interactive px-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
                >
                  Закрыть
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieComponent;