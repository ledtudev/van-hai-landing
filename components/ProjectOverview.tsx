'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const leftDetails = [
  { label: 'Tên thương mại chính thức:', value: 'Vinhomes Hải Vân Bay.' },
  { label: 'Tên gọi khác trên thị trường:', value: 'Vinhomes Làng Vân, Vinpearl Làng Vân.' },
  { label: 'Vị trí dự án:', value: 'Vịnh Nam Chơn (Làng Vân), Phường Hòa Hiệp Bắc, Quận Liên Chiểu, TP. Đà Nẵng.' },
  { label: 'Chủ đầu tư:', value: 'Công ty Cổ phần Vinpearl (Thành viên trực thuộc Tập đoàn Vingroup).' },
  { label: 'Đơn vị phát triển & Quản lý vận hành:', value: 'Vinhomes và Vinpearl.' },
  { label: 'Tổng thầu thi công:', value: 'Coteccons cùng liên danh các nhà thầu lớn (Phương Thành Hợp, Bắc Trung Nam, Long Bình...).' },
]

const rightDetails = [
  { label: 'Quy mô diện tích:', value: '512 ha (với hơn 507 ha đất liền và 5 ha mặt nước nội khu).' },
  { label: 'Mật độ xây dựng:', value: 'Rất thấp, chỉ khoảng 19,8% – ưu tiên tối đa cho không gian xanh, sinh thái và mặt nước.' },
  { label: 'Tổng vốn đầu tư:', value: 'Khoảng 44.000 tỷ đồng.' },
  { label: 'Cơ cấu sản phẩm:', value: '5.928 căn thấp tầng bao gồm Biệt thự (Đơn lập, Song lập, Tứ lập, Ven đồi), Shophouse thương mại, Nhà phố liền kề, cùng tổ hợp Căn hộ Condotel, Khách sạn 5 sao.' },
  { label: 'Hình thức sở hữu:', value: 'Hơn 90% sản phẩm được cấp sổ hồng sở hữu lâu dài đối với người Việt Nam; 50 năm đối với một số quỹ căn khách sạn/nghỉ dưỡng đặc thù và người nước ngoài.' },
  { label: 'Thời gian khởi công:', value: 'Đã chính thức khởi công vào ngày 22/06/2025.' },
  { label: 'Dự kiến bàn giao:', value: 'Giai đoạn 1 dự kiến bàn giao vào cuối năm 2027.' },
]

type DetailItemProps = { label: string; value: string; delay?: number }

const DetailItem = ({ label, value, delay = 0 }: DetailItemProps) => (
  <motion.li
    initial={{ opacity: 0, x: -16 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    className="flex gap-3 text-sm leading-relaxed text-gray-700"
  >
    <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0c1f38]">
      <Check className="h-3 w-3 text-white" strokeWidth={3} />
    </div>
    <p>
      <strong className="text-[#0c1f38]">{label}</strong> {value}
    </p>
  </motion.li>
)

export function ProjectOverview() {
  return (
    <section
      id="tong-quan"
      className="relative overflow-hidden bg-[#fdfdfc] py-16 md:py-24 font-sans"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.05]"
        style={{ backgroundImage: "url('https://vinhomeshaivanland.com/wp-content/uploads/2026/03/bg-2-scaled.png')" }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-3">

        {/* Cột trái */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center space-y-8"
        >
          <div>
            <h2 className="text-lg font-bold uppercase tracking-[0.2em] text-[#0c1f38] opacity-80">
              Tổng quan dự án
            </h2>
            <h3 className="mt-2 text-3xl md:text-4xl font-extrabold uppercase text-[#0c1f38] leading-tight">
              Vinhomes Hải Vân Bay
            </h3>
          </div>
          <ul className="space-y-4">
            {leftDetails.map((item, i) => (
              <DetailItem key={item.label} label={item.label} value={item.value} delay={i * 0.07} />
            ))}
          </ul>
        </motion.div>

        {/* Ảnh giữa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[280px] md:max-w-none md:h-[500px] lg:h-[650px] overflow-hidden rounded-tr-[60px] rounded-bl-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-700 hover:scale-[1.03] border border-white/10"
        >
          <img
            src="https://vinhomeshaivanland.com/wp-content/uploads/2026/03/vinhomes-lang-van.jpg"
            alt="Tổng quan dự án Vinhomes Hải Vân Bay"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
        </motion.div>

        {/* Cột phải */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center"
        >
          <ul className="space-y-6">
            {rightDetails.map((item, i) => (
              <DetailItem key={item.label} label={item.label} value={item.value} delay={i * 0.07} />
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  )
}
