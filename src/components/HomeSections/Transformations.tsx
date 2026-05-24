import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const stories = [
  {
    name: 'Dinesh Kumar R.',
    role: 'IT Professional',
    before: 'Low confidence and poor physical fitness due to sedentary lifestyle.',
    after: 'Improved discipline, lost 15kg, and gained mental clarity for better work performance.',
    img: 'https://images.unsplash.com/photo-1548690312-e3b507d17a4.q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Rohan M.',
    role: 'Student, 12yrs',
    before: 'Difficulty with focus and excessive screen time.',
    after: 'More active lifestyle, better concentration in academics, and stronger physical coordination.',
    img: 'https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Priya S.',
    role: 'Graphic Designer',
    before: 'Constant fear of self-defense situations while commuting.',
    after: 'Increased awareness, fearless confidence, and mastery of practical self-defense techniques.',
    img: 'https://images.unsplash.com/photo-1517438476312-10d79c67750d?q=80&w=400&auto=format&fit=crop'
  }
];

export default function Transformations() {
  return (
    <section className="py-32 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="font-heading text-6xl md:text-6xl text-white mb-6">REAL TRANSFORMATIONS</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {stories.map((story, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-3xl overflow-hidden border-white/5 group hover:border-brand-gold/30 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={story.img} alt={story.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-transparent transition-all" />
                <div className="absolute top-6 left-6 w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white">
                  <Quote size={20} />
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="font-heading text-3xl text-white">{story.name}</h4>
                  <p className="text-brand-gold text-xs uppercase tracking-widest">{story.role}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-brand-red font-bold block mb-2">Before</span>
                    <p className="text-gray-400 text-sm italic">{story.before}</p>
                  </div>
                  <div className="w-full h-[1px] bg-white/5"></div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-green-500 font-bold block mb-2">After</span>
                    <p className="text-gray-200 font-medium">{story.after}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
