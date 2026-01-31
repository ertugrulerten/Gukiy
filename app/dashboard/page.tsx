'use client'
import React, { useState } from 'react';
import { 
  ArrowUpRight, ArrowDownLeft, Filter, 
  LayoutList, LayoutGrid, ChevronDown, 
  Laptop, Camera, Watch, Guitar, Tablet 
} from 'lucide-react';
import NewTransactionSheet from './NewTransactionSheet';

// --- TRANSACTION CARD (ZAMAN ÇUBUĞU & ÇİFT SATIR ZAMAN) ---
const TransactionCard = ({ mode, type, item }: { mode: string, type: 'inbound' | 'outbound', item: any }) => (
  <div className="relative bg-surface border border-border-subtle/30 rounded-xl transition-all duration-300 shadow-sm mb-3 overflow-hidden">
    
    <div className={`p-[10px] ${mode === 'genis' ? 'pb-4' : 'pb-3'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* İkon Kutusu */}
          <div className={`w-12 h-12 bg-main rounded-lg border border-border-subtle/20 flex items-center justify-center shrink-0
            ${type === 'inbound' ? 'text-accent' : 'text-secondary opacity-50'}`}>
            {item.icon}
          </div>
          
          <div className="flex flex-col">
            <h4 className="text-[14px] font-black text-primary italic leading-tight uppercase tracking-tight">{item.title}</h4>
            <p className="text-[10px] text-secondary font-bold opacity-60 uppercase">
              {type === 'inbound' ? `Gönderen: ${item.user}` : `Alıcı: ${item.user}`}
            </p>
          </div>
        </div>

        {/* SAĞ TARAF: Çift Satır Zaman (İkonsuz) */}
        <div className="flex flex-col items-end leading-none text-right">
          <span className="text-[11px] font-black text-primary italic uppercase">{item.days} Gün</span>
          <span className="text-[9px] font-bold text-secondary italic opacity-60 uppercase mt-0.5">{item.hours} Saat</span>
        </div>
      </div>

      {mode === 'genis' && (
        <div className="mt-3 pt-3 border-t border-border-subtle/10">
          <div className="flex justify-between items-start">
            <p className="text-[10px] text-secondary font-medium leading-tight max-w-[65%] italic">
              "{item.desc}"
            </p>
            <div className="text-right">
              <span className="text-[8px] font-black text-secondary uppercase opacity-40 block leading-none mb-1">Beyan Değeri</span>
              <span className="text-sm font-black text-primary italic tracking-tighter">{item.value}</span>
            </div>
          </div>
        </div>
      )}
    </div>

    {/* ZAMAN STATÜ ÇUBUĞU (Kalan zamanın % kaçı tükendi?) */}
    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-border-subtle/10">
      <div 
        className="h-full bg-accent transition-all duration-1000" 
        style={{ width: `${item.progress}%` }} 
      />
    </div>
  </div>
);

export default function DashboardPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('aktif');
  const [viewMode, setViewMode] = useState('genis');
  const [isAldiklarimOpen, setIsAldiklarimOpen] = useState(true);
  const [isVerdiklerimOpen, setIsVerdiklerimOpen] = useState(true);

  // 5 Farklı Emanet Senaryosu (Zaman ve Progress eklendi)
  const aldiklarimData = [
    { title: "MacBook Pro M3", user: "Caner U.", days: "05", hours: "14", progress: 65, value: "85.000 TL", desc: "Kılıfı ve şarj aletiyle teslim alındı.", icon: <Laptop size={22} strokeWidth={2.5} /> },
    { title: "Sony A7 IV Lens", user: "Zeynep T.", days: "02", hours: "08", progress: 85, value: "45.000 TL", desc: "Çizik kontrolü yapıldı, temiz.", icon: <Camera size={22} strokeWidth={2.5} /> }
  ];

  const verdiklerimData = [
    { title: "Rolex Submariner", user: "Murat Y.", days: "14", hours: "12", progress: 20, value: "420.000 TL", desc: "Sertifikası bende kaldı.", icon: <Watch size={22} strokeWidth={2.5} /> },
    { title: "Fender Strat", user: "Emre B.", days: "07", hours: "22", progress: 40, value: "65.000 TL", desc: "Hardcase ile teslim edildi.", icon: <Guitar size={22} strokeWidth={2.5} /> },
    { title: "iPad Pro 12.9", user: "Selin A.", days: "10", hours: "05", progress: 55, value: "38.000 TL", desc: "Pencil ile birlikte verildi.", icon: <Tablet size={22} strokeWidth={2.5} /> }
  ];

  return (
    <div className="px-5 pb-24 pt-6 max-w-md mx-auto min-h-screen bg-main font-sans">
      
      {/* 1. KAPTAN KÖŞKÜ (Başlık & Kontroller) */}
      <div className="flex items-center justify-between mb-8 px-1">
        <h1 className="text-2xl font-black text-primary tracking-tighter italic uppercase">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <div className="flex bg-surface border border-border-subtle/30 rounded-lg p-0.5 shadow-sm">
            <button onClick={() => setViewMode('dar')} className={`p-1.5 rounded-md transition-all ${viewMode === 'dar' ? 'bg-main shadow-sm' : 'opacity-30'}`}><LayoutList size={14} /></button>
            <button onClick={() => setViewMode('genis')} className={`p-1.5 rounded-md transition-all ${viewMode === 'genis' ? 'bg-main shadow-sm' : 'opacity-30'}`}><LayoutGrid size={14} /></button>
          </div>
          <button className="p-2 bg-surface border border-border-subtle/30 rounded-lg text-secondary shadow-sm active:scale-95"><Filter size={14} /></button>
        </div>
      </div>

      {/* 2. SEKMELER */}
      <div className="mb-8 border-none">
        <div className="flex space-x-8 px-1 items-end h-8">
          {['aktif', 'tamamlanmis'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 text-sm uppercase tracking-widest transition-all
                ${activeTab === tab ? 'text-primary font-black' : 'text-secondary opacity-40 font-bold'}`}
            >
              {tab === 'aktif' ? 'Aktifler' : 'Tamamlanmışlar'}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-accent rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 3. BÖLÜMLER */}
      <div className="space-y-10">
        <section>
          <button onClick={() => setIsAldiklarimOpen(!isAldiklarimOpen)} className="flex items-baseline space-x-2 mb-4 px-1 group">
            <ChevronDown size={20} className={`text-accent transition-transform self-center ${isAldiklarimOpen ? '' : '-rotate-90'}`} />
            <h2 className="text-xl font-black text-primary italic uppercase tracking-tighter">Aldıklarım</h2>
            {/* Sayı: Aynı boyut, daha ince font */}
            <span className="text-xl font-light text-secondary opacity-40 tracking-tighter italic">({aldiklarimData.length})</span>
          </button>
          {isAldiklarimOpen && aldiklarimData.map((item, i) => <TransactionCard key={i} mode={viewMode} type="inbound" item={item} />)}
        </section>

        <section>
          <button onClick={() => setIsVerdiklerimOpen(!isVerdiklerimOpen)} className="flex items-baseline space-x-2 mb-4 px-1 group">
            <ChevronDown size={20} className={`text-secondary transition-transform self-center ${isVerdiklerimOpen ? '' : '-rotate-90'}`} />
            <h2 className="text-xl font-black text-primary italic uppercase tracking-tighter">Verdiklerim</h2>
            <span className="text-xl font-light text-secondary opacity-40 tracking-tighter italic">({verdiklerimData.length})</span>
          </button>
          {isVerdiklerimOpen && verdiklerimData.map((item, i) => <TransactionCard key={i} mode={viewMode} type="outbound" item={item} />)}
        </section>
      </div>

      {/* FAB */}
      <button onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 w-14 h-14 bg-accent text-main rounded-xl flex items-center justify-center shadow-lg z-50 border border-border-subtle/30 active:scale-95 transition-all">
        <ArrowUpRight size={28} strokeWidth={3} />
      </button>

      <NewTransactionSheet isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}