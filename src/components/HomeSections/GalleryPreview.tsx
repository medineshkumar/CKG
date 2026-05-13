import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Maximize2 } from 'lucide-react';

const images = [
  { url: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop', title: 'Sparring Session', size: 'col-span-2 row-span-2' },
  { url: 'https://images.unsplash.com/photo-1552072047-54f3eef6096a?q=80&w=800&auto=format&fit=crop', title: 'Kids Training', size: 'col-span-1 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?q=80&w=800&auto=format&fit=crop', title: 'Group Forms', size: 'col-span-1 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop', title: 'Sword Technique', size: 'col-span-1 row-span-2' },
  { url: 'https://images.unsplash.com/photo-1517438476312-10d79c67750d?q=80&w=800&auto=format&fit=crop', title: 'Self Defense', size: 'col-span-1 row-span-1' },
];

export default function GalleryPreview() {
  return (
    <section className="py-32 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="font-heading text-6xl md:text-8xl text-white tracking-tighter">MOMENTS OF STRENGTH</h2>
            <p className="text-brand-gold font-heading text-2xl tracking-widest uppercase">Discipline Captured In Motion</p>
          </div>
          <Link 
            to="/gallery" 
            className="text-white hover:text-brand-red font-heading text-2xl tracking-widest underline underline-offset-8 transition-colors"
          >
            VIEW FULL GALLERY
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden group rounded-2xl ${img.size}`}
            >
              <img src={img.url} alt={img.title} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <Maximize2 className="text-brand-gold mb-3 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0" size={24} />
                <h4 className="font-heading text-2xl text-white tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
