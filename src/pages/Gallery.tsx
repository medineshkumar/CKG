import { motion } from 'motion/react';
import { useState } from 'react';
import { Maximize2, X } from 'lucide-react';

const galleryItems = [
  { url: 'https://images.unsplash.com/photo-1555597673-b21d5c935865', category: 'Training', title: 'Kung Fu Sparring' },
  { url: 'https://images.unsplash.com/photo-1552072047-54f3eef6096a', category: 'Kids', title: 'Junior Warrior Focus' },
  { url: 'https://images.unsplash.com/photo-1509563268479-0f004cf3f58b', category: 'Group', title: 'Advanced Forms' },
  { url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b', category: 'Technique', title: 'Meditation in Action' },
  { url: 'https://images.unsplash.com/photo-1517438476312-10d79c67750d', category: 'Self Defense', title: 'Real World Training' },
  { url: 'https://images.unsplash.com/photo-1606338329853-48e0259e0a2d', category: 'Adults', title: 'Night Dojo Session' },
  { url: 'https://images.unsplash.com/photo-1549474843-ea971d399723', category: 'Competitions', title: 'Champion Spirit' },
  { url: 'https://images.unsplash.com/photo-1548690312-e3b507d17a4', category: 'Conditioning', title: 'Peak Performance' }
];

const categories = ['All', 'Training', 'Kids', 'Group', 'Self Defense', 'Competitions'];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredItems = activeTab === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="pt-24 bg-brand-black min-h-screen">
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="font-heading text-7xl md:text-9xl text-white tracking-tighter mb-6">MOMENTS OF <span className="text-brand-red italic">GUAN</span></h1>
          <p className="text-brand-gold font-heading text-2xl tracking-[0.3em] uppercase">Visualizing Discipline & Strength</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-2 font-heading text-xl tracking-widest transition-all ${
                activeTab === cat 
                  ? 'bg-brand-red text-white' 
                  : 'bg-white/5 text-gray-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, idx) => (
            <motion.div 
              key={idx}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative overflow-hidden group rounded-3xl cursor-pointer"
              onClick={() => setSelectedImg(item.url)}
            >
              <img 
                src={`${item.url}?q=40&w=800&auto=format&fit=crop`} 
                alt={item.title} 
                className="w-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center space-y-4">
                <Maximize2 size={32} className="text-brand-gold" />
                <h4 className="font-heading text-3xl text-white tracking-widest text-center px-6">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-brand-black/95 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-10 right-10 text-white hover:text-brand-red transition-colors">
            <X size={48} />
          </button>
          <img 
            src={`${selectedImg}?q=100&w=2000&auto=format&fit=crop`} 
            className="max-w-full max-h-full object-contain shadow-2xl border border-white/10 p-2"
          />
        </div>
      )}
    </div>
  );
}
