"use client";

import { ReactLenis } from "lenis/react";
import type { JSX } from "react";

export default function OpinionSection(): JSX.Element {
  return (
    <ReactLenis root>
      <main className="bg-black">
        <div className="wrapper">
          <section className=" relative text-white pt-20 w-full bg-slate-950 grid place-content-center px-4">
            <h1 className="text-orange-500 text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl px-4 sm:px-8 font-semibold text-center tracking-tight leading-[120%]">
              🏛️ Cao trào cách mạng 1930-1931
            </h1>
            <h3 className="text-xl sm:text-xl lg:text-xl 2xl:text-xl pt-10 px-40 font-semibold text-center tracking-tight leading-[120%]">
              Phong trào này diễn ra ngay sau khi Đảng Cộng sản Việt Nam ra đời, trong bối cảnh cuộc khủng hoảng kinh tế 1929-1933 và chính sách khủng bố trắng của thực dân Pháp sau khởi nghĩa Yên Bái.
            </h3>
          </section>
          <section className="text-white w-full bg-slate-950">
            <div className="flex flex-col lg:flex-row px-4 lg:px-16 max-w-7xl mx-auto">
              <div className="lg:sticky lg:top-0 lg:h-screen grid place-content-center w-full lg:w-1/2 py-8 lg:py-0">
                <div className="text-lg sm:text-xl lg:text-xl px-0 lg:px-8 font-medium text-left tracking-tight leading-relaxed">
                  <span className="text-orange-500 font-bold">📍 Diễn biến chính:</span>
                  <p className="mb-6">
                    <b>Tháng 1 - 4/1930:</b> Phong trào nổ ra liên tiếp với các cuộc bãi công của công nhân ở nhiều nơi như nhà máy xi măng Hải Phòng, các đồn điền Phú Riềng, Dầu Tiếng, nhà máy dệt Nam Định, và nhà máy diêm Bến Thủy. Phong trào nông dân cũng diễn ra ở Hà Nam, Thái Bình, Nghệ An, Hà Tĩnh.
                  </p>
                  <p className="mb-6">
                    <b>Ngày 1/5/1930:</b> Nhân dân kỷ niệm Ngày Quốc tế Lao động bằng các hình thức đấu tranh; riêng trong tháng 5 đã có 16 cuộc bãi công của công nhân và 34 cuộc biểu tình của nông dân.
                  </p>
                  <p className="mb-6">
                    <b>Tháng 6 - 8/1930:</b> Diễn ra 121 cuộc đấu tranh, nổi bật là cuộc tổng bãi công của công nhân khu công nghiệp Bến Thủy-Vinh (8/1930).
                  </p>
                  <p className="mb-6">
                    <b>Tháng 9/1930:</b> Phong trào phát triển đến đỉnh cao. Đặc biệt, cuộc biểu tình của nông dân Hưng Nguyên vào ngày 12/9/1930 đã bị máy bay Pháp ném bom, làm chết 171 người.
                  </p>
                </div>
              </div>

              <div className="grid gap-8 w-full lg:w-1/2 py-8 lg:py-0">
                {[
                  {
                    bg: "bg-red-500",
                    rotate: "rotate-6",
                    title: "✊🪧 Bãi công",
                    image: "bai-cong.jpg",
                  },
                  {
                    bg: "bg-green-400",
                    rotate: "-rotate-6",
                    title: "🎉 Kỉ niệm Ngày Quốc tế Lao động",
                    image: "quoc-te-lao-dong.jpg",
                  },
                  {
                    bg: "bg-blue-400",
                    rotate: "rotate-5",
                    title: "📝 Di tích Ngã ba Bến Thủy (thành phố Vinh)",
                    image: "di-tich.jpg",
                  },
                  // ... Thêm các phần tử khác tương tự
                ].map((item, index) => (
                  <figure
                    key={index}
                    className="lg:sticky lg:top-0 lg:h-screen grid place-content-center"
                  >
                    <article
                      className={`${item.bg} h-auto sm:h-[400px] w-full sm:w-[40rem] rounded-lg ${item.rotate} p-4 flex flex-col items-center gap-4`}
                    >
                      <h2 className="text-lg sm:text-xl font-semibold text-center flex items-center gap-2 whitespace-normal sm:whitespace-nowrap overflow-hidden text-ellipsis">
                        {item.title}
                      </h2>
                      <img
                        src={`/assets/image/${item.image}`}
                        alt={item.title}
                        className="h-[200px] sm:h-[300px] w-full sm:w-[550px] rounded-lg object-cover"
                      />
                    </article>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          <section className="text-white w-full bg-slate-950 flex items-center justify-center top-0 px-4 py-32">
            <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto items-center gap-8 lg:gap-12">
              <blockquote className="lg:w-[58.33%] text-lg sm:text-xl lg:text-xl 2xl:text-xl font-medium text-left leading-relaxed tracking-wide">
                <p className="mb-6">                  
                  <span className="text-orange-500 font-semibold">📌 Đỉnh cao (Xô viết Nghệ-Tĩnh)</span>
                </p>
                <p className="mb-6">
                  Trước sức mạnh của quần chúng, bộ máy chính quyền của đế quốc và tay sai ở nhiều nơi (thuộc Nghệ An và Hà Tĩnh) bị tan rã.
                </p>
                <p className="mb-6">
                  Các tổ chức Đảng ở cơ sở đã lãnh đạo các ban chấp hành nông hội (nông dân) đứng ra quản lý mọi mặt đời sống xã hội ở nông thôn. Đây là hình thức chính quyền cách mạng sơ khai, thực hiện dân chủ với quần chúng, được gọi là "Xô viết".
                </p>
              </blockquote>
              
              <div className="relative w-full lg:w-[41.67%] aspect-video rounded-lg overflow-hidden shadow-lg border-2 border-white">
                <iframe
                  src="https://www.youtube.com/embed/4oqWPiMGn68"
                  title="Xô Viết Nghệ Tĩnh - Đỉnh cao phong trào cách mạng Việt Nam 1930-1931 | Phim hoạt hình cách mạng 2024"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </section>

          <section className="text-white w-full bg-slate-950 flex items-center justify-center top-0 px-4 pb-32">
            <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto items-center gap-8 lg:gap-12">
              <blockquote className="lg:w-[58.33%] text-lg sm:text-xl lg:text-xl 2xl:text-xl font-medium text-left leading-relaxed tracking-wide">
                <p className="mb-6">                  
                  <span className="text-orange-500 font-semibold">📌 Ý nghĩa và kinh nghiệm</span>
                </p>
                <p className="mb-6">
                  <b>• Thất bại và Khủng bố:</b> Đến cuối năm 1930, thực dân Pháp tập trung mọi lực lượng đàn áp khốc liệt. Đến tháng 4/1931, toàn bộ Ban Chấp hành Trung ương Đảng bị bắt. Hàng ngàn chiến sĩ cộng sản bị bắt, giết, tù đày. Tổng bí thư Trần Phú hy sinh ngày 6/9/1931 với lời căn dặn "Hãy giữ vững chí khí chiến đấu!".
                </p>
                <p className="mb-6">
                  <b>• Ý nghĩa:</b> Phong trào đã khẳng định trong thực tế quyền lãnh đạo và năng lực lãnh đạo của giai cấp vô sản mà đại biểu là Đảng. Nó rèn luyện đội ngũ cán bộ, đảng viên và quần chúng yêu nước. Đặc biệt, Xô viết Nghệ Tĩnh đã mở đường cho thắng lợi về sau.
                </p>
                <p className="mb-6">
                  <b>• Khôi phục phong trào (1932-1935):</b> Trong bối cảnh bị khủng bố, các chi bộ nhà tù (Hỏa Lò, Khám Lớn, Côn Đảo) được thành lập để huấn luyện, bồi dưỡng đảng viên. Đầu năm 1934, Ban Chỉ huy ở ngoài của Đảng Cộng sản Đông Dương được thành lập. Đến tháng 3/1935, Đại hội đại biểu lần thứ I của Đảng họp tại Ma Cao (Trung Quốc), đánh dấu sự phục hồi hệ thống tổ chức của Đảng, tạo điều kiện để bước vào một cao trào cách mạng mới.
                </p>
              </blockquote>
              <div className="relative w-full lg:w-[41.67%] h-72">
                {/* Top-left image */}
                <img
                  src="/assets/image/nghe-tinh-4.jpg"
                  alt="Image 1"
                  className="absolute top-0 left-0 w-80 h-52 object-cover rounded-lg shadow-md border-2 border-white rotate-[8deg]"
                />

                {/* Top-right image */}
                <img
                  src="/assets/image/nghe-tinh-5.jpg"
                  alt="Image 2"
                  className="absolute top-0 right-0 w-48 h-64 object-cover rounded-lg shadow-md border-2 border-white rotate-[-2deg]"
                />

                {/* Bottom-center image */}
                <img
                  src="/assets/image/dau-tranh.jpg"
                  alt="Image 3"
                  className="absolute bottom-0 left-1/2 translate-x-1/5 w-60 h-36 object-cover rounded-lg shadow-md border-2 border-white rotate-[3deg]"
                />

                {/* Bottom-left image (new) */}
                <img
                  src="/assets/image/lanh-dao-dang.png"
                  alt="Image 4"
                  className="absolute bottom-4 left-0 w-48 h-40 object-cover rounded-lg shadow-md border-2 border-white rotate-[-5deg]"
                />
              </div>
            </div>
          </section>
        </div>        
      </main>
    </ReactLenis>
  );
}
