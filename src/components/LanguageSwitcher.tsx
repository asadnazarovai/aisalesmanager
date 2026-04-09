import { useLang } from '@/contexts/LangContext';

const LanguageSwitcher = () => {
  const { lang, setLang } = useLang();

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2">
      <button
        onClick={() => setLang('ru')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
          lang === 'ru'
            ? 'glass-button text-primary-foreground'
            : 'bg-secondary text-secondary-foreground hover:bg-muted'
        }`}
      >
        🇷🇺 <span>RU</span>
      </button>
      <button
        onClick={() => setLang('uz')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
          lang === 'uz'
            ? 'glass-button text-primary-foreground'
            : 'bg-secondary text-secondary-foreground hover:bg-muted'
        }`}
      >
        🇺🇿 <span>UZ</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
