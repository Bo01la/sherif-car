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
        <div className="relative z-10 flex justify-center h-[50dvh]">
          <div className="flex flex-col"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
