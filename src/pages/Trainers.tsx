import { motion } from 'motion/react';
import { Award, Zap, Shield, Star, Instagram, Twitter } from 'lucide-react';

const trainers = [
  {
    name: 'SIFU LAI YIN FU',
    role: 'Head Instructor',
    exp: '25+ Years Experience',
    special: 'Traditional Kung Fu & Weaponry',
    bio: 'Dedicated to preserving the ancient arts while adapting them for modern defense.',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Sihing LAI YUEN MO',
    role: 'Senior Trainer',
    exp: '10+ Years Experience',
    special: 'Traditional Kung Fu',
    bio: 'Focused on high-intensity drills and peak physical performance for competitive fighters.',
    img: 'https://images.unsplash.com/photo-1548690312-e3b507d17a4?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'COACH PRIYA',
    role: 'Self-Defense Specialist',
    exp: '10+ Years Experience',
    special: 'Women\'s Self Defense & Kids Program',
    bio: 'An expert in situational awareness and psychological preparedness in defense situations.',
    img: 'https://images.unsplash.com/photo-1517438476312-10d79c67750d?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'COACH VIKRAM',
    role: 'Technique Lead',
    exp: '15+ Years Experience',
    special: 'Bagua & Tai Chi Internal Arts',
    bio: 'Teaching the balance of power and fluidity through internal energy cultivation.',
    img: 'https://images.unsplash.com/photo-1606338329853-48e0259e0a2d?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Trainers() {
  return (
    <div className="bg-brand-black min-h-screen">
      <section className="py-16 md:py-20 container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 md:mb-20">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter mb-6 underline decoration-brand-gold decoration-4">MEET THE MASTERS</h1>
          <p className="text-brand-red font-heading text-base md:text-2xl tracking-[0.3em] uppercase">Certified Instructors • Proven Results</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass group overflow-hidden rounded-[2rem] border-white/5 hover:border-brand-red/30 transition-all"
            >
              <div className="h-80 md:h-96 relative overflow-hidden">
                <img 
                  src={trainer.img} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-center gap-4 translate-y-12 group-hover:translate-y-0 transition-transform">
                  <div className="w-10 h-10 rounded-full glass border-brand-red flex items-center justify-center text-white hover:bg-brand-red transition-colors cursor-pointer">
                    <Instagram size={18} />
                  </div>
                  <div className="w-10 h-10 rounded-full glass border-brand-red flex items-center justify-center text-white hover:bg-brand-red transition-colors cursor-pointer">
                    <Twitter size={18} />
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-heading text-2xl md:text-3xl text-white tracking-widest">{trainer.name}</h3>
                  <p className="text-brand-gold font-heading text-base md:text-xl italic">{trainer.role}</p>
                </div>

                <div className="space-y-4 border-t border-white/5 pt-4">
                  <div className="flex items-center gap-3 text-gray-400 text-sm md:text-base">
                    <Award className="text-brand-red shrink-0" size={16} />
                    <span>{trainer.exp}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 text-sm md:text-base">
                    <Zap className="text-brand-red shrink-0" size={16} />
                    <span>{trainer.special}</span>
                  </div>
                  <p className="text-gray-500 text-xs md:text-sm italic leading-relaxed pt-2">
                    "{trainer.bio}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="py-16 md:py-20 bg-[#080808] border-y border-brand-red/10">
        <div className="container mx-auto max-w-6xl px-6 text-center italic">
          <Star className="text-brand-gold mx-auto mb-8" size={48} />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white tracking-widest mx-auto leading-normal">
            "A SIFU IS NOT JUST A TEACHER, BUT A BEACON ON THE PATH TO SELF-MASTERY."
          </h2>
        </div>
      </section>
    </div>
  );
}
