import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: "The training completely changed my confidence and fitness. The instructors are supportive, disciplined, and motivating. It's the best decision I've made for my physical and mental health.",
    author: "Rahul Varma",
    role: "Adult Kung Fu Student",
    stars: 5
  },
  {
    text: "One of the best martial arts academies in Bangalore for authentic Kung Fu training and self-defense. My son looks forward to every class and his focus has improved tremendously.",
    author: "Sneha Reddy",
    role: "Parent of Kids Program",
    stars: 5
  },
  {
    text: "As a woman, learning self-defense here has given me a sense of security and power I never had before. Practical, intense, and empowering sessions every single time.",
    author: "Manasvi Iyer",
    role: "Self Defense Workshop Participant",
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Decorative large quote in background */}
      <div className="absolute top-0 right-0 opacity-5 -translate-y-20 translate-x-20">
        <Quote size={500} className="text-brand-red" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-heading text-6xl md:text-8xl text-white mb-6">WHAT OUR STUDENTS SAY</h2>
          <p className="text-brand-gold font-heading text-2xl tracking-widest uppercase">Direct From The Dojo</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-10 rounded-3xl relative border-white/5 flex flex-col justify-between hover:bg-white/10 transition-all duration-500"
            >
              <Quote className="text-brand-red mb-8" size={32} />
              
              <p className="text-gray-300 text-lg italic leading-relaxed mb-10">
                "{item.text}"
              </p>

              <div>
                <div className="flex space-x-1 mb-4">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <h4 className="font-heading text-2xl text-white tracking-widest">{item.author}</h4>
                <p className="text-brand-red text-xs uppercase tracking-widest font-bold">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
