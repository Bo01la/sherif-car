import React from "react";
import { scrollToSection } from "./utils/scrollToSection";

const Footer = () => {
  return (
    <footer className="bg-[#000000]">
      <div className="mx-[var(--mxMob)] md:mx-[var(--mxTap)] lg:mx-[var(--mxDesk)] xl:mx-auto xl:max-w-6xl py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-[1.05fr_1fr_1.1fr] items-center">
          <div className="flex justify-center lg:justify-start">
            <img
              src="/pics/logo.png"
              alt="شرف لتأجير السيارات"
              className="w-[150px] sm:w-[180px] md:w-[210px] lg:w-[250px] object-contain cursor-pointer"
              onClick={() => scrollToSection("#hero")}
            />
          </div>

          <div className="flex flex-col items-center gap-4 text-center">
            <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-white/70 text-sm md:text-base">
              <button
                type="button"
                onClick={() => scrollToSection("#hero")}
                className="transition bg-gradient-to-r from-white to-white bg-clip-text text-transparent cursor-pointer hover:bg-linear-to-r hover:from-[#fb720994] hover:via-[#ffe600d2] hover:to-[#fb720994]"
              >
                الرئيسية
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("#fleet")}
                className="transition bg-gradient-to-r from-white to-white bg-clip-text text-transparent cursor-pointer hover:bg-linear-to-r hover:from-[#fb720994] hover:via-[#ffe600d2] hover:to-[#fb720994]"
              >
                اسطول السيارات
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("#rent")}
                className="transition bg-gradient-to-r from-white to-white bg-clip-text text-transparent cursor-pointer hover:bg-linear-to-r hover:from-[#fb720994] hover:via-[#ffe600d2] hover:to-[#fb720994]"
              >
                خطوات الاستئجار
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("#about")}
                className="transition bg-gradient-to-r from-white to-white bg-clip-text text-transparent cursor-pointer hover:bg-linear-to-r hover:from-[#fb720994] hover:via-[#ffe600d2] hover:to-[#fb720994]"
              >
                من نحن
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("#testimonials")}
                className="transition bg-gradient-to-r from-white to-white bg-clip-text text-transparent cursor-pointer hover:bg-linear-to-r hover:from-[#fb720994] hover:via-[#ffe600d2] hover:to-[#fb720994]"
              >
                آراء العملاء
              </button>
            </nav>
          </div>

          {/* باقي الفوتر زي ما هو */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
