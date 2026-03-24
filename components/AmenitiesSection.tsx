'use client'

import { motion } from 'framer-motion'

const amenitiesGrid = [
  { title: 'Công Viên Vinpearl' },
  { title: 'Bể Bơi Tiêu Chuẩn' },
  { title: 'Thiết Kế Hiện Đại' },
  { title: 'Club House' },
]

export function AmenitiesSection() {
  return (
    <section className="bg-[#051427] py-16 md:py-24 font-sans" id="tien-ich">
      <div className="max-w-6xl mx-auto px-4">

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-xl md:text-2xl font-bold mb-6 flex items-start gap-2"
        >
          <span className="text-blue-400 font-light translate-y-[-2px]">|</span>
          <span>Tiện Ích Nội Khu – Chuẩn Sống Thượng Lưu Bên Vịnh Thiên Đường</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-8 max-w-5xl"
        >
          Tại <strong className="text-white">Vinhomes Hải Vân Bay</strong>, cư dân
          được tận hưởng hệ sinh thái tiện ích đẳng cấp quốc tế, kết hợp hoàn hảo
          giữa nghỉ dưỡng, giải trí và chăm sóc sức khỏe. Dự án sở hữu bãi biển
          riêng, bến du thuyền cao cấp, hồ bơi vô cực hướng biển, công viên nước
          và các khu thể thao biển như kayak, sailing hay jetski, mang đến trải
          nghiệm sống năng động giữa thiên nhiên vịnh biển tuyệt đẹp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[16/10] md:aspect-[16/9] bg-[#0c2240] rounded-2xl overflow-hidden mb-4 shadow-2xl"
        >
          <img
            src="https://vinhomeshaivanland.com/wp-content/uploads/2026/03/tien-ich-du-an-1-1536x1024.jpg"
            alt="Hệ sinh thái tiện ích Vinhomes Hải Vân Bay"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-gray-500 text-[11px] italic mb-8"
        >
          * Hình ảnh và thông tin chỉ mang tính chất dự kiến
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-12 max-w-5xl"
        >
          Bên cạnh đó, dự án còn tích hợp hệ tiện ích &quot;all-in-one&quot; như trung
          tâm thương mại, phố ẩm thực, khu vui chơi giải trí, resort 5 sao, spa –
          gym – yoga, sân golf và công viên cảnh quan rộng lớn. Các tiện ích giáo
          dục và y tế như trường học quốc tế và bệnh viện tiêu chuẩn cao cũng được
          quy hoạch ngay trong khu đô thị, tạo nên một không gian sống tiện nghi,
          đẳng cấp và trọn vẹn cho cư dân.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="w-full aspect-[16/10] bg-[#0c2240] rounded-xl overflow-hidden mb-3 shadow-lg border border-white/5">
                <img
                  src="https://vinhomeshaivanland.com/wp-content/uploads/2026/03/tien-ich-1-768x432.jpg"
                  alt={`Tiện ích ${idx}`}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
