import { ArrowRightCircle } from 'lucide-react'

export function PolicyAndGallerySection() {
  // Mảng 12 phần tử để render 12 ảnh thumbnail
  const thumbnails = Array.from({ length: 12 })

  return (
    <section
      className="relative w-full bg-[#fdfdfc] font-sans pb-16"
      id="chinh-sach"
    >
      {/* =========================================
          PHẦN 1: BANNER TOP
      ========================================= */}
      <div className="relative w-full h-[350px] md:h-[450px]">
        <img
          src="https://vinhomeshaivanland.com/wp-content/uploads/2026/03/z7592101936325_b5577c40bf6aac59e823f483026f0d1e.jpg"
          alt="Banner Vinhomes Hải Vân Bay"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Lớp phủ đen mờ để làm nổi bật chữ */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Chữ trên Banner */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 -mt-10">
          <h2 className="text-white text-lg md:text-xl font-medium drop-shadow-md mb-2">
            Sở hữu ngay căn hộ Vinhomes Hải Vân Bay
          </h2>
          <h1 className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg max-w-3xl">
            Nhận thông tin mới nhất Vinhomes Hải Vân Bay
          </h1>
        </div>
      </div>

      {/* =========================================
          PHẦN 2: NỘI DUNG VÀ FORM (Overlapping)
      ========================================= */}
      <div className="max-w-6xl mx-auto px-4 relative z-20 flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Cột trái: Chính sách bán hàng */}
        <div className="w-full md:w-1/2 pt-10 md:pt-16">
          <h3 className="text-[#0c1f38] text-xl font-bold mb-4">
            Chính sách hỗ trợ lãi suất – Giải pháp tài chính linh hoạt
          </h3>

          <p className="text-gray-700 text-sm mb-6 leading-relaxed">
            <strong className="text-[#0c1f38]">Chủ đầu tư Vinhomes</strong> luôn
            mang đến các giải pháp tài chính linh hoạt cho khách hàng tại dự án{' '}
            <strong className="text-[#0c1f38]">Vinhomes Hải Vân Bay</strong>.
          </p>

          <ul className="space-y-4 mb-6">
            <li className="flex gap-3 items-start">
              <ArrowRightCircle className="w-5 h-5 text-[#d8b056] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-[#0c1f38]">Shophouse & liền kề:</strong>{' '}
                hỗ trợ lãi suất{' '}
                <strong className="text-[#0c1f38]">0% trong 24 tháng</strong>,
                giảm áp lực tài chính ban đầu và thuận lợi cho khách hàng vừa ở
                vừa kinh doanh.
              </p>
            </li>
            <li className="flex gap-3 items-start">
              <ArrowRightCircle className="w-5 h-5 text-[#d8b056] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-[#0c1f38]">Biệt thự cao cấp:</strong> hỗ
                trợ lãi suất{' '}
                <strong className="text-[#0c1f38]">0% lên đến 36 tháng</strong>,
                giúp người mua chủ động kế hoạch tài chính dài hạn.
              </p>
            </li>
          </ul>

          <p className="text-gray-700 text-sm leading-relaxed">
            Chính sách này thể hiện sự đồng hành của{' '}
            <strong className="text-[#0c1f38]">Vinhomes</strong>, tạo điều kiện
            thuận lợi cho cả{' '}
            <strong className="text-[#0c1f38]">
              nhà đầu tư và khách hàng mua ở thực
            </strong>
            .
          </p>
        </div>

        {/* Cột phải: Form đăng ký đè lên banner */}
        <div className="w-full md:w-1/2 md:-mt-32">
          {/* Box Form */}
          <div className="bg-[#0c1f38] relative rounded-xl overflow-hidden shadow-2xl p-8 border border-white/10">
            {/* Background pattern mờ mờ trong form */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1541888081643-eb31f5f3e9c7?q=80&w=800&auto=format&fit=crop')",
              }}
            />

            <div className="relative z-10 text-center">
              <h3 className="text-white text-xl font-bold mb-2">
                Đăng Ký Nhận Thông Tin Vinhomes Làng Vân
              </h3>
              <p className="text-gray-400 italic text-xs mb-6">
                * Thông tin của khách hàng luôn được bảo mật tuyệt đối
              </p>

              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full bg-white text-gray-800 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-[#d4af37] text-sm"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full bg-white text-gray-800 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-[#d4af37] text-sm"
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  className="w-full bg-white text-gray-800 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-[#d4af37] text-sm"
                />
                <select className="w-full bg-white text-gray-800 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-[#d4af37] text-sm appearance-none cursor-pointer">
                  <option value="">- Nhà Phố Liền Kề -</option>
                  <option value="biet-thu">Biệt thự</option>
                  <option value="shophouse">Shophouse</option>
                  <option value="condotel">Condotel</option>
                </select>

                <button
                  type="button"
                  className="mt-2 w-[150px] mx-auto bg-[#d4af37] hover:bg-[#c29b47] text-[#0c1f38] font-bold px-6 py-2.5 rounded transition-colors text-sm"
                >
                  Gửi yêu cầu
                </button>
              </form>

              <p className="mt-6 text-sm font-semibold text-white">
                Gọi Ngay Để Có Căn Hot - Giá Tốt & Ưu Tiên Lựa Chọn
                <br />
                HOTLINE:{' '}
                <span className="text-white text-base">0905 329 766</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          PHẦN 3: GALLERY ẢNH THUMBNAIL NHÀ MẪU
      ========================================= */}
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-[2px] w-8 bg-[#d4af37]" />
          <h3 className="text-[#0c1f38] text-lg font-bold uppercase tracking-wide">
            Gallery Ảnh Nhà Mẫu
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {thumbnails.map((_, index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            >
              <img
                src="https://vinhomeshaivanland.com/wp-content/uploads/2026/03/mau-nha-8.jpg"
                alt={`Mẫu nhà ${index + 1}`}
                className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
