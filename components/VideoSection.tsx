import { Play, View } from "lucide-react";

export function VideoSection() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-[#071324] py-24 font-sans">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888081643-eb31f5f3e9c7?q=80&w=2000&auto=format&fit=crop')",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#071324]/50 via-transparent to-[#071324]/90" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold text-white drop-shadow-lg md:text-4xl">
          Vinhomes Làng Vân - Thiên Hạ Đệ Nhất Hùng Quan
        </h2>

        <p className="mb-12 max-w-4xl text-sm leading-relaxed text-gray-300 md:text-base">
          <strong className="text-white">Vinhomes Hải Vân Bay</strong> là siêu
          đô thị nghỉ dưỡng ven biển do{" "}
          <strong className="text-white">Vingroup</strong> phát triển tại{" "}
          <strong className="text-white">Đà Nẵng</strong>, sở hữu vị trí hiếm có
          dưới chân đèo Hải Vân, ôm trọn vịnh biển tuyệt đẹp. Với quy hoạch
          đẳng cấp và hệ sinh thái tiện ích đồng bộ, dự án mở ra cơ hội{" "}
          <strong className="text-white">
            an cư – nghỉ dưỡng – đầu tư sinh lời
          </strong>{" "}
          hấp dẫn.{" "}
          <strong className="text-white">
            Khám phá ngay để đón đầu cơ hội sở hữu bất động sản biển đẳng cấp
            tại Vinhomes Làng Vân.
          </strong>
        </p>

        <div className="group relative aspect-video w-full max-w-4xl cursor-pointer overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1200&auto=format&fit=crop"
            alt="Video giới thiệu Vinhomes Hải Vân Bay"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/30">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-white/80 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-1 h-8 w-8 fill-white text-white" />
            </div>
          </div>
        </div>

        <button className="mt-10 flex items-center gap-2 rounded-full border border-white/50 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 hover:border-white">
          <View className="h-4 w-4" />
          XEM TOÀN CẢNH 360°
        </button>
      </div>
    </section>
  );
}

