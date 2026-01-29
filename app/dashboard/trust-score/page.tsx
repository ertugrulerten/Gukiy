'use client'

import React from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  History, 
  AlertTriangle, 
  Calendar,
  ChevronLeft,
  X 
} from 'lucide-react';
import Link from 'next/link';

export default function TrustScorePage() {
  const metrics = [
    { label: 'Ödeme Sadakati', value: '%99', icon: <History size={18} />, color: 'text-green-500' },
    { label: 'Mühür Yaşı', value: '4.2 Yıl', icon: <Calendar size={18} />, color: 'text-[#00E5FF]' },
    { label: 'Sosyal Onay', value: '124', icon: <Users size={18} />, color: 'text-purple-500' },
    { label: 'Risk Faktörü', value: 'Çok Düşük', icon: <AlertTriangle size={18} />, color: 'text-blue-500' },
  ];

  return (
    <div className="max-w-md mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Navigation & Title */}
      <div className="flex items-center justify-between mb-8">
        <Link href="/dashboard" className="p-3 bg-white/5 rounded-2xl text-gray-400 hover:text-[#00E5FF] hover:bg-[#00E5FF]/10 transition-all">
          <ChevronLeft size={20} />
        </Link>
        <h2 className="text-[10px] tracking-[0.5em] text-gray-500 uppercase font-bold">Güven Analizi</h2>
        <Link href="/dashboard" className="p-3 bg-white/5 rounded-2xl text-gray-400 hover:text-red-500 hover:bg-red-500/10 transition-all">
          <X size={20} />
        </Link>
      </div>

      {/* Merkezi Skor Alanı */}
      <div className="text-center space-y-2 py-4">
        <div className="relative inline-block">
          <h1 className="text-7xl font-extralight text-white tracking-tighter">982</h1>
          <div className="absolute -right-4 -top-2 bg-[#00E5FF]/10 border border-[#00E5FF]/30 px-2 py-0.5 rounded text-[8px] text-[#00E5FF] font-bold">TOP 1%</div>
        </div>
        <div className="flex justify-center items-center space-x-2 text-[#00E5FF]/60">
          <ShieldCheck size={14} />
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase">Mühürlenmiş Hesap</span>
        </div>
      </div>

      {/* Metrik Grid */}
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white/[0.02] border border-white/5 rounded-[24px] p-5 space-y-4 hover:bg-white/[0.04] transition-colors group">
            <div className={`p-2 w-fit rounded-xl bg-white/5 ${m.color} group-hover:scale-110 transition-transform`}>
              {m.icon}
            </div>
            <div>
              <p className="text-[9px] text-gray-400 uppercase tracking-tighter">{m.label}</p>
              <p className="text-xl font-medium text-white">{m.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Grafik Alanı */}
      <div className="bg-white/[0.02] border border-white/5 rounded-[32px] p-6">
        <div className="flex justify-between items-center mb-8">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Güven Momentum</p>
          <div className="flex items-center space-x-1 text-green-500 text-xs">
            <TrendingUp size={12} />
            <span>+4.2%</span>
          </div>
        </div>
        
        <div className="flex items-end justify-between h-24 gap-3 px-2">
          {[30, 50, 40, 80, 65, 95, 100].map((h, i) => (
            <div key={i} className="flex-1 bg-white/5 rounded-full relative group h-full">
              <div 
                className="absolute bottom-0 w-full bg-gradient-to-t from-[#00E5FF]/40 to-[#00E5FF]/10 rounded-full transition-all duration-1000" 
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bilgilendirme Notu */}
      <div className="p-4 bg-yellow-500/5 border border-yellow-500/10 rounded-2xl flex items-start space-x-3">
        <AlertTriangle size={16} className="text-yellow-500 shrink-0" />
        <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-tight">
          Güven puanınız, bumerang geri dönüş hızınız ve sosyal mühürlerinizin ağırlığı ile hesaplanır.
        </p>
      </div>
    </div>
  );
}