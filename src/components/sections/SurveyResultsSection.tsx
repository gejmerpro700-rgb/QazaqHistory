import { motion } from 'framer-motion';
import { Users, TrendingUp, BarChart2, PieChart } from 'lucide-react';

interface BarProps {
  label: string;
  value: number;
  max: number;
  color?: string;
}

function Bar({ label, value, max, color = '#C9A84C' }: BarProps) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="mb-3">
      <div className="flex justify-between text-xs mb-1" style={{ color: 'rgba(245,240,232,0.7)' }}>
        <span>{label}</span>
        <span style={{ color }}>{value} ({pct}%)</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(201,168,76,0.1)' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export default function SurveyResultsSection() {
  return (
    <section
      id="survey-results"
      className="py-24 px-4 scroll-mt-24"
      style={{ backgroundColor: '#0a0602' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: '#C9A84C' }}>
            102 РЕСПОНДЕНТ • ЖЫЛ 2026
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}
          >
            Сауалнама нәтижелері
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(245,240,232,0.6)' }}>
            Google Forms арқылы жүргізілген сауалнамаға қатысқандардың жас ерекшелігі бойынша жіктелген нәтижелер
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Users, n: '102', l: 'Респонденттер' },
            { icon: TrendingUp, n: '68', l: '15–18 жас (67%)' },
            { icon: BarChart2, n: '20', l: '18–22 жас (20%)' },
            { icon: PieChart, n: '8', l: '23–26 жас (8%)' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-5 rounded-xl"
              style={{ backgroundColor: '#0f0a04', border: '1px solid rgba(201,168,76,0.15)' }}
            >
              <s.icon className="w-6 h-6 mx-auto mb-2" style={{ color: '#C9A84C' }} />
              <div className="text-2xl font-bold mb-1" style={{ color: '#C9A84C', fontFamily: 'Playfair Display, serif' }}>
                {s.n}
              </div>
              <div className="text-xs" style={{ color: 'rgba(245,240,232,0.5)' }}>{s.l}</div>
            </motion.div>
          ))}
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Q1: History knowledge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl"
            style={{ backgroundColor: '#0f0a04', border: '1px solid rgba(201,168,76,0.15)' }}
          >
            <h4 className="font-semibold text-sm mb-4" style={{ color: '#f5f0e8' }}>
              XX ғасыр басындағы тарихты жалпы бағалау
            </h4>
            <Bar label="Өте жақсы білемін" value={8} max={102} />
            <Bar label="Жақсы білемін" value={28} max={102} />
            <Bar label="Орта деңгейде" value={45} max={102} />
            <Bar label="Аз білемін" value={17} max={102} />
            <Bar label="Білмеймін" value={4} max={102} color="rgba(201,168,76,0.4)" />
          </motion.div>

          {/* Q2: Alash movement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-2xl"
            style={{ backgroundColor: '#0f0a04', border: '1px solid rgba(201,168,76,0.15)' }}
          >
            <h4 className="font-semibold text-sm mb-4" style={{ color: '#f5f0e8' }}>
              Алаш қозғалысы туралы білім деңгейі
            </h4>
            <Bar label="Толық білемін" value={12} max={102} />
            <Bar label="Негізгі ақпарат білемін" value={35} max={102} />
            <Bar label="Аздап білемін" value={38} max={102} />
            <Bar label="Мүлдем білмеймін" value={17} max={102} color="rgba(201,168,76,0.4)" />
          </motion.div>

          {/* Q3: 1916 uprising */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-6 rounded-2xl"
            style={{ backgroundColor: '#0f0a04', border: '1px solid rgba(201,168,76,0.15)' }}
          >
            <h4 className="font-semibold text-sm mb-4" style={{ color: '#f5f0e8' }}>
              1916 жылғы ұлт-азаттық көтерілісі туралы хабардарлық
            </h4>
            <Bar label="Иә, толық білемін" value={18} max={102} />
            <Bar label="Иә, жалпы білемін" value={42} max={102} />
            <Bar label="Аздап білемін" value={30} max={102} />
            <Bar label="Жоқ, білмеймін" value={12} max={102} color="rgba(201,168,76,0.4)" />
          </motion.div>

          {/* Q4: Preferred learning method */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl"
            style={{ backgroundColor: '#0f0a04', border: '1px solid rgba(201,168,76,0.15)' }}
          >
            <h4 className="font-semibold text-sm mb-4" style={{ color: '#f5f0e8' }}>
              Тарихты оқытудың қалаулы әдісі (көп таңдау)
            </h4>
            <Bar label="Бейнесабақ" value={78} max={102} />
            <Bar label="Интерактивті тест" value={65} max={102} />
            <Bar label="Тарихи деректер" value={52} max={102} />
            <Bar label="Оқулық" value={38} max={102} />
            <Bar label="Мұрағат материалдары" value={29} max={102} color="rgba(201,168,76,0.5)" />
            <Bar label="Ауызша дерек" value={21} max={102} color="rgba(201,168,76,0.4)" />
          </motion.div>

          {/* Q5: Portal usefulness */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="p-6 rounded-2xl md:col-span-2"
            style={{ backgroundColor: '#0f0a04', border: '1px solid rgba(201,168,76,0.15)' }}
          >
            <h4 className="font-semibold text-sm mb-4" style={{ color: '#f5f0e8' }}>
              Білім беру порталы пайдалы болды ма?
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { l: 'Иә, өте пайдалы', v: 54, pct: 53 },
                { l: 'Иә, пайдалы', v: 32, pct: 31 },
                { l: 'Орта деңгейде', v: 12, pct: 12 },
                { l: 'Жоқ', v: 4, pct: 4 },
              ].map((item) => (
                <div
                  key={item.l}
                  className="text-center p-4 rounded-xl"
                  style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.1)' }}
                >
                  <div className="text-2xl font-bold mb-1" style={{ color: '#C9A84C', fontFamily: 'Playfair Display, serif' }}>
                    {item.pct}%
                  </div>
                  <div className="text-xs" style={{ color: 'rgba(245,240,232,0.6)' }}>{item.l}</div>
                  <div className="text-xs mt-1" style={{ color: 'rgba(201,168,76,0.5)' }}>{item.v} адам</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
