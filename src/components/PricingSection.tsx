import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';

type EaseTuple = [number, number, number, number];
const ease: EaseTuple = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease }
  }),
};

const PricingSection = () => {
  const { t } = useLang();

  const includes = [
    t('Внедрение системы', 'Ustanovka'),
    t('Сервер для работы системы', 'Server'),
    t('Токены ИИ на первый месяц', 'AI tokenlar faqat 1-chi oy uchun'),
    t('Поддержка / Сопровождение в первый месяц', '1 oy bepul qo\'llab-quvvatlash xizmati'),
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
            className="glass-surface rounded-2xl p-8 md:p-10 text-center"
          >
            <span className="text-gradient text-lg font-semibold uppercase tracking-wide">
              {t('Цена', 'Narx')}
            </span>
            <p className="text-5xl md:text-6xl font-bold text-foreground mt-4 mb-2">$499</p>
            <p className="text-muted-foreground mb-8">
              {t('Установка 10 дней', 'Ustanovka 10 kun')}
            </p>

            <div className="text-left space-y-2 mb-8">
              <p className="text-sm font-semibold text-foreground mb-3">
                {t('Порядок выполнения:', 'Ish ketma-ketligi:')}
              </p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="glass-button w-6 h-6 rounded-md flex items-center justify-center text-xs text-primary-foreground font-bold">1</span>
                {t('Сбор данных', 'Ma\'lumot yig\'ish')}
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="glass-button w-6 h-6 rounded-md flex items-center justify-center text-xs text-primary-foreground font-bold">2</span>
                {t('Тест', 'Test')}
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="glass-button w-6 h-6 rounded-md flex items-center justify-center text-xs text-primary-foreground font-bold">3</span>
                {t('Запуск системы', 'Ishga tushirish')}
              </div>
            </div>

            <div className="text-left mb-8">
              <p className="text-sm font-semibold text-foreground mb-3">
                {t('Что входит:', 'Narx ichiga kiradi:')}
              </p>
              <div className="space-y-2">
                {includes.map((item, i) => (
                  <motion.div
                    key={i}
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    variants={fadeUp} custom={i + 2}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary flex-shrink-0">
                      <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl p-4 mb-6">
              <p className="text-sm font-medium text-foreground">
                {t(
                  'Окупается за 2 недели, дальше только прибыль. Это инвестиция для вашего бизнеса.',
                  '2 xaftada o\'qlanadi va keyin foydaga ishlaydi. Bu biznesingiz uchun investitsiya.'
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
