import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Users, UserCheck, ShieldCheck, Zap, Sword } from 'lucide-react';

const programs = [
  {
    icon: Users,
    title: 'KIDS KUNG FU',
    desc: 'Build confidence, focus, discipline, and fitness in a fun environment for children.',
    img: 'https://images.unsplash.com/photo-1552072047-54f3eef6096a?q=80&w=800&auto=format&fit=crop',
    color: 'border-brand-red'
  },
  {
    icon: UserCheck,
    title: 'TEEN MARTIAL ARTS',
    desc: 'Develop strength, leadership, and practical self-defense skills for adolescents.',
    img: 'https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?q=80&w=800&auto=format&fit=crop',
    color: 'border-brand-gold'
  },
  {
    icon: ShieldCheck,
    title: 'ADULT KUNG FU',
    desc: 'Improve fitness, endurance, and mental focus through authentic techniques.',
    img: 'https://images.unsplash.com/photo-1606338329853-48e0259e0a2d?q=80&w=800&auto=format&fit=crop',
    color: 'border-brand-white'
  },
  {
    icon: Zap,
    title: 'WOMEN SELF DEFENSE',
    desc: 'Practical techniques to improve awareness, confidence, and personal safety.',
    img: 'https://images.unsplash.com/photo-1517438476312-10d79c67750d?q=80&w=800&auto=format&fit=crop',
    color: 'border-brand-red'
  },
  {
    icon: Sword,
    title: 'ADVANCED WEAPONRY',
    desc: 'Traditional weapon forms including staff, sabre, and spear for masters.',
    img: 'https://images.unsplash.com/photo-1549474843-ea971d399723?q=80&w=800&auto=format&fit=crop',
    color: 'border-brand-gold'
  }
];

export default function Programs() {
  return (
    <section className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-heading text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tighter">
              PROGRAMS FOR <br />
              <span className="text-brand-red underline decoration-brand-gold decoration-4 underline-offset-8">THE MODERN WARRIOR</span>
            </h2>
            <p className="text-gray-500 text-xl tracking-wide font-medium">
              We offer structured paths for every age and skill level. Find your discipline today.
            </p>
          </div>
          <Link 
            to="/programs" 
            className="px-8 py-3 border border-brand-red text-brand-red font-heading text-xl tracking-widest hover:bg-brand-red hover:text-white transition-all uppercase"
          >
            All Programs
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1">
          {programs.map((prog, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[500px] overflow-hidden cursor-pointer"
            >
              {/* Background */}
              <div className="absolute inset-0 z-0">
                <img src={prog.img} alt={prog.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className={`absolute inset-x-0 bottom-0 p-8 z-10 border-b-8 ${prog.color} transition-all duration-300 group-hover:pb-12 bg-gradient-to-t from-brand-black to-transparent`}>
                <prog.icon className="text-brand-red mb-6 group-hover:scale-125 transition-transform origin-left" size={40} />
                <h3 className="font-heading text-3xl text-white mb-4 tracking-widest">{prog.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {prog.desc}
                </p>
                <Link to="/trial" className="inline-flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-[0.2em] group/btn">
                  Enroll Now <span className="w-6 h-[1px] bg-brand-gold group-hover/btn:w-12 transition-all"></span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
