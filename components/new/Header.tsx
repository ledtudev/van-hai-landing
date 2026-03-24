/* eslint-disable react/no-unescaped-entities */
'use client'

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  Mail, 
  Clock, 
  Phone, 
  Search, 
  Menu,
  X,
  Facebook, 
  Instagram, 
  Youtube, 
} from 'lucide-react';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [desktopSearchOpen, setDesktopSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname() ?? ''

  const hotlineNumber = '0936.191.838'
  const handleHotlineClick = () => {
    // Yêu cầu: click ở header phải alert thay vì mở trình chọn app (tel:).
    window.alert(`Hotline Tư Vấn: ${hotlineNumber}`)
  }

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`)

  useEffect(() => {
    if (!mobileOpen && !desktopSearchOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [mobileOpen, desktopSearchOpen])

  useEffect(() => {
    if (!desktopSearchOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDesktopSearchOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [desktopSearchOpen])

  return (
    <>
      {/* Normal header (scroll with page) */}
      <header className="w-full font-sans z-[60] bg-white">
      {/* 1. Top Bar (Màu vàng cam) */}
      <div className="hidden md:flex bg-[#d49911] text-white text-xs py-1 px-4 justify-between items-center">
        <div className="flex gap-4">
          <Link href="/new/trang-chu" className="hover:underline">Trang chủ</Link>
          <span className="opacity-50">|</span>
          <a href="#" className="hover:underline">Video Dự án</a>
          <span className="opacity-50">|</span>
          <a href="#" className="hover:underline">Chính sách bảo mật</a>
          <span className="opacity-50">|</span>
          <button
            type="button"
            className="hover:underline"
            onClick={() => {
              setMobileOpen(false)
              setDesktopSearchOpen(false)
              handleHotlineClick()
            }}
          >
            Liên hệ
          </button>
        </div>
        <div className="flex items-center gap-3">
          <Facebook size={14} fill="white" />
          <Instagram size={14} />
          <span className="font-bold">TikTok</span>
          <Mail size={14} />
          <Phone size={14} fill="white" />
          <Youtube size={14} />
        </div>
      </div>

      {/* 2. Middle Section (Logo & Info) */}
      <div className="hidden md:flex bg-white py-4 px-6 justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <img 
            src="/logo.png"
            alt="Vinhomes Logo" 
            className="h-16 object-contain"
          />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-1 text-[13px] text-gray-800">
          <div className="flex items-center gap-2">
            <div className="text-green-500"><Mail size={18} /></div>
            <span className="font-semibold">cskh.vinhomescaoxala@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-green-500"><Clock size={18} /></div>
            <span>07h00 - 23h00 hàng ngày</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-green-500"><Phone size={18} fill="currentColor" /></div>
            <span>...</span>
          </div>
        </div>

        {/* Banner Images */}
        <div className="hidden lg:flex h-24">
          <img
            src="/banner-header.jpg"
            alt="Banner header"
            className="h-full w-full max-w-[584px] object-cover rounded-sm"
          />
        </div>
      </div>

      {/* 3. Navigation Bar (Desktop: đen, Mobile: trắng) */}
      <nav className="bg-white text-gray-900 md:bg-[#1a1a1a] md:text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          {/* Desktop nav */}
          <div className="hidden md:flex items-center justify-between w-full">
            <ul className="flex items-center uppercase text-[12px] font-bold tracking-wider flex-nowrap">
              <li className={isActive('/new/trang-chu') ? 'bg-[#0056b3] py-4 px-4 border-b-2 border-white' : 'py-4 px-4 hover:text-blue-400 transition'}>
                <Link href="/new/trang-chu" className={isActive('/new/trang-chu') ? 'block whitespace-nowrap text-white' : 'block whitespace-nowrap'}>TRANG CHỦ</Link>
              </li>
              <li className={isActive('/new/chu-dau-tu') ? 'bg-[#0056b3] py-4 px-4 border-b-2 border-white' : 'py-4 px-4 hover:text-blue-400 transition'}>
                <Link href="/new/chu-dau-tu" className={isActive('/new/chu-dau-tu') ? 'block whitespace-nowrap text-white' : 'block whitespace-nowrap'}>CHỦ ĐẦU TƯ</Link>
              </li>
              <li className={isActive('/new/vi-tri-du-an') ? 'bg-[#0056b3] py-4 px-4 border-b-2 border-white' : 'py-4 px-4 hover:text-blue-400 transition'}>
                <Link href="/new/vi-tri-du-an" className={isActive('/new/vi-tri-du-an') ? 'block whitespace-nowrap text-white' : 'block whitespace-nowrap'}>VỊ TRÍ DỰ ÁN</Link>
              </li>
              <li className={isActive('/new/tien-ich-du-an') ? 'bg-[#0056b3] py-4 px-4 border-b-2 border-white' : 'py-4 px-4 hover:text-blue-400 transition'}>
                <Link href="/new/tien-ich-du-an" className={isActive('/new/tien-ich-du-an') ? 'block whitespace-nowrap text-white' : 'block whitespace-nowrap'}>TIỆN ÍCH DỰ ÁN</Link>
              </li>
              <li className={isActive('/new/mat-bang-thiet-ke') ? 'bg-[#0056b3] py-4 px-4 border-b-2 border-white' : 'py-4 px-4 hover:text-blue-400 transition'}>
                <Link href="/new/mat-bang-thiet-ke" className={isActive('/new/mat-bang-thiet-ke') ? 'block whitespace-nowrap text-white' : 'block whitespace-nowrap'}>MẶT BẰNG THIẾT KẾ</Link>
              </li>
              <li className={isActive('/new/chinh-sach-ban-hang') ? 'bg-[#0056b3] py-4 px-4 border-b-2 border-white' : 'py-4 px-4 hover:text-blue-400 transition'}>
                <Link href="/new/chinh-sach-ban-hang" className={isActive('/new/chinh-sach-ban-hang') ? 'block whitespace-nowrap text-white' : 'block whitespace-nowrap'}>CHÍNH SÁCH BÁN HÀNG</Link>
              </li>
              <li className={isActive('/new/gia-ban-dot-1') ? 'bg-[#0056b3] py-4 px-4 border-b-2 border-white' : 'py-4 px-4 hover:text-blue-400 transition'}>
                <Link href="/new/gia-ban-dot-1" className={isActive('/new/gia-ban-dot-1') ? 'block whitespace-nowrap text-white' : 'block whitespace-nowrap'}>GIÁ BÁN ĐỢT 1</Link>
              </li>
              <li className={isActive('/new/tin-tuc-moi') ? 'bg-[#0056b3] py-4 px-4 border-b-2 border-white' : 'py-4 px-4 hover:text-blue-400 transition'}>
                <Link href="/new/tin-tuc-moi" className={isActive('/new/tin-tuc-moi') ? 'block whitespace-nowrap text-white' : 'block whitespace-nowrap'}>TIN TỨC MỚI</Link>
              </li>
              <li className={isActive('/new/hotline-tu-van') ? 'bg-[#0056b3] py-4 px-4 border-b-2 border-white' : 'py-4 px-4 hover:text-blue-400 transition'}>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false)
                    setDesktopSearchOpen(false)
                    handleHotlineClick()
                  }}
                  className={
                    isActive('/new/hotline-tu-van')
                      ? 'block whitespace-nowrap text-white'
                      : 'block whitespace-nowrap'
                  }
                >
                  HOTLINE TƯ VẤN
                </button>
              </li>
            </ul>
            <button
              type="button"
              className="pr-4 cursor-pointer hover:text-gray-400"
              aria-label="Open search"
              onClick={() => {
                setMobileOpen(false)
                setDesktopSearchOpen(true)
              }}
            >
              <Search size={20} />
            </button>
          </div>

          {/* Mobile nav (3 gạch + dropdown) */}
          <div className="md:hidden w-full py-3 grid grid-cols-3 items-center">
            {/* Left: Search */}
            <button
              type="button"
              aria-label="Search"
              className="justify-self-start list-none cursor-pointer select-none w-10 h-10 flex items-center justify-center rounded-md hover:bg-black/5 text-gray-900"
            >
              <Search size={20} />
            </button>

            {/* Center: Logo */}
            <div className="justify-self-center">
              <img
                src="/logo.png"
                alt="Vinhomes Logo"
                className="h-10 object-contain"
              />
            </div>

            {/* Right: Menu */}
            <button
              type="button"
              aria-label="Open menu"
              className="justify-self-end list-none cursor-pointer select-none w-10 h-10 flex items-center justify-center rounded-md hover:bg-black/5 text-gray-900"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>

          {/* Mobile drawer */}
          {mobileOpen && (
            <div className="fixed inset-0 z-[70]">
              <div
                className="absolute inset-0 bg-black/30"
                onClick={() => setMobileOpen(false)}
                aria-hidden="true"
              />

              <aside className="absolute right-0 top-0 h-full w-[320px] max-w-[90vw] bg-white text-black shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                  <button
                    type="button"
                    className="text-gray-700"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Social icons row */}
                <div className="px-4 pt-3 pb-2">
                  <div className="flex items-center gap-4 text-gray-500">
                    <Facebook size={16} />
                    <Instagram size={16} />
                    <Mail size={16} />
                    <Youtube size={16} />
                  </div>
                </div>

                {/* Menu */}
                <ul className="mt-2">
                  <li>
                    <Link
                      href="/new/trang-chu"
                      className={isActive('/new/trang-chu') ? 'block bg-[#0056b3] text-white font-bold uppercase tracking-wide whitespace-nowrap py-4 px-4 border-b border-blue-800' : 'block font-bold uppercase tracking-wide whitespace-nowrap py-4 px-4 text-gray-800 border-b border-gray-200'}
                      onClick={() => setMobileOpen(false)}
                    >
                      TRANG CHỦ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/new/chu-dau-tu"
                      className={isActive('/new/chu-dau-tu') ? 'block bg-[#0056b3] text-white font-bold uppercase tracking-wide whitespace-nowrap py-4 px-4 border-b border-blue-800' : 'block font-bold uppercase tracking-wide whitespace-nowrap py-4 px-4 text-gray-800 border-b border-gray-200'}
                      onClick={() => setMobileOpen(false)}
                    >
                      CHỦ ĐẦU TƯ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/new/vi-tri-du-an"
                      className={isActive('/new/vi-tri-du-an') ? 'block bg-[#0056b3] text-white font-bold uppercase tracking-wide whitespace-nowrap py-4 px-4 border-b border-blue-800' : 'block font-bold uppercase tracking-wide whitespace-nowrap py-4 px-4 text-gray-800 border-b border-gray-200'}
                      onClick={() => setMobileOpen(false)}
                    >
                      VỊ TRÍ DỰ ÁN
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/new/tien-ich-du-an"
                      className={isActive('/new/tien-ich-du-an') ? 'block bg-[#0056b3] text-white font-bold uppercase tracking-wide whitespace-nowrap py-4 px-4 border-b border-blue-800' : 'block font-bold uppercase tracking-wide whitespace-nowrap py-4 px-4 text-gray-800 border-b border-gray-200'}
                      onClick={() => setMobileOpen(false)}
                    >
                      TIỆN ÍCH DỰ ÁN
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/new/mat-bang-thiet-ke"
                      className={isActive('/new/mat-bang-thiet-ke') ? 'block bg-[#0056b3] text-white font-bold uppercase tracking-wide whitespace-nowrap py-4 px-4 border-b border-blue-800' : 'block font-bold uppercase tracking-wide whitespace-nowrap py-4 px-4 text-gray-800 border-b border-gray-200 text-left'}
                      onClick={() => setMobileOpen(false)}
                    >
                      MẶT BẰNG THIẾT KẾ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/new/chinh-sach-ban-hang"
                      className={isActive('/new/chinh-sach-ban-hang') ? 'block bg-[#0056b3] text-white font-bold uppercase tracking-wide whitespace-nowrap py-4 px-4 border-b border-blue-800' : 'block font-bold uppercase tracking-wide whitespace-nowrap py-4 px-4 text-gray-800 border-b border-gray-200'}
                      onClick={() => setMobileOpen(false)}
                    >
                      CHÍNH SÁCH BÁN HÀNG
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/new/gia-ban-dot-1"
                      className={isActive('/new/gia-ban-dot-1') ? 'block bg-[#0056b3] text-white font-bold uppercase tracking-wide whitespace-nowrap py-4 px-4 border-b border-blue-800' : 'block font-bold uppercase tracking-wide whitespace-nowrap py-4 px-4 text-gray-800 border-b border-gray-200'}
                      onClick={() => setMobileOpen(false)}
                    >
                      GIÁ BÁN ĐỢT 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/new/tin-tuc-moi"
                      className={isActive('/new/tin-tuc-moi') ? 'block bg-[#0056b3] text-white font-bold uppercase tracking-wide whitespace-nowrap py-4 px-4 border-b border-blue-800' : 'block font-bold uppercase tracking-wide whitespace-nowrap py-4 px-4 text-gray-800 border-b border-gray-200'}
                      onClick={() => setMobileOpen(false)}
                    >
                      TIN TỨC MỚI
                    </Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      className={
                        isActive('/new/hotline-tu-van')
                          ? 'block bg-[#0056b3] text-white font-bold uppercase tracking-wide whitespace-nowrap py-4 px-4 border-b border-blue-800'
                          : 'block font-bold uppercase tracking-wide whitespace-nowrap py-4 px-4 text-gray-800 border-b border-gray-200'
                      }
                      onClick={() => {
                        setMobileOpen(false)
                        setDesktopSearchOpen(false)
                        handleHotlineClick()
                      }}
                    >
                      HOTLINE TƯ VẤN
                    </button>
                  </li>
                </ul>

                {/* Search bar (bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
                  <div className="flex items-center rounded-md overflow-hidden border border-gray-200">
                    <input
                      type="text"
                      placeholder="Tìm kiếm"
                      className="flex-1 px-3 py-2 text-sm outline-none"
                    />
                    <button
                      type="button"
                      className="w-12 h-10 bg-[#d49911] flex items-center justify-center hover:bg-[#c2870d]"
                      aria-label="Search"
                    >
                      <Search size={18} className="text-white" />
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </nav>
    </header>

      {desktopSearchOpen && (
        <div
          className="fixed inset-0 z-[80]"
          role="dialog"
          aria-modal="true"
          onClick={() => setDesktopSearchOpen(false)}
        >
          <div className="absolute inset-0 bg-black/40 z-0" />

          {/* Close button (top-right) */}
          <button
            type="button"
            className="absolute top-6 right-6 z-[81] w-10 h-10 flex items-center justify-center rounded-md bg-white/90 hover:bg-white text-gray-700"
            aria-label="Close search"
            onClick={(e) => {
              e.stopPropagation()
              setDesktopSearchOpen(false)
            }}
          >
            <X size={20} />
          </button>

          {/* Centered big input */}
          <div
            className="relative min-h-screen flex items-center justify-center px-4 z-[80]"
            onClick={(e) => e.stopPropagation()}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault()
                // Chưa gắn logic search backend/route ở thời điểm này.
                setDesktopSearchOpen(false)
              }}
              className="w-full max-w-3xl"
            >
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                placeholder="Tìm kiếm"
                className="w-full bg-white rounded-md border border-gray-200 px-6 py-5 text-lg outline-none shadow-2xl"
                autoFocus
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;