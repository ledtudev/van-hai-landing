import Link from 'next/link'
import React from 'react'

export default function FeaturedPosts() {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 border-b-2 border-black pb-2 mb-6 uppercase tracking-tight">
        Dự án nổi bật
      </h3>

      <div className="border border-gray-100 rounded p-4 bg-white shadow-sm">
        <h4 className="text-center font-bold text-gray-800 mb-6 border-b pb-4">
          CÁC HẠNG MỤC KHÁC
        </h4>

        <div className="space-y-6">
          {[1, 2, 3, 4].map((item) => (
            <Link
              key={item}
              href={`/new/tien-ich-du-an/${item}`}
              className="flex gap-4 group cursor-pointer"
            >
              <div className="flex-1 space-y-1">
                <h5 className="font-bold text-sm text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                  Tiện ích Vinhomes Cao Xà Lá...
                </h5>
                <p className="text-[10px] text-gray-400">Th2 22, 2026</p>
                <p className="text-xs text-gray-500 line-clamp-2">
                  Tổng hợp tiện ích và trải nghiệm cư dân...
                </p>
              </div>

              <div className="w-20 h-20 flex-shrink-0">
                <img
                  src={
                    item === 1
                      ? '/post.jpg'
                      : item === 2
                        ? '/post2.jpg'
                        : item === 3
                          ? '/post3.jpg'
                          : '/post4.jpg'
                  }
                  alt="post"
                  className="w-full h-full object-cover rounded shadow-sm"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

