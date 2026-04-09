import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';

type EaseTuple = [number, number, number, number];
const ease: EaseTuple = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease }
  }),
};

const HowItWorksSection = () => {
  const { t } = useLang();

  const steps = [
    {
      left: t('Клиент пишет в Instagram / Facebook', 'Mijoz Instagram / Facebook sahifangizga yozadi'),
      right: t('Он отвечает за 10 секунд', 'U 10 soniyada javob beradi'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
      ),
    },
    {
      left: t('Ведёт диалог', 'Dialog oboradi'),
      right: t('Квалифицирует клиента (горячий / тёплый / холодный)', 'Mijozni kvalifikatsiya qiladi (issiq / iliq / sovuq)'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/>
          <path d="M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
    },
    {
      left: t('Собирает информацию', 'Ma\'lumotlarni yig\'adi'),
      right: t('Закрывает на встречу / созвон', 'Mijozni uchrashuv / qo\'ng\'iroqqa yopadi'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
    },
    {
      left: t('Заполняет карточку лида в CRM', 'CRM da lid kartochkasini to\'ldiradi'),
      right: t('Уведомляет менеджера о новой заявке, чтобы тот сразу связался', 'Menedjerga bog\'lanishi uchun xabar beradi'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-28 section-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      <div className="container relative z-10">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={0}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white/95">
            {t('Как это работает', 'U qanday ishlaydi')}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i + 1}
              className="rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start gap-4 bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl glass-button flex items-center justify-center flex-shrink-0 text-primary-foreground">
                {step.icon}
              </div>
              <div className="flex-1 grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-white/90 font-semibold">{step.left}</p>
                </div>
                <div>
                  <p className="text-white/60">{step.right}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={6}
          className="text-center text-white/50 mt-8 text-sm"
        >
          {t('Это повышает вероятность продажи', 'Bu sotuv ehtimolini oshiradi')}
        </motion.p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
