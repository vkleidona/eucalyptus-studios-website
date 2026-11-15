import {
  IconAirConditioning,
  IconArrowLeft,
  IconBrandInstagram,
  IconBuildingStore,
  IconCalendar,
  IconCar,
  IconCheck,
  IconCoffee,
  IconDiscountCheck,
  IconLeaf,
  IconLockOpen,
  IconMail,
  IconMailCheck,
  IconMap2,
  IconMapPin,
  IconMenu2,
  IconMountain,
  IconPhone,
  IconPhoto,
  IconPlane,
  IconRuler2,
  IconShieldCheck,
  IconShirt,
  IconSparkles,
  IconSwimming,
  IconToolsKitchen2,
  IconUsers,
  IconWifi,
  IconX,
} from '@tabler/icons-react';

// Only the icons listed here end up in the site, which keeps pages light.
// To use a new icon, import it above and add it to this list (names from tabler.io/icons).
const ICONS = {
  'ti-air-conditioning': IconAirConditioning,
  'ti-arrow-left': IconArrowLeft,
  'ti-brand-instagram': IconBrandInstagram,
  'ti-building-store': IconBuildingStore,
  'ti-calendar': IconCalendar,
  'ti-car': IconCar,
  'ti-check': IconCheck,
  'ti-coffee': IconCoffee,
  'ti-discount-check': IconDiscountCheck,
  'ti-leaf': IconLeaf,
  'ti-lock-open': IconLockOpen,
  'ti-mail': IconMail,
  'ti-mail-check': IconMailCheck,
  'ti-map-2': IconMap2,
  'ti-map-pin': IconMapPin,
  'ti-menu-2': IconMenu2,
  'ti-mountain': IconMountain,
  'ti-phone': IconPhone,
  'ti-photo': IconPhoto,
  'ti-plane': IconPlane,
  'ti-ruler-2': IconRuler2,
  'ti-shield-check': IconShieldCheck,
  'ti-shirt': IconShirt,
  'ti-sparkles': IconSparkles,
  'ti-swimming': IconSwimming,
  'ti-tools-kitchen-2': IconToolsKitchen2,
  'ti-users': IconUsers,
  'ti-wifi': IconWifi,
  'ti-x': IconX,
};

// Sized with the text: a class like text-[16px] sets the icon size, text-olive-700 its colour.
function Icon({ name, className = '' }) {
  const Svg = ICONS[name];
  if (!Svg) return null;
  return <Svg size="1em" stroke={2} aria-hidden="true" className={`inline-block shrink-0 align-[-0.125em] ${className}`} />;
}

export default Icon;
