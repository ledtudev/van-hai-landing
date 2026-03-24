'use client'

import { useState } from 'react'
import { Section } from "@/components/Section"
import { SuccessToast } from './SuccessToast'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <Section
      id="lien-he"
      eyebrow="Liên hệ & đăng ký"
      title="Nhận thông tin mới nhất Vinhomes Hải Vân Bay"
      subtitle={
        <>
          Để được tư vấn chi tiết bảng giá, giỏ hàng, chính sách bán hàng và
          cập nhật tiến độ dự án, vui lòng để lại thông tin hoặc liên hệ trực
          tiếp hotline chủ đầu tư.
        </>
      }
    >
      <SuccessToast show={submitted} onClose={() => setSubmitted(false)} />

      <div className="grid gap-8 lg:grid-cols-[1.1fr,1fr]">
        <form
          className="space-y-4 rounded-2xl border border-zinc-100 bg-white p-4 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-6"
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5 text-xs">
              <label className="block font-medium text-zinc-800">
                Họ và tên
              </label>
              <input
                type="text"
                placeholder="Nhập họ và tên"
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/40"
              />
            </div>
            <div className="space-y-1.5 text-xs">
              <label className="block font-medium text-zinc-800">E-mail</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/40"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5 text-xs">
              <label className="block font-medium text-zinc-800">
                Số điện thoại
              </label>
              <input
                type="tel"
                placeholder="Nhập số điện thoại"
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/40"
              />
            </div>
            <div className="space-y-1.5 text-xs">
              <label className="block font-medium text-zinc-800">
                Lựa chọn sản phẩm
              </label>
              <select
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/40"
                defaultValue=""
              >
                <option value="" disabled>
                  Chọn loại hình
                </option>
                <option>Nhà phố liền kề</option>
                <option>Biệt thự nghỉ dưỡng</option>
                <option>Shophouse thương mại</option>
                <option>Chung cư cao cấp</option>
                <option>Khách sạn cao cấp</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5 text-xs">
            <label className="block font-medium text-zinc-800">
              Ghi chú (nếu có)
            </label>
            <textarea
              rows={3}
              placeholder="Ví dụ: tôi quan tâm căn góc, view biển, nhu cầu đầu tư/ở thực..."
              className="w-full resize-none rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/40"
            />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-500"
            >
              Gửi yêu cầu
            </button>
            <p className="text-[11px] text-zinc-500">
              * Thông tin của khách hàng luôn được bảo mật tuyệt đối.
            </p>
          </div>
        </form>

        <aside className="space-y-4 rounded-2xl bg-emerald-950 px-5 py-6 text-sm text-emerald-50">
          <h3 className="text-sm font-semibold text-white">
            Liên hệ trực tiếp chủ đầu tư
          </h3>
          <div className="space-y-2 text-xs text-emerald-100">
            <p>
              <span className="font-semibold text-emerald-200">Địa chỉ:</span>{" "}
              Vịnh Nam Chơn, chân đèo Hải Vân, liền kề biển Lăng Cô, phường Hải
              Vân, TP. Đà Nẵng.
            </p>
            <p>
              <span className="font-semibold text-emerald-200">PKD CĐT:</span>{" "}
              <a href="tel:0899967999" className="font-semibold">
                08 999 67 999
              </a>{" "}
              (Call/Zalo)
            </p>
          </div>
          <div className="space-y-2 rounded-xl bg-white/5 p-3 text-xs text-emerald-100">
            <p className="font-semibold text-emerald-50">Chuyên viên tư vấn</p>
            <p>
              Mr. Trương Tuấn –{" "}
              <a href="tel:0949999943" className="font-semibold">
                0949 999 943
              </a>{" "}
              (Call/Zalo)
            </p>
            <p>
              Ms. Thu Quỳnh –{" "}
              <a href="tel:0899967999" className="font-semibold">
                08 999 67 999
              </a>{" "}
              (Call/Zalo)
            </p>
          </div>
          <div className="text-[11px] text-emerald-200/80">
            Kết nối qua mạng xã hội: Facebook • Tiktok • Youtube
          </div>
        </aside>
      </div>
    </Section>
  )
}
