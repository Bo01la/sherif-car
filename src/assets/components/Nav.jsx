import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openHelper = () => setIsOpen(true);
  const closeHelper = () => setIsOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-[80] flex justify-between mt-3 mx-[var(--mxMob)] md:mx-[var(--mxTap)] lg:mx-[var(--mxDesk)] xl:mx-auto xl:max-w-6xl">
        <img src="/pics/logo.png" alt="logo" width={72} />

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

      <div
        className={`fixed inset-0 z-[90] bg-black/10 backdrop-blur-[2px] transition-opacity duration-[1000ms] ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
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
            className="relative mt-10 ml-auto block h-6 w-6"
            onClick={closeHelper}
          >
            <span className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-linear-to-r from-[#fb720994] via-[#ffe600d2] to-[#fb720994] rounded-sm"></span>
            <span className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-linear-to-r from-[#fb720994] via-[#ffe600d2] to-[#fb720994] rounded-sm"></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
