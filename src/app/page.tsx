import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonial from './components/testimonial';
import HowItWorksSection from './components/howItWork';
import FaqSection from './components/FAQ';
import ServicesSection from './Services/page';
import Cta from './components/cta';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <ServicesSection/>
          
        </section>
         <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="FaqSection">
          <FaqSection />

        </section>
         <section id="Contact">
          <Contact />
          
        </section>
         <section id="cta">
          <Cta/>
        </section>
        <section id="testimonial">
          <Testimonial/>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
