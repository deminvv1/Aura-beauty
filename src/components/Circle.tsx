'use client';

import { useState, useEffect } from 'react';

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('promoShown')) {
        setIsVisible(true);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, []);



  return (
    <>
    {/* Акция */ }
      <div 
        className={`fixed right-6 z-50 transition-all duration-700 ease-out bottom-[112px]
          ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 pointer-events-none'}
        `}
      >
        <div className="relative group">
          <button 
            onClick={() => {
              setIsVisible(false);
              sessionStorage.setItem('promoShown', 'true');
            }}
            className="absolute -top-2 -right-2 bg-slate-800 rounded-full w-6 h-6 flex items-center justify-center text-xs text-white hover:bg-black transition-colors z-[60]"
          >
            ✕
          </button>
          
          <a
            href="https://www.yclients.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-primary text-white p-4 rounded-2xl shadow-2xl max-w-[250px] relative hover:brightness-110 transition-all active:scale-95"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl">local_offer</span>
              <div>
                <p className="font-bold text-sm">Получи 20% скидку</p>
                <p className="text-xs opacity-90">Для первого посещения, успевай только до конца недели.</p>
              </div>
            </div>
            <div className="absolute top-full right-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-primary"></div>
          </a>
        </div>
      </div>

      {/* Основная кнопка */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>
        <a
          className="relative bg-primary text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
          href="https://www.yclients.com"
          target="_blank"
        >
          <span className="material-symbols-outlined text-2xl md:text-3xl">calendar_month</span>
          <span className="hidden md:block absolute right-full mr-4 bg-black text-white px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Записаться сейчас
          </span>
        </a>
      </div>
    </>
  );
}