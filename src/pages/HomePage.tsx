import Navbar from '@/components/Navbar/Navbar';
import HeroSection from '@/components/Hero/HeroSection';
import AboutSection from '@/components/About/AboutSection';
import WhyWestvilleSection from '@/components/WhyWestville/WhyWestvilleSection';
import MenuSection from '@/components/Menu/MenuSection';
import HoursLocationSection from '@/components/HoursLocation/HoursLocationSection';
import ReservationsSection from '@/components/Reservations/ReservationsSection';
import ReviewsSection from '@/components/Reviews/ReviewsSection';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyWestvilleSection />
      <MenuSection />
      <ReviewsSection />
      <HoursLocationSection />
      <ReservationsSection />
      <Footer />
    </>
  );
}
