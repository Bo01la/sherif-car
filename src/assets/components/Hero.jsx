const Hero = () => {
  return (
    <section id="hero" className="relative">
      <div id="content" className="  relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 z-0 h-screen w-full object-contain lg:object-cover"
        >
          <source src="/Videos/heroVideo.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex justify-center mt-[40%] lg:mt-[20%] xl:mt-[10%] mx-[var(--mxMob)] md:mx-[var(--mxTap)] lg:mx-[var(--mxDesk)] xl:mx-auto xl:max-w-6xl">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="flex flex-col gap-2 justify-center items-center">
              <h1 className="flex gap-1.5 font-[family-name:var(--font-local)] text-2xl md:text-5xl lg:text-6xl bg-white bg-clip-text text-transparent">
                في مصر
                <span className="bg-clip-text text-transparent bg-linear-to-r from-[#fb720994] via-[#ffe600d2] to-[#fb720994]">
                  تأجير سيارات
                </span>
                أفضل مكتب
              </h1>
              <p className="text-white ">
                بتدور على إيجار سيارات مريحة ومضمونة؟ اختار من أسطولنا أحسن
                سيارات للإيجار بدون سائق في القاهرة، بأسهل الإجراءات وأحسن
                الأسعار. طريقك دايماً أسهل معانا!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
