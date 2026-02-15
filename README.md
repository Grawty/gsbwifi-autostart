# GSBWIFI Otomatik Başlatıcı
GSBWIFI portalında “Başlat” butonuna otomatik olarak tıklar.
Buton pasif (disabled) duruma geçtiğinde işlemin tamamlandığını varsayar sekmeyi kapatır.

### 🚀 Özellikler
- “Başlat” butonunu otomatik algılar
- PrimeFaces yapısını destekler
- Belirli aralıklarla kontrol eder
- Sekme otomatik kapanır.

### 📦 Kurulum

1. Tarayıcınıza **Tampermonkey** eklentisini yükleyin.
2. Tampermonkey simgesine tıklayın ve **Yeni Betik Oluştur (Create a new script)** seçeneğini seçin.
3. Açılan editördeki varsayılan içeriği tamamen silin.
4. [gsb.user.js](https://github.com/Grawty/gsbwifi-autostart/blob/Grawty/gsb.user.js) dosyasının içeriğini yapıştırın.
5. `Ctrl + S` ile kaydedin.

> ⚠️ Not: Bazı tarayıcılarda userscript çalıştırabilmek için uzantılar sayfasında
> “Kullanıcı betiklerine izin ver” veya benzeri bir seçenek aktif edilmelidir.

---

### 🚀 Kullanım

1. `https://wifi.gsb.gov.tr/` adresine gidin.
2. GSBWIFI giriş bilgilerinizi girin.
3. “Başlat” butonu aktifse script otomatik olarak tıklar.
4. Buton pasif (disabled) duruma geçtiğinde işlem tamamlanmış kabul edilir.



### ⚠️ Sorumluluk Reddi

> Bu script yalnızca kullanıcı arayüzü otomasyonu yapar.
Kimlik doğrulama, güvenlik mekanizmaları veya teknik korumaları aşmaz.
Kullanıcılar, ilgili web sitesinin kullanım şartlarına ve yürürlükteki mevzuata uygun hareket etmekten sorumludur.
Oluşabilecek hizmet kısıtlamaları veya diğer sonuçlardan geliştirici sorumlu değildir.
