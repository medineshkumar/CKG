import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: "Do beginners need prior experience?",
    a: "No. Our programs are beginner-friendly and designed to take you from the very foundations to advanced levels. Everyone starts somewhere!"
  },
  {
    q: "What age groups do you train?",
    a: "We have specialized programs for Kids (6-12), Teens (13-17), and Adults (18+). Each curriculum is age-appropriate."
  },
  {
    q: "Do you offer self-defense classes?",
    a: "Yes. In addition to traditional Kung Fu, we provide practical, real-world self-defense training designed for immediate effectiveness."
  },
  {
    q: "How many classes are conducted per week?",
    a: "We offer multiple batches throughout the week. Students typically attend 2-3 sessions per week depending on their program."
  },
  {
    q: "Can I attend a trial class?",
    a: "Absolutely. We encourage all prospective students to attend a free trial session to experience our training environment and meet the instructors."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-32 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="font-heading text-6xl md:text-7xl text-white mb-6">COMMON QUESTIONS</h2>
            <p className="text-brand-gold font-heading text-2xl tracking-widest uppercase mb-10">Everything You Need To Know</p>
            <div className="glass p-8 rounded-2xl border-brand-red/20 inline-flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-red/20 rounded-full flex items-center justify-center text-brand-red">
                <HelpCircle size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Still have questions?</p>
                <a href="/contact" className="text-white font-bold underline underline-offset-4 hover:text-brand-red transition-colors">Contact Our Team</a>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className={`rounded-2xl transition-all duration-300 ${openIdx === idx ? 'bg-white/5 border border-white/10' : 'bg-transparent border border-white/5 hover:border-white/20'}`}
              >
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left"
                >
                  <span className="font-heading text-2xl md:text-3xl text-white tracking-widest">{faq.q}</span>
                  <ChevronDown className={`text-brand-red transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 text-gray-400 text-lg leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
