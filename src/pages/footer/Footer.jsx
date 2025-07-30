import React from "react";

function Footer() {
  return (
    <footer className="relative w-full min-h-screen flex justify-center items-center bg-[#1F2323]">
      <div className="center_footer_content w-[95vw] md:w-[80vw] lg:w-[65vw] xl:w-[52vw] h-full flex flex-col justify-center items-center px-4 md:px-8 py-12">
        {/* Main Title */}
        <h1 className="patoPlace text-[#B59079] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center">
          PATO PLACE
        </h1>
        {/* Address & Contact */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full text-zinc-200 mt-12 gap-8 md:gap-0">
          <div className="footer_left w-full md:w-1/2 text-left md:text-left">
            <h4 className="text-base md:text-lg tracking-wide">Address</h4>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-2 font-semibold">
              185 N. Glenwood St Jackson, WY 83001
            </h2>
          </div>
          <div className="footer_right w-full md:w-1/2 text-left md:text-right mt-0 md:mt-0">
            <h4 className="text-base md:text-lg tracking-wide">Contact</h4>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-2 font-semibold">1234567894</h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-2 font-semibold">pato123@gmail.com</h2>
          </div>
        </div>
        {/* Web Developer */}
        <div className="w-full flex flex-col lg:items-start items-center  mt-10">
          <h1 className="patoPlace text-[#B59079] text-2xl sm:text-3xl md:text-4xl text-left">
            web-developer
          </h1>
        </div>
        {/* Developer Info */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full text-zinc-200 mt-4 gap-8 md:gap-0">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-2 font-semibold">
              Gaurav Mahajan
            </h2>
          </div>
          <div className="footer_right w-full md:w-1/2 text-left md:text-right mt-0 md:mt-0">
            <h2 className="text-xl md:text-3xl lg:text-4xl mt-2 font-semibold">(+91) 9179233131</h2>
            <h2 className="text-xl md:text-3xl lg:text-4xl mt-2 font-semibold">wwizard428@gmail.com</h2>
          </div>
        </div>
        {/* Copyright */}
        <h1 className="text-zinc-200 text-sm sm:text-xl md:text-2xl mt-16 text-center">
          © 2025 The Pato Place &nbsp; - &nbsp; Website by Gaurav Mahajan
        </h1>
      </div>
      <div className="bg-[#B59079] w-full h-3 md:h-4 lg:h-5 absolute bottom-0 left-0"></div>
    </footer>
  );
}

export default Footer;

//
