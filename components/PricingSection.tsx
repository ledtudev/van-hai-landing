import { Section } from "@/components/Section";

const PRICING_ROWS = [
  {
    type: "Căn hộ & Condotel",
    area: "35–120 m² (1–3PN)",
    price: "Từ 2,5 – 10 tỷ/căn",
    fit: "Đầu tư nhàn rỗi, thu dòng tiền cho thuê tự động.",
  },
  {
    type: "Nhà phố liền kề",
    area: "60–100 m²",
    price: "Từ 6 – 20 tỷ/căn",
    fit: "An cư gia đình, kinh doanh homestay/Airbnb.",
  },
  {
    type: "Shophouse thương mại",
    area: "80–160 m²",
    price: "Từ 10 – 40 tỷ/căn",
    fit: "Kinh doanh F&B, nhà hàng, dịch vụ đón khách 24/7.",
  },
  {
    type: "Biệt thự song lập",
    area: "140–200 m²",
    price: "Từ 14 – 35 tỷ/căn",
    fit: "Không gian sống nghỉ dưỡng cao cấp, tích sản truyền đời.",
  },
  {
    type: "Biệt thự đơn lập / đồi",
    area: "200–450 m²",
    price: "Từ 25 – 60 tỷ/căn",
    fit: "Resort cá nhân siêu VIP, khẳng định vị thế thượng lưu.",
  },
];

export function PricingSection() {
  return (
    <Section
      id="bang-gia"
      eyebrow="Báo giá & tài chính"
      title="Bảng giá tham khảo (F0 dự kiến)"
      subtitle={
        <>
          Bảng giá mang tính chất tham khảo, có thể thay đổi tùy thuộc vào vị
          trí, mã căn, hướng view và chính sách từng thời điểm. Liên hệ hotline
          hoặc để lại thông tin để nhận báo giá chi tiết từng sản phẩm.
        </>
      }
    >
      <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
        <div className="grid grid-cols-[1.4fr,0.9fr,0.9fr,1.6fr] bg-zinc-50 px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-zinc-600 sm:text-xs">
          <div>Loại hình sản phẩm</div>
          <div>Diện tích điển hình</div>
          <div>Mức giá dự kiến</div>
          <div>Phù hợp nhu cầu</div>
        </div>
        <div className="divide-y divide-zinc-100 text-xs sm:text-sm">
          {PRICING_ROWS.map((row) => (
            <div
              key={row.type}
              className="grid grid-cols-1 gap-2 px-4 py-3 sm:grid-cols-[1.4fr,0.9fr,0.9fr,1.6fr]"
            >
              <div className="font-semibold text-zinc-900">{row.type}</div>
              <div className="text-zinc-700">{row.area}</div>
              <div className="font-semibold text-emerald-700">{row.price}</div>
              <div className="text-zinc-700">{row.fit}</div>
            </div>
          ))}
        </div>
        <div className="border-t border-zinc-100 bg-amber-50 px-4 py-3 text-[11px] text-amber-800 sm:text-xs">
          Lưu ý: Giá bán chính thức sẽ được cập nhật theo từng giai đoạn, phụ
          thuộc vào vị trí lô góc, mặt đường lớn 35m, view biển/suối Lương...
          Vui lòng đăng ký để nhận bảng giá & giỏ hàng mới nhất từ chủ đầu tư.
        </div>
      </div>
    </Section>
  );
}

