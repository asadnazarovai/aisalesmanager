import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';
import { getVisitorId } from '@/lib/visitorId';
import robotImg from '@/assets/robot7.png';

interface Message {
  role: 'bot' | 'user';
  text: string;
}

const ChatDemo = () => {
  const { t, lang } = useLang();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: t(
        'Для тестирования вы можете поговорить с нашим ИИ Менеджером по Продажам',
        "Test sifatida bizning AI Sotuv Menejerimiz bilan gaplashib ko'ring"
      ),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([
      {
        role: 'bot',
        text: lang === 'ru'
          ? 'Для тестирования вы можете поговорить с нашим ИИ Менеджером по Продажам'
          : "Test sifatida bizning AI Sotuv Menejerimiz bilan gaplashib ko'ring",
      },
    ]);
  }, [lang]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const visitorId = getVisitorId();
      const res = await fetch('https://n8n.srv1215497.hstgr.cloud/webhook/fordemo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, visitorId }),
      });
      const data = await res.json();
      const botReply = typeof data === 'string' ? data : (data.reply || data.message || data.output || JSON.stringify(data));
      setMessages(prev => [...prev, { role: 'bot', text: botReply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'bot', text: t('Ошибка соединения. Попробуйте позже.', "Xatolik yuz berdi. Keyinroq urinib ko'ring.") }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Robot decoration - right side */}
      <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-[300px] md:w-[400px] opacity-[0.12] pointer-events-none select-none">
        <img src={robotImg} alt="" className="w-full h-auto" />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <span className="text-gradient text-sm font-bold uppercase tracking-widest">
              {t('Попробуйте сами', "O'zingiz sinab ko'ring")}
            </span>
            <h2 className="highlight-text text-2xl md:text-3xl mt-4 mb-4">
              {t(
                'Протестируйте AI Sales Manager в действии',
                "AI Sotuv Menejerni sinab ko'ring"
              )}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                'Напишите любое сообщение и получите мгновенный ответ. Так будет работать ваш ИИ-менеджер — 24/7, без пауз и выходных.',
                'Istalgan xabar yozing va tezkor javob oling. Sizning AI menejeringiz xuddi shunday ishlaydi — 24/7, tanaffussiz.'
              )}
            </p>
          </motion.div>

          {/* Right - Chat Widget */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <div className="glass-surface rounded-2xl overflow-hidden shadow-xl">
              <div className="glass-button px-5 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground">
                    <path d="M12 8V4H8"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4v4"/><rect x="4" y="8" width="16" height="12" rx="2"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/>
                  </svg>
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold text-sm">AI Sales Manager</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-primary-foreground/70 text-xs">{t('онлайн', 'onlayn')}</span>
                  </div>
                </div>
              </div>

              <div className="h-80 overflow-y-auto p-4 space-y-3 bg-background">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'glass-button text-primary-foreground rounded-br-md'
                          : 'bg-secondary text-secondary-foreground rounded-bl-md'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-secondary text-secondary-foreground px-4 py-2.5 rounded-2xl rounded-bl-md text-sm">
                      <span className="inline-flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-pulse" />
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-pulse" style={{ animationDelay: '0.15s' }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-pulse" style={{ animationDelay: '0.3s' }} />
                      </span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-3 border-t border-border bg-background flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendMessage()}
                  placeholder={t('Написать сообщение...', 'Xabar yozing...')}
                  className="flex-1 bg-secondary rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button
                  onClick={sendMessage}
                  disabled={loading || !input.trim()}
                  className="glass-button w-10 h-10 rounded-xl flex items-center justify-center text-primary-foreground disabled:opacity-50 transition-opacity"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
