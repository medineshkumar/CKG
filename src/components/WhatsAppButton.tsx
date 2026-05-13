import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-4">
      {/* Label Tooltip */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="hidden md:block bg-brand-white text-brand-black px-4 py-2 rounded-full font-bold text-sm shadow-xl"
      >
        Inquire Now!
      </motion.div>

      <motion.a 
        href="https://wa.me/919876543210?text=I'm%20interested%20in%20joining%20Central%20Kungfu%20Guan.%20I'd%20like%20to%20know%20more%20about%20your%20programs."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,211,102,0.5)] active:shadow-none transition-shadow"
      >
        <MessageCircle size={32} />
      </motion.a>
    </div>
  );
}
