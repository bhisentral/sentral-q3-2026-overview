"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));

    // Reveal anything already on/near screen immediately — covers loading
    // directly on a #hash URL and avoids the "blank until you scroll"
    // failure mode threshold-based observers hit on tall sections.
    const revealIfNear = (el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 1.4 && r.bottom > -400) {
        el.classList.add("visible");
        return true;
      }
      return false;
    };

    const pending = els.filter((el) => !revealIfNear(el));

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );
    pending.forEach((el) => io.observe(el));

    // In-page nav (#section) clicks fire hashchange even without reload —
    // force the target section's content visible instantly rather than
    // waiting on scroll + observer timing.
    const revealTarget = () => {
      if (!location.hash) return;
      const target = document.querySelector(location.hash);
      if (!target) return;
      target.classList.add("visible");
      target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    };
    revealTarget();
    window.addEventListener("hashchange", revealTarget);

    return () => {
      io.disconnect();
      window.removeEventListener("hashchange", revealTarget);
    };
  }, []);

  return null;
}
