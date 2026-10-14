import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyOIAI from './components/WhyOIAI';
import Courses from './components/Courses';
import Roadmap from './components/Roadmap';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyOIAI />
        <Courses />
        <Roadmap />
        <Experience />
        <Testimonials />
        <Blog />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
