import { Link } from 'react-router-dom';
import { Users, UserCheck, ShieldCheck, Zap, Award } from 'lucide-react';

const programList = [
  {
    id: 'kids',
    icon: Users,
    title: 'KIDS KUNG FU',
    subtitle: 'Ages 6-12',
    desc: 'Our kids program is designed to build confidence, focus, and respect while improving physical coordination. We use a structured belt system to teach the value of hard work and goal setting.',
    features: ['Focus & Concentration', 'Anti-Bullying Skills', 'Flexibility & Strength', 'Fun Structured Learning'],
    img: 'https://images.unsplash.com/photo-1552072047-54f3eef6096a',
    color: 'brand-red'
  },
  {
    id: 'teens',
    icon: UserCheck,
    title: 'TEEN MARTIAL ARTS',
    subtitle: 'Ages 13-17',
    desc: 'Teens develop strength, leadership, and emotional resilience. This program focuses on advanced techniques and practical self-defense for real-world situations.',
    features: ['Leadership Skills', 'Emotional Resilience', 'Practical Self Defense', 'Physical Conditioning'],
    img: 'https://images.unsplash.com/photo-1509563268479-0f004cf3f58b',
    color: 'brand-gold'
  },
  {
    id: 'adults',
    icon: ShieldCheck,
    title: 'ADULT KUNG FU',
    subtitle: 'Ages 18+',
    desc: 'A complete physical and mental workout. Adults train in traditional forms, sparring, and high-intensity conditioning to master the art while getting in the best shape of their lives.',
    features: ['Master Traditional Forms', 'Intense Cardio & Power', 'Stress Management', 'Life-Long Discipline'],
    img: 'https://images.unsplash.com/photo-1606338329853-48e0259e0a2d',
    color: 'brand-white'
  },
  {
    id: 'women',
    icon: Zap,
    title: 'WOMEN SELF DEFENSE',
    subtitle: 'Specialized Workshop',
    desc: 'Empowering women with practical techniques that rely on leverage and awareness rather than brute strength. Designed to be learned quickly and remembered easily.',
    features: ['Situational Awareness', 'Escape Techniques', 'Confidence Building', 'Safety Mindset'],
    img: 'https://images.unsplash.com/photo-1517438476312-10d79c67750d',
    color: 'brand-red'
  }
];

export default function Programs() {
  return (
    <div className="bg-brand-black">
      {/* Header */}
      <section className="py-16 md:py-20 container mx-auto max-w-7xl px-6 text-center">
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white tracking-tighter mb-6 underline decoration-brand-red decoration-8 underline-offset-8">PROGRAMS</h1>
        <p className="text-base md:text-xl text-gray-500 font-light tracking-widest max-w-3xl mx-auto uppercase">Authentic Kung Fu Training Pathways In Bangalore</p>
      </section>

      {/* Program Detailed View */}
      <section className="py-16 md:py-20 space-y-24">
        {programList.map((prog, idx) => (
          <div key={prog.id} className="container mx-auto max-w-7xl px-6">
            <div className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 md:gap-20 items-center`}>
              <div className="lg:w-1/2 relative group w-full">
                <div className="aspect-video rounded-3xl overflow-hidden glass p-3 border-brand-red/10">
                  <img src={`${prog.img}?q=80&w=1200&auto=format&fit=crop`} alt={prog.title} className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-brand-red/20 rounded-3xl" />
              </div>

              <div className="lg:w-1/2 space-y-6 md:space-y-8 w-full">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <prog.icon className={`text-brand-red`} size={40} />
                    <span className="text-brand-gold font-heading text-lg md:text-2xl tracking-widest italic">{prog.subtitle}</span>
                  </div>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter">{prog.title}</h2>
                </div>
                
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  {prog.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {prog.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-3 text-white/80">
                      <Award className="text-brand-gold" size={18} />
                      <span className="font-medium tracking-wide">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Link 
                    to="/trial" 
                    className="inline-flex items-center gap-4 px-8 py-4 bg-brand-red text-white font-heading text-base md:text-lg tracking-[0.2em] hover:bg-brand-gold hover:text-brand-black transition-all"
                  >
                    REGISTER FOR {prog.title.split(' ')[0]}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Trial CTA */}
      <section className="bg-brand-gold py-12">
        <div className="container mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-brand-black">
          <h3 className="font-heading text-3xl md:text-4xl tracking-widest underline decoration-brand-red decoration-4">NOT SURE WHERE TO START?</h3>
          <Link to="/contact" className="px-8 md:px-12 py-4 border-2 border-brand-black font-heading text-base md:text-2xl tracking-widest hover:bg-brand-black hover:text-brand-gold transition-all">TALK TO A SIFU</Link>
        </div>
      </section>
    </div>
  );
}
