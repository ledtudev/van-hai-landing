import Link from 'next/link';
import React from 'react';

const posts = [
  {
    id: 1,
    date: "22",
    month: "Th2",
    title: "Vinhomes Cao Xà Lá sở hữu 50 năm hay lâu dài? Trả lời rõ để tránh hiểu sai pháp lý",
    desc: "Tóm tắt nội dung Vinhomes Cao Xà Lá (Vinhomes Galaxy) Tổng quan Vinhomes Cao Xà Lá (Vinhomes Galaxy) Tải xuống Bảng giá...",
    image: "/post.jpg"
  },
  {
    id: 2,
    date: "22",
    month: "Th2",
    title: "Tiến độ thanh toán Vinhomes Cao Xà Lá mới nhất 2026: Bảng chi tiết từng đợt & phân tích dòng tiền",
    desc: "Tiến độ thanh toán Vinhomes Cao Xà Lá là yếu tố quyết định trực tiếp đến áp lực tài chính, hiệu quả đầu tư và biên lợi nhuận...",
    image: "/post2.jpg"
  },
  {
    id: 3,
    date: "04",
    month: "Th2",
    title: "Tiến độ Vinhomes Cao Xà Lá tháng 2.2026 (Cập nhật thực tế – nhìn từ hiện trường)",
    desc: "Tiến độ Vinhomes Cao Xà Lá hiện nay đang ở giai đoạn chuẩn bị triển khai thực tế, không còn là dự án 'trên giấy'...",
    image: "/post3.jpg"
  },
  // Thêm các bài viết khác tương tự...
];

const FeaturedPosts = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Tiêu đề mục */}
      <div className="border-b-2 border-gray-100 mb-8 flex items-center gap-4">
        <h2 className="text-xl font-bold text-gray-800 pb-2 border-b-2 border-blue-600 -mb-[2px] uppercase">
          Các bài viết nổi bật
        </h2>
      </div>

      {/* Grid bài viết */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.id} href={`/new/trang-chu/${post.id}`}>
            <article className="group cursor-pointer">
              {/* Ảnh và Date Badge */}
              <div className="relative overflow-hidden aspect-video mb-4">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Date Badge */}
                <div className="absolute top-0 left-0 bg-white border border-blue-600 flex flex-col items-center justify-center w-10 h-10 shadow-sm">
                  <span className="text-blue-600 font-bold leading-none text-sm">{post.date}</span>
                  <span className="text-blue-600 text-[10px] uppercase font-medium">{post.month}</span>
                </div>
              </div>

              {/* Nội dung text */}
              <div className="space-y-2">
                <h3 className="font-bold text-gray-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                  {post.desc}
                </p>
                <div className="pt-2">
                  <div className="w-8 h-[1px] bg-gray-300 group-hover:w-full group-hover:bg-blue-600 transition-all duration-300"></div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;