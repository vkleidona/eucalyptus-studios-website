import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#f5f3ee] border-t border-[#e0ddd6] px-6 md:px-12 py-10">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 mb-8">
        <div>
          <p className="font-serif text-[18px] text-[#1a1a18] mb-2.5">
            olea <span className="text-[#7a8c5e]">living</span>
          </p>
          <p className="text-[13px] text-[#6b6b64] line-height-[1.6] max-w-[220px] font-light">
            Slow stays in the heart of Messinia. Studios designed for those who travel with intention.
          </p>
        </div>

        <div>
          <h4 className="text-[12px] font-medium text-[#1a1a18] tracking-wider uppercase mb-3.5">Studios</h4>
          {["Karpos Studio", "Elia Suite", "Petra Family"].map((link) => (
            <a key={link} href="#" className="block text-[13px] text-[#6b6b64] hover:text-[#1a1a18] mb-2 font-light transition-colors">{link}</a>
          ))}
        </div>

        <div>
          <h4 className="text-[12px] font-medium text-[#1a1a18] tracking-wider uppercase mb-3.5">Explore</h4>
          {["Kalamata", "Mani peninsula", "Things to do", "Local food"].map((link) => (
            <a key={link} href="#" className="block text-[13px] text-[#6b6b64] hover:text-[#1a1a18] mb-2 font-light transition-colors">{link}</a>
          ))}
        </div>

        <div>
          <h4 className="text-[12px] font-medium text-[#1a1a18] tracking-wider uppercase mb-3.5">Info</h4>
          {["Book direct", "Policies", "FAQ", "Contact us"].map((link) => (
            <a key={link} href="#" className="block text-[13px] text-[#6b6b64] hover:text-[#1a1a18] mb-2 font-light transition-colors">{link}</a>
          ))}
        </div>
      </div>

      <div className="border-t border-[#e0ddd6] pt-5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[12px] text-[#9b9b92]">© 2025 Olea Living, Kalamata. All rights reserved.</p>
        <p className="text-[12px] text-[#9b9b92] font-light">Made with care in Messinia</p>
      </div>
    </footer>
  );
}

export default Footer;