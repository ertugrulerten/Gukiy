---
trigger: always_on
---

Frontend Workspace Rules
Activation: Always On

Bu dosya, bu workspace içindeki tüm frontend çalışmalarında Agent’ın uyması gereken proje özel kuralları tanımlar.

1. Teknoloji Stack’i & Antigravity Uyumu
- Framework: Antigravity Agent Manager üzerinden React kullanılacaktır.
- Styling: Tailwind CSS zorunludur. (Not: Daha önce kullanmadığını belirttin; Agent bu konuda sana açıklayıcı yorum satırları eklemekle yükümlüdür).
- İkonografi: Lucide-react veya Heroicons (Bumerang ve Mühür ikonları için özelleştirilecektir).
- Yasaklar: Harici ağır UI kütüphaneleri (MUI vb.) yasaktır. Sadece hafif ve özelleştirilebilir bileşenler kullanılabilir.

2. Tasarım Sistemi (Gukiy DNA)
- Agent, her bileşende şu renk paletine ve görsel hiyerarşiye sadık kalacaktır:
- Arka Plan: bg-[#0F172A] (Midnight Vault).
- Birincil (Varlık/Alacak): text-[#00E5FF] / shadow-[#00E5FF] (Electric Cyan).
- İkincil (Borç/Mühür): text-[#FFB300] / shadow-[#FFB300] (Digital Amber).
- Glassmorphism: Kartlarda backdrop-blur-md ve düşük opaklıklı kenarlıklar (border-white/10) kullanılacaktır.
- Glow (Parlama): Sadece aktif işlem kartlarında ve "Güven Skoru" bileşeninde ölçülü olarak kullanılacaktır.

3. Bileşen ve Veri Disiplini
- Mobile-First: Tasarım önce iPhone ekran oranlarına (390x844 vb.) göre yapılacaktır.
- Kullanıcı Bilgisi: İşlem kartlarının başında mutlaka kullanıcı profil resmi (img) yer alacaktır.
- Varlık Görseli: - İşlem nakit ise: Para birimi simgesi ve miktar.
- İşlem eşya ise: İlgili nesne ikonu/görseli.
- Hayalet İşlemler: Yeni kullanıcılar için opacity-40 ve grayscale filtreli placeholder (yer tutucu) işlemler tanımlanacaktır.

4. Dosya ve Kod Standartları
- PascalCase.tsx: Bileşen isimlendirmesi.
- Atomic Design: Küçük parçalar (Buton, Badge) components/ui altında; büyük yapılar (Dashboard, Profile) components/features altında toplanacaktır.
- Clean Code: Tailwind sınıfları çok uzarsa, clsx veya tailwind-merge kütüphaneleri ile yönetilecektir.

5. Scope ve Güvenlik (GEMINI.md Entegrasyonu)
- Agent: GEMINI.md dosyasındaki tüm çalıştırma ve onay kurallarına tabidir.
- Refactor: Sadece metin bazlı öneri sunabilir, onay almadan kodu değiştiremez.
- Belirsizlik: Mantıksal uyuşmazlık (örn: borç varken yeşil ok kullanımı) sezdiğinde DURUR ve netleştirme sorar.

Bu kuralların ihlali, proje standartlarının ihlali sayılır.
