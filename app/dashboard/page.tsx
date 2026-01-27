'use client'

import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  Zap, 
  ShieldAlert, 
  Calendar, 
  X, 
  CheckCircle2,
  Clock
} from 'lucide-react';

export default function DashboardPage() {
  // State Yönetimi
  const [isLaunchOpen, setIsLaunchOpen] = useState(false);
  const [isSealing, setIsSealing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [boomerangs, setBoomerangs] = useState<any[]>([]);

  // Fırlatma Fonksiyonu
  const handleLaunch = () => {
    setIsSealing(true);
    
    // 1.5 saniye mühürleme simülasyonu
    setTimeout(() => {
      setIsSealing(false);
      setShowSuccess(true);
      
      // Listeye yeni bumerangı ekle
      const newBoomerang = {
        id: Date.now(),
        subject: "Acil Kira Desteği",
        amount: "5.000 TL",
        status: "Active",
        timeLeft: "30 Gün"
      };
      
      setBoomerangs([newBoomerang, ...boomerangs]);

      // 2 saniye sonra başarı ekranını kapat ve paneli gizle
      setTimeout(() => {
        setShowSuccess(false);
        setIsLaunchOpen(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="space-y-8 relative">
      {/* GÜVEN SKORU KARTI */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#00E5FF]/10 to-transparent border border-[#00E5FF]/20 rounded-[32px] p-8 shadow-[0_0_40px_rgba(0,229,255,0.05)]">
        <p className="text-[#00E5FF]/60 text-[10px] tracking-[0.3em] uppercase mb-2">Trust Integrity Score</p>
        <div className="flex items-end space-x-2">
          <h2 className="text-6xl font-extralight tracking-tighter text-white">982</h2>
          <span className="text-[#00E5FF] text-sm mb-2 font-bold opacity-80">+12</span>
        </div>
        <div className="absolute -right-10 -top-10 w-48 h-48 bg-[#00E5FF]/5 rounded-full blur-[60px]" />
      </div>

      {/* AKSİYON BUTONLARI */}
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => setIsLaunchOpen(true)}
          className="group bg-white/[0.02] border border-white/5 rounded-[24px] p-6 flex flex-col items-center space-y-3 hover:border-[#00E5FF]/30 transition-all active:scale-95"
        >
          <div className="p-3 bg-[#00E5FF]/10 rounded-full text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-[#05070A] transition-all">
            <ArrowUpRight size={24} />
          </div>
          <span className="text-[10px] tracking-[0.2em] text-gray-400 uppercase font-bold">Bumerang Fırlat</span>
        </button>
        
        <button className="group bg-white/[0.02] border border-white/5 rounded-[24px] p-6 flex flex-col items-center space-y-3 hover:border-red-500/30 transition-all active:scale-95 text-left">
          <div className="p-3 bg-red-500/10 rounded-full text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
            <ArrowDownLeft size={24} />
          </div>
          <span className="text-[10px] tracking-[0.2em] text-gray-400 uppercase font-bold text-center">Kabul Bekleyen</span>
        </button>
      </div>

      {/* LİSTE BAŞLIĞI VE DİNAMİK LİSTE */}
      <div className="pt-4">
        <h3 className="text-[10px] tracking-[0.4em] text-gray-600 uppercase mb-6 px-2">Mühürlenmiş Aktif İşlemler</h3>
        <div className="space-y-4">
          {boomerangs.length === 0 ? (
            <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-6 flex items-center justify-center opacity-50">
              <p className="text-xs text-gray-500 tracking-widest uppercase">Şu an aktif bumerang bulunmuyor...</p>
            </div>
          ) : (
            boomerangs.map((item) => (
              <div key={item.id} className="bg-white/[0.03] border border-[#00E5FF]/20 rounded-2xl p-5 flex items-center justify-between animate-in fade-in zoom-in duration-500">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg text-[#00E5FF]">
                    <Zap size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{item.subject}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-tighter">{item.amount}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end space-x-1 text-[#00E5FF]">
                    <Clock size={12} />
                    <span className="text-xs font-bold">{item.timeLeft}</span>
                  </div>
                  <p className="text-[9px] text-gray-500 uppercase tracking-tighter">Geri Dönüşe Kalan</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* FIRLATMA PANELİ (DRAWER) */}
      {isLaunchOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => !isSealing && setIsLaunchOpen(false)} />
          
          <div className="relative w-full max-w-lg bg-[#0B0F1A] border-t border-[#00E5FF]/20 rounded-t-[40px] p-10 shadow-[0_-20px_80px_rgba(0,229,255,0.1)] animate-in slide-in-from-bottom duration-500 ease-out">
            <div className="w-12 h-1 bg-white/10 rounded-full mx-auto mb-10" />
            
            {showSuccess ? (
              <div className="py-12 flex flex-col items-center justify-center space-y-6 animate-in zoom-in duration-300">
                <div className="w-20 h-20 bg-[#00E5FF]/20 rounded-full flex items-center justify-center border border-[#00E5FF]/40 shadow-[0_0_40px_rgba(0,229,255,0.2)]">
                  <CheckCircle2 size={40} className="text-[#00E5FF]" />
                </div>
                <div className="text-center">
                  <h3 className="text-[#00E5FF] font-bold tracking-[0.4em] uppercase text-sm">Mühür Basıldı</h3>
                  <p className="text-gray-500 text-[10px] mt-2 tracking-widest uppercase">Bumerang Kaydedildi</p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-start mb-8">
                  <h2 className="text-xl font-light tracking-[0.4em] text-white uppercase">Vault Request</h2>
                  {!isSealing && <button onClick={() => setIsLaunchOpen(false)} className="text-gray-500 hover:text-white"><X size={20}/></button>}
                </div>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <input type="number" placeholder="0.00 TL" className="w-full bg-transparent border-b border-white/10 py-4 text-3xl font-light text-[#00E5FF] focus:outline-none focus:border-[#00E5FF] transition-all placeholder:text-gray-800" />
                    <input type="text" placeholder="Bumerang Konusu" className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:outline-none focus:border-[#00E5FF] transition-all placeholder:text-gray-700" />
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-4">
                    <div className="space-y-1">
                      <p className="text-[9px] text-gray-500 uppercase tracking-widest">Min. Kayıt Yılı</p>
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white outline-none appearance-none">
                        <option className="bg-[#0B0F1A]">2020 & Öncesi</option>
                        <option className="bg-[#0B0F1A]">2022 & Öncesi</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[9px] text-gray-500 uppercase tracking-widest">Risk Seviyesi</p>
                      <div className="flex bg-white/5 border border-white/10 rounded-xl p-1">
                        <button className="flex-1 text-[9px] py-2 rounded-lg bg-[#00E5FF] text-[#05070A] font-bold">LOW</button>
                        <button className="flex-1 text-[9px] py-2 text-gray-500">MID</button>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleLaunch}
                    disabled={isSealing}
                    className="w-full bg-[#00E5FF] text-[#05070A] font-bold py-5 rounded-[20px] tracking-[0.5em] uppercase text-[10px] shadow-[0_10px_30px_rgba(0,229,255,0.2)] hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
                  >
                    {isSealing ? 'MÜHÜRLENİYOR...' : 'MÜHÜRLE VE FIRLAT'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}