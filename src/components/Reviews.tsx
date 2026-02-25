"use client"
import { REVIEWS } from '@/data/content'
import React from 'react'
import { motion } from 'framer-motion'

export default function Reviews() {
  const doubledReviews = [...REVIEWS, ...REVIEWS]

  return (
    <section id='reviews' className="py-24 bg-background-light overflow-hidden mt-5"> 
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter ">
          <span className="text-[#D4AF37]">Отзывы клиентов</span>
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden py-10">
        <motion.div
          className="flex items-stretch whitespace-nowrap"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
            
          }}
        >
          {doubledReviews.map((review, idx) => (
            <div
              key={idx}
              className="mx-4 w-[350px] md:w-[450px] flex-shrink-0 bg-[#161616] p-8 rounded-2xl border border-white/5 shadow-xl flex flex-col justify-between"
            >
              <div className='break-all'>
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
                <span className="text-white font-medium uppercase tracking-widest text-xs">
                  {review.username}
                </span>
                <span className="text-white font-small tracking-widest text-[10px] ml-auto brightness-50">
                    {review.date}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}