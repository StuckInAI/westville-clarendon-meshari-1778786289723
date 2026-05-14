import Navbar from '@/components/Navbar/Navbar';
import HeroSection from '@/components/Hero/HeroSection';
import AboutSection from '@/components/About/AboutSection';
import MenuSection from '@/components/Menu/MenuSection';
import HoursLocationSection from '@/components/HoursLocation/HoursLocationSection';
import ReviewsSection from '@/components/Reviews/ReviewsSection';
import WhyWestvilleSection from '@/components/WhyWestville/WhyWestvilleSection';
import ReservationsSection from '@/components/Reservations/ReservationsSection';
import Footer from '@/components/Footer/Footer';
import FloatingOrderButton from '@/components/FloatingOrderButton/FloatingOrderButton';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <HoursLocationSection />
        <ReviewsSection />
        <WhyWestvilleSection />
        <ReservationsSection />
      </main>
      <Footer />
      <FloatingOrderButton />
    </div>
  );
}
