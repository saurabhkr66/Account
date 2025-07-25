import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonial from './components/testimonial';
import FaqSection from './components/FAQ';
import Cta from './components/cta';
import WhoWeServe from './components/howItWork';
import ContactUs from './components/Contact';
import ServicesSection from './components/Services2';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>

<section id="services" className="min-h-screen">
  <ServicesSection />
</section>


        <section id="how-it-works">
          <WhoWeServe />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="faq"> {/* ✅ fixed from 'FaqSection' */}
          <FaqSection />
        </section>

        <section id="contact"> {/* ✅ fixed from 'Contact' */}
          <ContactUs />
        </section>

        <section id="cta">
          <Cta />
        </section>

        <section id="testimonial">
          <Testimonial />
        </section>
      </main>
      <Footer />
    </div>
  );
};


export default Index;
