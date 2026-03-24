import React from 'react'
import TableOfContents from '@/components/new/mat-bang-thiet-ke/TableOfContents'
import FeaturedPosts from '@/components/new/mat-bang-thiet-ke/FeaturedPosts'

export function MatBangThietKeMain() {
  return (
    <main className="lg:col-span-8">
      <nav className="flex flex-wrap items-center text-sm text-blue-600 mb-6 gap-2">
        <span className="hover:underline cursor-pointer">Trang chủ</span>
        <span className="text-gray-400">/</span>
        <span className="hover:underline cursor-pointer">Mặt bằng thiết kế</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-500 break-words">Vinhomes Cao Xà Lá</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
        Mặt bằng thiết kế Vinhomes Cao Xà Lá: tối ưu công năng
      </h1>

      <div className="text-xs text-gray-400 uppercase tracking-wider mb-8 border-b pb-4">
        ĐÃ ĐĂNG TRÊN{' '}
        <span className="text-blue-500">22/02/2026</span> BỞI{' '}
        <span className="text-blue-500">VINHOMES CAO XÀ LÁ</span>
      </div>

      <TableOfContents />

      <div className="prose prose-blue max-w-none text-gray-800 leading-relaxed">
        <p className="font-bold text-blue-700 text-lg mb-4">
          Thiết kế giúp không gian sống thoáng và hợp lý hơn
        </p>
        <p className="mb-4">
          Các khu chức năng được bố trí logic, tối ưu diện tích sử dụng và tạo luồng sinh
          hoạt thuận tiện.
        </p>
        <p className="mb-4">
          Người mua có thể tham khảo các cấu hình căn hộ để chọn lựa theo nhu cầu thực tế.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
          1. Tối ưu ánh sáng và luồng gió
        </h2>
        <p>
          Bố cục thiết kế giúp tăng khả năng đón sáng tự nhiên và tạo cảm giác rộng rãi.
        </p>
      </div>
    </main>
  )
}

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
      <MatBangThietKeMain />
      <aside className="lg:col-span-4 space-y-8">
        <FeaturedPosts />
      </aside>
    </div>
  )
}

export default Hero

