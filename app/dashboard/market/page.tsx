import React from 'react';
import { Filter, MapPin, ShieldAlert, Calendar } from 'lucide-react';

export default function MarketPage() {
  return (
    <div className="space-y-6">
      {/* Pazar Filtreleri */}
      <div className="flex items-center justify-between bg-white/[0.02] border border-white/5 p-4 rounded-2xl overflow-x-auto gap-4">
        <div className="flex items-center space-x-2 text-[#00E5FF]">
          <Filter size={18} />
          <span className="text-[10px] font-bold tracking-widest uppercase">Filtrele</span>
        </div>
        <select className="bg-transparent border-none text-[10px] text-gray-400 focus:ring-0 outline-none uppercase tracking-tighter">
          <option>Risk Durumu (Tümü)</option>
          <option>Düşük Risk</option>
          <option>Yüksek Risk</option>
        </select>
        <select className="bg-transparent border-none text-[10px] text-gray-400 focus:ring-0 outline-none uppercase tracking-tighter">
          <option>Kayıt Yılı (Tümü)</option>
          <option>5+ Yıl</option>
          <option>1+ Yıl</option>
        </select>
      </div>

      {/* Market Listesi */}
      <div className="grid gap-4">
        {[
          { name: "Metehan K.", year: "2021", risk: "Low", amount: "5.000 TL", loc: "İzmit", dist: "2.4 km" },
          { name: "Selin O.", year: "2024", risk: "High", amount: "2.500 TL", loc: "Gebze", dist: "12 km" },
        ].map((item, i) => (
          <div key={i} className="group relative bg-white/[0.03] border border-white/5 hover:border-[#00E5FF]/30 p-6 rounded-[32px] transition-all cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${item.risk === 'Low' ? 'border-green-500/50 bg-green-500/10' : 'border-red-500/50 bg-red-500/10'}`}>
                  <ShieldAlert size={20} className={item.risk === 'Low' ? 'text-green-500' : 'text-red-500'} />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-wide">{item.name}</h4>
                  <div className="flex items-center space-x-2 text-gray-500 text-[10px] uppercase tracking-tighter">
                    <Calendar size={12} />
                    <span>Mühür Yılı: {item.year}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-light text-white">{item.amount}</p>
                <div className="flex items-center justify-end space-x-1 text-gray-500 text-[10px] uppercase tracking-tighter">
                  <MapPin size={10} />
                  <span>{item.dist}</span>
                </div>
              </div>
            </div>
            
            <button className="mt-6 w-full py-3 bg-[#00E5FF]/10 text-[#00E5FF] text-[10px] font-bold tracking-[0.3em] uppercase rounded-xl group-hover:bg-[#00E5FF] group-hover:text-[#05070A] transition-all">
              İsteği Değerlendir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}