"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Не забудьте импортировать стили
import "swiper/css";
import "swiper/css/free-mode";

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
  {
    src: "https://i.pinimg.com/736x/83/1a/e0/831ae0d5bf65afc0dcbc594d183e034f.jpg",
    alt: "Portfolio work 6",
  },
  {
    src: "https://i.pinimg.com/736x/83/1a/e0/831ae0d5bf65afc0dcbc594d183e034f.jpg",
    alt: "Portfolio work 7",
  },
  {
    src: "https://i.pinimg.com/736x/83/1a/e0/831ae0d5bf65afc0dcbc594d183e034f.jpg",
    alt: "Portfolio work 8",
  },
  {
    src: "https://i.pinimg.com/736x/83/1a/e0/831ae0d5bf65afc0dcbc594d183e034f.jpg",
    alt: "Portfolio work 9",
  },
  {
    src: "https://i.pinimg.com/736x/83/1a/e0/831ae0d5bf65afc0dcbc594d183e034f.jpg",
    alt: "Portfolio work 10",
  },
];

export default function Portfolio() {
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
          <h2 className="text-4xl md:text-5xl font-black mb-2">
            Портфолио студии
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <div className="w-full cursor-grab active:cursor-grabbing">
          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView={"auto"}
            spaceBetween={24}
            loop={true}
            speed={7000}
            freeMode={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            wrapperClass="flex transition-timing-linear"
            className="portfolio-swiper"
          >
            {portfolioImages.map((img, i) => (
              <SwiperSlide key={i} className="!w-[280px] md:!w-[350px]">
                <div className="aspect-[9/16] overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={350}
                    height={622}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ScrollReveal>

      <style jsx global>{`
        .transition-timing-linear {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}
