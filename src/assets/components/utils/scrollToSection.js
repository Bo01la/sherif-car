// src/assets/utils/scrollToSection.js
import { ScrollSmoother } from "gsap/ScrollSmoother";

export const scrollToSection = (target) => {
  const smoother = ScrollSmoother.get();

  if (smoother) {
    smoother.scrollTo(target, true, "top 90px");
    return;
  }

  document.querySelector(target)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
