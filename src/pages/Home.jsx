import Hero from '../components/Hero';
import Rooms from '../components/Rooms';
import Amenities from '../components/Amenities';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Icon from '../components/Icon';

function TrustBar() {
  const trustItems = [
    { icon: 'ti-sparkles', label: 'Brand-new studios' },
    { icon: 'ti-discount-check', label: 'Book direct for the best rate' },
    { icon: 'ti-shield-check', label: 'Free cancellation' },
    { icon: 'ti-wifi', label: 'Fast Wi-Fi in all studios' },
    { icon: 'ti-coffee', label: 'Welcome olive oil basket' },
  ];

  return (
    <div className="bg-paper border-b border-line px-6 md:px-12 py-[18px] flex gap-x-10 gap-y-3 items-center justify-center flex-wrap">
      {trustItems.map((item) => (
        <div key={item.label} className="flex items-center gap-2 text-[13px] text-muted">
          <Icon name={item.icon} className="text-olive-600 text-[16px]" /> {item.label}
        </div>
      ))}
    </div>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Rooms />
      <Amenities />
      <Location />
      <Contact />
    </main>
  );
}

export default Home;
