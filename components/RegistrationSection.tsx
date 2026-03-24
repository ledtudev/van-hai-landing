'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SuccessToast } from './SuccessToast'

export function RegistrationSection({ id }: { id?: string }) {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id={id} className="relative overflow-hidden border-t border-gray-100 bg-white py-12">
      <SuccessToast show={submitted} onClose={() => setSubmitted(false)} />

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.25]"
        style={{ backgroundImage: "url('https://vinhomeshaivanland.com/wp-content/uploads/2026/03/song.png')" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-1 text-xl font-bold uppercase text-[#0c1f38] drop-shadow-sm md:text-2xl"
        >
          Đăng Ký Nhận Thông Tin Dự Án Vinhomes Làng Vân
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 text-xs italic text-gray-500 md:text-sm"
        >
          * Thông tin của khách hàng luôn được bảo mật tuyệt đối
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 md:flex-row"
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
        >
          <input
            type="text"
            placeholder="Họ và tên"
            className="w-full flex-1 bg-[#f4f5f7] px-4 py-2.5 text-sm text-gray-700 outline-none transition-all focus:ring-1 focus:ring-[#0c1f38] md:w-auto"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full flex-1 bg-[#f4f5f7] px-4 py-2.5 text-sm text-gray-700 outline-none transition-all focus:ring-1 focus:ring-[#0c1f38] md:w-auto"
          />
          <input
            type="tel"
            placeholder="Số điện thoại"
            className="w-full flex-1 bg-[#f4f5f7] px-4 py-2.5 text-sm text-gray-700 outline-none transition-all focus:ring-1 focus:ring-[#0c1f38] md:w-auto"
          />
          <select className="w-full flex-1 appearance-none bg-[#f4f5f7] px-4 py-2.5 text-sm text-gray-600 outline-none transition-all focus:ring-1 focus:ring-[#0c1f38] md:w-auto">
            <option value="">- Nhà Phố Liền Kề -</option>
            <option value="biet-thu">Biệt thự</option>
            <option value="shophouse">Shophouse</option>
            <option value="condotel">Condotel</option>
          </select>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="w-full bg-[#0c1f38] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#153154] md:w-[150px]"
          >
            Gửi yêu cầu
          </motion.button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-sm font-semibold text-[#0c1f38] md:text-base"
        >
          Gọi Ngay Để Có Căn Hot - Giá Tốt & Ưu Tiên Lựa Chọn HOTLINE:{' '}
          <span className="text-[#0056b3]">08 999 67 999</span>
        </motion.p>
      </div>
    </section>
  )
}
