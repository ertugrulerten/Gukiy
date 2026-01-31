'use client'
import React from 'react';
import { Square, User, Shield, ChevronDown } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-main text-primary transition-colors duration-500">
      
      {/* GLOBAL HEADER - Sabit Üst Bar */}
      <nav className="fixed top-0 w-full z-[60] bg-surface border-b-2 border-subtle h-20 shadow-sm">
        <div className="max-w-md mx-auto px-6 h-full flex items-center justify-between">
          
          {/* SOL: LOGO & STATUS BAR */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-main border-2 border-subtle rounded-xl flex items-center justify-center shadow-sm">
              <Square size={20} className="text-secondary" /> 
            </div>

            {/* Statüs Bar - Artık Görünür */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <Shield size={12} className="text-accent" />
                <div className="w-20 h-2 bg-main border border-subtle rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-accent" />
                </div>
              </div>
              <span className="text-[8px] text-secondary uppercase font-black tracking-widest leading-none">LVL 04</span>
            </div>
          </div>

          {/* SAĞ: PROFİL */}
          <div className="flex items-center space-x-3">
             <div className="w-10 h-10 bg-main border-2 border-subtle rounded-2xl flex items-center justify-center shadow-sm">
              <User size={20} className="text-secondary" />
            </div>
            <ChevronDown size={14} className="text-secondary opacity-50" />
          </div>
        </div>
      </nav>

      {/* SAYFA İÇERİĞİ - pt-20 ile Header'ın altında kalması garanti edildi */}
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
}