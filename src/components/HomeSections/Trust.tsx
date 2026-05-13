import { motion } from 'motion/react';
import { Shield, Users, Award, Zap } from 'lucide-react';

const stats = [
  { icon: Shield, label: 'Traditional Kung Fu', color: 'text-brand-red' },
  { icon: Award, label: 'Certified Trainers', color: 'text-brand-gold' },
  { icon: Users, label: 'All Age Groups', color: 'text-brand-white' },
  { icon: Zap, label: 'Modern Self Defense', color: 'text-brand-red' },
];

export default function Trust() {
  return (
    <section className="py-16 bg-brand-black/50 border-y border-white/5 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center md:flex-row md:items-center md:justify-center md:space-x-4 space-y-4 md:space-y-0 text-center md:text-left"
            >
              <item.icon className={item.color} size={32} />
              <div>
                <h4 className="font-heading text-xl md:text-2xl tracking-widest text-white">{item.label}</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Excellence Guaranteed</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
