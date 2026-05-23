import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Trainers', path: '/trainers' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-black/95 py-3 backdrop-blur-md shadow-2xl border-b border-brand-red/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-brand-red/30 rounded-lg group-hover:rotate-45 transition-transform duration-500"></div>
            <div className="relative flex flex-col items-center gap-1">
              <div className="w-6 h-1 bg-brand-red"></div>
              <div className="flex gap-2">
                <div className="w-1 h-3 bg-brand-gold"></div>
                <div className="w-1 h-3 bg-brand-gold"></div>
              </div>
              <div className="w-6 h-0.5 bg-brand-red/50"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-3xl font-extrabold tracking-tight leading-[0.9] text-brand-white">
              CENTRAL <span className="text-brand-red">KUNGFU</span>
            </span>
            <span className="font-mono text-[10px] text-brand-gold font-bold tracking-[0.3em] uppercase opacity-80">
              GUAN • BANGALORE
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all hover:text-brand-gold ${
                location.pathname === link.path ? 'text-brand-gold underline decoration-brand-red decoration-2 underline-offset-8' : 'text-white/60'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/trial" 
            className="px-6 py-2 bg-brand-red text-white text-xs font-bold uppercase tracking-tighter hover:bg-brand-red/80 transition-all"
          >
            Book Free Trial
          </Link>
        </div>

        <button 
          className="lg:hidden text-brand-white hover:text-brand-red transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[72px] bg-brand-black z-40 lg:hidden flex flex-col p-8 space-y-6"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-heading tracking-widest uppercase ${
                  location.pathname === link.path ? 'text-brand-red' : 'text-brand-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/trial" 
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-4 bg-brand-red text-white font-heading tracking-widest text-2xl text-center shadow-lg active:scale-95 transition-transform"
            >
              BOOK FREE TRIAL
            </Link>
            <div className="pt-10 flex flex-col items-center space-y-4">
              <p className="text-gray-500 font-medium">Follow Our Journey</p>
              <div className="flex space-x-6">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-red">IG</div>
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-red">FB</div>
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-red">YT</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
