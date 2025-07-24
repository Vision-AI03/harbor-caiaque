import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experiences from '@/components/Experiences';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Experiences />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
