import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useLayoutEffect } from "react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function About_us() {
  const about_heading_ref = useRef(null);
  const about_page_bg_ref = useRef(null);
  const ourVision_heading_ref = useRef(null);
  const ourVision_para_ref = useRef(null);
  const left_ref = useRef(null);
  const right_ref = useRef(null);

  useGSAP(() => {
    const text = about_heading_ref.current;
    const text2 = ourVision_heading_ref.current;
    const text3 = ourVision_para_ref.current;
    // Make sure it's visible
    gsap.set([text, text2, text3], { opacity: 1 });
    // Split the text
    const mySplitText = new SplitText(text, {
      type: "chars,words",
      charsClass: "char",
    });
    const mySplitText2 = new SplitText(text2, {
      type: "chars,words",
      charsClass: "char",
    });

    const mySplitText3 = new SplitText(text3, {
      type: "chars,words",
      charsClass: "char",
    });

    about_heading_ref.current = mySplitText; // Save for cleanup
    const chars = mySplitText.chars;

    ourVision_heading_ref.current = mySplitText2; // Save for cleanup
    const chars2 = mySplitText2.chars;

    ourVision_para_ref.current = mySplitText3; // Save for cleanup
    const vision_para = mySplitText3.words;

    // Animate the characters
    gsap.from(chars, {
      opacity: 0,
      scale: 0,
      y: 80,
      x: -20,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.05,
      scrollTrigger: {
        trigger: chars,
        start: "top 90%",
        end: "bottom 70%",
        scrub: true,
        markers: false,
      },
    });
    gsap.from(chars2, {
      opacity: 0,
      scale: 0,
      y: 80,
      x: -20,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.05,
      scrollTrigger: {
        trigger: chars2,
        start: "top 90%",
        end: "bottom 70%",
        scrub: true,
        markers: false,
      },
    });
    gsap.from(vision_para, {
        opacity:0,
        yPercent: 100,
        stagger: 0.25,
      scrollTrigger: {
        trigger: vision_para,
        start: "top 70%",
        end: "bottom 50%",
        scrub: true,
        markers: false,
      },
    });

    gsap.from(left_ref.current, {
        opacity:0,
        xPercent: -100,
      scrollTrigger: {
        trigger: left_ref.current,
        start: "top 80%",
        end: "bottom 70%",
        scrub: true,
        markers: false,
      },
    });
    
  // Detect if the device is mobile and adjust the animation accordingly
    const isMobile = window.innerWidth < 768;
    const isLapi=window.innerWidth>768
    if (isMobile) {
        gsap.set(right_ref.current,{opacity:1,x:0})
      gsap.from(right_ref.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: right_ref.current,
          start: "top 90%",
          end: "bottom 80%",
          scrub: true,
          markers: false,
        },
      });
    }
    if (isLapi){
        gsap.from(right_ref.current, {
            opacity:0,
            xPercent: 100,
          scrollTrigger: {
            trigger: right_ref.current,
            start: "top 80%",
            end: "bottom 70%",
            scrub: true,
            markers: false,
          },
        });
    }
  }, []);

  return (
    <section
      ref={about_page_bg_ref}
      className="px-2 py-8 min-h-screen text-zinc-200 bg-[#021526] text-center w-full flex flex-col items-center justify-center sm:px-4 md:px-8 lg:px-20"
    >
      <h1
        ref={about_heading_ref}
        className="aboutUs text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-8"
      >
        About us!
      </h1>
      <div className="max-w-5xl mt-14 w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
          {/* Owner Image */}
          <div ref={left_ref} className="w-full flex justify-center md:justify-start md:w-1/3 mb-6 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Owner Chef"
              className="w-2/3 xs:w-1/2 sm:w-2/5 md:w-full max-w-xs md:max-w-full rounded-2xl shadow-md object-cover"
            />
          </div>

          {/* Story Content */}
          <div ref={right_ref} className="flex-1 text-left w-full">
            <p className="mb-8 about_para text-base xs:text-lg sm:text-lg md:text-xl leading-relaxed tracking-wide">
              Meet <strong>Anjali</strong>, the heart and soul behind{" "}
              <strong>SpiceGarden</strong>. From a young age, Anjali found her
              passion in the kitchen, learning family recipes and dreaming of
              sharing her love for food with the world.
            </p>

            <p className="mb-8 about_para text-base xs:text-lg sm:text-lg md:text-xl leading-relaxed tracking-wide">
              As a proud woman owner and chef, Anjali brings a unique touch to
              every dish — blending tradition with creativity, and always adding
              a dash of warmth. Her journey is about more than just cooking;
              it’s about creating a space where everyone feels welcome and every
              meal is memorable.
            </p>

            <p className="mb-8 about_para text-base xs:text-lg sm:text-lg md:text-xl leading-relaxed tracking-wide">
              At SpiceGarden, Anjali’s vision is simple: to match people with
              flavors that make them smile, and to turn every visit into a
              celebration of togetherness, taste, and community.
            </p>

            <p className="italic about_para text-gray-400 mt-10 text-sm xs:text-base tracking-wide">
              “For me, cooking is about connection — matching good food with
              good people.”
              <br />
              <span className="font-semibold text-gray-300">
                — Anjali, Owner & Chef
              </span>
            </p>
          </div>
        </div>

       
      </div>
      <div className="mt-10 sm:mt-12 h-screen justify-center w-full flex flex-col items-center px-4 py-8">
        <h3
          ref={ourVision_heading_ref}
          className="text-2xl ourVision xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-center"
        >
          Our Vision
        </h3>
        <p
          ref={ourVision_para_ref}
          className="text-base ourVision_para xs:text-lg sm:text-xl md:text-2xl lg:text-5xl leading-relaxed text-center max-w-3xl"
        >
          To become a community favorite by bringing honest, heartfelt food to
          your table. Whether you're dining in or ordering online, we promise
          flavor, freshness, and hospitality in every bite.
        </p>
      </div>
    </section>
  );
}

export default About_us;
