import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonial from './components/testimonial';
import ServicesSection from './components/Services2';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
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
