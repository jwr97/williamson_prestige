import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Instagram from './components/Instagram'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Instagram />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
