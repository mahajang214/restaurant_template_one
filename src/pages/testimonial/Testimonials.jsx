import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useLayoutEffect } from "react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Testimonials() {
  const testimonial_cards_ref = useRef([]);
  const testimonial_heading_ref = useRef(null);
  const testimonial_cards_bg_ref = useRef(null);

  testimonial_cards_ref.current = [];
  const addToTestimonialRefs = (el) => {
    if (el && !testimonial_cards_ref.current.includes(el)) {
      testimonial_cards_ref.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.set(testimonial_cards_bg_ref.current, { x: 0, y: 0, opacity: 1 });
    // gsap.set(testimonial_cards_ref.current,{x:0,y:0,opacity:1})

    // Only run animation on laptop/desktop and greater (min-width: 1024px)
    if (window.innerWidth >= 1024) {
      gsap.fromTo(
        testimonial_cards_ref.current,
        { y: 1000, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: testimonial_cards_bg_ref.current,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            start: "top+=0",  // starts 100px after trigger hits top
            end: "+=1000",  
            markers: false,
          },
        }
      );
    }

    const text = testimonial_heading_ref.current;

    // Make sure it's visible
    gsap.set(text, { opacity: 1 });
    // Split the text
    const mySplitText = new SplitText(text, {
      type: "chars,words",
      charsClass: "char",
    });

    testimonial_heading_ref.current = mySplitText; // Save for cleanup
    const chars = mySplitText.chars;

    // Animate the characters
    gsap.from(chars, {
      opacity: 0,
      scale: 0,
      y: 80,
      x:-20,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.05,
      scrollTrigger:{
        trigger:chars,
        start:"top 90%",
        end:"bottom 70%",
        scrub:true,
        markers:false,
      }

    });
  }, []);

  return (
    <section
      ref={testimonial_cards_bg_ref}
      className="px-2 py-8 min-h-screen text-zinc-200 bg-[#1F2323] text-center w-full flex flex-col items-center justify-center sm:px-4 md:px-8 lg:px-20"
    >
      <h2
        ref={testimonial_heading_ref}
        className="text-xl lg:text-6xl whatOurCustomesSay xs:text-2xl sm:text-3xl font-bold mb-6 sm:mb-10"
      >
        What Our Customers Say's about us
      </h2>
      {/* Desktop/Tablet Testimonials */}
      <div className="hidden sm:grid w-full max-w-5xl mx-auto grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 px-0 sm:px-2">
        {[
          {
            quote:
              "Absolutely loved the butter chicken! Authentic taste and perfect ambiance.",
            stars: 5,
            name: "Aditi Sharma",
            pic: "https://randomuser.me/api/portraits/women/44.jpg",
          },
          {
            quote:
              "The naan was so soft and fresh. Service was quick and friendly.",
            stars: 5,
            name: "Rahul Mehra",
            pic: "https://randomuser.me/api/portraits/men/32.jpg",
          },
          {
            quote: "A hidden gem! The paneer tikka was bursting with flavor.",
            stars: 4,
            name: "Priya Desai",
            pic: "https://randomuser.me/api/portraits/women/65.jpg",
          },
          {
            quote:
              "Great place for family dinners. Kids loved the mango lassi.",
            stars: 5,
            name: "Sunil Kapoor",
            pic: "https://randomuser.me/api/portraits/men/41.jpg",
          },
          {
            quote:
              "Tried their biryani and it was just perfect. Will visit again.",
            stars: 5,
            name: "Neha Joshi",
            pic: "https://randomuser.me/api/portraits/women/12.jpg",
          },
          {
            quote:
              "The staff went above and beyond to make our anniversary special.",
            stars: 5,
            name: "Vikram & Anjali",
            pic: "https://randomuser.me/api/portraits/men/55.jpg",
          },
        ].map((testimonial, i) => (
          <div
            key={i}
            ref={addToTestimonialRefs}
            className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <img
              src={testimonial.pic}
              alt={testimonial.name}
              className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg object-cover mb-2 sm:mb-4 border-2 border-black"
            />
            <p className="text-sm testimonial_quotes xs:text-base sm:text-lg italic mb-2">"{testimonial.quote}"</p>
            <div className="mt-2 sm:mt-4 font-bold text-yellow-500 text-base sm:text-lg">
              {"★".repeat(testimonial.stars)}
              <span className="text-gray-300">
                {"★".repeat(5 - testimonial.stars)}
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-gray-400">
              – {testimonial.name}
            </p>
          </div>
        ))}
      </div>
      {/* Mobile-only animated testimonial rows */}
      <div className="block sm:hidden mt-8 relative overflow-x-hidden w-full">
        {/* Animation Row 1 */}
        <div
          className="flex space-x-4 animate-marquee whitespace-nowrap mb-4"
        >
          {[
            {
              quote:
                "Absolutely loved the butter chicken! Authentic taste and perfect ambiance.",
              stars: 5,
              name: "Aditi Sharma",
            },
            {
              quote:
                "The naan was so soft and fresh. Service was quick and friendly.",
              stars: 5,
              name: "Rahul Mehra",
            },
            {
              quote: "A hidden gem! The paneer tikka was bursting with flavor.",
              stars: 4,
              name: "Priya Desai",
            },
            {
              quote:
                "Great place for family dinners. Kids loved the mango lassi.",
              stars: 5,
              name: "Sunil Kapoor",
            },
            {
              quote:
                "Tried their biryani and it was just perfect. Will visit again.",
              stars: 5,
              name: "Neha Joshi",
            },
            {
              quote:
                "The staff went above and beyond to make our anniversary special.",
              stars: 5,
              name: "Vikram & Anjali",
            },
          ].map((testimonial, i) => (
            <div
              key={`mobile-row1-${i}`}
              className="bg-gray-800 p-3 rounded-lg shadow-md flex flex-col items-center min-w-[250px] max-w-xs"
              style={{ wordBreak: "break-word" }}
            >
              <p
                className="text-sm testimonial_quotes italic mb-2 text-center max-w-full"
                style={{
                  wordBreak: "break-word",
                  whiteSpace: "normal",
                  overflowWrap: "break-word",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 5,
                  overflow: "hidden",
                }}
              >
                "{testimonial.quote}"
              </p>
              <div className="font-bold text-yellow-500 text-base">
                {"★".repeat(testimonial.stars)}
                <span className="text-gray-300">
                  {"★".repeat(5 - testimonial.stars)}
                </span>
              </div>
              <p
                className="mt-2 text-xs text-gray-400 text-center max-w-full"
                style={{
                  wordBreak: "break-word",
                  whiteSpace: "normal",
                  overflowWrap: "break-word",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                }}
              >
                – {testimonial.name}
              </p>
            </div>
          ))}
        </div>
        {/* Animation Row 2 (slightly delayed and reversed direction) */}
        <div
          className="flex space-x-4 animate-marquee-reverse whitespace-nowrap"
        >
          {[
            {
              quote:
                "Absolutely loved the butter chicken! Authentic taste and perfect ambiance.",
              stars: 5,
              name: "Aditi Sharma",
            },
            {
              quote:
                "The naan was so soft and fresh. Service was quick and friendly.",
              stars: 5,
              name: "Rahul Mehra",
            },
            {
              quote: "A hidden gem! The paneer tikka was bursting with flavor.",
              stars: 4,
              name: "Priya Desai",
            },
            {
              quote:
                "Great place for family dinners. Kids loved the mango lassi.",
              stars: 5,
              name: "Sunil Kapoor",
            },
            {
              quote:
                "Tried their biryani and it was just perfect. Will visit again.",
              stars: 5,
              name: "Neha Joshi",
            },
            {
              quote:
                "The staff went above and beyond to make our anniversary special.",
              stars: 5,
              name: "Vikram & Anjali",
            },
          ].map((testimonial, i) => (
            <div
              key={`mobile-row2-${i}`}
              className="bg-gray-800 p-3 rounded-lg shadow-md flex flex-col items-center min-w-[250px] max-w-xs"
              style={{ wordBreak: "break-word" }}
            >
              <p
                className="text-sm testimonial_quotes italic mb-2 text-center max-w-full"
                style={{
                  wordBreak: "break-word",
                  whiteSpace: "normal",
                  overflowWrap: "break-word",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 5,
                  overflow: "hidden",
                }}
              >
                "{testimonial.quote}"
              </p>
              <div className="font-bold text-yellow-500 text-base">
                {"★".repeat(testimonial.stars)}
                <span className="text-gray-300">
                  {"★".repeat(5 - testimonial.stars)}
                </span>
              </div>
              <p
                className="mt-2 text-xs text-gray-400 text-center max-w-full"
                style={{
                  wordBreak: "break-word",
                  whiteSpace: "normal",
                  overflowWrap: "break-word",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                }}
              >
                – {testimonial.name}
              </p>
            </div>
          ))}
        </div>
        {/* Marquee keyframes (should be in global CSS, but included here for demo) */}
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
            @keyframes marquee-reverse {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
            .animate-marquee {
              animation: marquee 18s linear infinite;
            }
            .animate-marquee-reverse {
              animation: marquee-reverse 22s linear infinite;
            }
          `}
        </style>
      </div>
    </section>
  );
}

export default Testimonials;
