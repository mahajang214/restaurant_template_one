import bg_image from "../../assets/hero_section_bg_image.avif";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

import gsap from "gsap";

gsap.registerPlugin(useGSAP, SplitText);

export default function Hero() {
  const elRefs = useRef([]);
  const btn = useRef(null);
  const circleBtn = useRef(null);
  const [showCursor, setShowCursor] = useState(false);
  const mainHeadingRef = useRef(null);
  const splitRef = useRef(null);

  // Clears refs before assigning to avoid duplication
  elRefs.current = [];
  const addToRefs = (el) => {
    if (el && !elRefs.current.includes(el)) {
      elRefs.current.push(el);
    }
  };

  // Mouse Handlers
  const handleMouseEnter = () => {
    if (circleBtn.current && window.innerWidth>=1024) {
      gsap.from(circleBtn.current, {
        opacity: 0,
        y: 100,
      });
    }
    window.innerWidth>=1024 && setShowCursor(true);
    // console.log("mouse enter")
  };

  const handleMouseMove = (e) => {
    // if ( ){
    //   console.log("window size is more than 1024px")
    // }else{ console.log("window size is less than 1024px")
    //   console.log("size : ",window.innerWidth)
    // }
    if (circleBtn.current && window.innerWidth>=1024) {
      // INSERT_YOUR_CODE
      if (mainHeadingRef.current && circleBtn.current) {
        const headingRect = mainHeadingRef.current.getBoundingClientRect();
        const circleCenterX = e.clientX;
        const circleCenterY = e.clientY;
        const inside =
          circleCenterX >= headingRect.left &&
          circleCenterX <= headingRect.right &&
          circleCenterY >= headingRect.top &&
          circleCenterY <= headingRect.bottom;

        if (inside) {
          // Send circleBtn behind mainHeadingRef and set opacity to 0.5
          circleBtn.current.style.zIndex =
            (mainHeadingRef.current.style.zIndex || 1) - 1;
          circleBtn.current.style.opacity = 0.5;
        } else {
          // Bring circleBtn to front and set opacity to 1
          circleBtn.current.style.zIndex = 9999;
          circleBtn.current.style.opacity = 1;
        }
      }

     
        gsap.to(circleBtn.current, {
          x: e.clientX - 48,
          y: e.clientY - 48,
          duration: 0.4, // Increased duration for smoother movement
          ease: "power3.out", // Smoother easing
          overwrite: "auto", // Prevents animation queue buildup
        });
      
    }

    // console.log("mouse moved")
  };

  const handleMouseLeave = () => {
    if (circleBtn.current && window.innerWidth>=1024) {
      gsap.to(circleBtn.current, {
        opacity: 0,
        y: 100,
      });
    }
    window.innerWidth>=1024 && setShowCursor(false);
    // console.log("mouse leave")
  };

 

  useGSAP(() => {
    gsap.from(elRefs.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    });

    gsap.from(btn.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      delay: 0.9,
      ease: "power3.out",
    });

    const text = mainHeadingRef.current;

    // Make sure it's visible
    gsap.set(text, { opacity: 1 });
    // Split the text
    const mySplitText = new SplitText(text, {
      type: "chars,words",
      charsClass: "char",
    });

    splitRef.current = mySplitText; // Save for cleanup
    const chars = mySplitText.chars;

    // Animate the characters
    gsap.from(chars, {
      duration: 3,
      opacity: 0,
      scale: 0,
      y: -80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.1,
    });
  }, []);

  return (
    <section
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center w-full h-screen min-h-[500px] overflow-hidden z-10"
    >
      {/* Responsive background image */}
      <div className="absolute inset-0 w-full h-full -z-0">
        <img
          src={bg_image}
          alt="Hero background"
          className="w-full h-full object-cover animate-zoom"
          draggable={false}
          style={{
            userSelect: "none",
            pointerEvents: "none",
          }}
        />
        <style>
          {`
              @keyframes zoom {
                0% {
                  transform: scale(1);
                }
                100% {
                  transform: scale(1.1);
                }
              }
              .animate-zoom {
                animation: zoom 10s ease-in-out forwards;
              }
            `}
        </style>
      </div>

      {/* Overlay */}

      {/* Cursor-following Button */}
      {showCursor && (
        <div
          ref={circleBtn}
          className="fixed top-0 left-0 z-50 w-28 h-28 flex items-center justify-center pointer-events-none"
          style={{
            filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.25))",
          }}
        >
          {/* Plate base */}
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Plate rim */}
            <div className="absolute inset-0 rounded-full bg-white border-4 border-gray-300 shadow-inner" />
            {/* Plate inner (food area)
            <div className="absolute inset-2 rounded-full bg-zinc-100 border-2 border-gray-200" /> */}
            {/* Plate highlight */}
            <div className="absolute top-4 left-6 w-8 h-3 rounded-full bg-white opacity-60 blur-sm" />
            {/* Text as "food" on the plate */}
            <span className="relative z-10 flex items-center justify-center w-15 h-15 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 text-red-600 font-bold text-base text-center shadow-md border-2 border-zinc-300">
              LOOK MENU
            </span>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-black opacity-60" />
      {/* Content */}
      <motion.div className="text-center text-gray-300">
        <motion.h2
          ref={addToRefs}
          className="text-lg xs:text-xl md:text-2xl italic"
        >
          Welcome to
        </motion.h2>

        <motion.h1
          ref={mainHeadingRef}
          className="headline  text-white text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-2 mb-4 "
          aria-hidden="true"
        >
          PATO PLACE
        </motion.h1>

        {/* <motion.h1
          ref={main_heading}
          className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-2 mb-4"
        >
          PATO PLACE
        </motion.h1> */}
      </motion.div>

      {/* mobile look menu button */}
      <motion.button
        ref={btn}
        className="lg:hidden absolute bottom-24 px-6 py-2 rounded-lg z-50 bg-transparent border border-gray-300 text-white cursor-pointer overflow-hidden"
        whileTap={{
          scale: 0.92,
          boxShadow: "0 0 0 8px rgba(255,255,255,0.08)",
          backgroundColor: "rgba(255,255,255,0.08)",
        }}
        whileHover={{
          scale: 1.04,
          boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)",
          borderColor: "#f87171",
          color: "#f87171",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 18,
        }}
      >
        <span className="relative z-10 font-semibold tracking-wide">
          LOOK MENU
        </span>
        <motion.span
          className="absolute inset-0 rounded-lg pointer-events-none"
          initial={{ opacity: 0 }}
          whileTap={{ opacity: 0.18 }}
          transition={{ duration: 0.2 }}
        />
      </motion.button>
    </section>
  );
}
