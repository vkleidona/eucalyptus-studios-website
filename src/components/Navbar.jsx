import React from 'react';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-[18px] border-b border-[#e0ddd6] bg-white sticky top-0 z-50">
      <div className="font-serif text-[20px] font-normal tracking-wide text-[#1a1a18]">
        olea <span className="text-[#7a8c5e]">living</span>
      </div>
      <div className="hidden md:flex gap-7">
        {["Studios", "Experiences", "Location", "About", "Contact"].map((link) => (
          <a key={link} href="#" className="text-[13px] text-[#6b6b64] hover:text-[#1a1a18] transition-colors duration-200 tracking-wide">
            {link}
          </a>
        ))}
      </div>
      <button className="text-[13px] bg-[#4a5e35] text-[#f5f0e8] border-none px-[18px] py-2 rounded-lg cursor-pointer tracking-wide hover:bg-[#3d4f28] transition-colors">
        Book now
      </button>
    </nav>
  );
}

export default Navbar;