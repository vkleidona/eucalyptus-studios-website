import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Location from './components/Location';
import Footer from './components/Footer';

function TrustBar() {
  const corporateTrusts = [
    { icon: "ti-star", label: "4.9 avg rating" },
    { icon: "ti-shield-check", label: "Free cancellation" },
    { icon: "ti-wifi", label: "Fast Wi-Fi in all studios" },
    { icon: "ti-home", label: "Fully equipped kitchenette" },
    { icon: "ti-coffee", label: "Welcome olive oil basket" },
  ];

  return (
    <div className="bg-[#f5f3ee] border-b border-[#e0ddd6] px-6 md:px-12 py-[18px] flex gap-10 items-center justify-center flex-wrap">
      {corporateTrusts.map((item, index) => (
        <div key={index} className="flex items-center gap-2 text-[13px] text-[#6b6b64]">
          <i className={`ti ${item.icon} text-[#7a8c5e] text-[16px]`}></i> {item.label}
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a18]">
      <Navbar />
      <Hero />
      <TrustBar />
      <Rooms />
      <Amenities />
      <Location />
      <Footer />
    </div>
  );
}

export default App;