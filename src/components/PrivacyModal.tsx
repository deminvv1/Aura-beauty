'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal = ({ isOpen, onClose }: PrivacyModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-zinc-900 border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl custom-scrollbar"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="space-y-10">
              <header>
                <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-4">
                  Искусство <span className="text-primary italic">конфиденциальности</span>
                </h2>
                <div className="h-px w-20 bg-primary/50" />
              </header>

              <div className="space-y-8 text-slate-400 text-sm leading-relaxed font-light">
                <section>
                  <h3 className="text-white text-[10px] uppercase tracking-[0.2em] mb-3">01. Философия данных</h3>
                  <p>
                    В Aura мы верим, что приватность — это новая роскошь. Мы используем Cookie только для того, 
                    чтобы адаптировать наш сервис под ваш уникальный стиль, обеспечивая бесшовную навигацию.
                  </p>
                </section>

                <section>
                  <h3 className="text-white text-[10px] uppercase tracking-[0.2em] mb-3">02. Хранение информации</h3>
                  <p>
                    Ваши предпочтения шифруются и хранятся локально. Мы не передаем и не продаем ваши данные 
                    сторонним организациям. Ваша цифровая аура остается только вашей.
                  </p>
                </section>

                <section>
                  <h3 className="text-white text-[10px] uppercase tracking-[0.2em] mb-3">03. Управление</h3>
                  <p>
                    Вы можете в любой момент отозвать согласие, очистив кэш вашего браузера. 
                    Это вернет настройки сайта в их первозданное состояние.
                  </p>
                </section>
              </div>

              <footer className="pt-6 border-t border-white/5 text-[9px] text-slate-600 uppercase tracking-widest text-center">
                © 2026 Aura Details — Эстетика безопасности
              </footer>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyModal;