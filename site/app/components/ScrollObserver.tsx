"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    // Select all elements marked for reveal
    const reveals = document.querySelectorAll(".reveal-on-scroll");

    if (!("IntersectionObserver" in window)) {
      // Fallback for older browsers
      reveals.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Optionally unobserve once revealed for performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
