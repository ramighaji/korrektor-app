import React, { useState, useEffect } from 'react';

// --- İkonlar ---
const SparklesIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21L8.188 15.904L3 15L8.188 14.096L9 9L9.813 14.096L15 15L9.813 15.904Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.071 4.929L18.5 8L17.929 4.929L15 4.358L17.929 3.786L18.5 0.714L19.071 3.786L22 4.358L19.071 4.929Z" />
  </svg>
);

const TrashIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
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

  const handleCorrect = () => {
    if (!inputText.trim()) {
      setToast({ show: true, message: 'Zəhmət olmasa mətn daxil edin!', type: 'error' });
      return;
    }
    setToast({ show: true, message: 'Mətn uğurla işləndi!', type: 'success' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-900'}`}>
      <nav className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2 text-xl font-bold">
          <SparklesIcon className="w-8 h-8 text-indigo-500" /> Korrektor AI
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg bg-zinc-200 dark:bg-zinc-800">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>

      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border dark:border-zinc-800">
          <textarea 
            className="w-full h-80 p-4 bg-transparent outline-none resize-none"
            placeholder="Mətninizi bura daxil edin..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <div className="flex justify-between mt-4">
            <button onClick={() => setInputText('')} className="text-zinc-400 hover:text-red-500"><TrashIcon className="w-6 h-6"/></button>
            <button onClick={handleCorrect} className="bg-indigo-600 text-white px-8 py-2 rounded-xl hover:bg-indigo-700">Korreksiya Et</button>
          </div>
        </div>

        <div className="bg-zinc-100 dark:bg-zinc-900/50 p-6 rounded-2xl border dark:border-zinc-800 overflow-auto h-96">
          <h3 className="text-sm font-bold text-zinc-400 mb-4 uppercase">Nəticə</h3>
          <p className="text-zinc-700 dark:text-zinc-300">{inputText || 'Nəticə burada görünəcək...'}</p>
        </div>
      </main>

      <footer className="mt-12 py-6 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-500">
        © 2026 Korrektor Azerbaijan NLP System. Bütün hüquqlar qorunur.
      </footer>

      {toast.show && (
        <div className="fixed bottom-6 left-6 px-6 py-3 rounded-lg bg-indigo-600 text-white shadow-2xl animate-fade-in">
          {toast.message}
        </div>
      )}
    </div>
  );
}
