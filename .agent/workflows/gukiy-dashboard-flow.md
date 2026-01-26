---
description: Gukiy Dashboard Tasarım ve Geliştirme Akışı
---

Adım 1 — Kapsam ve Gözden Geçirme
Hedeflenen teknoloji yığınını doğrula: React, Tailwind CSS.

Ekranın MVP kapsamını onayla:

Header: Logo ve Statü Rozeti (Altın Mühür).

Tabs: Aktif İşlemler ve Tamamlanmış İşlemler.

Content: "Aldıklarım" ve "Verdiklerim" listeleri.

Actions: Ortadaki Bumerang (FAB) butonu.

Eğer eksik bir veri veya tasarım detayı varsa DUR ve kullanıcıya sor.

Adım 2 — Bileşen Yapısı Planlama
Dashboard'u parçalara böl (Componentize):

StatBadge.tsx: Sağ üstteki statü rozeti.

TransactionCard.tsx: Çok amaçlı işlem kartı (Para/Eşya ve Renk mantığını içermeli).

EmptyState.tsx: "Tüm Mühürler Tamamlandı" (Zafer Ekranı).

BottomNav.tsx: 5 ikonlu alt menü çubuğu.

Adım 3 — Görsel Mantık (Logic) Uygulama
Agent, kod yazarken şu dinamik kuralları işletmelidir:

Renk Ayrımı: - İşlem tipi "Aldıklarım" ise; Kart çerçevesi ve parlaması Amber (#FFB300).

İşlem tipi "Verdiklerim" ise; Kart çerçevesi ve parlaması Cyan (#00E5FF).

Varlık Görseli: - Veri tipi "Para" ise para simgesi ve miktar göster.

Veri tipi "Eşya" ise ilgili ürün görselini/ikonunu göster.

Hayalet Bar (Zaman Göstergesi): Kartın altına ince, yarı saydam ve işlem renginde (Amber/Cyan) bir progress bar ekle.

Adım 4 — "Victory State" (Boş Ekran) Kontrolü
Eğer listede veri yoksa (Yeni kullanıcı veya tüm işlemler bittiğinde):

EmptyState.tsx bileşenini tetikle.

"Harika iş çıkardın!" mesajını ve "Yeni Mühür Başlat" butonunu göster.

Adım 5 — Performans ve UX Denetimi
Windows 11 Uyumluluğu: Antigravity çıktısının tarayıcıda akıcı çalışıp çalışmadığını kontrol et.

Blur Yoğunluğu: Arka plandaki backdrop-blur efektinin okunabilirliği bozmadığından emin ol.

Mobil Duyarlılık: Ekranın iPhone/Android boyutlarında taşma yapmadığını doğrula.

Adım 6 — Çıktı ve Kapanış
Üretilen dosyaların listesini sun.

Gelecek aşama için (V2: Hayalet İşlem Avcısı Mekaniği) notlarını bırak.