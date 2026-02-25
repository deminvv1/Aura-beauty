"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

type Testimonial = {
  name: string;
  role: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Анна",
    role: "Постоянный гость",
    text: "В AURA всегда атмосферно и очень спокойно. Мастера чувствуют, чего ты хочешь, еще до того, как ты успела объяснить. Ухожу отсюда с ощущением маленького праздника.",
  },
  {
    name: "Мария",
    role: "Маникюр и педикюр",
    text: "Лучший маникюр в городе — аккуратно, стойко и без лишних разговоров, если не хочется. Очень ценю внимательность к деталям и стерильность инструментов.",
  },
  {
    name: "Екатерина",
    role: "Ресницы и брови",
    text: "После процедур в AURA макияж почти не нужен. Взгляд становится открытым и свежим, а результат держится гораздо дольше, чем в других студиях, где я была.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section className="py-24 bg-primary/5" id="reviews">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.3em] uppercase text-primary/80">
              <span className="h-px w-10 bg-primary/40" />
              отзывы
              <span className="h-px w-10 bg-primary/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Что говорят наши гости
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Живые истории людей, которые доверили нам свою красоту и сделали AURA частью
              личных ритуалов ухода.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.article
              key={active.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/90 dark:bg-slate-900/70 backdrop-blur-xl rounded-3xl shadow-xl px-8 md:px-12 py-10 md:py-12 border border-primary/10"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined text-3xl">format_quote</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.32em]">
                    голос студии
                  </span>
                </div>
                <p className="text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-200">
                  {active.text}
                </p>
                <div className="flex items-center justify-between gap-4 pt-2">
                  <div>
                    <div className="text-base font-semibold">{active.name}</div>
                    <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
                      {active.role}
                    </div>
                  </div>
                  <div className="flex gap-1.5 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-base">
                        star
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group"
                  aria-label={`Показать отзыв: ${item.name}`}
                >
                  <span
                    className={[
                      "block h-2 rounded-full transition-all duration-300",
                      isActive ? "w-6 bg-primary" : "w-2 bg-primary/30 group-hover:bg-primary/60",
                    ].join(" ")}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

