'use client'
import React from 'react';
import { X, Camera, ChevronDown, Search, UserPlus } from 'lucide-react';

export default function NewTransactionSheet({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-[101] w-full bg-zinc-900 rounded-t-[40px] p-6 pb-12 border-t border-zinc-800 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] max-h-[90vh] overflow-y-auto
      ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
    >
      {/* 1. HANDLE & HEADER */}
      <div className="w-12 h-1 bg-zinc-800 rounded-full mx-auto mb-6" />
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white tracking-tight">Yeni Sözleşme</h2>
        <button onClick={onClose} className="p-2 bg-zinc-800 rounded-full text-zinc-400">
          <X size={20} />
        </button>
      </div>

      <div className="space-y-6">
        
        {/* 2. KATEGORİ SEÇİMİ (Açılır Menü) */}
        <div className="space-y-2">
          <label className="text-[10px] text-zinc-600 font-black uppercase tracking-widest ml-1">Ne Gönderiyoruz?</label>
          <div className="relative group">
            <select className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl py-4 px-5 text-sm text-zinc-300 appearance-none outline-none focus:border-zinc-600 transition-all">
              <option>Para (TL)</option>
              <option>Eşya / Emanet</option>
              <option>Söz / Taahhüt</option>
            </select>
            <ChevronDown className="absolute right-5 top-4.5 text-zinc-600 group-focus-within:rotate-180 transition-transform" size={18} />
          </div>
        </div>

        {/* 3. GÖRSEL KANIT ALANI (Sabit Tasarım) */}
        <div className="w-full aspect-video bg-zinc-950 border-2 border-dashed border-zinc-800 rounded-[32px] flex flex-col items-center justify-center space-y-3 group hover:border-zinc-700 transition-colors cursor-pointer">
          <div className="w-14 h-14 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-600 group-hover:text-zinc-400 transition-colors">
            <Camera size={28} />
          </div>
          <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-tighter text-center px-8">
            Elden teslimde Foto/Video çek <br /> veya online dekont ekle
          </p>
        </div>

        {/* 4. BAŞLIK VE AÇIKLAMA */}
        <div className="space-y-4">
          <input 
            type="text"
            placeholder="Sözleşme Başlığı"
            className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl py-4 px-5 text-sm text-white outline-none focus:border-zinc-600 placeholder:text-zinc-700"
          />
          <textarea 
            placeholder="Sözleşme Şartları ve Açıklama"
            rows={3}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl py-4 px-5 text-sm text-white outline-none focus:border-zinc-600 placeholder:text-zinc-700 resize-none"
          />
        </div>

        {/* 5. KİME GÖNDERİYORUZ? (Arama & Hızlı Kişiler) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <label className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Kime?</label>
            <button className="flex items-center space-x-1 text-zinc-500 hover:text-zinc-300 transition-colors">
              <UserPlus size={14} />
              <span className="text-[10px] font-bold">Yeni Kişi</span>
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-zinc-700" size={18} />
            <input 
              className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-white focus:border-zinc-600 outline-none placeholder:text-zinc-800"
              placeholder="Hızlı arama..."
            />
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-2 no-scrollbar">
            {['AS', 'BY', 'EK', 'MC'].map((init, i) => (
              <div key={i} className="flex-shrink-0 flex flex-col items-center space-y-2">
                <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-600 font-bold text-xs hover:border-zinc-500 transition-colors cursor-pointer">
                  {init}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. MÜHÜR BUTONU */}
        <button className="w-full bg-zinc-100 text-zinc-900 py-5 rounded-[28px] font-black text-xs uppercase tracking-[0.2em] hover:bg-white active:scale-[0.98] transition-all shadow-xl">
          Sözleşmeyi Oluştur
        </button>

      </div>
    </div>
  );
}