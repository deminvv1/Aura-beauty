import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFB3yBQegPEV7FCpbwm_XIwcjnD4NMZK8TSZ6ocacXRILHTV_uxFHA2XsW-LIPnOfjTlk2aYbvyXvVNTJOnGDIPVMVxOtOs1HFV9WcXm3w6LujYCDf2O4wTM1Pak5YJhaoWp4oyylNwz7zrR7lCslMEeIYNMKpKE7rjnWXpjLen7acGftepPQ2bYDvGZMgf_IdCgE5_mm4YkHKy83aUtkG4yVUqo8H9XCJfoCOhkkqvolreZHbLBtfdaslmaJiF3ARCxtMEN3lWFZt"
                  alt="Elegant woman receiving professional facial treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
                <span className="w-8 h-[1px] bg-primary" />
                О нашей студии
              </div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Философия уникальности в каждой детали
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                Философия нашей студии основана на подчеркивании вашей природной
                уникальности. Мы верим, что истинная красота не нуждается в масках
                — она требует лишь бережной огранки.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                Мы используем только премиальные материалы и современные техники,
                чтобы обеспечить безупречный результат и ваше полное расслабление.
                Каждый гость для нас — это отдельная история, которую мы пишем
                вместе.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <div className="text-3xl font-black text-primary mb-1">5000+</div>
                  <div className="text-sm font-medium uppercase tracking-wider text-slate-500">
                    Довольных клиентов
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary mb-1">10+</div>
                  <div className="text-sm font-medium uppercase tracking-wider text-slate-500">
                    Топ-мастеров
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
