import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-brand-red/30 rounded-lg group-hover:rotate-45 transition-transform duration-500"></div>
                <div className="relative flex flex-col items-center gap-1 scale-75">
                  <div className="w-6 h-1 bg-brand-red"></div>
                  <div className="flex gap-2">
                    <div className="w-1 h-3 bg-brand-gold"></div>
                    <div className="w-1 h-3 bg-brand-gold"></div>
                  </div>
                  <div className="w-6 h-0.5 bg-brand-red/50"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-extrabold tracking-tight leading-[0.9] text-brand-white uppercase">
                  CENTRAL <span className="text-brand-red">KUNGFU</span>
                </span>
                <span className="font-mono text-[9px] text-brand-gold font-bold tracking-[0.3em] uppercase opacity-70">
                  THE SPIRIT OF GUAN
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Traditional Kung Fu and self-defense training in Bangalore. We build confidence, discipline, and mental strength for the modern warrior.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full glass hover:bg-brand-red border-none transition-colors flex items-center justify-center text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass hover:bg-brand-red border-none transition-colors flex items-center justify-center text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass hover:bg-brand-red border-none transition-colors flex items-center justify-center text-white">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-heading text-xl tracking-widest text-brand-gold underline decoration-brand-red underline-offset-8">PROGRAMS</h4>
            <ul className="space-y-3">
              <li><Link to="/programs" className="text-gray-400 hover:text-brand-red transition-colors">Kids Kung Fu</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-brand-red transition-colors">Teen Martial Arts</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-brand-red transition-colors">Adult Training</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-brand-red transition-colors">Women Self Defense</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-brand-red transition-colors">Advanced Weaponry</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-heading text-xl tracking-widest text-brand-gold underline decoration-brand-red underline-offset-8">VISIT US</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={20} className="text-brand-red shrink-0" />
                <span className="text-sm">Central Kungfu Guan, No. 45, High Street, Near Brigade Road, Bangalore - 560001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={20} className="text-brand-red shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={20} className="text-brand-red shrink-0" />
                <span className="text-sm">train@centralkungfu.in</span>
              </li>
            </ul>
          </div>

          {/* Timing */}
          <div className="space-y-6">
            <h4 className="font-heading text-xl tracking-widest text-brand-gold underline decoration-brand-red underline-offset-8">TRAINING HOURS</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <Clock size={20} className="text-brand-red shrink-0" />
                <div className="flex flex-col">
                  <span className="font-medium text-white text-xs">WEEKDAY BATCHES</span>
                  <span className="text-xs">06:00 AM - 09:00 PM</span>
                </div>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Clock size={20} className="text-brand-red shrink-0" />
                <div className="flex flex-col">
                  <span className="font-medium text-white text-xs">WEEKEND SESSIONS</span>
                  <span className="text-xs">08:00 AM - 01:00 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-500 tracking-widest uppercase">
          <p>© 2025 CENTRAL KUNGFU GUAN. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
