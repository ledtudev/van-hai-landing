import Link from 'next/link'
import React from 'react'

const sidebarPosts = [
  {
    id: 1,
    title: 'Vinhomes Cao Xà Lá sở hữu 50 năm hay lâu...',
    date: 'Th2 22, 2026',
    desc: 'Vinhomes Cao Xà Lá sở hữu 50 năm hay lâu dài?Đây là câu hỏi quan...',
    image: '/post.jpg',
  },
  {
    id: 2,
    title: 'Tiến độ thanh toán + Chính sách bán hàng Vinhomes Cao Xà Lá',
    date: 'Th2 22, 2026',
    desc: 'Tiến độ thanh toán Vinhomes Cao Xà Lá là yếu tố quyết định trực tiếp...',
    image: '/post2.jpg',
  },
  {
    id: 3,
    title: 'Tiến độ Vinhomes Cao Xà Lá tháng 2.2026 (Cập nhật...',
    date: 'Th2 4, 2026',
    desc: 'Tiến độ Vinhomes Cao Xà Lá hiện nay đang ở giai đoạn chuẩn bị triển...',
    image: '/post3.jpg',
  },
  {
    id: 4,
    title: 'Imperia Sky Park Nam An Khánh – Tổng quan dự án, vị trí, tiện ích, mặt bằng, giá bán & thanh toán',
    date: 'Th1 28, 2026',
    desc: 'Imperia Sky Park Nam An Khánh là dự án căn hộ cao tầng quy mô lớn...',
    image: '/blog1.jpg',
  },
  {
    id: 5,
    title: 'So sánh Vinhomes Cao Xà Lá với Royal City và các dự án...',
    date: 'Th1 24, 2026',
    desc: 'So với Royal City thì thế nào?” hoặc “Các dự án quanh trục Nguyễn Trãi...',
    image: '/blog2.jpg',
  },
  {
    id: 6,
    title: 'Tiềm năng đầu tư vào Vinhomes Cao Xà Lá – ...',
    date: 'Th4 2, 2025',
    desc: 'Dự án Vinhomes Cao Xà Lá (hay còn gọi là Vinhomes Galaxy) là một trong...',
    image: '/post4.jpg',
  },
  {
    id: 7,
    title: 'Tiện ích Vinhomes Cao Xà Lá',
    date: 'Th8 31, 2024',
    desc: 'Vinhomes Cao Xà Lá không chỉ là một nơi an cư lý tưởng với các...',
    image: '/post2.jpg',
  },
  {
    id: 8,
    title: 'Mặt bằng căn 3 phòng ngủ Vinhomes Cao Xà Lá',
    date: 'Th7 21, 2024',
    desc: 'Chính sách bán hàng Vinhomes Cao Xà Lá – Ưu...',
    image: '/post3.jpg',
  },
  {
    id: 9,
    title: 'Mặt bằng căn 2 phòng ngủ Vinhomes Cao Xà Lá',
    date: 'Th7 21, 2024',
    desc: 'Giá bán Vinhomes Cao Xà Lá mới nhất – Phân...',
    image: '/post.jpg',
  },
  {
    id: 10,
    title: 'Vinhomes Cao Xà Lá, Mặt bằng Vinhomes Cao Xà Lá – Quy hoạch tổng...',
    date: 'Th7 21, 2024',
    desc: 'Mặt bằng Vinhomes Cao Xà Lá là một trong những yếu tố quan trọng làm...',
    image: '/post4.jpg',
  },
]

export default function FeaturedPosts() {
  return (
    <div>
      <h3 className="text-lg font-bold uppercase border-b-2 border-black pb-2 mb-6">
        DỰ ÁN MỚI
      </h3>

      <div className="border border-gray-100 rounded-sm bg-white p-5 shadow-sm">
        <h4 className="text-center font-bold text-gray-700 mb-6 border-b pb-4 text-sm tracking-widest">
          BÀI VIẾT MỚI NHẤT
        </h4>

        <div className="space-y-6">
          {sidebarPosts.map((post) => (
            <Link
              key={post.id}
              href={`/new/tin-tuc-moi/${post.id}`}
              className="block"
            >
              <div className="flex gap-3 group cursor-pointer">
                <div className="flex-1">
                  <h5 className="font-bold text-[13px] text-gray-800 group-hover:text-blue-600 leading-snug line-clamp-2">
                    {post.title}
                  </h5>
                  <p className="text-[10px] text-gray-400 mt-1">{post.date}</p>
                  <p className="text-[11px] text-gray-500 line-clamp-2 mt-1">
                    {post.desc}
                  </p>
                </div>
                <div className="w-16 h-16 shrink-0">
                  <img
                    src={post.image}
                    className="w-full h-full object-cover rounded shadow-sm"
                    alt="thumb"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

