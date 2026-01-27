'use client' // Bu satır etkileşim için şart!

import React from 'react';
import { Shield } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Yönlendirme için

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Normalde burada şifre kontrolü yapılır, ama biz şimdilik kapıyı açıyoruz.
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#05070A] flex items-center justify-center relative overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-[#00E5FF]/5 rounded-full blur-[120px]" />
      
      <div className="z-10 bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-12 rounded-[40px] shadow-2xl w-full max-w-md text-center">
        <div className="inline-flex p-4 rounded-full bg-[#00E5FF]/10 mb-6 border border-[#00E5FF]/20">
          <Shield className="text-[#00E5FF]" size={32} />
        </div>
        
        <h1 className="text-3xl font-light tracking-[0.4em] text-white mb-1">GUKIY</h1>
        <p className="text-[#00E5FF]/40 text-[10px] tracking-[0.2em] uppercase mb-10">Vault Access Point</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="text" 
            placeholder="IDENTITY KEY"
            className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#00E5FF]/50 transition-all text-xs tracking-widest placeholder:text-gray-700"
          />
          <input 
            type="password" 
            placeholder="SECRET SEAL"
            className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#00E5FF]/50 transition-all text-xs tracking-widest placeholder:text-gray-700"
          />
          <button 
            type="submit"
            className="w-full bg-transparent border border-[#00E5FF]/40 text-[#00E5FF] py-4 rounded-2xl mt-6 hover:bg-[#00E5FF] hover:text-[#05070A] transition-all font-bold text-xs tracking-[0.3em] uppercase active:scale-95"
          >
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
}