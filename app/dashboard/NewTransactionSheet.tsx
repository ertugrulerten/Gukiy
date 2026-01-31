'use client'
import React, { useEffect, useState } from 'react';
import { 
  X, Camera, Video, Plus, ChevronDown, 
  ShieldCheck, Play, UserPlus, Stamp, Search,
  DollarSign, Eye, ShieldAlert, CheckCircle2, History
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const mockUsers = [
  { id: 1, name: 'Ahmet S.', score: 'A+', img: 'https://i.pravatar.cc/150?u=ahmet', deals: 42, reliability: '%98', risk: 'Düşük' },
  { id: 2, name: 'Zeynep T.', score: 'A', img: 'https://i.pravatar.cc/150?u=zeynep', deals: 15, reliability: '%94', risk: 'Düşük' },
  { id: 3, name: 'Murat Y.', score: 'C-', img: 'https://i.pravatar.cc/150?u=murat', deals: 8, reliability: '%62', risk: 'Yüksek' },
  { id: 4, name: 'Caner U.', score: 'B+', img: 'https://i.pravatar.cc/150?u=caner', deals: 29, reliability: '%87', risk: 'Orta' },
];

// --- USER STATS MODAL ---
const UserStatsModal = ({ user, onClose }: { user: any, onClose: () => void }) => (
  <div className="absolute inset-0 z-[120] bg-main/95 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-300">
    <div className="w-full bg-surface border border-border-subtle/40 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
      <Stamp size={120} className="absolute -right-8 -bottom-8 text-primary opacity-[0.03] -rotate-12" />
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center space-x-4">
          <img src={user.img} className="w-16 h-16 rounded-xl object-cover border-2 border-border-subtle/20" alt="" />
          <div>
            <h3 className="text-xl font-black text-primary italic uppercase tracking-tighter">{user.name}</h3>
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest opacity-60">Güven Analizi</span>
          </div>
        </div>
        <button onClick={onClose} className="p-2 bg-main border border-border-subtle/30 rounded-lg text-primary"><X size={18} /></button>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-main/50 p-4 rounded-xl border border-border-subtle/10">
          <History size={16} className="text-secondary mb-2 opacity-40" />
          <p className="text-[9px] font-black text-secondary uppercase">İşlem</p>
          <p className="text-xl font-black text-primary italic">{user.deals}</p>
        </div>
        <div className="bg-main/50 p-4 rounded-xl border border-border-subtle/10">
          <CheckCircle2 size={16} className="text-accent mb-2 opacity-60" />
          <p className="text-[9px] font-black text-secondary uppercase">Başarı</p>
          <p className="text-xl font-black text-primary italic">{user.reliability}</p>
        </div>
      </div>
      <div className="bg-main p-4 rounded-xl border border-border-subtle/20 flex items-center justify-between">
        <span className="text-[10px] font-black text-primary uppercase italic">Risk Skoru: {user.risk}</span>
        <ShieldAlert size={16} className={user.risk === 'Yüksek' ? 'text-primary' : 'text-secondary opacity-40'} />
      </div>
    </div>
  </div>
);

export default function NewTransactionSheet({ isOpen, onClose }: Props) {
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [showStats, setShowStats] = useState(false);
  const [category, setCategory] = useState('Emanet Eşya');

  useEffect(() => {
    if (!isOpen) {
      setSearch('');
      setSelectedUser(null);
      setShowStats(false);
    }
  }, [isOpen]);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-[101] w-full bg-surface border-t border-border-subtle/40 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col ${isOpen ? 'translate-y-0 h-[95vh]' : 'translate-y-full h-0'}`}>
      
      {showStats && selectedUser && <UserStatsModal user={selectedUser} onClose={() => setShowStats(false)} />}

      {/* HEADER */}
      <div className="flex flex-col items-center pt-3 pb-2 sticky top-0 bg-surface z-10">
        <div className="w-12 h-1 bg-border-subtle/20 rounded-full mb-6" />
        <div className="flex justify-between items-center w-full px-6 mb-2">
          <div className="text-primary">
            <h2 className="text-3xl font-black tracking-tighter uppercase italic leading-none">SÖZLEŞME TASARLA</h2>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] mt-2 opacity-40 italic">Mühürleme Protokolü v2.3</p>
          </div>
          <button onClick={onClose} className="p-2.5 bg-main border border-border-subtle/30 rounded-lg active:scale-90"><X size={20} strokeWidth={2.5} /></button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-10 pb-40">
        
        {/* KATEGORİ SEÇİMİ */}
        <div className="space-y-3">
          <label className="text-[11px] text-primary font-black uppercase tracking-widest ml-1 opacity-70">Sözleşme Konusu</label>
          <div className="relative">
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-main border border-border-subtle/30 rounded-lg py-4 px-5 text-xs font-black uppercase italic tracking-tight appearance-none outline-none focus:border-accent shadow-sm">
              <option value="Emanet Eşya">Emanet Eşya</option>
              <option value="Para / Kripto">Para / Kripto</option>
              <option value="Taahhüt / Söz">Taahhüt / Söz</option>
            </select>
            <ChevronDown className="absolute right-5 top-4 text-primary opacity-40" size={18} />
          </div>
        </div>

        {/* MEDYA PANELİ */}
        <div className="space-y-4">
          <label className="text-[11px] text-primary font-black uppercase tracking-widest ml-1 opacity-70">Varlık İspatı</label>
          <div className="relative w-full aspect-[16/9] bg-main border border-border-subtle/30 rounded-xl overflow-hidden flex shadow-inner group">
            <button className="flex-[2] flex flex-col items-center justify-center space-y-2 border-r border-border-subtle/20 hover:bg-surface/50 transition-colors">
              <Camera size={28} className="text-secondary opacity-40 group-hover:text-accent" />
              <span className="text-[9px] font-black uppercase tracking-widest text-secondary opacity-50">Fotoğraf</span>
            </button>
            <div className="absolute top-1/2 left-[66.6%] -translate-x-1/2 -translate-y-1/2 bg-main border border-border-subtle/40 px-2 py-1 rounded-md z-10 shadow-sm"><span className="text-[8px] font-black text-secondary">VEYA</span></div>
            <button className="flex-[1] flex flex-col items-center justify-center space-y-2 hover:bg-surface/50 transition-colors">
              <Video size={20} className="text-secondary opacity-30 group-hover:text-accent" />
              <span className="text-[8px] font-black uppercase tracking-widest text-secondary opacity-40">Kayıt</span>
            </button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3].map((i) => (<button key={i} className="aspect-square bg-main border border-border-subtle/30 rounded-lg flex items-center justify-center text-secondary shadow-sm active:scale-95"><Plus size={18} /></button>))}
            <button className="aspect-square bg-main border border-border-subtle/30 rounded-lg flex items-center justify-center text-secondary relative overflow-hidden shadow-sm active:scale-95"><Play size={18} className="opacity-50 ml-1" fill="currentColor" /></button>
          </div>
        </div>

        {/* TANIM, ŞARTLAR & DEĞER */}
        <div className="space-y-5">
          <div className="space-y-3">
            <label className="text-[11px] text-primary font-black uppercase tracking-widest ml-1 opacity-70">Tanım ve Şartlar</label>
            <input type="text" placeholder="Sözleşme Başlığı" className="w-full bg-main border border-border-subtle/30 rounded-lg py-4 px-5 text-xs font-bold text-primary outline-none focus:border-accent shadow-sm" />
            <textarea placeholder="Şartları buraya mühürle..." rows={3} className="w-full bg-main border border-border-subtle/30 rounded-lg py-4 px-5 text-xs font-medium text-primary outline-none focus:border-accent resize-none shadow-sm" />
          </div>
          {category === 'Emanet Eşya' && (
            <div className="space-y-3 animate-in fade-in slide-in-from-top-2">
              <label className="text-[11px] text-primary font-black uppercase tracking-widest ml-1 opacity-70">Beyan Edilen Değer</label>
              <div className="relative group">
                <div className="absolute left-4 top-4 text-secondary opacity-30 group-focus-within:opacity-100"><DollarSign size={16} strokeWidth={3} /></div>
                <input type="text" placeholder="Örn: 12.500 TL" className="w-full bg-main border border-border-subtle/30 rounded-lg py-4 pl-12 pr-5 text-xs font-black italic text-primary outline-none focus:border-accent shadow-sm" />
              </div>
            </div>
          )}
        </div>

        {/* MUHATAP SEÇİMİ (SEÇİM MODU & ARAMA LİSTESİ & HIZLI EKLE) */}
        <div className="space-y-6 pt-4 border-t border-border-subtle/10">
          <label className="text-[11px] text-primary font-black uppercase tracking-widest ml-1 opacity-70">Muhatap (Kime Verilecek?)</label>
          <div className="relative">
            {!selectedUser ? (
              <div className="relative">
                <Search className="absolute left-4 top-4 text-secondary opacity-30" size={16} />
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="İsim veya Protokol No Ara..." className="w-full bg-main border border-border-subtle/30 rounded-lg py-4 pl-12 pr-5 text-xs font-bold text-primary outline-none focus:border-accent" />
                {search.length > 0 && (
                  <div className="absolute top-full left-0 w-full mt-2 bg-main border border-border-subtle/30 rounded-xl shadow-2xl z-[105] overflow-hidden animate-in fade-in slide-in-from-top-2">
                    {mockUsers.map(user => (
                      <button key={user.id} onClick={() => { setSelectedUser(user); setSearch(''); }} className="w-full flex items-center justify-between p-3 hover:bg-surface/50 border-b border-border-subtle/10 last:border-0 transition-colors">
                        <div className="flex items-center space-x-3"><img src={user.img} className="w-8 h-8 rounded-full object-cover" alt="" /><span className="text-[11px] font-black text-primary uppercase italic">{user.name}</span></div>
                        <div className="flex items-center space-x-1.5 px-2 py-1 bg-surface border border-border-subtle/20 rounded-md"><Stamp size={10} className="text-secondary" /><span className="text-[9px] font-black text-primary italic">{user.score}</span></div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center w-full bg-main border border-border-subtle/30 rounded-lg overflow-hidden h-[54px] animate-in zoom-in-95">
                <div className="relative h-full w-14 cursor-pointer group" onClick={() => setShowStats(true)}>
                  <img src={selectedUser.img} className="h-full w-full object-cover border-r border-border-subtle/20" alt="" />
                  <div className="absolute bottom-1 right-1 bg-black/60 p-0.5 rounded-sm opacity-80 group-hover:opacity-100 transition-opacity">
                    <Eye size={10} className="text-white" />
                  </div>
                </div>
                <div className="flex-1 px-4 flex items-center justify-between">
                  <span className="text-[11px] font-black text-primary uppercase italic truncate tracking-tight">{selectedUser.name}</span>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1.5 px-2 py-1 bg-surface border border-border-subtle/20 rounded-md">
                      <Stamp size={10} className="text-secondary" />
                      <span className="text-[9px] font-black text-primary italic">{selectedUser.score}</span>
                    </div>
                    <button onClick={() => setSelectedUser(null)} className="p-1.5 bg-surface border border-border-subtle/30 rounded-lg text-secondary active:scale-90"><X size={14} strokeWidth={3} /></button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* HIZLI EKLE KİŞİLERİ (Avatar Stack) */}
          <div className="space-y-4">
            <span className="text-[9px] text-secondary font-black uppercase tracking-[0.2em] opacity-40 italic ml-1">Sık Kullanılan Mühürler</span>
            <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide px-1">
              {mockUsers.map(user => (
                <button key={user.id} onClick={() => setSelectedUser(user)} className="flex flex-col items-center space-y-3 group shrink-0 active:scale-95 transition-all">
                  <div className="relative flex items-center">
                    <div className="w-14 h-14 rounded-full border-2 border-surface shadow-lg overflow-hidden z-10"><img src={user.img} className="w-full h-full object-cover" alt="" /></div>
                    <div className={`w-14 h-14 -ml-7 rounded-full border-2 flex items-center justify-end pr-2 shadow-inner transition-all duration-300 ${selectedUser?.id === user.id ? 'bg-accent border-accent' : 'bg-main border-border-subtle/20'}`}><span className={`text-[10px] font-black italic pr-1 ${selectedUser?.id === user.id ? 'text-main' : 'text-primary'}`}>{user.score}</span></div>
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-tight italic transition-colors ${selectedUser?.id === user.id ? 'text-accent' : 'opacity-70'}`}>{user.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* AKSİYON (Sözleşmeyi Oluştur) */}
        <div className="space-y-6 pt-2">
          <button className="w-full bg-accent text-main border border-border-subtle/20 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center space-x-3 active:scale-[0.98] transition-all shadow-xl">
            <ShieldCheck size={20} strokeWidth={2.5} />
            <span>SÖZLEŞMEYİ OLUŞTUR</span>
          </button>
          <div className="w-full py-10 bg-main/30 border border-border-subtle/10 rounded-xl text-center">
             <span className="text-[9px] text-secondary font-black uppercase tracking-[0.3em] opacity-30 italic">Klavye Güvenli Alan</span>
          </div>
        </div>
      </div>
    </div>
  );
}