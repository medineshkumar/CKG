import Hero from '../components/HomeSections/Hero';
import Trust from '../components/HomeSections/Trust';
import AboutPreview from '../components/HomeSections/AboutPreview';
import Programs from '../components/HomeSections/Programs';
import WhyChoose from '../components/HomeSections/WhyChoose';
import Transformations from '../components/HomeSections/Transformations';
import InstagramReels from '../components/HomeSections/InstagramReels';
import GalleryPreview from '../components/HomeSections/GalleryPreview';
import Testimonials from '../components/HomeSections/Testimonials';
import RegistrationCTA from '../components/HomeSections/RegistrationCTA';
import FAQ from '../components/HomeSections/FAQ';

export default function Home() {
  return (
    <div className="bg-brand-black">
      <Hero />
      <Trust />
      <AboutPreview />
      <Programs />
      <WhyChoose />
      <Transformations />
      <InstagramReels />
      <GalleryPreview />
      <Testimonials />
      <RegistrationCTA />
      <FAQ />
    </div>
  );
}
