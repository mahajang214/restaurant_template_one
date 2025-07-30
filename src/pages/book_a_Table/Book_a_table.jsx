import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useLayoutEffect } from "react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Book_a_table() {
  const desktop_form_ref = useRef(null);
  const mobile_form_ref = useRef([]);

  mobile_form_ref.current=[]
  const addToMobileRef = (el) => {
    if (el && !mobile_form_ref.current.includes(el)) {
      mobile_form_ref.current.push(el);
    }
  };

  useGSAP(() => {
    // Set initial scale to 120, then animate to scale 0 on scroll
    // gsap.set(desktop_form_ref.current, { scale: 1 });
    // Only run this animation on laptop and desktop (min-width: 1024px)
    if (window.innerWidth >= 1024) {
      gsap.from(desktop_form_ref.current, {
        rotationY: 90,
        y: 0,
        x: 0,
        scrollTrigger: {
          trigger: desktop_form_ref.current,
          start: "top 50%",
          end: "top 20%",
          scrub: true,
          markers: false,
        },
      });
    }
    if (window.innerWidth <= 1024) {
      gsap.from(mobile_form_ref.current, {
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: mobile_form_ref.current,
          start: "top 60%",
          end: "top 0%",
          scrub: true,
          markers: false,
        },
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center  justify-center bg-[#021526] py-12 px-4 sm:px-6 lg:px-8">
      {/* mobile booking table form */}
      <div className="max-w-md lg:hidden w-full space-y-8 bg-zinc-900 rounded-lg shadow-lg p-8">
        <h2
          ref={addToMobileRef}
          className="mt-2 bookATable text-center text-3xl font-extrabold text-zinc-200"
        >
          Book a Table
        </h2>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div ref={addToMobileRef} className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-300"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-[#021526] focus:border-[#021526] bg-zinc-300 text-zinc-900"
                placeholder="Your Name"
              />
            </div>
            <div ref={addToMobileRef} className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-300"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-[#021526] focus:border-[#021526] bg-zinc-300 text-zinc-900"
                placeholder="you@example.com"
              />
            </div>
            <div ref={addToMobileRef} className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-zinc-300"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="appearance-none rounded w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-[#021526] focus:border-[#021526] bg-zinc-300 text-zinc-900"
                placeholder="Phone Number"
              />
            </div>
            <div ref={addToMobileRef} className="mb-4">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-zinc-300"
              >
                Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                required
                className="appearance-none rounded w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-[#021526] focus:border-[#021526] bg-zinc-300 text-zinc-900"
              />
            </div>
            <div ref={addToMobileRef} className="mb-4">
              <label
                htmlFor="time"
                className="block text-sm font-medium text-zinc-300"
              >
                Time
              </label>
              <input
                id="time"
                name="time"
                type="time"
                required
                className="appearance-none rounded w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-[#021526] focus:border-[#021526] bg-zinc-300 text-zinc-900"
              />
            </div>
            <div ref={addToMobileRef} className="mb-4">
              <label
                htmlFor="guests"
                className="block text-sm font-medium text-zinc-300"
              >
                Number of Guests
              </label>
              <input
                id="guests"
                name="guests"
                type="number"
                min="1"
                max="20"
                required
                className="appearance-none rounded w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-[#021526] focus:border-[#021526] bg-zinc-300 text-zinc-900"
                placeholder="e.g. 4"
              />
            </div>
            <div ref={addToMobileRef} className="mb-4">
              <label
                htmlFor="requests"
                className="block text-sm font-medium text-zinc-300"
              >
                Special Requests
              </label>
              <textarea
                id="requests"
                name="requests"
                rows="2"
                className="appearance-none rounded w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-[#021526] focus:border-[#021526] bg-zinc-300 text-zinc-900"
                placeholder="Any special requests?"
              />
            </div>
          </div>
          <div className="relative w-full flex justify-center items-center">
            {/* mobile btn */}
            <motion.button
              className=" w-full lg:hidden py-2 rounded-lg z-50 bg-transparent border border-gray-300 text-white cursor-pointer overflow-hidden"
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
              <span className="relative bookTableBtn z-10 font-semibold tracking-wide">
                Book Table
              </span>
            </motion.button>
          </div>
        </form>
      </div>
      {/* desktop booking table form */}
      <div
        ref={desktop_form_ref}
        className="hidden lg:flex bg-zinc-900  rounded-xl shadow-xl p-10 w-full max-w-5xl mx-auto space-x-12"
      >
        {/* Left side: Text Heading */}
        <div className="flex flex-col justify-center w-1/2 space-y-6">
          <h2 className="text-5xl bookATable font-extrabold text-zinc-200">
            Book a Table
          </h2>
          <p className="text-zinc-400 text-lg">
            Reserve your spot now and enjoy a luxurious dining experience with
            us. We’ll take care of the rest.
          </p>
        </div>

        {/* Right side: Form */}
        <form className="w-1/2 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-300"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded px-3 py-2 bg-zinc-300 text-zinc-900 border border-gray-300 focus:outline-none focus:ring-[#021526] focus:border-[#021526]"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded px-3 py-2 bg-zinc-300 text-zinc-900 border border-gray-300 focus:outline-none focus:ring-[#021526] focus:border-[#021526]"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-zinc-300"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="w-full rounded px-3 py-2 bg-zinc-300 text-zinc-900 border border-gray-300 focus:outline-none focus:ring-[#021526] focus:border-[#021526]"
                placeholder="Phone Number"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="guests"
                className="block text-sm font-medium text-zinc-300"
              >
                Guests
              </label>
              <input
                id="guests"
                name="guests"
                type="number"
                min="1"
                max="20"
                required
                className="w-full rounded px-3 py-2 bg-zinc-300 text-zinc-900 border border-gray-300 focus:outline-none focus:ring-[#021526] focus:border-[#021526]"
                placeholder="e.g. 4"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-zinc-300"
              >
                Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                required
                className="w-full rounded px-3 py-2 bg-zinc-300 text-zinc-900 border border-gray-300 focus:outline-none focus:ring-[#021526] focus:border-[#021526]"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="time"
                className="block text-sm font-medium text-zinc-300"
              >
                Time
              </label>
              <input
                id="time"
                name="time"
                type="time"
                required
                className="w-full rounded px-3 py-2 bg-zinc-300 text-zinc-900 border border-gray-300 focus:outline-none focus:ring-[#021526] focus:border-[#021526]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="requests"
              className="block text-sm font-medium text-zinc-300"
            >
              Special Requests
            </label>
            <textarea
              id="requests"
              name="requests"
              rows="2"
              className="w-full rounded px-3 py-2 bg-zinc-300 text-zinc-900 border border-gray-300 focus:outline-none focus:ring-[#021526] focus:border-[#021526]"
              placeholder="Any special requests?"
            />
          </div>

          <div className="flex justify-end">
            <button
              className="hidden lg:block relative overflow-hidden border border-zinc-400 text-zinc-200 font-semibold py-2 px-6 rounded cursor-pointer group text-base ml-2 bg-transparent w-full z-50 transition-colors duration-300"
              type="submit"
            >
              <span className="relative bookTableBtn z-10 transition-colors duration-300 font-semibold tracking-wide group-hover:text-black">
                Book Table
              </span>
              <span
                className="absolute inset-0 z-0 pointer-events-none transition-colors duration-300"
                aria-hidden="true"
              >
                <span
                  className="block absolute left-1/2 bottom-0 w-0 h-0 bg-zinc-200 rounded-full
      group-hover:w-[300%] group-hover:h-[300%] group-hover:bottom-1/2 group-hover:left-1/2
      transition-all duration-500 ease-in-out"
                  style={{
                    transform: "translate(-50%, 50%)",
                  }}
                ></span>
              </span>
              <style>{`
  .group:hover .group-hover\\:w-\\[300\\%\\] { width: 300% !important; }
  .group:hover .group-hover\\:h-\\[300\\%\\] { height: 300% !important; }
  .group:hover .group-hover\\:bottom-1\\/2 { bottom: 50% !important; }
  .group:hover .group-hover\\:left-1\\/2 { left: 50% !important; }
  .group:hover { background: #fff !important; color: #000 !important; border-color: #fff !important; }
`}</style>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Book_a_table;
{
  /* desktop btn */
}
