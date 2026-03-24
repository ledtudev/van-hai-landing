import React from 'react';

const PROGRESS_IMAGES = [
  'https://vinhomeshaivanland.com/wp-content/uploads/2026/03/z7592008016904_d8fec84d21909f8f7c5cc842b6713309-768x468.jpg',
  'https://vinhomeshaivanland.com/wp-content/uploads/2026/03/z7592008016904_d8fec84d21909f8f7c5cc842b6713309-768x468.jpg',
  'https://vinhomeshaivanland.com/wp-content/uploads/2026/03/z7592008016904_d8fec84d21909f8f7c5cc842b6713309-768x468.jpg',
  'https://vinhomeshaivanland.com/wp-content/uploads/2026/03/z7592008016904_d8fec84d21909f8f7c5cc842b6713309-768x468.jpg',
  'https://vinhomeshaivanland.com/wp-content/uploads/2026/03/z7592008016904_d8fec84d21909f8f7c5cc842b6713309-768x468.jpg',
  'https://vinhomeshaivanland.com/wp-content/uploads/2026/03/z7592008016904_d8fec84d21909f8f7c5cc842b6713309-768x468.jpg',
  'https://vinhomeshaivanland.com/wp-content/uploads/2026/03/z7592008016904_d8fec84d21909f8f7c5cc842b6713309-768x468.jpg',
  'https://vinhomeshaivanland.com/wp-content/uploads/2026/03/z7592008016904_d8fec84d21909f8f7c5cc842b6713309-768x468.jpg',
];

export function ProgressSection() {
  return (
    <section className="relative bg-[#fff9f0] py-16 md:py-20 overflow-hidden font-sans border-t border-gray-100" id="tien-do">
      {/* Background Waves Pattern */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.12]"
        style={{ backgroundImage: "url('https://vinhomeshaivanland.com/wp-content/uploads/2026/03/song.png')" }} 
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-[#5a4638] text-xl md:text-2xl font-bold uppercase mb-10">
          Cập Nhật Tiến Độ Dự Án
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {PROGRESS_IMAGES.map((img, idx) => (
            <div key={idx} className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-white/20 transition-all duration-500 hover:scale-[1.03]">
              <img 
                src={img} 
                alt={`Tiến độ dự án ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
