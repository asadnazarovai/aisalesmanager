import React, { createContext, useContext, useState } from 'react';

type Lang = 'ru' | 'uz';

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (ru: string, uz: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: 'ru',
  setLang: () => {},
  t: (ru) => ru,
});

export const useLang = () => useContext(LangContext);

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('ru');
  const t = (ru: string, uz: string) => (lang === 'ru' ? ru : uz);
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};
