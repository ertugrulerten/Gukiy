'use client'
import React from 'react';
import { Square, User, Shield, ChevronDown } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* WIREFRAME HEADER */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-900 border-b border-zinc-800 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          
          {/* SOL: LOGO (MENU) & STATUS BAR */}
          <div className="flex items-center space-x-6">
            {/* Logo Menu Button */}
            <div className="flex items-center space-x-2 cursor-pointer group">
              <div className="w-10 h-10 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center hover:bg-zinc-700 transition-all">
                <Square size={20} className="text-zinc-500 group-hover:text-zinc-300" /> 
              </div>
              <ChevronDown size={14} className="text-zinc-600" />
            </div>

            {/* Mühür & Kademe Göstergesi */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <Shield size={12} className="text-zinc-500" />
                <div className="w-24 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-zinc-600" /> {/* Level Progress */}
                </div>
              </div>
              <span className="text-[9px] text-zinc-600 uppercase font-mono tracking-widest leading-none">Status: Lvl 04</span>
            </div>
          </div>

          {/* SAĞ: PROFİL ALANI */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block text-right">
              <div className="w-20 h-2 bg-zinc-800 rounded mb-1 ml-auto" />
              <div className="w-12 h-1.5 bg-zinc-800/50 rounded ml-auto" />
            </div>
            {/* Profil İkonu */}
            <div className="w-12 h-12 bg-zinc-800 border border-zinc-700 rounded-2xl flex items-center justify-center cursor-pointer hover:border-zinc-500 transition-all">
              <User size={20} className="text-zinc-500" />
            </div>
          </div>
        </div>
      </nav>

      {/* SAYFA İÇERİĞİ */}
      <main className="pt-24">{children}</main>
    </div>
  );
}