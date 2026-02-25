'use client'
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { SERVICES } from "@/data/content";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ServicePanel } from "@/types";

function PanelIndicator({ isActive }: { isActive: boolean }) {
  return (
    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3 }}>
      <motion.div
        animate={{ scaleY: isActive ? 1 : 0 }}
        transition={{ duration: .4, ease: [.2, 1, .3, 1] }}
        style={{
          width: '100%', height: '100%',
          background: 'var(--gold)', transformOrigin: 'top',
        }}
      />
    </div>
  )
}

function Panel({ panel }: { panel: ServicePanel }) {
  return (
    <div
      style={{
        width: '100vw', height: '100%', flexShrink: 0,
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        borderTop: '1px solid var(--border)',
        position: 'relative',
      }}
    >
      {/* Left */}
      <div style={{
        padding: '80px 56px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        borderRight: '1px solid var(--border)',
      }}>
        <div style={{
          fontFamily: '"Bodoni Moda", serif',
          fontSize: 140, fontWeight: 300,
          color: 'rgba(0, 0, 0, 0.06)', lineHeight: 1,
          letterSpacing: -4, userSelect: 'none',
        }}>
          {panel.num}
        </div>
        <div>
          <div style={{
            fontFamily: '"Josefin Sans", sans-serif',
            fontSize: 8, letterSpacing: 5, textTransform: 'uppercase',
            color: 'var(--gold)', marginBottom: 20,
          }}>
            {panel.tag}
          </div>
          <h3 style={{
            fontFamily: '"Bodoni Moda", serif',
            fontSize: 'clamp(40px,5vw,72px)', fontWeight: 300,
            lineHeight: 1.0, letterSpacing: -1.5, marginBottom: 28,
          }}>
            {panel.title.split('\n').map((line, i) => (
              <span key={i} style={{ display: 'block' }}>
                {i === panel.title.split('\n').length - 1
                  ? <><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>{panel.titleEm}</em></>
                  : line
                }
              </span>
            ))}
            {panel.title.split('\n').length === 1 && (
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>{panel.titleEm}</em>
            )}
          </h3>
          <p style={{ fontSize: 14, lineHeight: 1.9, color: 'var(--text)', maxWidth: 380 }}>
            {panel.desc}
          </p>
          <ul style={{ listStyle: 'none', marginTop: 32, display: 'flex', flexDirection: 'column' }}>
            {panel.features.map((f, i) => (
              <li key={i} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '12px 0', borderBottom: '1px solid rgba(184,144,106,.07)',
                fontSize: 13, color: 'var(--text)',
              }}>
                <span style={{ color: 'var(--gold)', fontSize: 5 }}>◆</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right */}
      <div style={{
        padding: '80px 56px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Diagonal pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `repeating-linear-gradient(-45deg,
            transparent, transparent 48px,
            rgba(184,144,106,.02) 48px, rgba(184,144,106,.02) 49px
          )`,
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: '"Josefin Sans", sans-serif',
            fontSize: 8, letterSpacing: 4, textTransform: 'uppercase',
            color: 'var(--gold)', marginBottom: 24,
          }}>
            Стоимость
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {panel.prices.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ paddingLeft: 8, paddingRight: 8, backgroundColor: 'rgba(184,144,106,.08)' }}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '13px 0', borderBottom: '1px solid rgba(184,144,106,.07)',
                  cursor: 'default',
                }}
              >
                <span style={{ fontSize: 13, color: 'var(--text)', maxWidth: '65%', lineHeight: 1.35 }}>
                  {p.name}
                </span>
                <span style={{
                  fontFamily: '"Bodoni Moda", serif',
                  fontSize: 18, fontWeight: 300, color: 'var(--gold-lt)', whiteSpace: 'nowrap',
                }}>
                  {p.price}
                </span>
              </motion.div>
            ))}
          </div>
          
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.a
            href="https://www.yclients.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: .98 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 14,
              padding: '16px 36px', background: 'var(--gold)',
              fontFamily: '"Josefin Sans", sans-serif',
              fontSize: 9, letterSpacing: 3, textTransform: 'uppercase',
              color: 'var(--bg)', textDecoration: 'none',
            }}
          >
            <span>Записаться</span>
            <span>→</span>
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const pinAreaRef  = useRef<HTMLDivElement>(null)
  const stickyRef   = useRef<HTMLDivElement>(null)
  const trackRef    = useRef<HTMLDivElement>(null)
  const activePanel = useRef(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const check = () => {
      setIsMobile(window.innerWidth < 768)
    }

    check()
    window.addEventListener('resize', check)

    return () => {
      window.removeEventListener('resize', check)
    }
  }, [])

  useEffect(() => {
  if (isMobile) return
  if (typeof window === 'undefined') return

  const PIN_COUNT = SERVICES.length
  const scrollDistance = window.innerWidth * (PIN_COUNT - 1)

  if (pinAreaRef.current) {
    pinAreaRef.current.style.height = (window.innerHeight + scrollDistance) + 'px'
  }

  const st = gsap.to(trackRef.current, {
    x: () => -scrollDistance,
    ease: 'none',
    scrollTrigger: {
      trigger: pinAreaRef.current,
      pin: stickyRef.current,
      start: 'top top',
      // Конец скролла должен совпадать с физической высотой минус один экран
      end: () => `+=${scrollDistance}`,
      scrub: 1,
      invalidateOnRefresh: true,
    },
  })

  const handleResize = () => {
    const newScrollDistance = window.innerWidth * (SERVICES.length - 1)
    if (pinAreaRef.current) {
      pinAreaRef.current.style.height = (window.innerHeight + newScrollDistance) + 'px'
    }
    st.scrollTrigger?.refresh()
  }

  window.addEventListener('resize', handleResize)

  return () => {
    st.scrollTrigger?.kill()
    window.removeEventListener('resize', handleResize)
  }
}, [isMobile])

  if (isMobile) {
    return (
      <section
        id="services"
        className="py-14 px-4"
        style={{ background: 'var(--bg2)', position: 'relative', zIndex: 2 }}
      >
        <ScrollReveal direction="up">
          <div className="mb-10">
            <div className="flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] font-semibold">
              <span className="h-px w-10 bg-[var(--gold)]" />
              Наши услуги
            </div>
            <h2
              className="mt-4 leading-tight"
              style={{
                fontFamily: '"Bodoni Moda", serif',
                fontSize: 'clamp(30px,8vw,40px)',
                letterSpacing: -1.5,
                fontWeight: 300,
              }}
            >
              Всё, что<br />
              вам <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>нужно</em>
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {SERVICES.map((panel, index) => (
            <ScrollReveal
              key={panel.id}
              direction="up"
              delay={index * 0.08}
              className="rounded-3xl border border-[var(--border)] bg-[var(--bg)]/80 overflow-hidden"
            >
              <article className="p-5 flex flex-col gap-5">
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <div
                      style={{
                        fontFamily: '"Josefin Sans", sans-serif',
                        fontSize: 9,
                        letterSpacing: 4,
                        textTransform: 'uppercase',
                        color: 'var(--gold)',
                        marginBottom: 8,
                      }}
                    >
                      {panel.tag}
                    </div>
                    <h3
                      style={{
                        fontFamily: '"Bodoni Moda", serif',
                        fontSize: 24,
                        fontWeight: 300,
                        lineHeight: 1.1,
                        letterSpacing: -0.5,
                      }}
                    >
                      {panel.title.split('\n').map((line, i) => (
                        <span key={i} className="block">
                          {i === panel.title.split('\n').length - 1 ? (
                            <>
                              {line}{' '}
                              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
                                {panel.titleEm}
                              </em>
                            </>
                          ) : (
                            line
                          )}
                        </span>
                      ))}
                      {panel.title.split('\n').length === 1 && (
                        <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
                          {panel.titleEm}
                        </em>
                      )}
                    </h3>
                  </div>
                  <div
                    style={{
                      fontFamily: '"Bodoni Moda", serif',
                      fontSize: 40,
                      fontWeight: 300,
                      color: 'rgba(184,144,106,.25)',
                      lineHeight: 1,
                    }}
                  >
                    {panel.num}
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-[var(--text)]/90">
                  {panel.desc}
                </p>

                <ul className="mt-1 space-y-1.5">
                  {panel.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-[var(--text)]">
                      <span className="mt-[6px] text-[var(--gold)] text-[8px]">◆</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 border-t border-[var(--border)] pt-3 space-y-2">
                  {panel.prices.map((p, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-4 text-[13px]"
                    >
                      <span className="text-[var(--text)]">{p.name}</span>
                      <span
                        style={{
                          fontFamily: '"Bodoni Moda", serif',
                          fontSize: 16,
                          fontWeight: 300,
                          color: 'var(--gold-lt)',
                        }}
                      >
                        {p.price}
                      </span>
                    </div>
                  ))}
                </div>
                

                <div className="pt-1">
                  <a
                    href="https://www.yclients.com"
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[10px] tracking-[0.24em] uppercase"
                    style={{
                      fontFamily: '"Josefin Sans", sans-serif',
                      background: 'var(--gold)',
                      color: 'var(--bg)',
                      textDecoration: 'none',
                    }}
                  >
                    Записаться
                    <span>→</span>
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    )
  }

  return (
    <div id="services" style={{ position: 'relative', zIndex: 2, background: 'var(--bg2)' }}>
      {/* Header */}
      <div style={{
        padding: '80px 56px 48px',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{
          fontFamily: '"Josefin Sans", sans-serif',
          fontSize: 12, letterSpacing: 5, textTransform: 'uppercase',
          color: 'var(--gold)', marginBottom: 28,
          display: 'flex', alignItems: 'center', gap: 20,
        }}>
          <span style={{ width: 44, height: 1, background: 'var(--gold)', flexShrink: 0 }} />
          Наши услуги
        </div>
        <h2 style={{
          fontFamily: '"Bodoni Moda", serif',
          fontSize: 'clamp(44px,6vw,84px)', fontWeight: 300,
          lineHeight: .95, letterSpacing: -2,
        }}>
          Всё, что<br />
          вам <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>нужно</em>
        </h2>
      </div>

      {/* Pin area */}
      <div ref={pinAreaRef}>
        <div
          ref={stickyRef}
          style={{
            position: 'sticky', top: 0,
            height: '100vh', overflow: 'hidden',
            display: 'flex',
          }}
        >
          <div
            ref={trackRef}
            style={{ display: 'flex', flexShrink: 0, height: '100%' }}
          >
            {SERVICES.map(panel => (
              <Panel key={panel.id} panel={panel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
