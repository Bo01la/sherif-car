import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { fleetCars } from "./fleetCars";

const FleetCarousel = ({ slides = fleetCars }) => {
  const rootRef = useRef(null);
  const activeImageRef = useRef(null);
  const incomingImageRef = useRef(null);
  const textRef = useRef(null);
  const isAnimating = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [incomingIndex, setIncomingIndex] = useState(null);

  useGSAP(
    () => {
      gsap.set(activeImageRef.current, {
        autoAlpha: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
      });

      gsap.set(textRef.current, {
        autoAlpha: 1,
        y: 0,
      });
    },
    { scope: rootRef },
  );

  const { contextSafe } = useGSAP({ scope: rootRef });

  const changeSlide = contextSafe((direction) => {
    if (isAnimating.current || slides.length <= 1) return;

    const nextIndex = (activeIndex + direction + slides.length) % slides.length;
    isAnimating.current = true;
    setIncomingIndex(nextIndex);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const incomingEl = incomingImageRef.current;
        const activeEl = activeImageRef.current;
        const textEl = textRef.current;

        if (!incomingEl || !activeEl || !textEl) {
          isAnimating.current = false;
          return;
        }

        gsap.set(incomingEl, {
          autoAlpha: 0,
          x: direction > 0 ? 140 : -140,
          rotate: direction > 0 ? 8 : -8,
          scale: 0.92,
        });

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          onComplete: () => {
            setActiveIndex(nextIndex);
            setIncomingIndex(null);

            requestAnimationFrame(() => {
              gsap.set(activeImageRef.current, {
                autoAlpha: 1,
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
              });

              gsap.fromTo(
                textRef.current,
                { autoAlpha: 0, y: 18 },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.35,
                  ease: "power2.out",
                  onComplete: () => {
                    isAnimating.current = false;
                  },
                },
              );
            });
          },
        });

        tl.to(
          textEl,
          {
            autoAlpha: 0,
            y: -12,
            duration: 0.22,
            ease: "power2.out",
          },
          0,
        )
          .to(
            activeEl,
            {
              autoAlpha: 0,
              x: direction > 0 ? -140 : 140,
              rotate: direction > 0 ? -8 : 8,
              scale: 0.92,
              duration: 0.42,
            },
            0,
          )
          .to(
            incomingEl,
            {
              autoAlpha: 1,
              x: 0,
              rotate: 0,
              scale: 1,
              duration: 0.52,
            },
            0.08,
          );
      });
    });
  });

  const activeSlide = slides[activeIndex];

  return (
    <section ref={rootRef} id="fleet" className="mt-10 md:mt-14 lg:mt-16 w-full pb-3.5">
      <div className="w-full">
        <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px]">
          <button
            type="button"
            aria-label="Previous car"
            onClick={() => changeSlide(-1)}
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 md:h-13 md:w-13 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:scale-105 active:scale-95"
          >
            <span className="text-xl md:text-2xl">←</span>
          </button>

          <button
            type="button"
            aria-label="Next car"
            onClick={() => changeSlide(1)}
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 md:h-13 md:w-13 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:scale-105 active:scale-95"
          >
            <span className="text-xl md:text-2xl">→</span>
          </button>

          <div className="relative h-[240px] sm:h-[290px] md:h-[360px] lg:h-[430px] xl:h-[500px]">
            <img
              ref={activeImageRef}
              src={activeSlide.image}
              alt={activeSlide.title}
              className="absolute inset-0 h-full w-full object-contain select-none pointer-events-none"
              draggable={false}
            />

            {incomingIndex !== null && (
              <img
                ref={incomingImageRef}
                src={slides[incomingIndex].image}
                alt={slides[incomingIndex].title}
                className="absolute inset-0 h-full w-full object-contain select-none pointer-events-none opacity-0"
                draggable={false}
              />
            )}
          </div>
        </div>

        <div
          ref={textRef}
          dir="rtl"
          className="mt-6 md:mt-8 grid grid-cols-1 gap-5 md:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] md:gap-8 items-start"
        >
          <div className="text-right">
            <span className="inline-block rounded-full bg-[#efe7d1] px-3 py-1 text-xs md:text-sm text-[#090909]/80">
              {activeSlide.category}
            </span>

            <h3 className="mt-3 text-xl md:text-3xl lg:text-4xl leading-tight font-bold text-[#090909]">
              {activeSlide.title}
            </h3>
          </div>

          <div className="hidden md:block h-full w-px bg-black/10" />

          <div className="text-right">
            <p className="text-sm md:text-base lg:text-lg leading-7 text-[#090909]/80">
              {activeSlide.description}
            </p>

            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://wa.me/201000668064?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%86%D8%A7%20%D9%85%D9%87%D8%AA%D9%85%20%D8%A8%D8%AD%D8%AC%D8%B2%20%D8%B3%D9%8A%D8%A7%D8%B1%D8%A9",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              className="mt-4 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm md:text-base text-white bg-linear-to-r from-[#fb720994] via-[#ffe600d2] to-[#fb720994] [background-size:200%_auto] bg-[position:0%_center] hover:bg-[position:100%_center] transition-all duration-1000 ease-in-out"
            >
              {activeSlide.cta}
              <span>←</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetCarousel;
