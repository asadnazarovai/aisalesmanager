import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';

const CTASection = () => {
  const { t } = useLang();

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass-surface rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="highlight-text text-2xl md:text-3xl mb-8">
            {t(
              'Не теряйте больше деньги с потерянными заявками. Внедрите AI Sales Manager прямо сейчас и начните обрабатывать каждого клиента мгновенно.',
              'Mijozlar va sotuvni yo\'qotishni bas qiling. Hoziroq AI Sotuv Menejerini sotib oling va sotuvlaringizni oshiring.'
            )}
          </h2>
          <motion.a
            href="#solution"
            className="glass-button inline-flex items-center gap-2 px-10 py-4 rounded-xl text-primary-foreground font-semibold text-lg transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('Начать сейчас', 'Hozir boshlash')}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
