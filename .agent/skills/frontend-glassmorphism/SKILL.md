---
name: gukiy-vault-glassmorphism
description: Builds the "Midnight Vault" aesthetic for Gukiy. Focuses on premium glassmorphism with high-contrast accent glows (Cyan/Amber) and Sacred Seal components.
---

# Gukiy Vault Glassmorphism Skill

Bu skill, Gukiy'nin "Güven ve Mühür" odaklı görsel dilini **React/Next.js + Tailwind CSS** kullanarak hayata geçirmek için teknik kurallar sağlar.

## 🎨 Renk Paleti ve Kimlik (Gukiy Tokens)
- **Base:** `bg-[#0B0F1A]` (Midnight Vault - Derin lacivert/siyah arka plan)
- **Accent 1 (Verdiklerim):** `text-[#00E5FF]` / `border-[#00E5FF]/30` (Electric Cyan)
- **Accent 2 (Aldıklarım):** `text-[#FFB300]` / `border-[#FFB300]/30` (Amber)
- **Glass Base:** `bg-white/5` (Beyaz yerine çok hafif saydam katman)

## 🛠 Tasarım İlkeleri (Gukiy Standartları)

### A) Cam Katman (Vault Surface)
- **Arka Plan:** Sadece düz renk değil, `bg-[#0B0F1A]` üzerine çok hafif bir radyal gradient.
- **Kart Yapısı:** `backdrop-blur-md` + `bg-white/[0.03]` + `border border-white/10`.
- **Gölge:** Sert siyah gölgeler yerine, kartın altından sızan çok hafif bir "accent glow" (Cyan veya Amber).

### B) Kutsal Mühürler (Sacred Seals)
- **Statü Rozetleri:** Düz ikon yerine, cam üzerinde yükselen 3D etkili mühürler.
- **Efekt:** Mühür aktifse `shadow-[0_0_15px_rgba(0,229,255,0.4)]` (Cyan Parlama).

### C) Hayalet Bar (Time Progress)
- İşlem kartlarının altındaki zaman göstergesi:
  - `bg-white/10` (Arka plan kanalı)
  - `bg-current` (Aktif doluluk - Cyan veya Amber renginde)

## 🏗 Tailwind Kullanım Kalıpları
- **Cam Kart:** `bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl`
- **Glow Text:** `text-[#00E5FF] drop-shadow-[0_0_8px_rgba(0,225,255,0.8)]`
- **Bumerang Butonu (FAB):** `bg-gradient-to-br from-[#00E5FF] to-[#00B8D4] shadow-xl hover:scale-110 transition-transform`

## 🚦 Karar Ağacı
1. **İşlem Tipi Nedir?**
   - Para/Eşya Çıkışı ise -> **Electric Cyan** kullan.
   - Para/Eşya Girişi ise -> **Amber** kullan.
2. **Okunabilirlik Kontrolü:**
   - Cam arkasındaki blur, metinlerin okunmasını engelliyor mu? Evet ise `bg-white/5