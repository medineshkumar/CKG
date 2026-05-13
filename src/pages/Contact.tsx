import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 bg-brand-black min-h-screen">
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="font-heading text-7xl md:text-9xl text-white tracking-tighter mb-6 underline decoration-brand-red decoration-8">CONTACT US</h1>
          <p className="text-brand-gold font-heading text-2xl tracking-[0.3em] uppercase">Connect With The Academy</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
          {/* Info Side */}
          <div className="lg:w-1/3 space-y-12">
            <div className="space-y-8">
              <h3 className="font-heading text-4xl text-white tracking-widest">GET IN TOUCH</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-red shrink-0 border border-white/5">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h5 className="font-heading text-xl text-brand-gold uppercase tracking-widest mb-1">Our Location</h5>
                    <p className="text-gray-400 leading-relaxed">Central Kungfu Guan, No. 45, High Street,<br />Near Brigade Road, Bangalore - 560001</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-red shrink-0 border border-white/5">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h5 className="font-heading text-xl text-brand-gold uppercase tracking-widest mb-1">Call Us</h5>
                    <p className="text-gray-400">+91 98765 43210</p>
                    <p className="text-gray-400">+91 80 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-red shrink-0 border border-white/5">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h5 className="font-heading text-xl text-brand-gold uppercase tracking-widest mb-1">Email Us</h5>
                    <p className="text-gray-400">train@centralkungfu.in</p>
                    <p className="text-gray-400">info@centralkungfu.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-heading text-3xl text-white tracking-widest">FOLLOW THE GUAN</h3>
              <div className="flex gap-4">
                {[Instagram, Facebook, Youtube].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 bg-white/5 hover:bg-brand-red border border-white/10 transition-all rounded-full flex items-center justify-center text-white">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <div className="glass p-12 rounded-[2.5rem] border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 blur-[80px]" />
              
              <h3 className="font-heading text-4xl text-white mb-10 tracking-widest underline decoration-brand-gold decoration-4 underline-offset-8">SEND A MESSAGE</h3>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-white outline-none focus:border-brand-red transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                    <input type="tel" placeholder="+91 90000 00000" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-white outline-none focus:border-brand-red transition-colors" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Program Interest</label>
                  <select className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-white outline-none focus:border-brand-red transition-colors appearance-none">
                    <option className="bg-brand-black">Kids Kung Fu</option>
                    <option className="bg-brand-black">Teen Martial Arts</option>
                    <option className="bg-brand-black">Adult Training</option>
                    <option className="bg-brand-black">Women Self Defense</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                  <textarea rows={5} placeholder="Tell us about your goals..." className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-white outline-none focus:border-brand-red transition-colors resize-none"></textarea>
                </div>

                <button className="w-full md:w-auto px-12 py-5 bg-brand-red text-white font-heading text-3xl tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4">
                  SEND INQUIRY <Send size={24} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Segment Placeholder */}
      <section className="h-[500px] w-full bg-[#050505] relative flex items-center justify-center overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop')] bg-cover grayscale" />
        <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-[0_0_40px_rgba(214,40,40,0.5)] animate-bounce">
                <MapPin size={40} />
            </div>
            <h2 className="font-heading text-4xl text-white italic tracking-widest">FIND US IN THE HEART OF BANGALORE</h2>
            <p className="text-gray-400 mt-2 uppercase tracking-widest">Brigade Road Area • Open Daily</p>
        </div>
      </section>
    </div>
  );
}
