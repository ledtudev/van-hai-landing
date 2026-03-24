import React from 'react'
import TableOfContents from '@/components/new/gia-ban-dot-1/TableOfContents'
import FeaturedPosts from '@/components/new/gia-ban-dot-1/FeaturedPosts'

export function GiaBanDot1Main() {
  return (
    <main className="lg:col-span-8">
      <nav className="flex flex-wrap items-center text-sm text-blue-600 mb-6 gap-2">
        <span className="hover:underline cursor-pointer">Trang chủ</span>
        <span className="text-gray-400">/</span>
        <span className="hover:underline cursor-pointer">Giá bán đợt 1</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-500 break-words">Vinhomes Cao Xà Lá</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
        Giá bán đợt 1 Vinhomes Cao Xà Lá: dễ nắm, dễ so sánh
      </h1>

      <div className="text-xs text-gray-400 uppercase tracking-wider mb-8 border-b pb-4">
        ĐÃ ĐĂNG TRÊN{' '}
        <span className="text-blue-500">22/02/2026</span> BỞI{' '}
        <span className="text-blue-500">VINHOMES CAO XÀ LÁ</span>
      </div>

      <TableOfContents />

      <div className="prose prose-blue max-w-none text-gray-800 leading-relaxed">
        <p className="font-bold text-blue-700 text-lg mb-4">
          Nắm chắc bảng giá và lộ trình thanh toán
        </p>
        <p className="mb-4">
          Giá bán đợt 1 thường là mốc quan trọng giúp khách hàng ước tính tổng
          chi phí và lên kế hoạch tài chính phù hợp.
        </p>
        <p className="mb-4">
          Thông tin được trình bày rõ ràng theo từng nhóm sản phẩm để bạn dễ so sánh.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
          1. Cách đọc bảng giá theo từng loại hình căn hộ
        </h2>
        <p>
          Việc đọc đúng thông tin giúp hạn chế sai lệch khi đối chiếu với bảng giá chính thức.
        </p>
      </div>
    </main>
  )
}

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
      <GiaBanDot1Main />
      <aside className="lg:col-span-4 space-y-8">
        <FeaturedPosts />
      </aside>
    </div>
  )
}

export default Hero

