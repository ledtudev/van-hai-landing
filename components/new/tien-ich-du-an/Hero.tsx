import React from 'react'
import TableOfContents from '@/components/new/tien-ich-du-an/TableOfContents'
import FeaturedPosts from '@/components/new/tien-ich-du-an/FeaturedPosts'

export function TienIchDuAnMain() {
  return (
    <main className="lg:col-span-8">
      {/* Breadcrumbs */}
      <nav className="flex flex-wrap items-center text-sm text-blue-600 mb-6 gap-2">
        <span className="hover:underline cursor-pointer">Trang chủ</span>
        <span className="text-gray-400">/</span>
        <span className="hover:underline cursor-pointer">Tiện ích dự án</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-500 break-words">Vinhomes Cao Xà Lá</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
        Tiện ích Vinhomes Cao Xà Lá: sống tiện nghi mỗi ngày
      </h1>

      <div className="text-xs text-gray-400 uppercase tracking-wider mb-8 border-b pb-4">
        ĐÃ ĐĂNG TRÊN{' '}
        <span className="text-blue-500">22/02/2026</span> BỞI{' '}
        <span className="text-blue-500">VINHOMES CAO XÀ LÁ</span>
      </div>

      <TableOfContents />

      <div className="prose prose-blue max-w-none text-gray-800 leading-relaxed">
        <p className="font-bold text-blue-700 text-lg mb-4">
          Hệ tiện ích giúp tối ưu trải nghiệm của cư dân
        </p>
        <p className="mb-4">
          Các không gian sinh hoạt, mua sắm, giải trí được thiết kế để phục vụ đa nhu
          cầu, tăng giá trị sống theo thời gian.
        </p>
        <p className="mb-4">
          Nhờ quy hoạch đồng bộ, cư dân dễ dàng kết nối các khu công năng quan trọng
          trong nội khu.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
          1. Tiện ích nội khu khép kín
        </h2>
        <p>
          Từ vui chơi, thể thao đến chăm sóc sức khỏe, tất cả được bố trí trong khuôn
          viên dự án nhằm mang lại tiện lợi tối đa.
        </p>
      </div>
    </main>
  )
}

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
      <TienIchDuAnMain />
      <aside className="lg:col-span-4 space-y-8">
        <FeaturedPosts />
      </aside>
    </div>
  )
}

export default Hero

