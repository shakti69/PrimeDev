import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { generateAIResponse } from '../../utils/ai';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

export const AIChatWidget: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message
  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        sender: 'ai',
        text: t('ai.greeting'),
        timestamp: new Date()
      }
    ]);
  }, [language]);

  // Show tooltip after 4 seconds if not opened
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Auto-scroll chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setShowTooltip(false);
    setIsTyping(true);

    try {
      const responseText = await generateAIResponse(text, language);
      setIsTyping(false);
      
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (e) {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputText);
    }
  };

  const suggestedQuestions = t('ai.suggestedQuestions') as string[];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end font-sans">
      {/* Floating Tooltip */}
      {showTooltip && !isOpen && (
        <div className="mb-3 mr-1 bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple text-white text-xs font-semibold py-2.5 px-4 rounded-2xl shadow-xl border border-white/20 animate-bounce flex items-center gap-2 max-w-xs relative">
          <Sparkles className="w-4.5 h-4.5 text-glow-cyan animate-pulse" />
          <span>Ask PrimeDev AI! We are online</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="p-0.5 rounded-full hover:bg-white/20 transition-colors ml-1"
          >
            <X className="w-3 h-3" />
          </button>
          {/* Arrow */}
          <div className="absolute right-6 -bottom-1.5 w-3 h-3 bg-brand-accent-purple rotate-45" />
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[520px] rounded-3xl glass-card border border-white/25 dark:border-slate-800/60 shadow-2xl flex flex-col overflow-hidden mb-4 animate-float-quick">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-accent-blue/10 to-brand-accent-purple/10 border-b border-slate-200/50 dark:border-slate-800/50 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple flex items-center justify-center text-white">
                  <Bot className="w-5.5 h-5.5" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-brand-accent-emerald rounded-full border-2 border-white dark:border-brand-dark" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                  {t('ai.title')}
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  {t('ai.online')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              {/* Direct Mail Inquiry */}
              <a 
                href="mailto:shaktiprasadhota07@gmail.com?subject=PrimeDev%20Inquiry"
                title="Email Us Directly"
                className="p-2 rounded-full hover:bg-brand-accent-blue/10 text-brand-accent-blue transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5 text-slate-500 dark:text-slate-400" />
              </button>
            </div>
          </div>

          {/* Messages Log */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => {
              const isAI = msg.sender === 'ai';
              return (
                <div 
                  key={msg.id}
                  className={`flex ${isAI ? 'justify-start' : 'justify-end'} animate-fade-in`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${isAI ? 'flex-row' : 'flex-row-reverse'}`}>
                    {isAI && (
                      <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center text-brand-accent-blue flex-shrink-0">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}
                    <div className={`rounded-2xl px-4 py-2.5 text-xs leading-relaxed whitespace-pre-line shadow-sm border ${
                      isAI 
                        ? 'bg-slate-100/70 dark:bg-slate-900/70 border-slate-200/50 dark:border-slate-800/50 text-slate-800 dark:text-slate-200'
                        : 'bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple border-brand-accent-blue text-white'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-2 items-center">
                  <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center text-brand-accent-blue flex-shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-800/50 text-slate-400 dark:text-slate-500 rounded-2xl px-4 py-2.5 text-xs flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 bg-brand-accent-blue rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-brand-accent-purple rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-brand-accent-cyan rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Query Suggestions */}
          {messages.length === 1 && !isTyping && (
            <div className="p-3 bg-slate-50/50 dark:bg-slate-950/20 border-t border-slate-200/50 dark:border-slate-800/50 overflow-x-auto whitespace-nowrap flex gap-1.5 scrollbar-none">
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="inline-block px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 hover:border-brand-accent-blue bg-white dark:bg-slate-900/50 text-[10px] font-medium transition-all duration-300"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-slate-200/50 dark:border-slate-800/50 flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t('ai.placeholder')}
              className="flex-1 bg-white/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 rounded-xl py-2 px-3 text-xs outline-none focus:ring-1 focus:ring-brand-accent-blue transition-all"
            />
            <button
              onClick={() => handleSendMessage(inputText)}
              className="p-2 rounded-xl bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple text-white shadow-md hover:opacity-95 transition-opacity"
            >
              <Send className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        className={`w-14 h-14 rounded-full bg-gradient-to-r from-brand-accent-blue to-brand-accent-purple text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 ${
          isOpen ? 'rotate-90' : 'rotate-0'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};
export default AIChatWidget;
