import { useState } from "react";
import { scrollToSection } from "./utils/scrollToSection";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openHelper = () => setIsOpen(true);
  const closeHelper = () => setIsOpen(false);

  const handleNavClick = (target) => {
    scrollToSection(target);
    closeHelper();
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-[80] w-full bg-transparent mt-3">
        <nav className="flex justify-between px-[var(--mxMob)] md:px-[var(--mxTap)] lg:px-[var(--mxDesk)] xl:mx-auto xl:max-w-6xl xl:px-0">
          <img
            src="/pics/logo.png"
            alt="logo"
            width={72}
            className="cursor-pointer"
            onClick={() => handleNavClick("#hero")}
          />

          <div className="flex flex-col justify-center">
            <button
              className="flex flex-col gap-0.5 cursor-pointer"
              onClick={openHelper}
            >
              <div className="w-5 h-0.5 bg-linear-to-r from-[#fb720994] via-[#ffe600d2] to-[#fb720994] rounded-sm"></div>
              <div className="w-5 h-0.5 bg-linear-to-r from-[#fb720994] via-[#ffe600d2] to-[#fb720994] rounded-sm"></div>
              <div className="w-5 h-0.5 bg-linear-to-r from-[#fb720994] via-[#ffe600d2] to-[#fb720994] rounded-sm"></div>
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-[90] bg-black/10 backdrop-blur-[2px] transition-opacity duration-[1000ms] ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeHelper}
      >
        <div
          className={`fixed top-0 right-0 z-[99] h-screen w-[300px] px-2 bg-[#101313] transition-transform duration-[1000ms] ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="relative mt-10 ml-auto block h-6 w-6 cursor-pointer"
            onClick={closeHelper}
          >
            <span className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-linear-to-r from-[#fb720994] via-[#ffe600d2] to-[#fb720994] rounded-sm"></span>
            <span className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-linear-to-r from-[#fb720994] via-[#ffe600d2] to-[#fb720994] rounded-sm"></span>
          </button>

          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={() => handleNavClick("#hero")}
              className="text-right text-2xl bg-gradient-to-r from-white to-white bg-clip-text text-transparent cursor-pointer hover:bg-linear-to-r hover:from-[#fb720994] hover:via-[#ffe600d2] hover:to-[#fb720994]"
            >
              الرئيسية
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("#fleet")}
              className="text-right text-2xl bg-gradient-to-r from-white to-white bg-clip-text text-transparent cursor-pointer hover:bg-linear-to-r hover:from-[#fb720994] hover:via-[#ffe600d2] hover:to-[#fb720994]"
            >
              اسطول السيارات
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("#rent")}
              className="text-right text-2xl bg-gradient-to-r from-white to-white bg-clip-text text-transparent cursor-pointer hover:bg-linear-to-r hover:from-[#fb720994] hover:via-[#ffe600d2] hover:to-[#fb720994]"
            >
              خطوات الاستأجار
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("#about")}
              className="text-right text-2xl bg-gradient-to-r from-white to-white bg-clip-text text-transparent cursor-pointer hover:bg-linear-to-r hover:from-[#fb720994] hover:via-[#ffe600d2] hover:to-[#fb720994]"
            >
              من نحن
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("#testimonials")}
              className="text-right text-2xl bg-gradient-to-r from-white to-white bg-clip-text text-transparent cursor-pointer hover:bg-linear-to-r hover:from-[#fb720994] hover:via-[#ffe600d2] hover:to-[#fb720994]"
            >
              اراء العملاء
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
