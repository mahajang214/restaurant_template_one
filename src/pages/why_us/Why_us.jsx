import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Why_us() {
  const background_container_ref = useRef(null);
  const textRef2 = useRef(null);
  const linesRef = useRef([]);
  const textRefs = useRef([]);
  const mobileTextRefs = useRef([]);

  const texts = [
    "Authentic flavors crafted by expert chefs",
    "Farm-fresh ingredients, always",
    "Aromatic dishes that spark memories",
    "Warm ambience, unforgettable dining",
    "Serving happiness on every plate",
    "Love and tradition in every bite",
  ];

  useGSAP(() => {
    // Desktop headline animation
    const text = textRef2.current;

    const mySplitText = new SplitText(text, {
      type: "chars,words",
      charsClass: "char",
    });

    textRef2.current = mySplitText;
    const chars = mySplitText.chars;

    gsap.from(chars, {
      scale: 0,
      y: 150,
      stagger: 0.05,
      ease: "power3.out",
      scrollTrigger: {
        trigger: chars,
        start: "top 100%",
        end: "top 70%",
        scrub: true,
        markers: false,
      },
    });

    // Guitar string spring effect on line hover (desktop)
    linesRef.current.forEach((line, i) => {
      const text = textRefs.current[i];
      gsap.set(text, { opacity: 0, y: 20 });

      // Remove previous listeners if any
      line.onmouseenter = null;
      line.onmousemove = null;
      line.onmouseleave = null;

      // Mouse move for "pluck" effect
      line.addEventListener("mousemove", (e) => {
        const rect = line.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = (x / rect.width) * 2 - 1; // -1 (left) to 1 (right)
        // Pluck the line at the mouse position
        gsap.to(line, {
          y: -18 * (1 - Math.abs(percent)), // more pluck at center
          x: 0,
          scaleX: 1.05 + 0.1 * Math.abs(percent),
          transformOrigin: "center center",
          duration: 0.12,
          overwrite: "auto",
          ease: "power2.out",
        });
      });

      line.addEventListener("mouseenter", () => {
        // Show text and do initial pluck
        gsap.to(text, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        });
        gsap.to(line, {
          keyframes: [
            { y: -18, scaleX: 1.15, duration: 0.12, ease: "power2.out" },
            { y: 10, scaleX: 0.95, duration: 0.10, ease: "power2.in" },
            { y: -8, scaleX: 1.08, duration: 0.09, ease: "power2.out" },
            { y: 4, scaleX: 0.98, duration: 0.08, ease: "power2.in" },
            { y: 0, scaleX: 1, duration: 0.18, ease: "elastic.out(1,0.4)" },
          ],
          x: 0,
          transformOrigin: "center center",
          overwrite: "auto",
        });
      });

      line.addEventListener("mouseleave", () => {
        // Reset line and hide text
        gsap.to(line, {
          y: 0,
          x: 0,
          scaleX: 1,
          duration: 0.3,
          ease: "elastic.out(1,0.4)",
        });
        gsap.to(text, {
          opacity: 0,
          y: 20,
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
    });

    // Mobile text animation: fade up and stagger in when scrolled into view
    if (window.matchMedia("(max-width: 640px)").matches) {
      mobileTextRefs.current.forEach((el, i) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: i * 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                scrub:true,
                toggleActions: "play none none none",
                once: false,
              },
            }
          );
        }
      });
    }
  });

  return (
    <section
      ref={background_container_ref}
      className="relative bg-[#021526] text-white w-full   py-16"
    >
      <h1
        ref={textRef2}
        className="text-4xl whyToChooseUs sm:text-5xl text-zinc-200 md:text-6xl lg:text-7xl xl:text-8xl text-center"
      >
        Why to choose us ?
      </h1>

      {/* desktop */}
      <div className="hidden sm:flex flex-col  space-y-12 text-zinc-300 items-center mt-32 w-full">
        {texts.map((text, index) => (
          <div key={index} className="relative w-full  overflow-visible">
            <div
              ref={(el) => (linesRef.current[index] = el)}
              className="w-full max-w-full h-[4px] bg-zinc-300 cursor-pointer"
              style={{ transformOrigin: "center" }}
            ></div>

            <p
              ref={(el) => (textRefs.current[index] = el)}
              className="absolute left-1/2 top-[-2.5rem] transform -translate-x-1/2 text-xl md:text-2xl font-semibold opacity-0 pointer-events-none"
            >
              {text}
            </p>
          </div>
        ))}
      </div>
      {/* mobile */}
      <div className="flex flex-col sm:hidden text-zinc-200 space-y-4 items-center mt-8 w-full px-4">
        {texts.map((text, index) => (
          <div
            key={index}
            ref={el => (mobileTextRefs.current[index] = el)}
            className="w-full max-w-md mx-auto bg-white/10 rounded-lg py-2 px-6 text-base font-semibold text-center shadow-md"
            style={{ opacity: 0, transform: "translateY(40px)" }}
          >
            {text}
          </div>
        ))}
      </div>
    </section>
  );
}

