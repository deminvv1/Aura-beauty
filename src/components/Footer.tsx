import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

interface FooterProps {
  onOpenPrivacy: () => void;
}

export default function Footer({ onOpenPrivacy }: FooterProps) {
  return (
    <footer className="py-16 bg-background-light dark:bg-background-dark border-t border-primary/10">
      <ScrollReveal direction="up">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="flex flex-col gap-4">
              <div className="text-3xl font-black tracking-tighter text-primary">
                AURA
              </div>
              <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                Пространство красоты и гармонии, где каждый визит превращается в
                ритуал заботы о себе.
              </p>
              <div className="flex gap-4 mt-2">
                <Link
                  href="#"
                  className="hover:text-primary transition-colors text-slate-400"
                >
                  * Instagram
                </Link>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors text-slate-400"
                >
                  Telegram
                </Link>
              </div>
              <p className="text-[10px] text-slate-600 mt-2 leading-tight">
                * Соцсеть принадлежит компании Meta, признанной экстремистской
                организацией и запрещенной на территории РФ.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">
                Услуги
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="#services"
                    className="text-sm text-slate-500 hover:text-primary transition-colors"
                  >
                    Маникюр & Педикюр
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-sm text-slate-500 hover:text-primary transition-colors"
                  >
                    Брови & Ресницы
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-sm text-slate-500 hover:text-primary transition-colors"
                  >
                    Макияж & Образы
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">
                Студия
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="#about"
                    className="text-sm text-slate-500 hover:text-primary transition-colors"
                  >
                    О нас
                  </Link>
                </li>
                <li>
                  <Link
                    href="#portfolio"
                    className="text-sm text-slate-500 hover:text-primary transition-colors"
                  >
                    Галерея работ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#reviews"
                    className="text-sm text-slate-500 hover:text-primary transition-colors"
                  >
                    Отзывы
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">
                Контакты
              </h4>
              <div className="flex flex-col gap-4 text-sm text-slate-500">
                <p className="flex flex-col">
                  <span className="text-primary font-medium">Телефон:</span>
                  <a href="tel:+79991234567" className="hover:text-primary">
                    +7 (999) 123-45-67
                  </a>
                </p>
                <p className="flex flex-col">
                  <span className="text-primary font-medium">
                    Режим работы:
                  </span>
                  Ежедневно с 10:00 до 22:00
                </p>

                <p className="flex flex-col">
                  <span className="text-primary font-medium">Телефон:</span>
                  <a
                    href="mailto:aura@example.com"
                    className="hover:text-primary"
                  >
                    aura@example.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-slate-500">
              © 2026 Aura Beauty Studio. Все права защищены.
            </p>
            <div className="flex gap-8">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onOpenPrivacy();
                }}
                className="text-xs text-slate-400 hover:text-primary transition-colors"
              >
                Политика конфиденциальности
              </button>
              <Link
                href="#"
                className="text-xs text-slate-400 hover:text-primary transition-colors"
              >
                Публичная оферта
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
