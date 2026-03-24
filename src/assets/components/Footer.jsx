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

          <div className="flex flex-col items-center lg:items-end gap-5">
            <a
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.bing.com%2Fmaps%2Fdefault.aspx%3Fv%3D2%26pc%3DFACEBK%26mid%3D8100%26where1%3D18%2520%252C%25D8%25B7%2520%25D8%25B4%25D8%25A7%25D8%25B1%25D8%25B9%2520%25D9%2586%25D8%25A7%25D8%25AF%25D9%258A%2520%25D8%25AD%25D8%25AF%25D8%25A7%25D8%25A6%25D9%2582%2520%25D8%25A7%25D9%2584%25D8%25A7%25D9%2587%25D8%25B1%25D8%25A7%25D9%2585%2520kmw%2520auto%252C%25206%2520October%2520City%252C%2520Egypt%26FORM%3DFBKPL1%26mkt%3Den-US%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBEwczVTVVA1cG9JQTlrTW5zdHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7MzVpfMti0DuE5QA0JXzOCGi1hmMHShHQKClIqrgyAALJggVSAf7HBxTkpHQ_aem_2Y1lXEb9DqedVIYbZZ8Gng&h=AT61njnb3i8_m_TUk4oAy-f0wlMTw_Ky48kbYwH6CaRQ-KQmKcXgN5f_E-uyYAszVOGnnBQzur_x1VdV225E45q664B5Gza5lZEdlTTKNm_SN75PY3nQPgtoXKYkVY0mhDor"
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-2xl"
            >
              <img
                src="/pics/location.png"
                alt="موقع شرف لتأجير السيارات"
                className="w-full max-w-[250px] rounded-2xl object-cover"
              />
            </a>

            <div className="flex flex-col items-center lg:items-end gap-3 text-white">
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.bing.com%2Fmaps%2Fdefault.aspx%3Fv%3D2%26pc%3DFACEBK%26mid%3D8100%26where1%3D18%2520%252C%25D8%25B7%2520%25D8%25B4%25D8%25A7%25D8%25B1%25D8%25B9%2520%25D9%2586%25D8%25A7%25D8%25AF%25D9%258A%2520%25D8%25AD%25D8%25AF%25D8%25A7%25D8%25A6%25D9%2582%2520%25D8%25A7%25D9%2584%25D8%25A7%25D9%2587%25D8%25B1%25D8%25A7%25D9%2585%2520kmw%2520auto%252C%25206%2520October%2520City%252C%2520Egypt%26FORM%3DFBKPL1%26mkt%3Den-US%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBEwczVTVVA1cG9JQTlrTW5zdHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7MzVpfMti0DuE5QA0JXzOCGi1hmMHShHQKClIqrgyAALJggVSAf7HBxTkpHQ_aem_2Y1lXEb9DqedVIYbZZ8Gng&h=AT61njnb3i8_m_TUk4oAy-f0wlMTw_Ky48kbYwH6CaRQ-KQmKcXgN5f_E-uyYAszVOGnnBQzur_x1VdV225E45q664B5Gza5lZEdlTTKNm_SN75PY3nQPgtoXKYkVY0mhDor"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm md:text-base text-white/85 transition hover:text-white"
              >
                <img
                  src="/pics/home-icon.svg"
                  alt=""
                  className="h-5 w-5 object-contain"
                />
                <span>18 ط حدايق الاهرام أمام بوابة النادي</span>
              </a>

              <a
                href="tel:01000668064"
                className="flex items-center gap-2 text-sm md:text-base text-white/85 transition hover:text-white"
              >
                <img
                  src="/pics/phone.svg"
                  alt=""
                  className="h-5 w-5 object-contain"
                />
                <span>01000668064</span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/201000668064"
                target="_blank"
                rel="noreferrer"
                aria-label="واتساب"
                className="transition hover:scale-105"
              >
                <img
                  src="/pics/whatsapp.svg"
                  alt="واتساب"
                  className="h-10 w-10 object-contain"
                />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61586187812611"
                target="_blank"
                rel="noreferrer"
                aria-label="فيسبوك"
                className="transition hover:scale-105"
              >
                <img
                  src="/pics/facebook.svg"
                  alt="فيسبوك"
                  className="h-10 w-10 object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
