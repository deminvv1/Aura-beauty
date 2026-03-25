"use client";
import { REVIEWS } from "@/data/content";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

export default function Reviews() {

  return (
    <section id="reviews" className="py-24 bg-background-light overflow-hidden mt-5">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
          <span className="text-[#D4AF37]">Отзывы клиентов</span>
        </h2>
      </div>

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
            pauseOnMouseEnter: true,
          }}
          wrapperClass="flex transition-timing-linear" 
          className="reviews-swiper"
        >
          {REVIEWS.map((review, idx) => (
            <SwiperSlide key={idx} className="!w-[350px] md:!w-[450px] !h-auto">
              <div className="h-full bg-[#161616] p-8 rounded-2xl border border-white/5 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#D4AF37] text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-8 whitespace-normal leading-relaxed text-sm md:text-base">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 border-t border-white/5 pt-6">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex-shrink-0 flex items-center justify-center text-black font-bold text-sm">
                    {review.username[0]}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-medium uppercase tracking-widest text-xs">
                      {review.username}
                    </span>
                    <span className="text-white/30 font-small tracking-widest text-[10px]">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-16 flex flex-col items-center gap-6 px-4">
  <div className="flex flex-col items-center gap-2">
    <p className="text-black/40 text-[10px] uppercase tracking-[0.3em] font-bold">
      Наш рейтинг на картах
    </p>
    <div className="flex items-center gap-2">
      <span className="text-2xl font-black text-black">5.0</span>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-[#D4AF37] text-lg">★</span>
        ))}
      </div>
    </div>
  </div>

  <div className="flex flex-wrap justify-center gap-6">
    <a 
      href="https://yandex.ru/maps/..."
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 px-8 py-4 bg-white border border-black/5 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
    >
      <div className="w-10 h-10 bg-[#f33] rounded-lg flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:rotate-12">
        Я
      </div>
      <div className="flex flex-col items-start">
        <span className="text-black text-sm font-bold tracking-wide">
          Смотреть на Яндекс Картах
        </span>
        <span className="text-black/40 text-[11px]">
          150+ положительных отзывов
        </span>
      </div>
      <div className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#D4AF37]">
        →
      </div>
    </a>
  </div>
</div>
    </section>
  );
}
