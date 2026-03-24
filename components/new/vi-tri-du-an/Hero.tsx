import React from 'react'
import TableOfContents from '@/components/new/vi-tri-du-an/TableOfContents'
import FeaturedPosts from '@/components/new/vi-tri-du-an/FeaturedPosts'

export function ViTriDuAnMain() {
  return (
    <main className="lg:col-span-8">
      {/* Breadcrumbs */}
      <nav className="flex flex-wrap items-center text-sm text-blue-600 mb-6 gap-2">
        <span className="hover:underline cursor-pointer">Trang chủ</span>
        <span className="text-gray-400">/</span>
        <span className="hover:underline cursor-pointer">Vị trí dự án</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-500 break-words">Vinhomes Cao Xà Lá</span>
      </nav>

      {/* Tiêu đề bài viết */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
        Vị trí Vinhomes Cao Xà Lá: trung tâm – kết nối – sinh lời
      </h1>

      {/* Meta info */}
      <div className="text-xs text-gray-400 uppercase tracking-wider mb-8 border-b pb-4">
        ĐÃ ĐĂNG TRÊN <span className="text-blue-500">22/02/2026</span>{' '}
        BỞI <span className="text-blue-500">VINHOMES CAO XÀ LÁ</span>
      </div>

      {/* Table of Contents (Tóm tắt nội dung) */}
      <TableOfContents />

      {/* Nội dung bài viết */}
      <div className="prose prose-blue max-w-none text-gray-800 leading-relaxed">
        <p className="font-bold text-blue-700 text-lg mb-4">
          Vì sao “vị trí” quyết định giá trị dự án?
        </p>
        <p className="mb-4">
          Vị trí đắc địa giúp cư dân tối ưu thời gian di chuyển, đồng thời tạo
          lợi thế dài hạn cho khả năng cho thuê và tăng giá trị tài sản.
        </p>
        <p className="mb-4">
          Dự án nằm trong vùng kết nối thuận tiện tới các trục đường lớn của
          Hà Nội, giúp di chuyển đa chiều và gia tăng tiện ích ngoại khu.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
          1. Kết nối nhanh tới khu trung tâm
        </h2>
        <p>
          Chỉ mất một khoảng thời gian ngắn để tiếp cận các điểm dịch vụ,
          trường học và trung tâm thương mại quan trọng.
        </p>
      </div>
    </main>
  )
}

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
      <ViTriDuAnMain />
      <aside className="lg:col-span-4 space-y-8">
        <FeaturedPosts />
      </aside>
    </div>
  )
}

export default Hero

