import CursorTrailCanvas from "./components/CursorTrailCanvas";
import Navbar from "./components/Navbar";
import About_us from "./pages/about_us/About_us";
import Book_a_table from "./pages/book_a_Table/Book_a_table";
import Footer from "./pages/footer/Footer";
import Hero from "./pages/hero/Hero";
import Menu from "./pages/menu/Menu";
import Testimonials from "./pages/testimonial/Testimonials";
import Why_us from "./pages/why_us/Why_us";


function App() {
  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Menu />
      <Why_us/>
      <Testimonials/>
      <About_us/>
      <Book_a_table/>
      <CursorTrailCanvas/>
      <Footer/>
    </div>
  );
}

export default App;
