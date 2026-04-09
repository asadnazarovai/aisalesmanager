import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const CasesSection = () => {
  const { t } = useLang();

  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container text-center">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          className="highlight-text mb-4"
        >
          {t('Кейсы и опыт', 'Keyslar va tajriba')}
        </motion.h2>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          className="inline-flex items-center gap-3 glass-surface rounded-2xl px-10 py-8 mt-6"
        >
          <span className="text-gradient text-6xl font-bold">8</span>
          <span className="text-muted-foreground text-lg">{t('проектов', 'ta loyiha')}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default CasesSection;
