import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';
import enjenLogo from '@/assets/enjendigital.webp';
import avtotest7Logo from '@/assets/avtotest7.webp';
import refindLogo from '@/assets/refindcommerce.webp';
import easytagLogo from '@/assets/easytag.webp';
import sarguLogo from '@/assets/sargutrans.webp';

type EaseTuple = [number, number, number, number];
const ease: EaseTuple = [0.22, 1, 0.36, 1];

const CasesSection = () => {
  const { t } = useLang();

  const cases = [
    {
      logo: enjenLogo,
      country: '🇺🇸',
      region: t('США — МАРКЕТИНГ', 'AQSH — MARKETING'),
      name: 'EnJen Digital',
      subtitle: t('Маркетинговое агентство / Салоны красоты', "Marketing agentligi / Go'zallik salonlari"),
      desc: t(
        'Автоматизация контент-маркетинга: TikTok скрапер собирает тренды, GPT генерирует сценарии, автопостинг публикует контент.',
        "Kontent-marketingni avtomatlashtirish: TikTok scraper trendlarni yig'adi, GPT senariylar yozadi, avtoposting kontentni joylashtiradi."
      ),
      tags: ['TikTok Scraper', t('GPT сценарии', 'GPT senariylar'), t('Автопостинг', 'Avtoposting')],
      timeSaved: '-200 ч/мес',
      moneySaved: '-$3 000/мес',
    },
    {
      logo: avtotest7Logo,
      country: '🇺🇿',
      region: t('УЗБЕКИСТАН — ОБРАЗОВАНИЕ', "O'ZBEKISTON — TA'LIM"),
      name: 'Avtotest7',
      subtitle: t('Автошкола / Экспресс-курсы', 'Avtomdaktab / Ekspress-kurslar'),
      desc: t(
        'QR-система учёта посещений, онлайн-платформа обучения и AI-агент для консультаций и записи студентов.',
        "QR-hisob tizimi, onlayn ta'lim platformasi va talabalarni ro'yxatga olish uchun AI-agent."
      ),
      tags: [t('QR-учёт', 'QR-hisob'), t('Онлайн платформа', 'Onlayn platforma'), 'AI-agent'],
      timeSaved: '-150 ч/мес',
      moneySaved: '-$2 000/мес',
    },
    {
      logo: refindLogo,
      country: '🇬🇧',
      region: t('ВЕЛИКОБРИТАНИЯ — E-COMMERCE', 'BUYUK BRITANIYA — E-COMMERCE'),
      name: 'ReFind Commerce',
      subtitle: t('Маркетплейс / Amazon · eBay · TikTok Shop', 'Marketplace / Amazon · eBay · TikTok Shop'),
      desc: t(
        'Единый inbox для всех маркетплейсов, AI-помощник для обработки заказов и общения с покупателями.',
        "Barcha marketpleyslar uchun yagona inbox, buyurtmalarni qayta ishlash va xaridorlar bilan muloqot uchun AI-yordamchi."
      ),
      tags: [t('Единый inbox', 'Yagona inbox'), t('AI-помощник', 'AI-yordamchi')],
      timeSaved: '-90 ч/мес',
      moneySaved: '-$1 200/мес',
    },
    {
      logo: easytagLogo,
      country: '🇬🇧',
      region: t('ВЕЛИКОБРИТАНИЯ — E-COMMERCE', 'BUYUK BRITANIYA — E-COMMERCE'),
      name: 'easyTag',
      subtitle: t('Маркетплейс / Amazon · eBay · TikTok Shop', 'Marketplace / Amazon · eBay · TikTok Shop'),
      desc: t(
        'Автоматическая генерация тегов и описаний товаров с помощью AI для повышения видимости на маркетплейсах.',
        "Marketpleysda ko'rinishni oshirish uchun AI yordamida avtomatik teg va tavsif yaratish."
      ),
      tags: ['AI Tags', t('Авто-описания', 'Avto-tavsiflar'), 'Marketplace'],
      timeSaved: '-85 ч/мес',
      moneySaved: '-$1 100/мес',
    },
    {
      logo: sarguLogo,
      country: '🇲🇩',
      region: t('МОЛДОВА — АВТО', 'MOLDOVA — AVTO'),
      name: 'Sargu Trans',
      subtitle: t('Автосалон / Продажа автомобилей', 'Avtosalon / Avtomobil sotish'),
      desc: t(
        'Автоматизация записи на встречи, авто-календарь и CRM интеграция для автосалона.',
        "Uchrashuvlarga yozilishni avtomatlashtirish, avto-kalendar va avtosalon uchun CRM integratsiyasi."
      ),
      tags: [t('Встречи', 'Uchrashuvlar'), t('Авто-календарь', 'Avto-kalendar'), 'CRM'],
      timeSaved: '-60 ч/мес',
      moneySaved: '-$800/мес',
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="text-gradient text-sm font-bold uppercase tracking-widest">
            {t('Кейсы', 'Keyslar')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-3 leading-tight">
            {t('Реальные проекты. Реальные результаты.', 'Haqiqiy loyihalar. Haqiqiy natijalar.')}
          </h2>
          <p className="text-muted-foreground text-base mb-8 max-w-2xl">
            {t(
              'Каждый кейс — это бизнес, где AI сэкономил время и увеличил доход.',
              "Har bir keys — AI vaqtni tejab, daromadni oshirgan biznes."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-5 flex flex-col"
            >
              {/* Logo with sword/pennant shape */}
              <div className="mb-3">
                <div className="w-20 h-14 relative overflow-hidden">
                  <div className="w-full h-full bg-gray-50 border border-gray-100 flex items-center justify-center p-1.5"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)',
                    }}
                  >
                    <img src={c.logo} alt={c.name} className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-[11px] text-gray-400 uppercase tracking-wider font-medium mb-2">
                <span className="text-sm">{c.country}</span>
                <span>{c.region}</span>
              </div>

              {/* Name */}
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-1.5 tracking-tight">
                {c.name}
              </h3>

              {/* Subtitle badge */}
              <div className="mb-3">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {c.subtitle}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{c.desc}</p>

              {/* Metrics */}
              <div className="flex gap-5 mb-4 pt-3 border-t border-gray-100">
                <div>
                  <p className="text-base font-bold text-gray-900">{c.timeSaved}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide">{t('Экономия времени', 'Vaqt tejalishi')}</p>
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900">{c.moneySaved}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide">{t('Экономия денег', 'Pul tejalishi')}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {c.tags.map((tag, j) => (
                  <span key={j} className="px-2.5 py-0.5 rounded-full text-[10px] font-medium border border-gray-200 text-gray-500 bg-gray-50">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* NDA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: cases.length * 0.08, ease }}
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col items-center justify-center text-center"
          >
            <div className="flex items-center gap-2 text-[11px] text-gray-400 uppercase tracking-wider font-medium mb-3">
              <span className="text-sm">🇺🇿</span>
              <span>{t('УЗБЕКИСТАН', "O'ZBEKISTON")}</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
            </div>
            <h3 className="text-lg font-extrabold text-gray-900 mb-1">{t('Сейчас в работе', 'Hozir ishda')}</h3>
            <p className="text-gray-400 text-xs">{t('3 новых проекта под NDA', '3 ta yangi loyiha NDA ostida')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
