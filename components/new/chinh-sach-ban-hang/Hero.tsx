import React from 'react'
import TableOfContents from '@/components/new/chinh-sach-ban-hang/TableOfContents'
import FeaturedPosts from '@/components/new/chinh-sach-ban-hang/FeaturedPosts'

export function ChinhSachBanHangMain() {
  return (
    <main className="lg:col-span-8">
      {/* CỘT TRÁI: NỘI DUNG CHI TIẾT (8/12) */}
      {/* Breadcrumbs */}
        <nav className="flex flex-wrap items-center text-sm text-blue-600 mb-6 gap-2">
          <span className="hover:underline cursor-pointer">Trang chủ</span>
          <span className="text-gray-400">/</span>
          <span className="hover:underline cursor-pointer">Chính sách bán hàng</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-500 break-words">Vinhomes Cao Xà Lá</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
          Chính sách bán hàng Vinhomes Cao Xà Lá: rõ ràng, dễ tiếp cận
        </h1>

        <div className="text-xs text-gray-400 uppercase tracking-wider mb-8 border-b pb-4">
          ĐÃ ĐĂNG TRÊN <span className="text-blue-500">22/02/2026</span> BỞI{' '}
          <span className="text-blue-500">VINHOMES CAO XÀ LÁ</span>
        </div>

        <TableOfContents />

        <div className="prose prose-blue max-w-none text-gray-800 leading-relaxed">
          <p className="font-bold text-blue-700 text-lg mb-4">
            Tối ưu hành trình mua nhà của khách hàng
          </p>
          <p className="mb-4">
            Chính sách bán hàng giúp khách hàng dễ dàng nắm bắt thông tin
            quan trọng như phương thức thanh toán, điều kiện vay và tiến độ
            mở bán.
          </p>
          <p className="mb-4">
            Tất cả thông tin được trình bày theo hướng dễ hiểu, hỗ trợ ra quyết
            định nhanh chóng.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
            1. Phương thức thanh toán linh hoạt
          </h2>
          <p>
            Khách hàng có thể lựa chọn kế hoạch phù hợp theo tiến độ dự án,
            giúp giảm áp lực tài chính trong giai đoạn đầu.
          </p>
        </div>
    </main>
  )
}

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
      <ChinhSachBanHangMain />
      <aside className="lg:col-span-4 space-y-8">
        <FeaturedPosts />
      </aside>
    </div>
  )
}

export default Hero

