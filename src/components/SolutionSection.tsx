import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';
import robotImg from '@/assets/robot.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const SolutionSection = () => {
  const { t } = useLang();

  return (
    <section id="solution" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] opacity-[0.06] pointer-events-none">
        <img src={robotImg} alt="" className="w-full" />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-8"
        >
          <span className="text-gradient text-lg font-semibold tracking-wide uppercase">
            {t('Решение', 'Yechim')}
          </span>
        </motion.div>
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
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
