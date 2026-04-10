import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';
import robotImg from '@/assets/robot8.png';

type EaseTuple = [number, number, number, number];
const ease: EaseTuple = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease }
  }),
};

const ProblemsSection = () => {
  const { t } = useLang();

  const problems = [
    t('Заявки приходят, но часть сливается', "Mijozlar oqimi bor, ammo ko'p qismi yo'q bo'lib qoladi"),
    t('Отвечаем долго', 'Uzoq javoblar'),
    t('Менеджеры тратят много времени на холодных клиентов', "Menedjerlar ulgurishmaydi va ko'p vaqtni sovuq mijozlarga sarflashadi"),
    t('Менеджеры не успевают отвечать всем, устают, забывают', 'Menedjerlar ulgurishmaydi, charchashadi, unutishadi'),
  ];

  return (
    <section className="py-12 md:py-16 bg-secondary/50 relative overflow-hidden">
      {/* Robot - left side, large */}
      <div className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-[350px] md:w-[450px] opacity-[0.15] pointer-events-none select-none">
        <img src={robotImg} alt="" className="w-full h-auto" />
      </div>

      <div className="container relative z-10">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={0}
          className="highlight-text text-center mb-6"
        >
          {t('Почему мы упускаем продажи?', 'Nega sotuvlar boy berilmoqda?')}
        </motion.h2>
        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={1}
          className="text-center text-muted-foreground mb-12"
        >
          {t('Одни из причин', 'Buning sabablaridan biri')}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i + 2}
              className="glass-card rounded-xl p-6 flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg glass-button flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary-foreground"/>
                </svg>
              </div>
              <p className="text-foreground font-medium">{p}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={6}
          className="text-center space-y-3"
        >
          <p className="highlight-text text-xl md:text-2xl">
            {t(
              'Каждый пропущенный или поздний ответ = потерянная продажа',
              "Har bir qoldirilgan yoki kechiktirilgan javob = yo'qotilgan sotuv"
            )}
          </p>
          <p className="text-muted-foreground">
            {t(
              'Вы уже заплатили за трафик, но не довели его до денег',
              'Mijoz oqimi uchun reklamaga pul sarfladingiz ammo uni sotuvgacha obormadingiz'
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemsSection;
