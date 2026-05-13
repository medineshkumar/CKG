import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Visual Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 glass p-3">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop" 
                alt="Kung Fu Master" 
                className="rounded-xl w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-red/30 rounded-full blur-[80px]" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-[80px]" />
            
            <div className="absolute -bottom-6 -left-6 z-20 glass p-6 rounded-2xl border-brand-gold/30">
              <p className="font-heading text-4xl text-brand-gold">15+ <span className="text-white">YEARS</span></p>
              <p className="text-xs tracking-[0.3em] uppercase text-gray-400">OF ANCIENT WISDOM</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Sparkles className="text-brand-red" size={20} />
                <span className="text-brand-red font-bold tracking-[0.4em] uppercase text-sm italic">The Guan Tradition</span>
              </div>
              <h2 className="font-heading text-6xl md:text-7xl lg:text-8xl leading-none font-extrabold text-white mb-8 tracking-tight">
                MORE THAN<br /><span className="text-brand-red">MARTIAL ARTS</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-xl">
                <p>
                  At Central Kungfu Guan, Kung Fu is more than fighting — it is a path to discipline, confidence, focus, respect, and self-improvement. 
                </p>
                <p>
                  Our training combines traditional martial arts philosophy with modern self-defense and fitness techniques to help students become stronger physically and mentally.
                </p>
                <p>
                  Whether you are a complete beginner or an experienced martial artist, our programs are designed for every age and skill level.
                </p>
              </div>

              <div className="pt-10 flex flex-wrap gap-8 items-center">
                <Link 
                  to="/programs" 
                  className="px-10 py-4 bg-brand-red text-white font-heading text-2xl tracking-widest hover:scale-105 transition-transform"
                >
                  DISCOVER PROGRAMS
                </Link>
                <Link 
                  to="/about" 
                  className="text-white hover:text-brand-gold font-heading text-2xl tracking-widest underline underline-offset-8 transition-colors"
                >
                  OUR STORY
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
