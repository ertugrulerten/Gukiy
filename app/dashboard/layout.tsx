import React from 'react';
import { LayoutDashboard, Users, History, Settings } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#05070A] text-white font-sans">
      {/* Üst Bar - Vault Header */}
      <nav className="fixed top-0 w-full z-50 bg-[#05070A]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-[#00E5FF] font-light tracking-[0.3em] text-sm">GUKIY</span>
          <div className="flex space-x-6">
            <button className="text-gray-400 hover:text-[#00E5FF] transition-colors"><LayoutDashboard size={20} /></button>
            <button className="text-gray-400 hover:text-[#00E5FF] transition-colors"><Users size={20} /></button>
            <button className="text-gray-400 hover:text-[#00E5FF] transition-colors"><History size={20} /></button>
            <button className="text-gray-400 hover:text-[#00E5FF] transition-colors"><Settings size={20} /></button>
          </div>
        </div>
      </nav>

      {/* Ana İçerik */}
      <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
}