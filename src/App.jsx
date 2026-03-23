import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

import Nav from "./assets/components/Nav.jsx";
import Hero from "./assets/components/Hero.jsx";
import Rent from "./assets/components/Rent.jsx";
import About from "./assets/components/About.jsx";
import Testimonials from "./assets/components/Testimonials.jsx";

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.1,
    });
  });
  return (
    <>
      <Nav />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Rent />
          <About />
          <Testimonials />
        </div>
      </div>

      {/* <div className="text-white relative z-10">
        <p className="font-[family-name:var(--font-local)] text-white">
          اليسش ااسص
        </p>
        <p className="text-white font-black text-2xl ">اليسش ااسص</p>
      </div> */}
    </>
  );
}

export default App;
