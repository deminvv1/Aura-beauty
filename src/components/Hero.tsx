"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { useMagnetic } from "@/hooks/useMagnetic";

const words = ["естественная", "неповторимая", "сияющая"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const ctaMag = useMagnetic(0.2);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setOpacity(1);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/big.jpg" // Заглушка, пока видео грузится
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg-video1.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        {/* <Image
          src="/big.jpg"
          alt="hero"
          fill
          className="object-cover"
          priority
        /> */}
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <ScrollReveal
        direction="up"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tight mb-6">
          Ваша{" "}
          <span
            className="inline-grid italic font-light text-primary transition-opacity duration-1000"
            style={{ opacity }}
          >
            <span className="col-start-1 row-start-1">{words[index]}</span>
            <span className="col-start-1 row-start-1 invisible pointer-events-none">
              естественная
            </span>
          </span>{" "}
          красота
        </h1>
        <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
          Профессиональный уход и индивидуальный подход в каждом прикосновении.
          Почувствуйте гармонию и заботу в нашей студии.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            ref={ctaMag.ref as React.RefObject<HTMLAnchorElement>}
            onMouseMove={
              ctaMag.onMouseMove as unknown as React.MouseEventHandler<HTMLAnchorElement>
            }
            href="#services"
            className="bg-primary text-white px-10 py-4 rounded-full text-base font-bold tracking-widest uppercase shadow-2xl shadow-primary/40 hover:bg-primary/90 transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
          >
            Выбрать услугу
          </Link>
        </div>
      </ScrollReveal>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <span className="material-symbols-outlined text-4xl">expand_more</span>
      </div>
    </header>
  );
}
