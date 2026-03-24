'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface SuccessToastProps {
  show: boolean
  onClose: () => void
}

export function SuccessToast({ show, onClose }: SuccessToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-200 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-201 w-[90vw] max-w-sm bg-[#0c1f38] rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Đường viền vàng trên */}
            <div className="h-1 w-full bg-[#d4af37]" />

            {/* Nội dung */}
            <div className="px-8 py-8 flex flex-col items-center text-center">
              {/* Icon check vàng */}
              <div className="w-16 h-16 rounded-full border-2 border-[#d4af37] flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h2 className="text-[#d4af37] text-xl font-bold tracking-wide mb-2">
                Đăng ký thành công!
              </h2>
              <p className="text-white/80 text-sm leading-relaxed mb-1">
                Cảm ơn bạn đã quan tâm đến
              </p>
              <p className="text-white font-semibold text-sm mb-4">
                Vinhomes Hải Vân Bay
              </p>
              <p className="text-white/60 text-xs leading-relaxed mb-6">
                Chuyên viên tư vấn sẽ liên hệ với bạn <br /> trong thời gian sớm nhất.
              </p>

              <div className="w-full border-t border-white/10 pt-5 mb-5">
                <p className="text-white/50 text-xs mb-1">Hotline hỗ trợ</p>
                <a href="tel:0899967999" className="text-[#d4af37] font-bold text-lg tracking-widest">
                  08 999 67 999
                </a>
              </div>

              <button
                onClick={onClose}
                className="w-full bg-[#d4af37] hover:bg-[#c29b2e] text-[#0c1f38] font-bold py-3 rounded-xl transition-colors text-sm tracking-wide"
              >
                Đóng
              </button>
            </div>

            {/* Nút X */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/40 hover:text-white/80 transition-colors"
            >
              <X size={18} />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
