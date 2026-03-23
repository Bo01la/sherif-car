import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const testimonialsData = [
  {
    name: "محمد جعفر",
    comment:
      "شفافيه في التعامل سهوله في الاجرائات تعامل محترم بصراحه واسعار كويسه جدا مقارنه بالغير وعربيات بحالات جيده",
  },
  {
    name: "محمد مصطفى",
    comment:
      "ممتازين جدا الصراحه وعربيات حديثه والمعامله ممتازة واجراءات سهله غير معقدة",
  },
  {
    name: "أحمد حسام",
    comment:
      "تجربة ممتازة من أول الحجز لحد الاستلام، والعربية كانت نظيفة جدًا والتعامل كان راقي وواضح في كل التفاصيل.",
  },
  {
    name: "كريم سامح",
    comment:
      "من أحسن الأماكن اللي اتعاملت معاها في إيجار السيارات، التزام في المواعيد وأسعار مناسبة وخدمة محترمة جدًا.",
  },
  {
    name: "يوسف خالد",
    comment:
      "الإجراءات كانت سهلة وسريعة جدًا، والعربية حالتها ممتازة وده خلاني مطمن طول فترة الإيجار.",
  },
  {
    name: "محمود هشام",
    comment:
      "فريق محترم ومتعاون جدًا، والرد سريع على أي استفسار، والعربيات فعلًا حالتها كويسة وتستاهل التجربة.",
  },
];

const Testimonials = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.set(".testimonials-title", { autoAlpha: 0, yPercent: 10 });
      gsap.set(".testimonials-text", { autoAlpha: 0, yPercent: 10 });
      gsap.set(".testimonial-card", { autoAlpha: 0, y: 28, scale: 0.96 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#testimonials",
          start: "top 75%",
          toggleActions: "play none none none",
          invalidateOnRefresh: true,
        },
      });

      tl.to(".testimonials-title", {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.7,
        ease: "power2.out",
      })
        .to(
          ".testimonials-text",
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 0.7,
            ease: "power2.out",
          },
          "+=0.8",
        )
        .to(".testimonial-card", {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          ease: "power2.out",
          stagger: {
            amount: 1.5,
          },
        });
    },
    { scope: root },
  );

  return (
    <section
      id="testimonials"
      ref={root}
      className="min-h-screen pt-30 max-sm:pb-3.5 mx-[var(--mxMob)] md:mx-[var(--mxTap)] lg:mx-[var(--mxDesk)] xl:mx-auto xl:max-w-6xl"
    >
      <div className="flex flex-col items-center text-center">
        <h2 className="testimonials-title flex gap-1.5 font-[family-name:var(--font-local)] text-2xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-linear-to-r from-[#fb720994] via-[#ffe600d2] to-[#fb720994]">
          آراء
          <span className="text-white">العملاء</span>
        </h2>

        <p className="testimonials-text mt-5 max-w-2xl text-sm md:text-base lg:text-lg text-white/75 leading-7">
          شوف عملاءنا اللي جربونا بيقولوا إيه عن تجربتهم مع أفضل شركة إيجار
          سيارات
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="testimonial-card rounded-[20px] border border-[#fb72094d] bg-[#090909] p-5 md:p-6 min-h-[220px] flex flex-col justify-between shadow-[0_0_0_1px_rgba(251,114,9,0.06)]"
          >
            <div className="flex justify-end gap-1 text-[#f5c542] text-lg">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            <p className="mt-6 text-right text-sm md:text-base leading-7 text-white/80">
              {item.comment}
            </p>

            <p className="mt-8 text-right text-white/65 text-sm md:text-base">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
