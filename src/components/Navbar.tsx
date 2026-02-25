'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { useMagnetic } from '@/hooks/useMagnetic'
// import { NAV_LINKS } from '@/data/content'

gsap.registerPlugin(ScrollTrigger)

function NavLink({ label, href }: { label: string; href: string }) {
  const lineRef = useRef<HTMLSpanElement>(null)

  const handleEnter = () => gsap.to(lineRef.current, { width: '100%', duration: .35, ease: 'power3.out' })
  const handleLeave = () => gsap.to(lineRef.current, { width: '0%',   duration: .25, ease: 'power3.in' })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      gsap.to(window, {
        scrollTo: { y: target, offsetY: 76 },
        duration: 1.2,
        ease: 'power3.inOut',
      })
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative"
      style={{
        fontFamily: '"Josefin Sans", sans-serif',
        fontSize: 9, letterSpacing: '3px', textTransform: 'uppercase',
        color: 'var(--muted)', textDecoration: 'none', transition: 'color .3s',
      }}
      onMouseOver={e => (e.currentTarget.style.color = 'var(--gold)')}
      onMouseOut={e  => (e.currentTarget.style.color = 'var(--muted)')}
    >
      {label}
      <span
        ref={lineRef}
        style={{
          position: 'absolute', bottom: -2, left: 0,
          height: 1, width: 0, background: 'var(--gold)',
        }}
      />
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const ctaMag = useMagnetic(0.2)

  useEffect(() => {
    ScrollTrigger.create({
      start: 'top -80px',
      onUpdate: (self) => setScrolled(self.scroll() > 80),
    })

    // Load gsap scrollTo plugin
    if (typeof window !== 'undefined') {
      import('gsap/ScrollToPlugin').then(({ ScrollToPlugin }) => {
        gsap.registerPlugin(ScrollToPlugin)
      })
    }
  }, [])

  const navColor = scrolled ? '#D4AF37' : '#000000'

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .8, ease: [.16, 1, .3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 16px',
          height: 64,
          background: scrolled ? 'rgba(8,7,7,.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'background .6s, border-color .6s, backdrop-filter .6s',
        }}
      >
        <div style={{ flex: '0 0 auto' }}>
          <a
            href="#"
            style={{
              fontFamily: '"Bodoni Moda", serif',
              fontSize: 20,
              letterSpacing: 10,
              textTransform: 'uppercase',
              color: navColor,
              textDecoration: 'none',
              fontWeight: 400,
            }}
          >
            Aura
          </a>
        </div>

        <div
          className="hidden md:flex"
          style={{
            flex: '1 1 auto',
            justifyContent: 'center',
            gap: 24,
          }}
        >
          <a
            href="#services"
            style={{
              fontFamily: '"Bodoni Moda", serif',
              fontSize: 12,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: navColor,
              textDecoration: 'none',
              fontWeight: 400,
            }}
            className="nav-link"
          >
            Услуги
          </a>
          <a
            href="#portfolio"
            style={{
              fontFamily: '"Bodoni Moda", serif',
              fontSize: 12,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: navColor,
              textDecoration: 'none',
              fontWeight: 400,
            }}
            className="nav-link"
          >
            Наши работы
          </a>
          <a
            href="#about"
            style={{
              fontFamily: '"Bodoni Moda", serif',
              fontSize: 12,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: navColor,
              textDecoration: 'none',
              fontWeight: 400,
            }}
            className="nav-link"
          >
            О нас
          </a>
          <a
            href="#contacts"
            style={{
              fontFamily: '"Bodoni Moda", serif',
              fontSize: 12,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: navColor,
              textDecoration: 'none',
              fontWeight: 400,
            }}
            className="nav-link"
          >
            Контакты
          </a>
          <a
            href="#reviews"
            style={{
              fontFamily: '"Bodoni Moda", serif',
              fontSize: 12,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: navColor,
              textDecoration: 'none',
              fontWeight: 400,
            }}
            className="nav-link"
          >
            Отзывы
          </a>
        </div>

        <div style={{ flex: '0 0 auto' }} className="hidden md:block">
          <a
            ref={ctaMag.ref as React.RefObject<HTMLAnchorElement>}
            href="https://www.yclients.com" // Измените ссылку на ваш y.clients
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={ctaMag.onMouseMove as unknown as React.MouseEventHandler<HTMLAnchorElement>}
            style={{
              fontFamily: '"Josefin Sans", sans-serif',
              fontSize: 11,
              letterSpacing: 3,
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '15px 26px',
              position: 'relative',
              overflow: 'hidden',
              display: 'inline-block',
              borderRadius: '9999px',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',

              backgroundColor: isHovered
                ? (scrolled ? '#ffffff' : '#D4AF37')
                : (scrolled ? '#D4AF37' : 'transparent'),

              color: isHovered
                ? '#000000'
                : (scrolled ? '#000000' : '#000000'),
            }}
            className="nav-cta-btn"
          >
            <span style={{ position: 'relative', zIndex: 1 }}>Записаться</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden ml-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/40"
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          style={{
            background: 'transparent',
            color: navColor,
          }}
        >
          <span className="sr-only">Меню</span>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              transform: isMenuOpen ? 'rotate(90deg)' : 'none',
              transition: 'transform .3s ease',
            }}
          >
            <span
              style={{
                height: 2,
                width: 20,
                backgroundColor: 'currentColor',
                borderRadius: 9999,
              }}
            />
            <span
              style={{
                height: 2,
                width: 20,
                backgroundColor: 'currentColor',
                borderRadius: 9999,
              }}
            />
          </div>
        </button>
      </motion.nav>

      {isMenuOpen && (
        <div
          className="md:hidden"
          style={{
            position: 'fixed',
            top: 64,
            left: 0,
            right: 0,
            zIndex: 1000,
            background: 'rgba(8,7,7,0.96)',
            padding: '20px 16px 32px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              style={{
                fontFamily: '"Bodoni Moda", serif',
                fontSize: 16,
                letterSpacing: 4,
                textTransform: 'uppercase',
                color: '#ffffff',
                textDecoration: 'none',
              }}
            >
              Услуги
            </a>
            <a
              href="#portfolio"
              onClick={() => setIsMenuOpen(false)}
              style={{
                fontFamily: '"Bodoni Moda", serif',
                fontSize: 16,
                letterSpacing: 4,
                textTransform: 'uppercase',
                color: '#ffffff',
                textDecoration: 'none',
              }}
            >
              Наши работы
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              style={{
                fontFamily: '"Bodoni Moda", serif',
                fontSize: 16,
                letterSpacing: 4,
                textTransform: 'uppercase',
                color: '#ffffff',
                textDecoration: 'none',
              }}
            >
              О нас
            </a>
            <a
              href="#contacts"
              onClick={() => setIsMenuOpen(false)}
              style={{
                fontFamily: '"Bodoni Moda", serif',
                fontSize: 16,
                letterSpacing: 4,
                textTransform: 'uppercase',
                color: '#ffffff',
                textDecoration: 'none',
              }}
            >
              Контакты
            </a>
            <a
              href="#reviews"
              onClick={() => setIsMenuOpen(false)}
              style={{
                fontFamily: '"Bodoni Moda", serif',
                fontSize: 16,
                letterSpacing: 4,
                textTransform: 'uppercase',
                color: '#ffffff',
                textDecoration: 'none',
              }}
            >
              Отзывы
            </a>

            <a
              href="https://www.yclients.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => setIsMenuOpen(false)}
              style={{
                display: 'inline-block',
                position: 'relative',
                zIndex: 1005,
                marginTop: 12,
                alignSelf: 'flex-start',
                fontFamily: '"Josefin Sans", sans-serif',
                fontSize: 11,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: '#000000',
                textDecoration: 'none',
                padding: '12px 24px',
                borderRadius: 9999,
                backgroundColor: '#D4AF37',
                
              }}
            >
              Записаться
            </a>
          </div>
        </div>
      )}
    </>
  )
}
