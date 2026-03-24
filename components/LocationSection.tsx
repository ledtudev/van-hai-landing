'use client'

import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

export function LocationSection() {
  return (
    <div className="font-sans" id="vi-tri">
      <section className="relative overflow-hidden bg-[#fff9f0] py-16 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.2]"
          style={{
            backgroundImage:
              "url('https://vinhomeshaivanland.com/wp-content/uploads/2026/03/song.png')",
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-2xl font-bold capitalize text-[#5a4638] drop-shadow-sm md:text-3xl"
          >
            Vị Trí Độc Tôn Giữa Núi Hải Vân Và Vịnh Biển Đà Nẵng
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 max-w-4xl text-sm leading-relaxed text-[#6a5a4e] md:text-base"
          >
            Tọa lạc tại khu vực Làng Vân, phường Hòa Hiệp Bắc, quận Liên Chiểu,{' '}
            <strong className="text-[#333]">Vinhomes Hải Vân Bay</strong> sở hữu
            vị trí hiếm có dưới chân{' '}
            <strong className="text-[#333]">Đèo Hải Vân</strong>, nơi được mệnh
            danh là &quot;thiên hạ đệ nhất hùng quan&quot;. Dự án nằm giữa khung
            cảnh thiên nhiên hùng vĩ với lưng tựa núi, mặt hướng ra vịnh biển
            trong xanh của <strong className="text-[#333]">Đà Nẵng</strong>, mang
            đến không gian sống nghỉ dưỡng đẳng cấp và biệt lập.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 w-full max-w-4xl transform overflow-hidden rounded-xl border-[8px] border-white shadow-[0_15px_50px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:scale-[1.01]"
          >
            <img
              src="https://vinhomeshaivanland.com/wp-content/uploads/2026/03/Vinhomes-Hai-Van-Bay.jpg"
              alt="Vị trí Vinhomes Hải Vân Bay"
              className="max-h-[500px] h-auto w-full object-cover"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 max-w-4xl text-sm leading-relaxed text-[#6a5a4e] md:text-base"
          >
            Từ dự án, cư dân dễ dàng kết nối đến trung tâm{' '}
            <strong className="text-[#333]">Đà Nẵng</strong>, cảng Liên Chiểu,
            sân bay quốc tế Đà Nẵng và các điểm du lịch nổi tiếng của miền Trung.
            Nhờ vị trí chiến lược cùng hạ tầng giao thông đang phát triển mạnh,{' '}
            <strong className="text-[#333]">Vinhomes Hải Vân Bay</strong> không chỉ
            là nơi an cư lý tưởng mà còn mở ra cơ hội đầu tư hấp dẫn cho những
            khách hàng muốn sở hữu bất động sản biển đẳng cấp.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full border border-[#5a4638] px-8 py-2.5 text-sm font-semibold text-[#5a4638] transition-colors duration-300 hover:bg-[#5a4638] hover:text-white"
          >
            <FileText className="h-4 w-4" />
            NHẬN BÁO GIÁ NGAY
          </motion.button>
        </div>
      </section>
    </div>
  )
}
