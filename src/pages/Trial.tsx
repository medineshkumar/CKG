import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Trial() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-brand-black min-h-screen">
      <section className="py-16 md:py-20 container mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Info Side */}
          <div className="lg:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-brand-red font-bold tracking-[0.4em] uppercase text-sm italic mb-4 block">Take The First Step</span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white tracking-tighter leading-none mb-8">
                BOOK YOUR <br />
                <span className="text-brand-gold italic">FREE TRIAL</span>
              </h1>
              <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed">
                Experience the power, discipline, and energy of Central Kungfu Guan. Meet our instructors, see our academy, and take your first class on us.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Clock, title: '60 Min Session', desc: 'Full introductory class' },
                { icon: User, title: 'Personalized Info', desc: 'Guidance for your goals' },
                { icon: Calendar, title: 'Flexible Slots', desc: 'Weekday or Weekends' },
                { icon: BookOpen, title: 'No Obligations', desc: 'Try it before you join' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 glass rounded-2xl border-white/5">
                  <item.icon className="text-brand-red shrink-0" size={32} />
                  <div>
                    <h4 className="font-heading text-lg md:text-xl text-white tracking-widest">{item.title}</h4>
                    <p className="text-xs md:text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass p-6 md:p-8 rounded-3xl border-brand-gold/20">
              <p className="text-brand-gold font-bold italic mb-2 tracking-widest uppercase">Important Note:</p>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed italic">
                Please arrive 15 minutes before your scheduled trial class. Wear comfortable athletic clothing. We provide all necessary training equipment for the trial session.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2 w-full">
            <div className="glass p-8 md:p-12 rounded-[2.5rem] border-white/5 shadow-[0_0_50px_rgba(214,40,40,0.1)] relative">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-10 tracking-widest underline decoration-brand-red decoration-4 underline-offset-8">RESERVE YOUR MAT SPACE</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                        <input required type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-white outline-none focus:border-brand-red transition-all" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone</label>
                          <input required type="tel" placeholder="+91 900..." className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-white outline-none focus:border-brand-red transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Age</label>
                          <input required type="number" placeholder="Enter Age" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-white outline-none focus:border-brand-red transition-all" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Program Of Interest</label>
                        <select className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-white outline-none focus:border-brand-red transition-all appearance-none">
                          <option className="bg-brand-black">Kids Kung Fu (6-12 yrs)</option>
                          <option className="bg-brand-black">Teen Martial Arts (13-17 yrs)</option>
                          <option className="bg-brand-black">Adult Kung Fu (18+ yrs)</option>
                          <option className="bg-brand-black">Women's Self Defense</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Preferred Date</label>
                        <input required type="date" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-white outline-none focus:border-brand-red transition-all" />
                      </div>

                      <button type="submit" className="w-full px-10 md:px-12 py-4 md:py-5 bg-brand-red text-white font-heading text-base md:text-2xl tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all flex items-center justify-center gap-3 group mt-8">
                        CONFIRM TRIAL BOOKING <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20 space-y-8"
                  >
                    <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                      <motion.svg 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5 }}
                        xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></motion.svg>
                    </div>
                    <h3 className="font-heading text-3xl md:text-4xl text-white tracking-widest uppercase italic">RESERVATION RECEIVED!</h3>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-sm mx-auto">
                      Our Sensei will call you shortly to confirm your slot and provide directions to the academy.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-brand-gold font-bold underline underline-offset-8 tracking-widest uppercase hover:text-white transition-colors"
                    >
                      Book another slot
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
