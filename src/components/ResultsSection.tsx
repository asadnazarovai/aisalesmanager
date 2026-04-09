import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';
import robotImg from '@/assets/robot2.png';

type EaseTuple = [number, number, number, number];
const ease: EaseTuple = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease }
  }),
};

const ResultsSection = () => {
  const { t } = useLang();

  const results = [
    { value: t('10 сек', '10 son'), label: t('Мгновенные ответы', 'Tezkor javoblar') },
    { value: '+10/30%', label: t('Рост продаж', "Sotuv o'sishi") },
    { value: '0', label: t('Потерянных заявок', "Yo'qotilgan mijozlar") },
    { value: '∞', label: t('Экономия времени', 'Vaqt tejalishi') },
  ];

  return (
    <section className="py-12 md:py-16 section-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.015] to-transparent pointer-events-none" />
      {/* Robot decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[180px] opacity-[0.06] pointer-events-none">
        <img src={robotImg} alt="" className="w-full" />
      </div>

      <div className="container relative z-10">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={0}
          className="text-2xl md:text-3xl font-bold text-white/95 text-center mb-4"
        >
          {t('Результат', 'Natija')}
        </motion.h2>
        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={1}
          className="text-center text-white/50 mb-12 max-w-xl mx-auto"
        >
          {t(
            'Высокий сервис обслуживания даже в соцсетях. Больше лидов. Больше продаж. Больше прибыли.',
            "Hattoki ijtimoiy tarmoqlarda ham yuqori servis. Ko'proq lid. Ko'proq sotuv. Ko'proq foyda."
          )}
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i + 2}
              className="rounded-xl p-6 text-center bg-white/[0.04] border border-white/[0.08]"
            >
              <p className="text-3xl md:text-4xl font-bold mb-2 text-white">{r.value}</p>
              <p className="text-sm text-white/50">{r.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
