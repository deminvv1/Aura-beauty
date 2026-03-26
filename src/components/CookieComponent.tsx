"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";


interface CookieProps {
  onOpenPrivacy: () => void;
}

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
          className={`fixed z-[100] shadow-2xl overflow-hidden cursor-default transition-all duration-300 ${
            stage === "journey"
              ? "animate-cookie-journey w-16 h-16 rounded-full bg-primary flex items-center justify-center"
              : "bottom-6 left-6 right-6 md:right-auto md:left-10 md:max-w-[420px] rounded-[32px] bg-black/80 backdrop-blur-3xl border border-white/10 p-10"
          }`}
          onAnimationEnd={handleJourneyEnd}
        >
          {stage === "journey" ? (
            <motion.div layout="position">
              <Cookie className="text-white animate-bounce-slow" size={32} />
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
