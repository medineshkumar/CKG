import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-96px)] flex items-center overflow-hidden bg-brand-black">
      {/* Background with watermark text */}
      <div className="bg-watermark">
        <div className="bg-watermark-text">Spirit</div>
      </div>

      {/* Cinematic Media Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2000&auto=format&fit=crop" 
          alt="Martial Arts Background" 
          className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-brand-gold"></div>
              <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold">Traditional Kungfu Academy</span>
            </div>

            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] tracking-tight mb-8 text-white uppercase font-extrabold">
              MASTER <span className="text-brand-red">DISCIPLINE.</span><br />
              <span className="text-stroke text-white/5">EXCEED</span> <span className="text-brand-gold">LIMITS.</span>
            </h1>

            <p className="text-base md:text-lg text-white/60 max-w-lg mb-12 leading-relaxed font-medium">
              One stop premier destination for traditional Kung Fu and strategic self-defense. Forge your body, mind, and spirit into a singular weapon of discipline.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link 
                to="/trial" 
                className="px-8 py-4 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-brand-red hover:text-white transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              >
                Start Training
              </Link>
              
              <Link 
                to="/programs" 
                className="px-8 py-4 border border-white/20 hover:border-white text-white font-black uppercase text-xs tracking-widest transition-all"
              >
                Our Programs
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Side Stats Panel (Professional Polish adaptation) */}
        <div className="hidden lg:col-span-4 lg:flex flex-col space-y-12 bg-white/5 p-12 border-l border-white/10 h-full justify-center">
            <div>
              <div className="text-4xl font-bold text-brand-gold font-heading">15+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mt-1">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-gold font-heading">500+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mt-1">Active Warriors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-gold font-heading">12</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mt-1">Master Trainers</div>
            </div>
            
            <div className="pt-8 border-t border-white/10">
                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-2 font-bold italic">Latest Batch</p>
                <div className="p-4 bg-brand-red/10 border-l-4 border-brand-red">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white">Advanced Combat</h4>
                    <p className="text-[10px] text-white/60 mt-1 uppercase tracking-tighter">Mon • Wed • Fri | 7:30 PM</p>
                </div>
            </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-brand-red to-transparent" />
        <span className="text-[10px] uppercase tracking-widest mt-4">Scroll Down</span>
      </motion.div>
    </section>
  );
}
