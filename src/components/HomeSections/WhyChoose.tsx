import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Authentic Traditional Kung Fu',
  'Modern Self Defense Techniques',
  'Structured Training Programs',
  'Experienced Certified Trainers',
  'Positive Community Environment',
  'Fitness + Discipline + Confidence',
  'Belt Progression System',
  'Training For All Age Groups',
];

export default function WhyChoose() {
  return (
    <section className="py-32 relative">
      {/* Background text stroke effect */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.03]">
        <h2 className="font-heading text-[20vw] font-black whitespace-nowrap text-stroke select-none">
          PERFORMANCE
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-heading text-6xl md:text-8xl font-extrabold text-white mb-6 tracking-tight italic">WHY STUDENTS CHOOSE US</h2>
          <p className="text-xl text-gray-500 tracking-[0.2em] font-bold uppercase">The Professional Standard In Bangalore</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-xl border-white/5 hover:border-brand-red/30 transition-all flex flex-col items-center text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center">
                <CheckCircle2 className="text-brand-red" size={32} />
              </div>
              <h4 className="font-heading text-2xl text-white tracking-widest">{benefit}</h4>
            </motion.div>
          ))}
        </div>

        {/* Video CTA Integration */}
        <div className="mt-32 rounded-3xl overflow-hidden relative group">
          <img 
            src="https://images.unsplash.com/photo-1549474843-ea971d399723?q=80&w=1600&auto=format&fit=crop" 
            alt="Training Session Overlay" 
            className="w-full h-[500px] object-cover contrast-125 object-center grayscale brightness-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <h3 className="font-heading text-4xl md:text-6xl text-brand-gold mb-6 tracking-widest">SEE IT IN ACTION</h3>
            <p className="max-w-2xl text-gray-300 text-lg mb-10">Watch how we blend tradition with power. Our training environment is designed to push you beyond your limits.</p>
            <div className="w-24 h-24 rounded-full border-4 border-brand-red flex items-center justify-center cursor-pointer hover:bg-brand-red transition-all group-hover:scale-110">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
