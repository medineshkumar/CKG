import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Phone, CalendarCheck } from 'lucide-react';

export default function RegistrationCTA() {
  return (
    <section className="py-24 bg-brand-red relative overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-black/20 origin-bottom-left skew-x-[-20deg]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl text-center lg:text-left">
            <h2 className="font-heading text-6xl md:text-8xl text-white mb-6 leading-none">
              START YOUR JOURNEY <br />
              <span className="text-brand-black">TODAY.</span>
            </h2>
            <p className="text-xl text-white/80 font-light mb-10 max-w-xl">
              Train with purpose. Build confidence. Become stronger every day. Limited slots available for our next foundation batch.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-white/90">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-brand-black" />
                <span className="font-heading tracking-widest text-lg">+91 77950 12123</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-brand-black" />
                <span className="font-heading tracking-widest text-lg">info.centralkungfuguan@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
            <Link 
              to="/trial" 
              className="px-12 py-6 bg-brand-black text-white font-heading text-2xl tracking-[0.2em] hover:bg-brand-gold hover:text-brand-black transition-all text-center flex items-center justify-center gap-4 group"
            >
              <CalendarCheck className="group-hover:rotate-12 transition-transform" />
              BOOK FREE TRIAL
            </Link>
            <Link 
              to="/contact" 
              className="px-12 py-6 border-2 border-brand-black text-brand-black font-heading text-2xl tracking-[0.2em] hover:bg-brand-black hover:text-white transition-all text-center"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
