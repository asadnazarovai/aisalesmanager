import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  }),
};

const TodaySection = () => {
  const { t } = useLang();

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp} custom={0}
          className="highlight-text text-center max-w-3xl mx-auto mb-16"
        >
          {t(
            'Сегодня клиент пишет сразу нескольким компаниям и покупает у тех, кто ответил и предложил решение первее',
            'Bugun mijoz bir necha kompaniyaga yozadi va unga birinchi javob berib o\'z xizmatini taklif qilgandan sotib oladi'
          )}
        </motion.p>
      </div>
    </section>
  );
};

export default TodaySection;
