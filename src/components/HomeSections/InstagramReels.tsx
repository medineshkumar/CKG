import { motion } from 'motion/react';
import { Instagram, Play, Heart, MessageCircle } from 'lucide-react';

const reels = [
  { img: 'https://images.unsplash.com/photo-1548690312-e3b507d17a4?q=80&w=400&auto=format&fit=crop', likes: '1.2k', comments: '45' },
  { img: 'https://images.unsplash.com/photo-1517438476312-10d79c67750d?q=80&w=400&auto=format&fit=crop', likes: '890', comments: '22' },
  { img: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=400&auto=format&fit=crop', likes: '2.5k', comments: '120' },
  { img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&auto=format&fit=crop', likes: '1.5k', comments: '67' }
];

export default function InstagramReels() {
  return (
    <section className="py-32 bg-[#080808] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Instagram className="text-brand-red" size={24} />
              <span className="text-brand-gold font-heading text-xl tracking-widest uppercase">@CentralKungfuGuan</span>
            </div>
            <h2 className="font-heading text-5xl md:text-7xl text-white tracking-tighter">TRAIN. SWEAT. TRANSFORM.</h2>
          </div>
          <a 
            href="#" 
            className="px-10 py-4 bg-transparent border-2 border-brand-red text-white font-heading text-2xl tracking-widest hover:bg-brand-red transition-all"
          >
            FOLLOW OUR JOURNEY
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img src={reel.img} alt="Reel thumbnail" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/10 transition-all flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full glass border-brand-red flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform">
                  <Play className="fill-current" size={28} />
                </div>
              </div>

              {/* Reel Info */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-10 translate-y-10 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-4 text-white">
                  <div className="flex items-center gap-1 font-bold text-sm">
                    <Heart size={16} className="fill-brand-red text-brand-red" /> {reel.likes}
                  </div>
                  <div className="flex items-center gap-1 font-bold text-sm">
                    <MessageCircle size={16} /> {reel.comments}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                  <Play size={14} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
