"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { JSX, useRef } from "react";
import Image from "next/image";

const projects = [
  {
    title: "📅 Tháng 7/1936",
    description:
      "Hội nghị Ban Chấp hành Trung ương Đảng (họp tại Thượng Hải) xác định nhiệm vụ trước mắt là chống phát xít, chống chiến tranh đế quốc, chống phản động thuộc địa và tay sai, đòi tự do, dân chủ, cơm áo và hòa bình.",
    link: "/assets/image/return.jpg",
    color: "#5196fd",
  },
  {
    title: "🤝 Mặt trận",
    description:
      "Chủ trương thành lập “Mặt trận nhân dân phản đế rộng rãi”. Đến tháng 3/1938, tên gọi được đổi thành “Mặt trận dân chủ thống nhất”.",
    link: "/assets/image/huan-luyen-can-bo.jpg",
    color: "#8f89ff",
  },
  {
    title: "📣 Hình thức đấu tranh",
    description:
      "Đảng chủ trương chuyển từ bí mật, bất hợp pháp sang các hình thức công khai, nửa công khai, hợp pháp, nửa hợp pháp, kết hợp chặt chẽ với bí mật.",
    link: "/assets/image/hoi-nghi-6.jpg",
    color: "#4caf50",
  },
];

export default function DevelopmentSection(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className=" relative text-white min-h-[40vh] w-full bg-slate-950 grid place-content-center px-4">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

          <h1 className="text-orange-500 text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl px-4 sm:px-8 font-semibold text-center tracking-tight leading-[120%]">
            ☀️ Cao trào dân chủ 1936-1939
          </h1>
          <h3 className="text-xl sm:text-xl lg:text-xl 2xl:text-xl pt-10 px-4 sm:px-8 font-semibold text-center tracking-tight leading-[120%]">
            Phong trào này diễn ra trong bối cảnh chủ nghĩa phát xít xuất hiện và Đại hội VII Quốc tế Cộng sản (7/1935) chủ trương lập mặt trận chống phát xít. Đặc biệt, Mặt trận Nhân dân Pháp lên cầm quyền (1936), đã ban hành một số quyền tự do dân chủ ở thuộc địa, tạo điều kiện thuận lợi cho cuộc đấu tranh.
          </h3>
        </section>

        <section className="text-white w-full bg-slate-950">
          <h1
            className="sticky top-0 z-20 bg-slate-950 text-orange-500 text-4xl sm:text-4xl lg:text-4xl 2xl:text-4xl 
                      px-4 sm:px-8 pt-28 pb-4 font-semibold text-center tracking-tight leading-[120%]"
          >
            Chủ trương mới của Đảng
          </h1>

          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}
interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}
export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="min-h-screen flex items-center justify-center sticky top-0 px-4 py-8 lg:py-16"
    >
        <motion.div
          style={{
            backgroundColor: color,
            scale,
            top: `calc(-5vh + ${i * 25}px)`,
          }}
          className="flex flex-col relative -top-[25%] h-auto w-full sm:w-[80%] lg:w-[60%] rounded-md p-4 sm:p-6 lg:p-8 origin-top"
        >
          <p className="text-3xl sm:text-3xl text-center font-semibold text-black mb-4">
            {title}
          </p>

          <div className="flex flex-col lg:flex-row h-full gap-4 lg:gap-6">
            <div className="w-full lg:w-[50%] relative flex flex-col justify-between">
              <p className="text-base sm:text-2xl">{description}</p>
            </div>

            <div className="relative lg:w-[360px] md:w-[320px] sm:w-[300px] aspect-[5/3] rounded-lg overflow-hidden ms-3">
              <motion.div className="w-full h-full" style={{ scale: imageScale }}>
                <Image
                  fill
                  src={url || "/placeholder.svg"}
                  alt={title}
                  className="object-cover" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
  );
};
