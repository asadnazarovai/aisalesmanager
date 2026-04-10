import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';
import robotImg from '@/assets/robot5.png';

const SolutionSection = () => {
  const { t } = useLang();

  return (
    <section id="solution" className="py-12 md:py-16 relative overflow-hidden">
      {/* Robot - right side, large and visible */}
      <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[400px] md:w-[500px] opacity-[0.18] pointer-events-none select-none">
        <img src={robotImg} alt="" className="w-full h-auto" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-8"
        >
          <span className="text-gradient text-lg font-semibold tracking-wide uppercase">
            {t('Решение', 'Yechim')}
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="highlight-text text-center max-w-3xl mx-auto"
        >
          {t(
            'ИИ Менеджер по Продажам — знает всё о вашей компании и её услугах, консультирует клиентов и продаёт ваши услуги',
            'AI Sotuv Menedjeri — kompaniyangiz va mahsulotingiz haqida biladi, mijozlarga konsultatsiya berib mahsulotingizni sotadi'
          )}
        </motion.h2>
      </div>
    </section>
  );
};

export default SolutionSection;
