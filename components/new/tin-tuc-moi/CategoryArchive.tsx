import React from 'react';
import Link from 'next/link';
import FeaturedPosts from '@/components/new/tin-tuc-moi/FeaturedPosts';

const CategoryArchive = () => {
  const mainPosts = [
    {
      id: 1,
      date: "28",
      month: "Th1",
      title: "Imperia Sky Park Nam An Khánh – Tổng quan dự án, vị trí, tiện ích, mặt bằng, giá bán & thanh toán",
      desc: "Imperia Sky Park Nam An Khánh là dự án căn hộ cao tầng quy mô lớn nằm ngay mặt đường Đại lộ Thăng Long, thuộc khu đô thị Nam An Khánh – Hoài Đức, Hà Nội",
      image: "/blog1.jpg"
    },
    {
      id: 2,
      date: "24",
      month: "Th1",
      title: "So sánh Vinhomes Cao Xà Lá với Royal City và các dự án lân cận – Đâu là lựa chọn đúng theo từng mục tiêu?",
      desc: "So với Royal City thì thế nào?\" hoặc \"Các dự án quanh trục Nguyễn Trãi có gì hơn kém?\". Đây là câu hỏi rất đúng intent, bởi các dự án này nằm sát nhau, cùng hưởng lợi từ trục Nguyễn Trãi – Thanh Xuân, nhưng...",
      image: "/blog2.jpg"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-center text-xl font-bold uppercase mb-12 tracking-wider text-gray-800">
        LƯU TRỮ DANH MỤC: TIN TỨC MỚI
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <div className="lg:col-span-8 space-y-12">
          {mainPosts.map((post) => (
            <Link
              key={post.id}
              href={`/new/tin-tuc-moi/${post.id}`}
              className="block"
            >
              <article className="flex flex-col md:flex-row gap-6 group cursor-pointer">
                <div className="relative w-full md:w-2/5 shrink-0 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-0 left-0 bg-blue-600 text-white w-10 h-10 flex flex-col items-center justify-center shadow-lg">
                    <span className="text-sm font-bold leading-none">
                      {post.date}
                    </span>
                    <span className="text-[10px] uppercase">{post.month}</span>
                  </div>
                </div>

                <div className="flex-1 py-1">
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-tight mb-3">
                    {post.title}
                  </h2>
                  <div className="w-12 h-[2px] bg-gray-200 mb-4 group-hover:w-20 group-hover:bg-blue-600 transition-all"></div>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.desc}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-6">
            <FeaturedPosts />
          </div>
        </aside>

      </div>
    </div>
  );
};

export default CategoryArchive;