// function Why_us() {
//   const background_container_ref = useRef(null);
//   const textRef2 = useRef(null);
//   const linesRef = useRef([]);
//   const textRefs = useRef([]);

//   const texts = [
//     "Authentic flavors crafted by expert chefs",
//     "Farm-fresh ingredients, always",
//     "Aromatic dishes that spark memories",
//     "Warm ambience, unforgettable dining",
//     "Serving happiness on every plate",
//     "Love and tradition in every bite",
//   ];

//   useGSAP(() => {
//     const text = textRef2.current;

//     const mySplitText = new SplitText(text, {
//       type: "chars,words",
//       charsClass: "char",
//     });

//     textRef2.current = mySplitText; // Save for cleanup
//     const chars = mySplitText.chars;
//     // gsap.from(chars, { x: (i) => window.innerWidth * 1.5, opacity: 0 });

//    gsap.from(chars, {
//      scale: 0,
//      y:150,
//      stagger: 0.05,
//      ease: "power3.out",
//      scrollTrigger: {
//        trigger: chars,
//        start: "top 100%",
//        end: "top 70%",
//        scrub: true,
//        markers:true
//      },
//    });

//    linesRef.current.forEach((line, i) => {
//     const text = textRefs.current[i];
//     // Hide text initially
//     gsap.set(text, { opacity: 0, y: 20 });

//     line.addEventListener("mouseenter", () => {
//       // Spring animation for line
//       gsap.to(line, {
//         keyframes: [
//           { y: -10, duration: 0.1 },
//           { y: 8, duration: 0.1 },
//           { y: -6, duration: 0.1 },
//           { y: 4, duration: 0.1 },
//           { y: 0, duration: 0.2 },
//         ],
//         ease: "power1.out",
//       });

//       // Reveal text
//       gsap.to(text, {
//         opacity: 1,
//         y: 0,
//         duration: 0.5,
//         ease: "back.out(1.7)",
//       });
//     });

//     line.addEventListener("mouseleave", () => {
//       // Optional: hide text again
//       gsap.to(text, {
//         opacity: 0,
//         y: 20,
//         duration: 0.3,
//         ease: "power2.inOut",
//       });
//     });
//   });
//   });

//   return (
//     <section
//       ref={background_container_ref}
//       className="relative bg-zinc-900 text-white w-full  overflow-x-hidden py-16"
//     >
//       <h1
//         ref={textRef2}
//         className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center"
//       >
//         Why to choose us ?
//       </h1>

//       <div className="flex flex-col space-y-12 items-center">
//         {texts.map((text, index) => (
//           <div key={index} className="relative w-full max-w-4xl">
//             <div
//               ref={(el) => (linesRef.current[index] = el)}
//               className="w-full h-[3px] bg-white cursor-pointer"
//               style={{ transformOrigin: "center" }}
//             ></div>

//             <p
//               ref={(el) => (textRefs.current[index] = el)}
//               className="absolute left-1/2 top-[-2.5rem] transform -translate-x-1/2 text-xl md:text-2xl font-semibold opacity-0"
//             >
//               {text}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

export default Why_us;
