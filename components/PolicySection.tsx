import { Section } from "@/components/Section";

export function PolicySection() {
  return (
    <Section
      eyebrow="Chính sách bán hàng"
      title="Hỗ trợ tài chính linh hoạt – Đồng hành cùng khách hàng"
      subtitle={
        <>
          Chủ đầu tư Vinhomes mang đến các gói hỗ trợ lãi suất dài hạn, ưu đãi
          thanh toán và quà tặng định danh hấp dẫn, tối ưu dòng tiền cho cả
          khách hàng mua ở thực lẫn nhà đầu tư.
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-3 rounded-2xl border border-zinc-100 bg-emerald-50/70 p-4 text-sm text-zinc-800">
          <h3 className="text-sm font-semibold text-emerald-900">
            Hỗ trợ lãi suất linh hoạt
          </h3>
          <ul className="list-disc space-y-1 pl-5 text-xs text-zinc-700">
            <li>Shophouse & liền kề: hỗ trợ lãi suất 0% trong 24 tháng.</li>
            <li>
              Biệt thự cao cấp: hỗ trợ lãi suất 0% lên đến 36 tháng, tối ưu kế
              hoạch tài chính dài hạn.
            </li>
            <li>
              Gói vay đến 70–80% giá trị sản phẩm, thời gian hỗ trợ 18–36
              tháng.
            </li>
          </ul>
        </div>

        <div className="space-y-3 rounded-2xl border border-zinc-100 bg-zinc-50 p-4 text-sm text-zinc-800">
          <h3 className="text-sm font-semibold text-zinc-900">
            Ưu đãi thanh toán & sở hữu
          </h3>
          <ul className="list-disc space-y-1 pl-5 text-xs text-zinc-700">
            <li>Thanh toán sớm: chiết khấu tới 7,5% vào giá bán.</li>
            <li>
              Tiến độ linh hoạt, giãn thanh toán lên đến 36 tháng giúp giảm áp
              lực vốn ban đầu.
            </li>
            <li>
              92% sản phẩm sở hữu lâu dài, tăng tính thanh khoản & giá trị tài
              sản theo thời gian.
            </li>
          </ul>
        </div>

        <div className="space-y-3 rounded-2xl border border-zinc-100 bg-emerald-950 text-sm text-emerald-50">
          <h3 className="text-sm font-semibold text-white">
            Quà tặng định danh – Đặc quyền chủ nhân
          </h3>
          <ul className="list-disc space-y-1 pl-5 text-xs text-emerald-100">
            <li>Tặng voucher Vinmec trị giá 100 triệu đồng/căn.</li>
            <li>Miễn phí quản lý vận hành trong 2 năm đầu.</li>
            <li>Ưu đãi VinClub lên tới 0,9% tùy hạng thành viên.</li>
            <li>
              Cơ hội bốc thăm trúng thưởng xe VinFast VF 9 ECO cùng nhiều quà
              tặng giá trị khác.
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

