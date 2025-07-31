import { Suspense, lazy } from 'react';

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
  return (
    <div className="font-sans overflow-x-hidden">
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



// import CursorTrailCanvas from "./components/CursorTrailCanvas";
// import Navbar from "./components/Navbar";
// import About_us from "./pages/about_us/About_us";
// import Book_a_table from "./pages/book_a_Table/Book_a_table";
// import Footer from "./pages/footer/Footer";
// import Hero from "./pages/hero/Hero";
// import Menu from "./pages/menu/Menu";
// import Testimonials from "./pages/testimonial/Testimonials";
// import Why_us from "./pages/why_us/Why_us";


// function App() {
//   return (
//     <div className="font-sans overflow-x-hidden">
//       <Navbar />
//       <Hero />
//       <Menu />
//       <Why_us/>
//       <Testimonials/>
//       <About_us/>
//       <Book_a_table/>
//       <CursorTrailCanvas/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;
