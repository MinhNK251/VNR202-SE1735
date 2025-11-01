"use client";

import ConclusionSection from "@/app/_components/conclusion";
import DevelopmentSection from "@/app/_components/development";
import LazyVideo from "@/app/_components/lazy-video";
import OpinionSection from "@/app/_components/opinion";
import { TimelineDemo } from "@/app/_components/timeline-2";
import WelcomeSection from "@/app/_components/welcome-section";
import LampDemo from "@/components/ui/lamp";
import { SiteHeader } from "@/components/ui/site-header";
import { JSX, useState } from "react";
import PlantLoader from "@/components/ui/plant-loader";
import ChatContainer from "@/components/ui/ChatContainer";
import { ChatProvider } from "@/context/ChatContext";
import QuizSection from "@/components/ui/QuizSection";
import AccessCount from "./_components/access-count";
export default function HorizontalScroll(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <div
        className={`grid min-h-screen place-items-center ${
          isLoading ? "block" : "hidden"
        }`}
      >
        <PlantLoader
          onLoadingComplete={() => {
            // Add a small delay before hiding the loader
            setTimeout(() => setIsLoading(false), 500);
          }}
          minimumLoadingTime={1500} // Set minimum loading time to 3 seconds
        />
      </div>
      <div className={`relative ${isLoading ? "hidden" : "block w-full"}`}>
        <SiteHeader />

        <main>
          <section
            id="welcome-header"
            className="h-[80vh] flex items-center justify-center bg-gradient-to-b from-indigo-950 via-black to-slate-900 relative overflow-hidden pt-20"
          >
            <LazyVideo
              src="/assets/videos/video.mp4"
              className="absolute top-0 left-0 w-full h-[70vh] object-cover z-0 mt-10 px-32"
            />
            <div className="container relative z-10 mx-auto px-4">
              <div className="text-center">
                <WelcomeSection />
              </div>
            </div>
          </section>

          <section id="giai-doan-1">
            <OpinionSection />
          </section>

          <section id="giai-doan-2" className="bg-gradient-to-t from-slate-950 via-indigo-900 to-black">
            <DevelopmentSection />          
            <div className="h-[20vh]">
              <LampDemo />
            </div>
            <TimelineDemo />
          </section>

          <section id="opinion" className="bg-white-300">
            {/* <HeroParallaxDemo /> */}
            <ConclusionSection />
          </section>

          <section id="chat" className="bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900">
            <section className="text-white w-full bg-slate-950 grid place-content-center px-4 py-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl px-4 sm:px-8 font-semibold text-center tracking-tight leading-[120%]">
                VNR202 AI Chatbot
              </h1>
            </section>
            <div className={`h-[90vh] w-full sm:px-[15%] sm:py-[5%] bg-slate-950`}>
              <ChatProvider>
                <ChatContainer />
              </ChatProvider>
            </div>
          </section>
          <QuizSection/>
          <section className="bg-slate-900 text-white py-16 px-6 lg:px-16">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-orange-400 mb-6">
                🌐 Nguyên tắc sử dụng AI trong dự án
              </h2>
              <p className="text-lg text-gray-300 mb-10">
                Việc ứng dụng trí tuệ nhân tạo (AI) trong quá trình thực hiện website tuân thủ các nguyên tắc sau nhằm đảm bảo minh bạch, trách nhiệm và liêm chính học thuật.
              </p>

              <div className="text-left space-y-6 bg-black/30 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                
                <div>
                  <h3 className="font-semibold text-xl text-blue-400 mb-2">1. Trách nhiệm</h3>
                  <p>
                    Tất cả thông tin do AI hỗ trợ được <b>đối chiếu với giáo trình Lịch sử Đảng Cộng sản Việt Nam (2021) từ trang 71 đến trang 83, nghị quyết, các văn bản chính thống và các tờ báo điện tử</b>; nhóm chịu trách nhiệm hoàn toàn về nội dung cuối cùng.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl text-blue-400 mb-2">2. Sáng tạo</h3>
                  <p>
                    AI chỉ đóng vai trò <b>hỗ trợ</b> trong việc tạo quiz, chatbot. <b>không thay thế toàn bộ</b> quá trình nghiên cứu và biên soạn của sinh viên.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center py-8 bg-gradient-to-t from-black via-indigo-950 to-slate-900">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold animate-gradient bg-gradient-to-r from-green-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Cảm ơn bạn vì đã ghé thăm web!
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mt-4">
              Chúng tôi trân trọng thời gian của bạn và hy vọng bạn thích trang web này.
            </p>
            <div className="flex justify-center mt-4">
              <svg
                className="w-12 h-12 text-red-500 animate-bounce"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
