import React, { useState, useEffect } from 'react';

// --- İkonlar ---
const SparklesIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9.813 15.904L9 21L8.188 15.904L3 15L8.188 14.096L9 9L9.813 14.096L15 15L9.813 15.904Z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.071 4.929L18.5 8L17.929 4.929L15 4.358L17.929 3.786L18.5 0.714L19.071 3.786L22 4.358L19.071 4.929Z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [inputText, setInputText] = useState('');
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false }), 3000);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-zinc-950 text-white' : 'bg-zinc-50 text-zinc-900'}`}>
      <nav className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2 text-xl font-bold">
          <SparklesIcon className="w-8 h-8 text-indigo-500" /> Korrektor AI
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg bg-zinc-200 dark:bg-zinc-800">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>

      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <textarea 
          className="w-full h-96 p-6 rounded-2xl border dark:border-zinc-700 dark:bg-zinc-900 shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Mətninizi bura daxil edin..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="w-full h-96 p-6 rounded-2xl border dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-sm overflow-auto">
          <h3 className="text-sm font-bold text-zinc-400 mb-4 uppercase tracking-wider">Nəticə Paneli</h3>
          <p className="text-zinc-600 dark:text-zinc-300">{inputText ? `Düzəldilmiş: ${inputText}` : 'Nəticə burada görünəcək...'}</p>
        </div>
      </main>

      <div className="p-6 text-center">
        <button onClick={() => showToast('Mətn işlənildi!', 'success')} className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-3 rounded-full font-bold shadow-lg transition-all">
          Korreksiya Et
        </button>
      </div>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-6 text-center text-xs text-zinc-500">
        © 2026 Korrektor Azerbaijan NLP System.
      </footer>
      
      {toast.show && (
        <div className="fixed bottom-6 left-6 px-6 py-3 rounded-lg bg-indigo-600 text-white shadow-xl animate-bounce">
          {toast.message}
        </div>
      )}
    </div>
  );
}
