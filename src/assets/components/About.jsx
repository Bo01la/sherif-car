import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const About = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 820px)", () => {
        gsap.set(".about-title", { autoAlpha: 0, yPercent: 10 });
        gsap.set(".about-text", { autoAlpha: 0, yPercent: 10 });
        gsap.set(".about-btn", { autoAlpha: 0, yPercent: 10 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#about",
            start: "top center",
            end: "top top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(
          ".about-image-panel",
          {
            width: "50%",
            xPercent: -50,
            borderRadius: "28px",
          },
          {
            width: "100%",
            xPercent: -50,
            borderRadius: "0px",
            ease: "none",
            duration: 1,
          },
        )

          .to(
            ".about-overlay",
            {
              backgroundColor: "rgba(0,0,0,0.58)",
              duration: 0.2,
            },
            0.72,
          )
          .to(
            ".about-title",
            {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.22,
              ease: "power2.out",
            },
            0.9,
          )
          .to(
            ".about-text",
            {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.22,
              ease: "power2.out",
            },
            1.02,
          )
          .to(
            ".about-btn",
            {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.22,
              ease: "power2.out",
            },
            1.14,
          );
      });

      mm.add("(max-width: 819px)", () => {
        gsap.set(".about-title", { autoAlpha: 0, yPercent: 10 });
        gsap.set(".about-text", { autoAlpha: 0, yPercent: 10 });
        gsap.set(".about-btn", { autoAlpha: 0, yPercent: 10 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#about",
            start: "top 75%",
            end: "top 15%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(
          ".about-image-panel",
          {
            scale: 1,
            borderRadius: "24px",
          },
          {
            scale: 1.08,
            borderRadius: "0px",
            ease: "none",
            duration: 1,
          },
        )
          .to(
            ".about-overlay",
            {
              backgroundColor: "rgba(0,0,0,0.6)",
              duration: 0.2,
            },
            0.72,
          )
          .to(
            ".about-title",
            {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.22,
              ease: "power2.out",
            },
            0.88,
          )
          .to(
            ".about-text",
            {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.22,
              ease: "power2.out",
            },
            1.0,
          )
          .to(
            ".about-btn",
            {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.22,
              ease: "power2.out",
            },
            1.12,
          );
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      id="about"
      ref={root}
      className="relative h-[110vh] md:h-[120vh] overflow-hidden bg-black"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="about-image-panel absolute inset-y-0 left-1/2 w-full min-[820px]:w-1/2 -translate-x-1/2 overflow-hidden">
          <img
            src="/pics/about.jpg"
            alt="عن شرف لتأجير السيارات"
            className="h-full w-full object-cover"
          />
          <div className="about-overlay absolute inset-0 bg-black/35" />
        </div>

        <div className="relative z-10 min-h-screen mx-[var(--mxMob)] md:mx-[var(--mxTap)] lg:mx-[var(--mxDesk)] xl:mx-auto xl:max-w-6xl pt-30 flex items-center">
          <div className="w-full flex justify-end">
            <div className="max-w-xl text-right">
              <h2 className="about-title flex justify-end gap-1.5 font-[family-name:var(--font-local)] text-2xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-linear-to-r from-[#fb720994] via-[#ffe600d2] to-[#fb720994]">
                نحن
                <span className="text-white">من</span>
              </h2>

              <p className="about-text mt-5 text-sm md:text-base lg:text-lg leading-7 text-white/90">
                إحنا في "شرف لتأجير السيارات" بنقدملك أكتر من مجرد عربية،
                بنوفرلك راحة بال وتجربة سواقة ممتعة. هدفنا نسهل عليك مشاويرك
                بأسطول عربيات حديث، أسعار واضحة بدون مفاجآت، وخدمة عملاء في ظهرك
                على طول الطريق. ثقتك هي أهم مكسب لينا
              </p>

              <a
                href="https://wa.me/201000668064"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="واتساب"
                className="about-btn inline-block mt-6 px-4 py-1.5 rounded-lg text-white bg-linear-to-r from-[#fb720994] via-[#ffe600d2] to-[#fb720994] [background-size:200%_auto] bg-[position:0%_center] hover:bg-[position:100%_center] transition-all duration-1000 ease-in-out"
              >
                اتصل بنا
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
