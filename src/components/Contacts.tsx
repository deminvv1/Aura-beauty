"use client";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { useEffect, useRef } from "react";
import { Instagram, Send, Share2 } from "lucide-react";

export default function Contacts() {
  const refMap = useRef(null);

  const socials = [
    { icon: <Send size={20} />, href: "https://t.me/your_link", id: 'tg' },
    { icon: <Instagram size={20} />, href: "https://instagram.com/your_link", id: 'ig' },
    { icon: <Share2 size={20} />, href: "#", id: 'sh' },
  ];

  useEffect(() => {
    const ymaps = (window as any).ymaps;
    if (typeof window !== "undefined" && ymaps) {
      ymaps.ready(() => {
        if (refMap.current) {
          const newMap = new ymaps.Map(refMap.current, {
            center: [55.728952, 37.426008],
            zoom: 16,
            controls: [],
          });
          const myPlacemark = new ymaps.Placemark([55.728952, 37.426008], {
            balloonContentHeader: '<b style="color: #D4AF37;">AURA STUDIO</b>',
            balloonContentBody:
              "ул. Красивая, д. 24<br/><strong>2 этаж</strong>",
            balloonContentFooter: "Ежедневно с 10:00 до 22:00",
            hintContent: "Нажмите, чтобы увидеть адрес",
          });
          newMap.geoObjects.add(myPlacemark);
        }
      });
    }
  }, []);

  

  return (
    <section className="py-24 bg-black text-white relative" id="contacts">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <ScrollReveal direction="up">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                Ждем вас в гости
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    location_on
                  </span>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Адрес</h4>
                    <p className="text-slate-400 font-light text-lg">
                      Москва, ул. Красивая, д. 24, эт. 2
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    schedule
                  </span>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Часы работы</h4>
                    <p className="text-slate-400 font-light text-lg">
                      Ежедневно с 10:00 до 22:00
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    call
                  </span>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Телефон</h4>
                    <p className="text-slate-400 font-light text-lg">
                      +7 (999) 123-45-67
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                {socials.map((social) => (
                  <Link
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300 group"
                  >
                    <div className="group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div
              ref={refMap}
              className="h-[400px] rounded-2xl overflow-hidden shadow-2xl brightness-90 contrast-125 relative"
            ></div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
