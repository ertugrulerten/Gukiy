'use client'
import React from 'react';
import { ArrowUpRight, ArrowDownLeft, Clock, ChevronRight } from 'lucide-react';

interface TransactionCardProps {
  mode: string;
  type: 'inbound' | 'outbound';
}

export default function TransactionCard({ mode, type }: TransactionCardProps) {
  return (
    <div className={`bg-surface border-2 border-subtle rounded-xl hover:border-accent group cursor-pointer shadow-md transition-all
      ${mode === 'dar' ? 'p-3 flex items-center justify-between' : 'p-card space-y-3'}`}>
      
      <div className="flex items-center space-x-3">
        <div className={`w-10 h-10 bg-main border border-subtle rounded-md flex items-center justify-center
          ${type === 'inbound' ? 'text-accent' : 'text-secondary'}`}>
          {type === 'inbound' ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />}
        </div>
        <div>
          <h4 className="text-xs font-black text-primary italic uppercase tracking-tight">Kredi Borcu</h4>
          <p className="text-[9px] text-secondary font-bold">Muhatap: {type === 'inbound' ? 'Mehmet K.' : 'Ahmet S.'}</p>
        </div>
      </div>
      
      {mode === 'genis' ? (
        <div className="flex justify-between items-end pt-1">
          <p className="text-base font-black text-primary italic tracking-tighter">12.500 TL</p>
          <div className="flex items-center space-x-1 text-[8px] text-secondary font-bold bg-main px-2 py-0.5 rounded-md border border-subtle/50">
            <Clock size={8} />
            <span>12 Gün Kaldı</span>
          </div>
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <div className="text-[11px] font-black text-primary italic">12.5k TL</div>
          <ChevronRight size={14} className="text-secondary opacity-30" />
        </div>
      )}
    </div>
  );
}