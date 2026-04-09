import { useLang } from '@/contexts/LangContext';

const LanguageSwitcher = () => {
  const { lang, setLang } = useLang();

  return (
    <div className="fixed top-6 right-6 z-50 flex rounded-full border border-border bg-card/80 backdrop-blur-md overflow-hidden shadow-sm">
      <button
        onClick={() => setLang('ru')}
        className={`flex items-center justify-center w-10 h-10 text-lg transition-all duration-300 ${
          lang === 'ru'
            ? 'glass-button rounded-full scale-105'
            : 'hover:bg-muted'
        }`}
        aria-label="Русский"
      >
        🇷🇺
      </button>
      <button
        onClick={() => setLang('uz')}
        className={`flex items-center justify-center w-10 h-10 text-lg transition-all duration-300 ${
          lang === 'uz'
            ? 'glass-button rounded-full scale-105'
            : 'hover:bg-muted'
        }`}
        aria-label="O'zbek"
      >
        🇺🇿
      </button>
    </div>
  );
};

export default LanguageSwitcher;
