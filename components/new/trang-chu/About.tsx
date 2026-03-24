import { ChevronRight, Download } from 'lucide-react';

const About = () => {
  const projectInfo = [
    { label: 'Tên dự án:', value: 'Vinhomes Cao Xà Lá', isBold: true },
    { label: 'Địa chỉ:', value: '233 – 233B – 235 Nguyễn Trãi, Thanh Xuân, Hà Nội' },
    { label: 'Chủ đầu tư:', value: 'VinHomes.', isBold: true },
    { label: 'Đồng phát triển:', value: 'Masterise Homes', isBold: true },
    { label: 'Tư vấn thiết kế:', value: 'P&T Group.' },
    { label: 'Tư vấn cảnh quan:', value: 'GroupGSA.' },
    { label: 'Thiết kế nội thất:', value: 'That’s ITH interior và 2nd Edition.' },
    { label: 'Quy mô:', value: '11 ha.' },
    { label: 'Cảnh quan:', value: '~ 3,5ha.' },
    { label: 'Loại hình:', value: 'Căn hộ cao cấp, Duplex, Penthouse, Shophouse khối đế.' },
    { label: 'Số tòa:', value: 'Có 11 tòa, cao 45 tầng.' },
    { label: 'Số lượng:', value: '4500 căn hộ.' },
    { label: '1 phòng ngủ:', value: '~ 43 m2 – 53m2.' },
    { label: '2 phòng ngủ:', value: '~ 65 m2 – 74 m2.' },
    { label: '3 phòng ngủ:', value: '~ 99 m2 – 109 m2.' },
    { label: 'Duplex:', value: '~ 124m2 – 200m2.' },
    { label: 'Penthouse:', value: '~ 141m2 – 232.0m2.' },
    {
      label: 'Tiện ích:',
      value:
        'Bể bơi bốn mùa trong nhà và ngoài trời\n\nKhu gym – spa – yoga cao cấp\n\nTrung tâm thương mại và siêu thị mini\n\nKhu vui chơi trẻ em trong nhà và ngoài trời\n\nVườn dạo bộ, sky garden, sân tập thể thao\n\nSảnh lễ tân sang trọng và lounge tiếp khách cao cấp',
    },
    { label: 'Bàn giao:', value: 'Hoàn thiện nội thất chất lượng 6 sao.' },
    {
      label: 'Sở hữu:',
      value:
        'Sở hữu lâu dài đối với khách hàng người Việt Nam, 50 năm đối với khách hàng người nước ngoài.',
    },
    { label: 'Khởi công:', value: 'Quý 3/2025.' },
    { label: 'Giao nhà:', value: 'Quý 1/2028.' },
  ]

  const downloadGroups = [
    {
      title: 'TẢI BẢNG GIÁ VÀ TÀI LIỆU',
      items: [
        { name: 'Click tải - Bảng giá mở bán đợt 1.2025.xls', size: '1.5MB' },
        { name: 'Click tải - Mặt bằng thiết kế căn hộ.pdf', size: '3.0MB' },
      ],
    },
    {
      title: 'TẢI BẢNG GIÁ VÀ TÀI LIỆU',
      items: [
        { name: 'Click tải - Chính sách bán hàng, vay ngân hàng.pdf', size: '2.2MB' },
        { name: 'Click tải - Tiến độ thanh toán từng đợt.pdf', size: '1.3MB' },
      ],
    },
  ];

  return (
    <>
      {/* 1. Giới thiệu + hình ảnh + vị trí/kết nối */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Tiêu đề với đường kẻ ngang hai bên */}
          <div className="relative flex items-center mb-8">
            <div className="flex-grow border-t border-gray-300"></div>
            <h2 className="flex-shrink mx-4 text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-wide">
              CÁC DỰ ÁN VINHOMES ĐÃ THỰC HIỆN
            </h2>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Nội dung giới thiệu */}
          <div className="text-gray-700 text-sm md:text-base leading-relaxed text-justify mb-8">
            <p>
              Dự án{' '}
              <span className="font-semibold">
                Vinhomes Cao Xà Lá (Vinhomes Galaxy)
              </span>{' '}
              là tổ hợp đại đô thị đẳng cấp do Vingroup phát triển, tọa lạc trên khu đất vàng tại
              quận Thanh Xuân – tiếp giáp các tuyến đường lớn như Nguyễn Trãi, Giải Phóng và Vành đai 2.
              Dự án hứa hẹn kiến tạo một không gian sống hiện đại với đầy đủ tiện ích khép kín như
              trường học Vinschool, bệnh viện Vinmec, trung tâm thương mại, công viên cây xanh, hồ điều hòa...
              Từ Vinhomes Cao Xà Lá, cư dân dễ dàng kết nối đến trung tâm Hà Nội chỉ trong vài phút.
              Đây sẽ là điểm đến lý tưởng cho cuộc sống chất lượng, văn minh và bền vững.
            </p>
          </div>

          {/* Hình ảnh dự án */}
          <div className="relative w-full aspect-[16/9] shadow-lg rounded-sm overflow-hidden">
            <img
              src="/trang-chu-1.jpg" // Ảnh dự án thật trong `public/`
              alt="Phối cảnh Vinhomes Cao Xà Lá"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Chú thích ảnh */}
          <p className="text-center text-xs italic text-gray-500 mt-2">Vinhomes Cao Xà Lá</p>

          {/* Bổ sung nội dung vị trí và kết nối */}
          <div className="mt-8 text-gray-700 text-sm md:text-base leading-relaxed text-justify">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
              Vị trí trung tâm – Giao điểm chiến lược phía Nam Hà Nội
            </h3>
            <p className="mb-4">
              Vị trí Vinhomes Cao Xà Lá sở hữu vị trí chiến lược khi nằm giữa hai trục giao thông lớn
              là <span className="font-semibold">Nguyễn Trãi và Giải Phóng</span>, kết nối trực tiếp tới
              các tuyến đường trọng điểm:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <span className="font-semibold">Nguyễn Trãi – Trần Phú:</span> Trục Tây Nam dẫn thẳng tới Hà
                Đông, Thanh Xuân, Trung Hòa - Nhân Chính.
              </li>
              <li>
                <span className="font-semibold">Giải Phóng – Kim Đồng:</span> Trục xuyên tâm nối tới trung tâm
                quận Hoàn Kiếm, Hai Bà Trưng.
              </li>
              <li>
                <span className="font-semibold">Trường Chinh – Tôn Thất Tùng – Láng:</span> Tuyến đường cải tạo
                mở rộng giúp kết nối thuận tiện đến Cầu Giấy và Đống Đa.
              </li>
              <li>
                <span className="font-semibold">Vành đai 2, 2.5:</span> Tăng cường khả năng liên kết vùng từ
                trung tâm tới các quận vệ tinh và ngoại thành.
              </li>
            </ul>
            <p className="mb-6">
              Ngoài ra, tuyến{' '}
              <span className="font-semibold">
                đường sắt đô thị Cát Linh – Hà Đông (Metro 2A)
              </span>{' '}
              và tuyến{' '}
              <span className="font-semibold">Metro số 3 (Ga Hà Nội – Nhổn)</span> đều nằm gần dự án, tạo
              điều kiện di chuyển thuận tiện và nhanh chóng trong tương lai.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
              Kết nối đa chiều – Di chuyển thuận tiện mọi hướng
            </h3>
            <p className="mb-4">
              Từ Vị trí Vinhomes Cao Xà Lá, cư dân có thể dễ dàng di chuyển đến các khu vực trung tâm cũng
              như các địa bàn vệ tinh nhờ hệ thống giao thông đa tầng:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">5 phút</span> tới Royal City, Trường Chinh, Ngã Tư Sở.
              </li>
              <li>
                <span className="font-semibold">10 phút</span> đến Hồ Hoàn Kiếm, trung tâm hành chính quận Hai
                Bà Trưng, quận Đống Đa.
              </li>
              <li>
                <span className="font-semibold">15 phút</span> đến Mỹ Đình, Cầu Giấy qua trục Láng – Khuất Duy
                Tiến – Phạm Hùng.
              </li>
              <li>
                <span className="font-semibold">25-30 phút</span> đến sân bay quốc tế Nội Bài thông qua vành đai 2
                hoặc Võ Chí Công.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Nội dung & video youtube */}
      <div className="bg-white min-h-screen font-sans text-[#333]">
        <section className="max-w-6xl mx-auto p-4 py-10">
          <div className="mb-6 relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
            {/* Nhúng Video Youtube thực tế */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/zRWjXAwOwZw"
              title="Điều chỉnh kế hoạch sử dụng đất Cao Xà Lá"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <div className="text-gray-800 leading-relaxed space-y-4 text-justify">
            <p>
              Dự án <span className="font-bold text-red-700 underline">Vinhomes Cao Xà Lá</span> (Vinhomes Galaxy)
              cung cấp ra thị trường hàng nghìn căn hộ cao cấp, được phát triển trong nhiều tòa tháp cao tầng hiện đại, dự kiến từ 35 đến 45 tầng.
            </p>
            <p>
              Các căn hộ được thiết kế đa dạng với loại hình 1PN (35-50m²), 2PN (60-75m²), 3PN (90-110m²), phù hợp nhu cầu an cư lẫn đầu tư cho thuê. Đặc biệt, dự án còn có quỹ căn hộ duplex và penthouse đẳng cấp, diện tích từ 130–250m², hướng đến nhóm khách hàng thượng lưu.
            </p>
          </div>
        </section>
      </div>

      {/* 3. Tổng quan */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Tiêu đề Header */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-grow h-[1px] bg-gray-200"></div>
            <h2 className="px-4 text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-tight text-center">
              TỔNG QUAN VINHOMES CAO XÀ LÁ (VINHOMES GALAXY)
            </h2>
            <div className="flex-grow h-[1px] bg-gray-200"></div>
          </div>

          {/* Bảng thông tin dự án */}
          <div className="border-t border-gray-100">
            {projectInfo.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 py-3 border-b border-gray-50 hover:bg-gray-50 transition-colors px-2"
              >
                <div className="text-gray-600 text-sm md:text-base">{item.label}</div>
                <div
                  className={`col-span-2 text-sm md:text-base text-gray-800 ${
                    item.isBold ? 'font-bold' : 'font-medium'
                  } whitespace-pre-line`}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Ảnh dự án */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hình ảnh dự án */}
          <div className="relative w-full aspect-[16/9] shadow-lg rounded-sm overflow-hidden">
            <img
            src="/trang-chu-2.jpg" // Ảnh dự án thật trong `public/`
              alt="Phối cảnh Vinhomes Cao Xà Lá"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Chú thích ảnh */}
          <p className="text-center text-xs italic text-gray-500 mt-2">Vinhomes Cao Xà Lá</p>
        </div>
      </section>

      {/* 5. Tải xuống bảng giá & tài liệu */}
      <section className="bg-[#fdf8e9] py-12 px-4 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          {/* Tiêu đề Header với đường kẻ 2 bên */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex-grow h-[1px] bg-red-200"></div>
            <h2 className="px-4 text-2xl md:text-3xl font-bold text-red-600 uppercase text-center">
              TẢI XUỐNG BẢNG GIÁ, TÀI LIỆU DỰ ÁN
            </h2>
            <div className="flex-grow h-[1px] bg-red-200"></div>
          </div>

          <p className="text-center text-gray-800 text-sm md:text-base mb-12 italic">
            Các tài liệu khách hàng nhận được gồm: Bảng giá đợt 1 ưu đãi, Thiết kế mặt bằng và chi tiết căn hộ, Chính sách bán hàng và Tiến độ thanh toán
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Cột trái: Logo và text phụ */}
            <div className="md:col-span-3 text-center space-y-4">
              <div className="flex justify-center">
                <img
                  src="/logo.png"
                  alt="VinHomes"
                  className="h-24 object-contain"
                />
              </div>
              <div className="text-[#b84a25] font-bold">
                <p className="text-lg">Bảng giá, tài liệu cập nhật</p>
                <p className="text-lg">từ Chủ đầu tư</p>
              </div>
            </div>

            {/* Cột phải: Các nhóm download */}
            <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {downloadGroups.map((group, idx) => (
                <div key={idx} className="space-y-6">
                  {/* Banner Button Gradient */}
                  <div className="relative bg-gradient-to-r from-[#d62151] to-[#ff2a68] text-white py-3 px-6 rounded-l-lg rounded-r-[40px] shadow-lg flex items-center gap-3 w-fit pr-10">
                    <div className="border-2 border-white rounded-md p-1">
                      <Download size={24} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-lg tracking-tight">{group.title}</span>
                    <div className="absolute right-[-10px] top-0 bottom-0 w-8 bg-[#d62151] skew-x-[20deg] -z-10 rounded-r-lg"></div>
                  </div>

                  {/* Danh sách file */}
                  <ul className="space-y-4">
                    {group.items.map((item, i) => (
                      <li key={i} className="group cursor-pointer">
                        <p className="text-blue-700 font-medium group-hover:text-red-600 transition-colors">
                          {item.name} <span className="text-gray-500 font-normal">({item.size})</span>
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* Nút Tải Toàn Bộ */}
                  <button className="flex items-center gap-2 border-2 border-[#b84a25] text-[#b84a25] px-6 py-2 rounded-full font-bold hover:bg-[#b84a25] hover:text-white transition-all">
                    <ChevronRight size={18} />
                    TẢI XUỐNG TOÀN BỘ
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Chủ đầu tư */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Tiêu đề với đường kẻ ngang mảnh */}
          <div className="flex items-center justify-center mb-10">
            <div className="flex-grow h-[1px] bg-gray-200"></div>
            <h2 className="px-6 text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-tight text-center">
              CHỦ ĐẦU TƯ VINHOMES
            </h2>
            <div className="flex-grow h-[1px] bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Cột trái: Logo Vinhomes lớn */}
            <div className="md:col-span-4 flex justify-center pt-4">
              <img
                src="/logo.png"
                alt="Vinhomes Logo"
                className="w-full max-w-[300px] h-auto object-contain"
              />
            </div>

            {/* Cột phải: Nội dung văn bản */}
            <div className="md:col-span-8 space-y-6 text-gray-700 leading-relaxed text-justify">
              <p>
                <span className="text-blue-700 font-semibold">Vinhomes</span> là thương hiệu bất động sản hàng đầu Việt Nam, trực thuộc Tập đoàn Vingroup – một trong những tập đoàn kinh tế tư nhân lớn nhất Việt Nam. Được thành lập năm 2008, Vinhomes hiện là đơn vị phát triển bất động sản số 1 tại Việt Nam, chuyên đầu tư và vận hành các khu đô thị phức hợp quy mô lớn, tích hợp đầy đủ hệ sinh thái tiện ích đẳng cấp.
              </p>
              <p>
                Với triết lý “Nơi hạnh phúc ngập tràn”, Vinhomes không ngừng kiến tạo các đô thị thông minh, xanh, hiện đại, mang đến môi trường sống văn minh, tiện nghi cho hàng triệu cư dân trên khắp cả nước. Các dự án của Vinhomes như Vinhomes Riverside, Vinhomes Times City, Vinhomes Central Park, Vinhomes Ocean Park, Vinhomes Smart City, Vinhomes Grand Park... đều đã trở thành những biểu tượng về chất lượng sống tại các đô thị lớn như Hà Nội, TP.HCM, Hải Phòng, Hưng Yên...
              </p>
            </div>
          </div>

          {/* Các đoạn văn bản phía dưới (Full width) */}
          <div className="mt-8 space-y-6 text-gray-700 leading-relaxed text-justify">
            <p>
              Vinhomes phát triển các dự án không chỉ nổi bật ở các sản phẩm có thiết kế hiện đại, quy hoạch bài bản mà còn ghi dấu ấn với hệ tiện ích “all-in-one” gồm giáo dục (Vinschool), y tế (Vinmec), mua sắm (Vincom), giải trí, thể thao và cảnh quan xanh. Đồng thời, đơn vị cũng tiên phong áp dụng công nghệ trong quản lý – vận hành, nâng cao trải nghiệm cư dân.
            </p>
            <p>
              Với uy tín vững chắc và tiềm lực tài chính mạnh mẽ, Vinhomes luôn nằm trong top đầu các chủ đầu tư được khách hàng và nhà đầu tư tin tưởng lựa chọn. Các sản phẩm mang thương hiệu Vinhomes không chỉ bảo chứng về chất lượng mà còn có tiềm năng sinh lời cao, là lựa chọn hàng đầu cho cả an cư và đầu tư bền vững.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Các dự án đã thực hiện */}
      <section className="max-w-7xl mx-auto px-4 py-12 font-sans">
        {/* Tiêu đề với đường kẻ ngang hai bên */}
        <div className="relative flex items-center mb-8">
          <div className="flex-grow border-t border-gray-300"></div>
          <h2 className="flex-shrink mx-4 text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-wide">
            CÁC DỰ ÁN VINHOMES ĐÃ THỰC HIỆN
          </h2>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Nội dung văn bản */}
        <div className="text-gray-800 leading-relaxed space-y-6 text-justify">
          <p>
            Vinhomes – thương hiệu bất động sản hàng đầu Việt Nam, đã ghi dấu ấn với hàng loạt dự án đô thị quy mô lớn, hiện đại trải dài trên khắp cả nước. Tại Hà Nội, Vinhomes phát triển nhiều dự án đẳng cấp như Vinhomes Riverside – khu biệt thự sinh thái ven sông, Vinhomes Times City và Royal City – khu đô thị phức hợp với trung tâm thương mại, bệnh viện, trường học tiêu chuẩn quốc tế. Đặc biệt, Vinhomes Ocean Park và Vinhomes Smart City đã thiết lập chuẩn sống mới với mô hình đô thị thông minh, đại đô thị biển hồ.
          </p>
          <p>
            Tại TP.HCM, Vinhomes Central Park với tòa Landmark 81 cao nhất Việt Nam là biểu tượng kiến trúc nổi bật bên sông Sài Gòn. Vinhomes Golden River tại quận 1 và Vinhomes Grand Park tại TP. Thủ Đức tiếp tục khẳng định vị thế dẫn đầu với không gian sống xanh, tiện ích toàn diện.
          </p>
          <p>
            Ngoài hai đô thị lớn, Vinhomes còn hiện diện tại nhiều tỉnh thành như Hải Phòng (Vinhomes Imperia, Vinhomes Marina), Quảng Ninh (Vinhomes Hạ Long Xanh), Thanh Hóa (Vinhomes Star City), Hưng Yên (Vinhomes Dream City)... Các dự án đều được quy hoạch đồng bộ, tích hợp giáo dục, y tế, mua sắm, giải trí và cảnh quan sinh thái, góp phần kiến tạo chuẩn sống mới cho người Việt.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;