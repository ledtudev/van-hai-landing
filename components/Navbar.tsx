'use client'

import { AnimatePresence, type Variants, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Khoá scroll body khi menu mobile mở
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const menuItems = [
    { label: 'Tổng quan', href: '#tong-quan' },
    { label: 'Vị trí', href: '#vi-tri' },
    { label: 'Tiện ích', href: '#tien-ich' },
    { label: 'Mặt bằng', href: '#mat-bang' },
    { label: 'Tiến độ', href: '#tien-do' },
    { label: 'Chính sách', href: '#chinh-sach' },
    { label: 'Báo giá', href: '#bao-gia' },
    { label: 'Liên hệ', href: '#lien-he' },
  ]

  const logoUrl =
    'https://vinhomeshaivanland.com/wp-content/uploads/2026/03/logo-vinhomes-hai-van-1024x794.png'

  const mobileMenuVariants: Variants = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'tween' as const, duration: 0.32, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: { type: 'tween' as const, duration: 0.26, ease: [0.4, 0, 1, 1] },
    },
  }


  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed left-0 top-0 z-50 w-full pb-8 pt-5 transition-all duration-500 ${
          scrolled
            ? 'bg-[#031024]/95 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-md'
            : 'bg-gradient-to-b from-[#031024]/90 via-[#031024]/60 to-transparent'
        }`}
      >
        <div className="relative mx-auto flex max-w-[1500px] items-center justify-between px-4 md:px-6">
          {/* LOGO MOBILE */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
            className="flex md:hidden items-center z-50"
          >
            <a href="#top" className="block">
              <img
                src={logoUrl}
                alt="Logo Vinhomes Hải Vân Bay"
                className="h-10 w-auto object-contain opacity-90"
              />
            </a>
          </motion.div>

          {/* MENU TRÁI */}
          <nav className="hidden flex-1 md:block z-10">
            <ul className="flex justify-end gap-6 lg:gap-10 pr-12 lg:pr-16 text-[13px] font-bold tracking-widest text-white">
              {menuItems.slice(0, 4).map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                >
                  <a
                    href={item.href}
                    className="group relative uppercase transition-colors hover:text-[#d4af37]"
                  >
                    {item.label}
                    <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* LOGO GIỮA */}
          <div className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 justify-center pointer-events-none w-full h-full group/logo">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 0.6 }}
              transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
              className="absolute -top-[90px] h-[180px] w-[180px] rounded-full bg-[#031024]/20 backdrop-blur-sm border border-white/5 transition-all duration-700 group-hover/logo:scale-[1.5,1.2] origin-top group-hover/logo:opacity-100"
            />
            <motion.div
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
              className="absolute -top-[70px] h-[140px] w-[140px] rounded-full bg-[#031024]/40 backdrop-blur-md border border-white/5 transition-all duration-500 group-hover/logo:scale-[1.3,1.6] origin-bottom-left"
            />
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.45, ease: 'easeOut' }}
              className="absolute -top-[45px] h-[100px] w-[100px] rounded-full bg-[#031024]/80 shadow-xl flex items-center justify-center pointer-events-auto border border-white/10 backdrop-blur-md transition-all duration-300 group-hover/logo:scale-110"
            >
              <a
                href="#top"
                className="flex h-[55px] w-[55px] items-center justify-center mt-5"
              >
                <img
                  src={logoUrl}
                  alt="Logo Vinhomes Hải Vân Bay"
                  className="h-full w-full object-contain opacity-90 transition-transform duration-300 group-hover/logo:scale-110"
                />
              </a>
            </motion.div>
          </div>

          {/* MENU PHẢI */}
          <nav className="hidden flex-1 md:block z-10">
            <ul className="flex justify-start gap-6 lg:gap-10 pl-12 lg:pl-16 text-[13px] font-bold tracking-widest text-white">
              {menuItems.slice(4).map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i + 4) * 0.07, duration: 0.4 }}
                >
                  <a
                    href={item.href}
                    className="group relative uppercase transition-colors hover:text-[#d4af37]"
                  >
                    {item.label}
                    <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* HAMBURGER */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileTap={{ scale: 0.9 }}
            className="block text-white md:hidden hover:text-[#d4af37] z-50"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Mở menu"
          >
            <Menu className="h-8 w-8" />
          </motion.button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[99] bg-black/60 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed right-0 top-0 z-[100] h-full w-[80vw] max-w-sm bg-[#031024] shadow-2xl md:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <img src={logoUrl} alt="Logo" className="h-10 object-contain" />
                <motion.button
                  whileTap={{ scale: 0.85, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Đóng menu"
                  className="text-white hover:text-[#d4af37]"
                >
                  <X className="h-7 w-7" />
                </motion.button>
              </div>

              {/* Nav items */}
              <nav className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="flex flex-col gap-1">
                  {menuItems.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.055, duration: 0.3, ease: 'easeOut' }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-4 py-3.5 text-base font-bold tracking-widest text-white uppercase transition-all hover:bg-white/10 hover:text-[#d4af37] active:scale-95"
                      >
                        <span className="text-[#d4af37] text-xs opacity-60">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Footer hotline */}
              <div className="border-t border-white/10 px-6 py-5">
                <p className="text-xs text-white/50 mb-1">Liên hệ tư vấn</p>
                <a
                  href="tel:0899967999"
                  className="text-lg font-bold text-[#d4af37] tracking-wider"
                >
                  08 999 67 999
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
