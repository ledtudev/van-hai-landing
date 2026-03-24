import React from 'react';

const VideoGallery = () => {
  // Danh sách video thực tế về Vinhomes Cao Xà Lá
  const videos = [
    {
      id: "zRWjXAwOwZw",
      title: "Khu Đất Vàng Vinhomes Cao Xà Lá Chuẩn Bị Được Mở Bán - Vinhomes Galaxy",
      url: "https://www.youtube.com/watch?v=zRWjXAwOwZw"
    },
    {
      id: "LkTSCqFfLoE",
      title: "Vinhomes Cao - Xà - Lá đổi chủ ? Siêu Dự Án Đất Vàng Nguyễn Trãi hồi sinh?",
      url: "https://www.youtube.com/watch?v=LkTSCqFfLoE"
    },
    {
      id: "4vMlHc40kUg",
      title: "TOP 3 dự án VINHOMES tại HÀ NỘI triển khai xây dựng và mở bán trong 2025",
      url: "https://www.youtube.com/watch?v=4vMlHc40kUg"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Tiêu đề phần Video */}
      <div className="relative flex items-center mb-10">
        <div className="flex-grow border-t border-gray-300"></div>
        <h2 className="flex-shrink mx-4 text-xl font-bold text-gray-800 uppercase">
          Video Dự Án Vinhomes Cao Xà Lá
        </h2>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Grid nhúng Video */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="flex flex-col gap-3">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md border border-gray-200 bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
            <a 
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-800 hover:text-blue-600 line-clamp-2 transition-colors"
            >
              {video.title}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;