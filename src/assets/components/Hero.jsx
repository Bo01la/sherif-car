import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FleetCarousel from "../components/carusell/FleetCarousel";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 3 });
    tl.to("h1", { opacity: 1, y: 0, duration: 0.7, ease: "power1.out" })
      .to("p", { opacity: 1, y: 0, duration: 0.7, ease: "power1.out" })
      .to(
        "button",
        { opacity: 1, y: 0, duration: 0.6, ease: "power1.out" },
        "-=0.5",
      );

    ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      endTrigger: "#fleet",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      invalidateOnRefresh: true,
    });

    gsap.to("#fleet-wrapper", {
      borderRadius: 0,
      scrollTrigger: {
        trigger: "#fleet",
        start: "top 95%",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  });

  return (
    <section id="hero-fleet-container">
      <div id="hero" className="sticky bg-black h-screen top-0 z-0">
        <div id="content" className="relative h-full overflow-hidden">
          <video
            autoPlay
            muted
            playsInline
            className="absolute inset-0 z-0 h-screen w-full object-contain lg:object-cover"
          >
            <source src="/Videos/heroVideo.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 flex justify-center mt-[40%] lg:mt-[20%] xl:mt-[10%] mx-[var(--mxMob)] md:mx-[var(--mxTap)] lg:mx-[var(--mxDesk)] xl:mx-auto xl:max-w-6xl">
            <div
              id="text-container"
              className="flex flex-col justify-center items-center gap-6 text-center"
            >
              <div className="flex flex-col gap-2 justify-center items-center">
                <h1 className="opacity-0 translate-y-10 flex gap-1.5 font-[family-name:var(--font-local)] text-2xl md:text-5xl lg:text-6xl bg-white bg-clip-text text-transparent">
                  في مصر
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-[#fb720994] via-[#ffe600d2] to-[#fb720994]">
                    تأجير سيارات
                  </span>
                  أفضل مكتب
                </h1>
                <p className="opacity-0 translate-y-10 text-white xl:max-w-lg">
                  بتدور على إيجار سيارات مريحة ومضمونة؟ اختار من أسطولنا أحسن
                  سيارات للإيجار بدون سائق في القاهرة، بأسهل الإجراءات وأحسن
                  الأسعار. طريقك دايماً أسهل معانا
                </p>
              </div>
              <button className="opacity-0 translate-y-10 px-4 py-1.5 rounded-lg text-white bg-linear-to-r from-[#fb720994] via-[#ffe600d2] to-[#fb720994] [background-size:200%_auto] bg-[position:0%_center] hover:bg-[position:100%_center] transition-all duration-1000 ease-in-out">
                اتصل بنا
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="fleet" className="relative z-10">
        <div
          id="fleet-wrapper"
          className="bg-[var(--bgWhitw)] overflow-hidden rounded-t-[12%] xl:rounded-t-[15%]"
        >
          <div
            id="fleet-content"
            className="min-h-screen pt-30 mx-[var(--mxMob)] md:mx-[var(--mxTap)] lg:mx-[var(--mxDesk)] xl:mx-auto xl:max-w-6xl "
          >
            <div className="flex flex-col items-end gap-4">
              <h1 className="flex gap-1.5 font-[family-name:var(--font-local)] text-1xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-linear-to-r from-[#fb720994] via-[#ffe600d2] to-[#fb720994]">
                سياراتنا
                <span className="text-[#090909]">أسطول</span>
              </h1>
              <p className="xl:max-w-lg text-right">
                تصفح تشكيلتنا المتنوعة واعرف أسعار إيجار السيارات واختار العربية
                اللي تليق بيك وتريحك في السواقة. بنوفرلك فئات تناسب كل
                الميزانيات.
              </p>
            </div>
            <FleetCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
