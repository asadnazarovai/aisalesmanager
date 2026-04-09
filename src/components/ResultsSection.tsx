import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  }),
};

const ResultsSection = () => {
  const { t } = useLang();

  const results = [
    { value: t('10 сек', '10 son'), label: t('Мгновенные ответы', 'Tezkor javoblar') },
    { value: '+10/30%', label: t('Рост продаж', 'Sotuv o\'sishi') },
    { value: '0', label: t('Потерянных заявок', 'Yo\'qotilgan mijozlar') },
    { value: '∞', label: t('Экономия времени', 'Vaqt tejalishi') },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={0}
          className="highlight-text text-center mb-4"
        >
          {t('Результат', 'Natija')}
        </motion.h2>
        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={1}
          className="text-center text-muted-foreground mb-12 max-w-xl mx-auto"
        >
          {t(
            'Высокий сервис обслуживания даже в соцсетях. Больше лидов. Больше продаж. Больше прибыли.',
            'Hattoki ijtimoiy tarmoqlarda ham yuqori servis. Ko\'proq lid. Ko\'proq sotuv. Ko\'proq foyda.'
          )}
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i + 2}
              className="glass-surface rounded-xl p-6 text-center"
            >
              <p className="text-gradient text-3xl md:text-4xl font-bold mb-2">{r.value}</p>
              <p className="text-sm text-muted-foreground">{r.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
