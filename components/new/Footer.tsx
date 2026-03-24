import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Cột 1: Liên hệ tư vấn */}
          <div className="space-y-4">
            <img
              src="/logo.png"
              alt="Logo-Vinhomes-1024x540"
              className="h-14 brightness-0 invert"
            />
            <div className="space-y-1">
              <div className="text-[#d49911] text-[12px] font-bold uppercase tracking-wider">
                LIÊN HỆ TƯ VẤN
              </div>
              <div className="text-[#d49911] text-[12px] font-bold uppercase tracking-wider">
                PHÒNG KINH DOANH DỰ ÁN
              </div>
            </div>

            <div className="text-gray-300 text-[12px] leading-relaxed">
              <div>Địa chỉ: 233 – 233B – 235 Nguyễn Trãi, Thanh Xuân, Thành phố Hà Nội</div>
              <div className="mt-1">
                Email:{' '}
                <a
                  href="mailto:cskh.vinhomescaoxala@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  cskh.vinhomescaoxala@gmail.com
                </a>
              </div>
              <div className="mt-1">Website: https://vinhomescaoxala.com.vn</div>
              <div className="mt-1">
                Quý khách vui lòng liên hệ trước với chúng tôi để được hướng dẫn chỉ đường và
                đặt lịch, đăng ký xem nhà mẫu.
              </div>
            </div>
          </div>

          {/* Cột 2: Chủ đầu tư */}
          <div className="space-y-4">
            <img
              src="/logo.png"
              alt="Logo-Vinhomes-1024x540"
              className="h-14 brightness-0 invert mx-auto"
            />
            <div className="text-center text-[12px] font-bold uppercase tracking-wider text-[#d49911] whitespace-pre">
              CHỦ ĐẦU TƯ  VINHOMES
            </div>
            <div className="text-gray-300 text-[12px] leading-relaxed">
              Vinhomes là thương hiệu bất động sản cao cấp của tập đoàn Vingroup, đồng thời cũng là
              thương hiệu doanh nghiệp có giá trị đứng thứ 3 tại Việt Nam (Sau Viettel & Vinamilk).
              Tính đến thời điểm năm 2024, tập đoàn Vingroup đang triển khai tất cả 28 dự án bất
              động sản mang thương hiệu “Vinhomes” trên khắp toàn quốc, nổi bật là Vinhomes Ocean Park 1,2,3.
            </div>
          </div>

          {/* Cột 3: Bài viết nổi bật */}
          <div className="space-y-4">
            <div className="text-center md:text-left">
              <div className="text-[12px] font-bold uppercase tracking-wider">Bài viết nổi bật</div>
              <div className="h-px bg-gray-600 mt-2" />
            </div>

            <div className="space-y-2 text-gray-200 text-[12px]">
              <div>
                <Link
                  href="/new/vi-tri-du-an"
                  className="hover:text-[#d49911] transition-colors"
                >
                  Vị trí Vinhomes Cao Xà Lá
                </Link>
              </div>
              <div>
                <Link
                  href="/new/tien-ich-du-an"
                  className="hover:text-[#d49911] transition-colors"
                >
                  Tiện ich Vinhomes Cao Xà Lá
                </Link>
              </div>
              <div>
                <Link
                  href="/new/mat-bang-thiet-ke"
                  className="hover:text-[#d49911] transition-colors"
                >
                  Mặt bằng Vinhomes Cao Xà Lá
                </Link>
              </div>
              <div>
                <Link
                  href="/new/gia-ban-dot-1"
                  className="hover:text-[#d49911] transition-colors"
                >
                  Giá bán Vinhomes Cao Xà Lá
                </Link>
              </div>
              <div>Taseco Mê Linh</div>
              <div>Imperia Sky Park</div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-500 text-[12px]">
          Copyright 2026 © Newstar Hanoi Media
        </div>
      </div>
    </footer>
  )
}
