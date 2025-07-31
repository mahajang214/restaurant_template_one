
import Lenis from '@studio-freight/lenis/types';
import { Suspense, lazy, useEffect, useRef } from 'react';









// Lazy load components
const CursorTrailCanvas = lazy(() => import("./components/CursorTrailCanvas"));
const Navbar = lazy(() => import("./components/Navbar"));
const About_us = lazy(() => import("./pages/about_us/About_us"));
const Book_a_table = lazy(() => import("./pages/book_a_Table/Book_a_table"));
const Footer = lazy(() => import("./pages/footer/Footer"));
const Hero = lazy(() => import("./pages/hero/Hero"));
const Menu = lazy(() => import("./pages/menu/Menu"));
const Testimonials = lazy(() => import("./pages/testimonial/Testimonials"));
const Why_us = lazy(() => import("./pages/why_us/Why_us"));



function App() {
  
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // optional: easing
      smoothTouch: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      // lenis.destroy();
    };
  }, []);

 

  return (
    
    <div
    id="main-container"
     className="overflow-x-hidden font-sans"
  >
        <Suspense fallback={<div className="text-white text-center p-4">Loading...</div>}>
          <Navbar />
          <Hero />
          <Menu />
          <Why_us />
          <Testimonials />
          <About_us />
          <Book_a_table />
          <CursorTrailCanvas />
          <Footer />
        </Suspense>
      </div>
    
  );
}

export default App;



// import { Suspense, lazy } from 'react';


// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollSmoother from "gsap/ScrollSmoother";
// import { useGSAP } from '@gsap/react';

// // Lazy load components
// const CursorTrailCanvas = lazy(() => import("./components/CursorTrailCanvas"));
// const Navbar = lazy(() => import("./components/Navbar"));
// const About_us = lazy(() => import("./pages/about_us/About_us"));
// const Book_a_table = lazy(() => import("./pages/book_a_Table/Book_a_table"));
// const Footer = lazy(() => import("./pages/footer/Footer"));
// const Hero = lazy(() => import("./pages/hero/Hero"));
// const Menu = lazy(() => import("./pages/menu/Menu"));
// const Testimonials = lazy(() => import("./pages/testimonial/Testimonials"));
// const Why_us = lazy(() => import("./pages/why_us/Why_us"));


// gsap.registerPlugin(ScrollSmoother);

// function App() {
//   const smootherRef = useRef(null);

//   useGSAP(() => {
//     if (!smootherRef.current) {
//       smootherRef.current = ScrollSmoother.create({
//         wrapper: "#smooth-wrapper",    // ✅ specify wrapper
//         content: "#smooth-content",    // ✅ specify content
//         smooth: 1.2,
//         effects: true,
//         normalizeScroll: true,
//         smoothTouch: 0.1,
//       });
//     }

//     return () => {
//       if (smootherRef.current) {
//         smootherRef.current.kill();
//         smootherRef.current = null;
//       }
//     };
//   }, []);

//   return (
//     <div id="smooth-wrapper" className="font-sans overflow-x-hidden">
//     <div id="smooth-content">

//       <Suspense fallback={<div className="text-white text-center p-4">Loading...</div>}>
//         <Navbar />
//         <Hero />
//         <Menu />
//         <Why_us />
//         <Testimonials />
//         <About_us />
//         <Book_a_table />
//         <CursorTrailCanvas />
//         <Footer />
//       </Suspense>
//     </div>
//     </div>
//   );
// }

// export default App;


