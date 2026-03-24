import React from 'react'
import TableOfContents from '@/components/new/chu-dau-tu/TableOfContents'
import FeaturedPosts from '@/components/new/chu-dau-tu/FeaturedPosts'
 
export function ChuDauTuMain() {
  return (
    <main className="lg:col-span-8">
      <nav className="flex flex-wrap items-center text-sm text-blue-600 mb-6 gap-2">
        <span className="hover:underline cursor-pointer">Trang chủ</span>
        <span className="text-gray-400">/</span>
        <span className="hover:underline cursor-pointer">Danh mục chung</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-500 break-words">
          Vinhomes Cao Xà Lá sở hữu 50 năm hay lâu dài...
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
        Vinhomes Cao Xà Lá sở hữu 50 năm hay lâu dài? Trả lời rõ để tránh hiểu sai pháp lý
      </h1>

      <div className="text-xs text-gray-400 uppercase tracking-wider mb-8 border-b pb-4">
        ĐÃ ĐĂNG TRÊN{' '}
        <span className="text-blue-500">22/02/2026</span> BỞI{' '}
        <span className="text-blue-500">VINHOMES CAO XÀ LÁ</span>
      </div>

      <TableOfContents />

      <div className="prose prose-blue max-w-none text-gray-800 leading-relaxed">
        <p className="font-bold text-blue-700 text-lg mb-4">
          Vinhomes Cao Xà Lá sở hữu 50 năm hay lâu dài?
        </p>
        <p className="mb-4">
          Đây là câu hỏi quan trọng nhất trước khi xuống tiền. Bởi vì thời hạn sở hữu quyết định trực tiếp đến giá trị tài sản,
          khả năng vay ngân hàng, thanh khoản và chiến lược đầu tư dài hạn.
        </p>

        <p className="mb-4">Trả lời ngắn gọn:</p>
        <ul className="list-none space-y-3 mb-8">
          <li className="flex gap-2">
            <span>👉</span>
            <span>
              Nếu dự án được phê duyệt là <strong>đất ở</strong>, người mua sẽ được{' '}
              <strong>sở hữu lâu dài</strong>.
            </span>
          </li>
          <li className="flex gap-2">
            <span>👉</span>
            <span>
              Nếu là <strong>đất thương mại dịch vụ</strong>, thời hạn thường là{' '}
              <strong>50 năm</strong> (hoặc theo thời hạn còn lại của dự án).
            </span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
          1. Hiểu đúng câu hỏi: 50 năm và lâu dài khác nhau ở đâu?
        </h2>
        <p>
          Trước khi hỏi &quot;Vinhomes Cao Xà Lá sở hữu 50 năm hay lâu dài?&quot;, bạn cần hiểu 2 khái niệm này hoàn toàn khác nhau về pháp lý...
        </p>
      </div>
    </main>
  )
}

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
      <ChuDauTuMain />
      <aside className="lg:col-span-4 space-y-8">
        <FeaturedPosts />
      </aside>
    </div>
  )
}

export default Hero