import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';

const TodaySection = () => {
  const { t } = useLang();

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
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
