import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const portfolioImages = [
  {
    src: "https://i.pinimg.com/originals/27/22/5b/27225b81614d28a9a636b21da5890811.jpg",
    alt: "Portfolio work 1",
  },
  {
    src: "https://i.pinimg.com/originals/50/2f/10/502f10ebf2d4421806bda6332a75c54d.jpg",
    alt: "Portfolio work 2",
  },
  {
    src: "https://i.pinimg.com/originals/c5/e4/cd/c5e4cd81682e39705c942b258b48269c.jpg",
    alt: "Portfolio work 3",
  },
  {
    src: "https://i.pinimg.com/originals/0b/37/ac/0b37ac1a0e67d6f5805d8066dc4e9350.jpg",
    alt: "Portfolio work 4",
  },
  {
    src: "https://i.pinimg.com/736x/83/1a/e0/831ae0d5bf65afc0dcbc594d183e034f.jpg",
    alt: "Portfolio work 5",
  },
];

export default function Portfolio() {
  // Duplicate for seamless loop
  const allImages = [...portfolioImages, ...portfolioImages];

  return (
    <section
      className="py-24 bg-background-light dark:bg-background-dark overflow-hidden"
      id="portfolio"
    >
      <ScrollReveal direction="up">
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center space-y-3">
          <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.3em] uppercase text-primary/80">
            <span className="h-px w-10 bg-primary/40" />
            наши работы
            <span className="h-px w-10 bg-primary/40" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-2">Портфолио студии</h2>
          <p className="text-slate-500 font-light max-w-xl mx-auto">
            Живые примеры того, как тонко мы подчеркиваем индивидуальность каждой клиентки.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <div className="relative w-full overflow-hidden py-10">
          <div className="flex w-max animate-scroll flex-nowrap">
            {allImages.map((img, i) => (
              <div
                key={i}
                className="w-[280px] md:w-[350px] aspect-[9/16] shrink-0 overflow-hidden rounded-2xl shadow-xl mx-3"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={350}
                  height={622}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
