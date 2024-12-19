# Futbol Ligi Yönetim Sistemi

Bu proje, futbol takımlarını, oyuncuları, maç sonuçlarını ve lig sıralamalarını yöneten bir sistemdir. Ayrıca maç sonuçlarını simüle ederek sıralamaları dinamik bir şekilde günceller. Projede çeşitli veri yapıları kullanılmıştır: **Bağlı Liste (Linked List), Kuyruk (Queue), Yığın (Stack), Hash Tablosu, Heap ve İkili Arama Ağacı (Binary Search Tree - BST)**.

## Özellikler

### 1. Takım ve Oyuncu Yönetimi

- **Takım Ekle/Sil/Güncelle**:

  - Takım adı, benzersiz ID, oyuncu listesi, toplam puan ve gol farkı bilgilerini içerir.

- **Oyuncu Ekle/Güncelle**:

  - Oyuncu adı, benzersiz ID, pozisyon ve atılan gol sayısını içerir.

- **Veri Yapısı**: Oyuncular, takıma bağlı liste (Linked List) olarak saklanır.

### 2. Maç Simülasyonu

- İki takım arasında rastgele sonuçlarla maç simülasyonu yapılır.
- Puanlama:
  - **3 puan**: Galibiyet
  - **1 puan**: Beraberlik
- Gol farkı güncellenir.
- **Veri Yapıları**:
  - **Kuyruk (Queue)**: Maç programını sırayla işler.
  - **Yığın (Stack)**: Maç sonuçlarını kronolojik olarak saklar.

### 3. Lig Sıralamaları

- Takımlar puanlarına göre sıralanır. Puan eşitliği durumunda gol farkı dikkate alınır.
- **Veri Yapısı**:
  - **Heap**: Lig sıralamalarını verimli bir şekilde yönetir.

### 4. Arama İşlevselliği

- Takımları veya oyuncuları isimlerine göre arar.
- **Veri Yapısı**:
  - **BST**: Arama işlemlerini hızlı ve verimli bir şekilde gerçekleştirir.

### 5. Ek Özellikler

- **Maç Geçmişi**: Son n maç sonucunu yığından getirir.
- **Oyuncu Önerisi**: Atılan gol sayısına göre en iyi performans gösteren oyuncuları önerir.

## Veri Yapıları ve Kullanım Alanları

| Veri Yapısı     | Kullanım Alanı                            |
| --------------- | ----------------------------------------- |
| **Linked List** | Oyuncu listesini dinamik olarak saklama   |
| **Queue**       | Maç takvimi                               |
| **Stack**       | Maç sonuçlarını kronolojik olarak saklama |
| **Hash Table**  | Takım ve oyuncu verilerine hızlı erişim   |
| **Heap**        | Lig sıralamalarını verimli yönetme        |
| **BST**         | Takım ve oyuncuları arama ve sıralama     |

## Örnek Çalışma Akışı

1. **Takım ve Oyuncu Eklenmesi**:

   - Takım ve oyuncular sisteme eklenir, Hash Tablosu kullanılarak saklanır.

2. **Maç Simülasyonu**:

   - Maçlar Kuyruk ile sıralanır, simülasyon yapılır ve puanlar güncellenir.

3. **Lig Sıralaması Güncellemesi**:

   - Heap kullanılarak sıralamalar dinamik olarak güncellenir.

4. **Arama İşlemleri**:

   - BST kullanılarak takım veya oyuncu bilgileri aranır.

5. **Maç Geçmişi**:
   - Son n maçın sonuçları Yığın kullanılarak görüntülenir.

## Proje Teslimatı

1. **Kod Dosyaları**: Tüm Java sınıflarını (.java dosyaları) içerir.
2. **Dokümantasyon**: Kullanıcı rehberi ve sınıf/metot açıklamaları.
3. **Rapor**: Kullanılan veri yapıları, karşılaşılan zorluklar ve örneklerle birlikte detaylı açıklama.

## Kullanım Talimatları

1. **Kurulum**:

   - Projeyi bilgisayarınıza klonlayın.
   - Gerekli Java geliştirme ortamını (JDK) yükleyin.

2. **Çalıştırma**:

   - Sistemi başlatın ve komut satırı aracılığıyla işlemleri gerçekleştirin.

3. **Örnek Komutlar**:
   - Takım eklemek için: `addTeam()`
   - Oyuncu eklemek için: `addPlayer()`
   - Maç simüle etmek için: `simulateMatch()`
   - Lig sıralamalarını görüntülemek için: `displayRankings()`

## Yazarlar

Bu proje, maksimum 3 kişilik bir grup tarafından gerçekleştirilebilir.

---

**Notlar:**

- Gönderim yalnızca Microsoft Teams üzerinden yapılmalıdır.
- Herhangi bir kopya tespiti durumunda proje değerlendirilmeyecektir.

---
