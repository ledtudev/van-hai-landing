import { Section } from "@/components/Section";

export function OverviewSection() {
  return (
    <Section
      id="tong-quan"
      eyebrow="Tổng quan dự án"
      title="Vinhomes Hải Vân Bay – Thiên hạ đệ nhất hùng quan"
      subtitle={
        <>
          Siêu đô thị nghỉ dưỡng ven biển do Vingroup phát triển tại Đà Nẵng,
          sở hữu vị trí hiếm có dưới chân đèo Hải Vân, ôm trọn vịnh Nam Chơn
          tuyệt đẹp. Dự án mở ra cơ hội an cư, nghỉ dưỡng và đầu tư sinh lời
          đẳng cấp.
        </>
      }
    >
      <div className="grid gap-8 md:grid-cols-2">
        <dl className="space-y-4 text-sm text-zinc-700">
          <div className="grid grid-cols-[140px,1fr] gap-3 rounded-2xl bg-zinc-50 p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Tên thương mại
            </dt>
            <dd className="font-semibold text-zinc-900">
              Vinhomes Hải Vân Bay (Vinhomes Làng Vân, Vinpearl Làng Vân)
            </dd>
          </div>
          <div className="grid grid-cols-[140px,1fr] gap-3 rounded-2xl bg-zinc-50 p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Vị trí
            </dt>
            <dd>
              Vịnh Nam Chơn (Làng Vân), phường Hòa Hiệp Bắc, quận Liên Chiểu,
              TP. Đà Nẵng.
            </dd>
          </div>
          <div className="grid grid-cols-[140px,1fr] gap-3 rounded-2xl bg-zinc-50 p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Chủ đầu tư
            </dt>
            <dd>Công ty Cổ phần Vinpearl – Thành viên Tập đoàn Vingroup.</dd>
          </div>
          <div className="grid grid-cols-[140px,1fr] gap-3 rounded-2xl bg-zinc-50 p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Quy mô
            </dt>
            <dd>
              Diện tích ~512 ha (hơn 507 ha đất liền &amp; 5 ha mặt nước nội
              khu), mật độ xây dựng chỉ khoảng 19,8%.
            </dd>
          </div>
        </dl>

        <dl className="space-y-4 text-sm text-zinc-700">
          <div className="grid grid-cols-[140px,1fr] gap-3 rounded-2xl bg-emerald-50 p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Cơ cấu sản phẩm
            </dt>
            <dd>
              5.928 căn thấp tầng: biệt thự đơn lập, song lập, tứ lập, biệt
              thự ven đồi, shophouse thương mại, nhà phố liền kề, cùng tổ hợp
              căn hộ condotel và khách sạn 5 sao.
            </dd>
          </div>
          <div className="grid grid-cols-[140px,1fr] gap-3 rounded-2xl bg-zinc-50 p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Hình thức sở hữu
            </dt>
            <dd>
              Hơn 90% sản phẩm được cấp sổ hồng sở hữu lâu dài cho người Việt
              Nam; 50 năm với một số sản phẩm khách sạn/nghỉ dưỡng &amp; khách
              hàng nước ngoài.
            </dd>
          </div>
          <div className="grid grid-cols-[140px,1fr] gap-3 rounded-2xl bg-zinc-50 p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Thời gian triển khai
            </dt>
            <dd>
              Khởi công: 22/06/2025. Giai đoạn 1 dự kiến bàn giao vào cuối năm
              2027.
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}

