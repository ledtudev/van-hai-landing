'use client'

import { motion } from 'framer-motion'

export function PolicyInfographicSection() {
  return (
    <section className="relative bg-[#fff9f0] py-16 md:py-24 overflow-hidden font-sans">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.10]"
        style={{ backgroundImage: "url('https://vinhomeshaivanland.com/wp-content/uploads/2026/03/song.png')" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#0c1f38] text-xl md:text-2xl font-bold mb-4 uppercase"
        >
          Chính Sách Bán Hàng Dự Kiến - Khu Bạch Vân Vinhomes Hải Vân Bay
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-gray-600 text-sm md:text-base leading-relaxed mb-12 max-w-4xl mx-auto italic"
        >
          Khu Bạch Vân đã chính thức lộ diện và đang tạo nên cơn sốt cực lớn nhờ cảnh quan thiên
          nhiên tuyệt mỹ, khả năng kết nối đa chiều và phong cách sống năng động đặc biệt. Bạch Vân
          mang đến giải pháp tài chính ưu việt dành riêng cho các chủ nhân tiên phong, mở ra cơ hội
          sở hữu tài sản truyền đời một cách thảnh thơi nhất.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2"
        >
          <img
            src="https://vinhomeshaivanland.com/wp-content/uploads/2026/03/csbh-768x960.jpg"
            alt="Chính sách bán hàng Vinhomes Hải Vân Bay"
            className="w-full h-auto object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
