import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';
import robotImg from '@/assets/robot.png';

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Robot background - full screen, close up */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none">
        <motion.img
          src={robotImg}
          alt=""
          className="h-[90vh] md:h-[95vh] w-auto max-w-none object-contain opacity-[0.09]"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.09 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>

      {/* Subtle navy gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />

      <div className="container relative z-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-surface mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">AI Sales Manager</span>
          </div>

          <h1 className="highlight-text text-3xl md:text-5xl lg:text-6xl mb-8 leading-[1.1]">
            {t(
              'Вы теряете сотни входящих заявок из-за медленных ответов в соц-сетях',
              'Siz ijtimoiy tarmoqlar orqali kelgan yuzlab mijozlarni uzoq javoblar tufayli yo\'qotyapsiz'
            )}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6 leading-relaxed">
            {t(
              'Вы активно ведёте соц-сети, платите за рекламу, но отвечаете долго. Это приводит к тому что горячий клиент ждёт и обращается к вашим конкурентам.',
              'Siz ijtimoiy tarmoqlarda aktivsiz, reklamaga pul sarflaysiz, ammo uzoq javob berasiz. Bu issiq mijozni kutishga va raqobatchilaringizga murojat qilishiga olib keladi.'
            )}
          </p>

          <p className="text-base text-muted-foreground mb-10">
            {t(
              'Как перестать терять заявки с помощью мгновенной обработки?',
              'Tezkor javoblar orqali mijozlarni saqlab qolmoqchimisiz?'
            )}
          </p>

          <motion.a
            href="#solution"
            className="glass-button glass-shimmer inline-flex items-center gap-2 px-8 py-4 rounded-xl text-primary-foreground font-semibold text-lg transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('Узнать решение', 'Yechimni bilish')}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
