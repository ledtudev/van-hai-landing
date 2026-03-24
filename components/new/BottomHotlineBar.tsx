import React from 'react'

export default function BottomHotlineBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[90] bg-[#9b4a2b] text-white"
      role="status"
      aria-live="polite"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">
        <div className="text-[11px] sm:text-xs leading-tight text-center">
          Dễ dàng xem nhà mẫu, quý khách vui lòng gọi Hotline{' '}
          <span className="font-bold">0936.191.838</span>
        </div>
      </div>
    </div>
  )
}

