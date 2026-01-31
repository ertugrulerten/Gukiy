'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Mail, Lock, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-main flex flex-col justify-center px-6 py-12 max-w-md mx-auto">
      
      {/* LOGO SİSTEMİ (Dashboard ile aynı geometride) */}
      <div className="mb-12 text-center">
        <div className="w-16 h-16 bg-accent rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg">
           <Shield size={32} className="text-main" />
        </div>
        <h1 className="text-3xl font-black text-primary tracking-tighter uppercase italic">BOOMERANG</h1>
        <p className="text-[9px] text-secondary font-black uppercase tracking-[0.3em] mt-1 opacity-50">Güven Protokolü v2.3</p>
      </div>

      {/* GİRİŞ FORMU */}
      <form onSubmit={(e) => { e.preventDefault(); router.push('/dashboard'); }} className="space-y-4">
        <div className="space-y-2">
          <label className="text-[10px] text-primary font-black uppercase tracking-widest ml-1 opacity-70">Kimlik (E-Posta)</label>
          <div className="relative group">
            <Mail className="absolute left-4 top-4 text-secondary opacity-40 group-focus-within:opacity-100 transition-opacity" size={16} />
            <input 
              required
              type="email" 
              placeholder="isim@muhur.com"
              className="w-full bg-surface border border-border-subtle/30 rounded-lg py-4 pl-12 pr-4 text-xs font-bold text-primary outline-none focus:border-accent transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <label className="text-[10px] text-primary font-black uppercase tracking-widest opacity-70">Mühür (Şifre)</label>
          </div>
          <div className="relative group">
            <Lock className="absolute left-4 top-4 text-secondary opacity-40 group-focus-within:opacity-100 transition-opacity" size={16} />
            <input 
              required
              type="password" 
              placeholder="••••••••"
              className="w-full bg-surface border border-border-subtle/30 rounded-lg py-4 pl-12 pr-4 text-xs font-bold text-primary outline-none focus:border-accent transition-all shadow-sm"
            />
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-accent text-main border border-border-subtle/20 py-5 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center space-x-3 active:scale-[0.97] transition-all shadow-md mt-6"
        >
          <span>Sistemi Aç</span>
          <ArrowRight size={18} strokeWidth={3} />
        </button>
      </form>
    </div>
  );
}