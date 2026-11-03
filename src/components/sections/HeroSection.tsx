import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import TimeNetwork from '../ui/TimeNetwork';

export default function HeroSection() {
  const scrollToNext = () => {
    const el = document.getElementById('topics');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="hero-surface relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-24"
    >
      <TimeNetwork />
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border opacity-[0.04]"
          style={{ borderColor: '#C9A84C' }}
        />
        {/* Ornamental lines */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 w-px h-48 opacity-20" style={{ background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)' }} />
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-px h-48 opacity-20" style={{ background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-16" style={{ background: '#C9A84C' }} />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#C9A84C' }}>
            БІЛІМ БЕРУ ПОРТАЛЫ
          </span>
          <div className="h-px w-16" style={{ background: '#C9A84C' }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-4"
          style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}
        >
          QAZAQ
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-8"
          style={{ fontFamily: 'Playfair Display, serif', color: '#C9A84C' }}
        >
          HISTORY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-2xl mb-4 font-light"
          style={{ color: 'rgba(245,240,232,0.8)', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
        >
          Қазақстан: XX ғасыр басындағы тарих
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-sm md:text-base mb-12 max-w-2xl mx-auto"
          style={{ color: 'rgba(245,240,232,0.5)' }}
        >
          Академиялық шынайылық, мұрағаттық деректер және заманауи отандық тарихнама негізінде дайындалған материалдар
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/topics"
            className="interactive-control px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase"
            style={{ background: '#C9A84C', color: '#0f0a04' }}
          >
            Тарихты зерттеу
          </Link>
          <button
            onClick={scrollToNext}
            className="interactive-control px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase border"
            style={{ borderColor: 'rgba(201,168,76,0.4)', color: '#C9A84C', background: 'transparent' }}
          >
            Толығырақ
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { n: '1900–1920', l: 'Зерттелетін кезең' },
            { n: '6', l: 'Тарихи тақырып' },
            { n: '9', l: 'Тарихи тұлға' },
            { n: '17+', l: 'Хронология оқиғасы' },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: '#C9A84C', fontFamily: 'Playfair Display, serif' }}>
                {s.n}
              </div>
              <div className="text-xs" style={{ color: 'rgba(245,240,232,0.5)' }}>{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        style={{ background: 'none', border: 'none', padding: 0 }}
        aria-label="Төмен"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" style={{ color: 'rgba(201,168,76,0.6)' }} />
        </motion.div>
      </motion.button>
    </section>
  );
}
