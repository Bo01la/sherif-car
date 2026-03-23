import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const rentSteps = [
  "قلب في أسطولنا واختار أفضل عربية للإيجار تناسب احتياجك وميزانيتك",
  "جهز ورقك البسيط (بطاقتك ورخصتك)، وإحنا هنخلص كل إجراءات تأجير السيارة في دقايق",
  "ادفع جزء بسيط كجدية حجز عشان نأكدلك وتستلم عربيتك بأفضل أسعار إيجار السيارات",
  "خد المفتاح واستمتع بتجربة قيادة مريحة وآمنة",
];

const Rent = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      gsap.set(".rent-step", { autoAlpha: 0.2, y: 30 });
      gsap.set(".rent-progress-fill", {
        scaleY: 0,
        transformOrigin: "top center",
      });

      mm.add("(min-width: 820px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#rent",
            start: "top top",
            end: "+=2200",
            scrub: 1,
            pin: "#rent-sticky",
            invalidateOnRefresh: true,
          },
        });

        tl.to(
          ".rent-progress-fill",
          { scaleY: 1, ease: "none", duration: 1 },
          0,
        )
          .to(".step-1", { autoAlpha: 1, y: 0, duration: 0.22 }, 0.08)
          .to(".step-1", { autoAlpha: 0.45, duration: 0.18 }, 0.26)
          .to(".step-2", { autoAlpha: 1, y: 0, duration: 0.22 }, 0.32)
          .to(".step-2", { autoAlpha: 0.45, duration: 0.18 }, 0.5)
          .to(".step-3", { autoAlpha: 1, y: 0, duration: 0.22 }, 0.56)
          .to(".step-3", { autoAlpha: 0.45, duration: 0.18 }, 0.74)
          .to(".step-4", { autoAlpha: 1, y: 0, duration: 0.22 }, 0.8);
      });

      mm.add("(max-width: 819px)", () => {
        gsap.utils.toArray(".rent-step").forEach((step, i) => {
          gsap.to(step, {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
              end: "top 60%",
              scrub: 1,
              invalidateOnRefresh: true,
            },
            delay: i * 0.04,
          });
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      id="rent"
      ref={root}
      className="relative min-h-screen md:min-h-[300vh] overflow-hidden"
    >
      <video
        autoPlay
        muted
        playsInline
        loop
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/Videos/howToRent.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-[1] bg-black/65" />

      <div
        id="rent-sticky"
        className="relative z-10 min-h-screen flex items-center"
      >
        <div className="w-full mx-[var(--mxMob)] md:mx-[var(--mxTap)] lg:mx-[var(--mxDesk)] xl:mx-auto xl:max-w-6xl py-16 md:py-24">
          <div className="grid grid-cols-1 min-[820px]:grid-cols-[1.15fr_0.85fr] gap-10 min-[820px]:gap-14 items-start">
            <div className="order-2 min-[820px]:order-1">
              <div className="rounded-[24px] border border-white/10 bg-white/8 backdrop-blur-md p-5 md:p-7 lg:p-8">
                <div className="hidden min-[820px]:grid grid-cols-[6px_1fr] gap-5 items-stretch">
                  <div className="relative rounded-full bg-white/10 overflow-hidden">
                    <div className="rent-progress-fill absolute inset-x-0 top-0 bottom-0 rounded-full bg-linear-to-b from-[#fb720994] via-[#ffe600d2] to-[#fb720994]" />
                  </div>

                  <div className="flex flex-col gap-5">
                    {rentSteps.map((step, index) => (
                      <div
                        key={index}
                        className={`rent-step step-${index + 1} rounded-2xl border border-white/10 bg-black/20 p-4 lg:p-5`}
                      >
                        <p className="text-right text-white text-sm md:text-base lg:text-lg leading-7">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex min-[820px]:hidden flex-col gap-4">
                  {rentSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`rent-step step-${index + 1} rounded-2xl border border-white/10 bg-black/20 p-4`}
                    >
                      <p className="text-right text-white text-sm leading-7">
                        <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs text-white">
                          {index + 1}
                        </span>
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 min-[820px]:order-2 flex justify-end">
              <div className="max-w-md text-right">
                <h2 className="flex justify-end gap-1.5 font-[family-name:var(--font-local)] text-2xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-linear-to-r from-[#fb720994] via-[#ffe600d2] to-[#fb720994]">
                  خطوات
                  <span className="text-white">الاستئجار</span>
                </h2>

                <p className="mt-4 text-sm md:text-base lg:text-lg text-white/75 leading-7">
                  خطوات بسيطة وسريعة عشان تستلم عربيتك بأمان، من أول الاختيار
                  لحد الاستلام.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rent;
