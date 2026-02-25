import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="py-12 bg-background-light dark:bg-background-dark border-t border-primary/10">
      <ScrollReveal direction="up">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="text-2xl font-black tracking-tighter text-primary mb-2">AURA</div>
              <p className="text-sm text-slate-500">
                © 2024 Aura Beauty Studio. Все права защищены.
              </p>
            </div>
            <div className="flex gap-8">
              <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Публичная оферта
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
