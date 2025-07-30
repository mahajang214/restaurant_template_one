import { useRef, useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaBars,
  FaInstagram,
  FaTimes,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const logoRef=useRef(null);
  const book_ticket_ref = useRef(null)

  const menuItems = [
    "HOME",
    "MENU",
    "RESERVATION",
    "GALLERY",
    "ABOUT",
    "BLOG",
    "CONTACT",
  ];

  useGSAP(()=>{
    gsap.from([logoRef.current, book_ticket_ref.current], {
      opacity: 0,
      y: -50,
      duration: 0.8
    });},[])
  // Function to set nav background to black when screen height is more than 100vh


  // INSERT_YOUR_CODE
  const [blurNav, setBlurNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 945) {
        setBlurNav(true);
      } else {
        setBlurNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full z-20 flex items-center justify-between px-3 sm:px-6 md:px-16 xl:px-36 py-3 md:py-6 transition-all duration-200 text-white ${
        blurNav
          ? "bg-[#1F2323] backdrop-blur-md "
          : "bg-transparent"
      }`}
    >
      <motion.div
        ref={logoRef}
        className="text-lg goldman_nav xs:text-xl sm:text-2xl font-bold tracking-widest flex-shrink-0"
      >
        PATO
      </motion.div>

      {/* Desktop menu */}
      <ul className="hidden goldman_nav md:flex gap-3 lg:gap-6 font-semibold text-xs sm:text-sm text-zinc-400">
        {menuItems.map((item) => (
          <li
            key={item}
            className="hover:text-white hover:border-b-[1px] border-double hover:border-white pb-2 border-b-[1px] border-transparent  cursor-pointer transition-all duration-200 px-1"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Book Table Button - always visible, but size adapts */}
      {/* Book Table Button */}
      {/* Show animated button only on xl (>=1280px, which is >1080px), else show simple button on mobile */}
      <div>
        {/* Animated button for screens >1080px (xl and up) */}
        <div className="hidden lg:block goldman_nav">
          <button
            ref={book_ticket_ref}
            className="relative overflow-hidden border border-zinc-400 text-zinc-400 font-semibold py-1.5 sm:py-2 px-3 sm:px-4 rounded  cursor-pointer group text-xs sm:text-sm md:text-base ml-2 md:ml-4"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              BOOK MY TABLE
            </span>
            <span
              className="absolute inset-0 z-0 pointer-events-none"
              aria-hidden="true"
            >
              <span
                className="block absolute left-1/2 bottom-0 w-0 h-0 bg-black rounded-full
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
            `}</style>
          </button>
        </div>
        {/* Simple button for mobile (md:hidden = <768px) */}
        {/* Simple button for mobile (lg:hidden) */}
        {/* <button
          className="block lg:hidden border border-zinc-400 text-zinc-400 font-semibold py-1.5 sm:py-2 px-3 sm:px-4 rounded transition-all duration-200 cursor-pointer text-xs sm:text-sm md:text-base ml-2 md:ml-4 bg-transparent goldman_nav"
        >
          BOOK MY TABLE
        </button> */}
        {/* New mobile-only button (styled differently for demonstration) */}
        <motion.button
          whileTap={{
            scale: 0.90,
            boxShadow: "0 0 0 12px rgba(2,21,38,0.10)",
            backgroundColor: "rgba(2,21,38,0.12)",
          }}
          whileHover={{
            scale: 1.04,
            boxShadow: "0 8px 32px 0 rgba(2,21,38,0.22)",
            borderColor: "#021526",
            color: "#021526",
            transition: { duration: 0.32, ease: [0.4, 0, 0.2, 1] }
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 22,
            mass: 0.7
          }}
          className="block lg:hidden mt-2 border border-[#fff]  font-bold py-1.5 sm:py-2 px-3 sm:px-4 rounded  cursor-pointer text-xs sm:text-sm md:text-base ml-2 md:ml-4 bg-transparent text-white goldman_nav shadow relative overflow-hidden"
        >
          <span className="relative z-10 font-semibold tracking-wide">
          BOOK MY TABLE
          </span>
          <motion.span
            className="absolute inset-0 rounded pointer-events-none"
            initial={{ opacity: 0 }}
            whileTap={{ opacity: 0.18 }}
            transition={{ duration: 0.2 }}
          />
        </motion.button>
      </div>

      {/* Hamburger menu icon for mobile */}
      <div className="md:hidden flex items-center ml-2 ">
        {/* Animate hamburger lines using Framer Motion on initial website load */}
        <button
          className="relative w-9 h-9 flex flex-col justify-center items-center group focus:outline-none"
          aria-label="Open menu"
          onClick={toggleMenu}
        >
          {/* Top line */}
          <motion.span
            initial={{ width: "0%" }}
            animate={{ width: menuOpen ? "100%" : "50%" }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0,
            }}
            className={`
              absolute left-0 top-[22%] h-0.5 bg-white rounded
            `}
            style={{ transitionProperty: "width,left" }}
          ></motion.span>
          {/* Middle line */}
          <motion.span
            initial={{ width: "0%", left: "25%" }}
            animate={{
              width: menuOpen ? "100%" : "50%",
              left: menuOpen ? "0%" : "25%",
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.15,
            }}
            className={`
              absolute top-1/2 h-0.5 bg-white rounded
            `}
            style={{ transitionProperty: "width,left" }}
          ></motion.span>
          {/* Bottom line */}
          <motion.span
            initial={{ width: "0%", right: "0%" }}
            animate={{
              width: menuOpen ? "100%" : "50%",
              left: menuOpen ? "0%" : "auto",
              right: menuOpen ? "auto" : "0%",
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.3,
            }}
            className={`
              absolute bottom-[22%] h-0.5 bg-white rounded
            `}
            style={{ transitionProperty: "width,left,right" }}
          ></motion.span>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="fixed inset-0 z-30 bg-black bg-opacity-80 flex flex-col items-center justify-start pt-24 md:hidden"
          >
            <motion.button
              className="absolute top-4 right-4 text-white text-2xl font-bold cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </motion.button>

            <div>
              <h1 className="relative nav_menu_heading text-white text-3xl xs:text-4xl font-extrabold tracking-widest mb-6 text-center ">
                {/* bottom line after:block after:mx-auto after:mt-2 after:h-[1px] after:w-full after:bg-white after:rounded-md after:relative after:overflow-hidden */}
                PATO PLACE
                {/* Animated underline */}
                <span className="block mx-auto mt-2 h-[3px] w-full rounded-md relative overflow-hidden">
                  <span className="absolute left-0 top-0 h-full w-full bg-green-400 animate-underlineFill z-10" />
                  <span className="absolute left-0 top-0 h-full w-full bg-white rounded-md z-0" />
                </span>
                <style>
                  {`
                    @keyframes underlineFill {
                      0% {
                        width: 0%;
                        opacity: 1;
                      }
                      // 60% {
                      //   width: 100%;
                      //   opacity: 1;
                      // }
                      // 80% {
                      //   width: 100%;
                      //   opacity: 0.7;
                      // }
                      100% {
                        width: 100%;
                        opacity: 1;
                      }
                    }
                    .animate-underlineFill {
                      animation: underlineFill 2s cubic-bezier(0.4,0,0.2,1) infinite;
                    }
                  `}
                </style>
              </h1>
            </div>

            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.15,
                  },
                },
              }}
              className="w-full  mt-10 flex flex-col items-center space-y-4 goldman_nav"
            >
              {menuItems.map((item, idx) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      },
                    },
                  }}
                  className="hover:text-red-500 cursor-pointer text-lg font-semibold transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </motion.li>
              ))}
              {/* <motion.li
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 300, damping: 24 },
                  },
                }}
                className="w-full flex justify-center mt-2"
              > */}
              <motion.button
                // initial={{ opacity: 0, y: -30 }}
                animate={{
                  y: [-30, -15, 0],
                  opacity: [0, 0.5, 1],
                  transition: {
                    duration: 0.7,
                    ease: [0.4, 0, 0.2, 1],
                    delay: 0.7,
                    times: [0, 0.5, 1],
                  },
                }}
                style={{ willChange: "transform, opacity" }}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 overflow-hidden border border-zinc-400 text-zinc-400 font-semibold w-2/3 py-2 px-6 rounded transition-all duration-500 cursor-pointer group text-base"
                onClick={() => setMenuOpen(false)}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  BOOK MY TABLE
                </span>
                <span
                  className="absolute inset-0 z-0 pointer-events-none"
                  aria-hidden="true"
                >
                  <span
                    className="block absolute left-1/2 bottom-0 w-0 h-0 bg-black rounded-full
                      group-hover:w-[300%] group-hover:h-[300%] group-hover:bottom-1/2 group-hover:left-1/2
                      transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                    style={{
                      transform: "translate(-50%, 50%)",
                    }}
                  ></span>
                </span>
              </motion.button>
              {/* </motion.li> */}
            </motion.ul>
            {/* Your button, ul, li contents */}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
