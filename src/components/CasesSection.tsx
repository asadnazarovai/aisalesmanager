import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const CasesSection = () => {
  const { t } = useLang();

  const cases = [
    {
      country: '🇺🇿',
      region: t('Узбекистан — E-commerce', 'O\'zbekiston — E-commerce'),
      name: 'Online Shop Bot',
      tags: [t('Автоответчик', 'Avtojavob'), 'Instagram', 'CRM'],
      desc: t(
        'Полная автоматизация обработки заявок: ИИ-менеджер отвечает в Instagram, квалифицирует лиды и заполняет CRM.',
        'Arizalarni to\'liq avtomatlashtirish: AI menejer Instagram\'da javob beradi, lidlarni kvalifikatsiya qiladi va CRM ni to\'ldiradi.'
      ),
      timeSaved: '-120 ч/мес',
      moneySaved: '$1 500/мес',
    },
    {
      country: '🇺🇿',
      region: t('Узбекистан — Услуги', 'O\'zbekiston — Xizmatlar'),
      name: 'Service AI Manager',
      tags: ['Facebook', t('Квалификация', 'Kvalifikatsiya'), 'Webhook'],
      desc: t(
        'ИИ-менеджер для сервисной компании: консультирует по услугам, собирает данные клиента и назначает встречу.',
        'Xizmat kompaniyasi uchun AI menejer: xizmatlar bo\'yicha maslahat beradi, mijoz ma\'lumotlarini yig\'adi va uchrashuv tayinlaydi.'
      ),
      timeSaved: '-80 ч/мес',
      moneySaved: '$1 000/мес',
    },
    {
      country: '🇺🇿',
      region: t('Узбекистан — Образование', 'O\'zbekiston — Ta\'lim'),
      name: 'EduBot Sales',
      tags: [t('Курсы', 'Kurslar'), 'Instagram', t('Воронка', 'Voronka')],
      desc: t(
        'Автоматические ответы на вопросы о курсах, запись на пробный урок и передача горячих лидов менеджеру.',
        'Kurslar haqida avtomatik javoblar, sinov darsiga yozish va issiq lidlarni menedjerga uzatish.'
      ),
      timeSaved: '-100 ч/мес',
      moneySaved: '$800/мес',
    },
    {
      country: '🇺🇿',
      region: t('Узбекистан — Медицина', 'O\'zbekiston — Tibbiyot'),
      name: 'MedClinic AI',
      tags: [t('Клиника', 'Klinika'), t('Запись', 'Yozilish'), 'CRM'],
      desc: t(
        'ИИ-ассистент для клиники: отвечает на вопросы пациентов, записывает на приём и напоминает о визите.',
        'Klinika uchun AI-yordamchi: bemorlar savollariga javob beradi, qabulga yozadi va tashrifni eslatadi.'
      ),
      timeSaved: '-90 ч/мес',
      moneySaved: '$1 200/мес',
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-gradient text-sm font-bold uppercase tracking-widest">
            {t('Кейсы', 'Keyslar')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-3 leading-tight">
            {t('Разные отрасли. Один принцип.', 'Turli sohalar. Bitta tamoyil.')}
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            {t(
              '8 проектов — в каждом бизнесе нашли где ИИ сэкономил время и увеличил доход.',
              '8 ta loyiha — har bir biznesda AI vaqtni tejab, daromadni oshirdi.'
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <span className="text-lg">{c.country}</span>
                <span className="uppercase tracking-wide font-medium">{c.region}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{c.name}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {c.tags.map((tag, j) => (
                  <span key={j} className="px-3 py-1 rounded-full text-xs font-medium border border-primary/20 text-primary bg-primary/5">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{c.desc}</p>
              <div className="flex gap-6 pt-4 border-t border-border">
                <div>
                  <p className="text-lg font-bold text-foreground">{c.timeSaved}</p>
                  <p className="text-xs text-muted-foreground">{t('Экономия времени', 'Vaqt tejalishi')}</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">{c.moneySaved}</p>
                  <p className="text-xs text-muted-foreground">{t('Экономия денег', 'Pul tejalishi')}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
