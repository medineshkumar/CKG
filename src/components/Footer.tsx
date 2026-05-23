import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">&copy; 2026 Central Kungfu Guan. All rights reserved.</p>
      </div>
    </footer>
  );
}
