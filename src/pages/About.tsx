import { motion } from 'motion/react';
import { Target, Eye, Shield, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-brand-black">
      {/* Page Hero */}
      <section className="relative flex items-center justify-center overflow-hidden px-6 py-6 md:py-8 lg:py-10 h-[28vh] md:h-[32vh] lg:h-[36vh]">
        <img 
          src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2000&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
          alt="About Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
        
        <div className="relative z-10 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold text-white tracking-tight uppercase leading-tight"
          >
            THE SPIRIT OF <span className="text-brand-red text-stroke">GUAN</span>
          </motion.h1>
          <p className="text-brand-gold font-heading text-sm md:text-base font-semibold tracking-[0.35em] uppercase mt-4 opacity-80">Heritage • Discipline • Power</p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 container mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-8">OUR LEGACY IN BANGALORE</h2>
            <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
              <p>
                Central Kungfu Guan was founded with a singular vision: to preserve authentic martial arts traditions while helping students build confidence, discipline, fitness, and self-defense skills in today’s world.
              </p>
              <p>
                Our philosophy is built on respect, perseverance, humility, focus, and continuous self-improvement. We believe that Kung Fu isn't just a physical workout, but a mental training for life.
              </p>
              <p>
                Established over 15 years ago, we have become one of Bangalore’s most respected martial arts academies, known for our rigorous training standards and the remarkable transformations of our students.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden glass p-2">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden glass p-2 mt-12 sm:mt-0">
              <img src="https://images.unsplash.com/photo-1517438476312-10d79c67750d?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale brightness-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass p-10 md:p-12 rounded-3xl border-brand-red/20"
            >
              <Target className="text-brand-red mb-8" size={64} />
              <h3 className="font-heading text-4xl md:text-5xl text-white mb-6">OUR MISSION</h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                To empower individuals through martial arts by developing strong bodies, disciplined minds, fearless confidence, and positive character. We strive to provide the highest quality instruction in a supportive yet challenging environment.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="glass p-10 md:p-12 rounded-3xl border-brand-gold/20"
            >
              <Eye className="text-brand-gold mb-8" size={64} />
              <h3 className="font-heading text-4xl md:text-5xl text-white mb-6">OUR VISION</h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                To become Bangalore's most respected martial arts academy, recognized for transforming lives through the authentic teaching of Kung Fu traditions, fostering a community of disciplined, capable, and respectful individuals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 container mx-auto max-w-7xl px-6">
        <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-16 text-center tracking-tighter italic">CORE PILLARS OF THE GUAN</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'RESPECT', icon: Shield, color: 'text-brand-red' },
            { title: 'DISCIPLINE', icon: Award, color: 'text-brand-gold' },
            { title: 'FOCUS', icon: Target, color: 'text-brand-white' },
            { title: 'HUMILITY', icon: Eye, color: 'text-brand-red' }
          ].map((val, i) => (
            <div key={i} className="text-center space-y-6 flex flex-col items-center">
              <div className={`w-24 h-24 rounded-full glass flex items-center justify-center ${val.color}`}>
                <val.icon size={48} />
              </div>
              <h4 className="font-heading text-2xl md:text-3xl tracking-[0.2em] text-white italic">{val.title}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
