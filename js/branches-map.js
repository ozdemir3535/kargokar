/* =============================================
   KARGO KAR - ŞUBE HARİTASI
   Türkiye haritasında şube konumlarını gösterir
   
   KULLANIM KILAVUZU:
   ==================
   1. Aşağıdaki branchesByCity objesine şube bilgilerinizi ekleyin
   2. Her il için bir dizi oluşturun
   3. Her şube için şu bilgileri girin:
      - name: Şube adı
      - lat: Enlem (latitude) - Google Maps'ten alabilirsiniz
      - lng: Boylam (longitude) - Google Maps'ten alabilirsiniz
      - address: Tam adres bilgisi
      - phone: Telefon numarası
   
   KOORDİNAT BULMA:
   ================
   Google Maps'te şube adresini arayın, konuma sağ tıklayın,
   koordinatları kopyalayın. İlk sayı lat, ikinci sayı lng'dir.
   
   Örnek: 41.0082, 28.9784 → lat: 41.0082, lng: 28.9784
   
   TOPLAM: 18 il, 85 şube
   ============================================= */

// =============================================
// ŞUBE KONUMLARI - İL BAZINDA ORGANİZE
// Her il için şubeleri ekleyin
// Format: { name: "Şube Adı", lat: enlem, lng: boylam, address: "Tam Adres", phone: "Telefon" }
// =============================================

const branchesByCity = {
  // ADANA
  "Adana": [
    { name: "Adana İncirlik Şubesi", lat: 36.9789, lng: 35.2983, address: "", phone: "" },
    { name: "Adana Sanayi Şubesi", lat: 36.9850, lng: 35.3200, address: "", phone: "" },
    { name: "Adana Saydam Şubesi", lat: 36.9900, lng: 35.3100, address: "", phone: "" },
    { name: "Adana Yüreğir Şubesi", lat: 36.9800, lng: 35.3400, address: "", phone: "" },
    { name: "Adana Toros Şubesi", lat: 36.9750, lng: 35.3300, address: "", phone: "" },
    { name: "Adana Misis Şubesi", lat: 36.9600, lng: 35.6200, address: "", phone: "" },
    { name: "Adana Seyhan Şubesi", lat: 36.9914, lng: 35.3308, address: "", phone: "" },
    { name: "Adana Ceyhan Şubesi", lat: 37.0247, lng: 35.8175, address: "", phone: "" }
  ],
  
  // ANKARA
  "Ankara": [
    { name: "Ankara Sincan Şubesi", lat: 39.9544, lng: 32.5689, address: "", phone: "" },
    { name: "Ankara Ostim Şubesi", lat: 39.9667, lng: 32.7833, address: "", phone: "" },
    { name: "Ankara Şaşmaz Şubesi", lat: 39.9500, lng: 32.8000, address: "", phone: "" },
    { name: "Ankara İvedik Şubesi", lat: 39.9333, lng: 32.8500, address: "", phone: "" },
    { name: "Ankara Gimat Şubesi", lat: 39.9200, lng: 32.8500, address: "", phone: "" },
    { name: "Ankara Kazan Şubesi", lat: 40.2333, lng: 32.6833, address: "", phone: "" },
    { name: "Ankara Kızılay Şubesi", lat: 39.9208, lng: 32.8541, address: "", phone: "" },
    { name: "Ankara Siteler Şubesi", lat: 39.9500, lng: 32.8500, address: "", phone: "" },
    { name: "Ankara Kardelen Şubesi", lat: 39.9400, lng: 32.8600, address: "", phone: "" },
    { name: "Ankara Balgat Şubesi", lat: 39.9100, lng: 32.8600, address: "", phone: "" },
    { name: "Ankara İskitler Şubesi", lat: 39.9500, lng: 32.8700, address: "", phone: "" },
    { name: "Ankara Temelli Şubesi", lat: 39.5500, lng: 32.4833, address: "", phone: "" }
  ],
  
  // ŞANLIURFA
  "Şanlıurfa": [
    { name: "Şanlıurfa Merkez Şubesi", lat: 37.1674, lng: 38.7955, address: "", phone: "" }
  ],
  
  // İSKENDERUN
  "İskenderun": [
    { name: "İskenderun Merkez Şubesi", lat: 36.5872, lng: 36.1733, address: "", phone: "" }
  ],
  
  // İSTANBUL ANADOLU
  "İstanbul Anadolu": [
    { name: "İstanbul Anadolu Yakası Şubesi", lat: 40.9849, lng: 29.1031, address: "", phone: "" }
  ],
  
  // İSTANBUL AVRUPA
  "İstanbul Avrupa": [
    { name: "İstanbul Avrupa Yakası Şubesi", lat: 41.0082, lng: 28.9784, address: "", phone: "" }
  ],
  
  // ÇORUM
  "Çorum": [
    { name: "Çorum Merkez Şubesi", lat: 40.5506, lng: 34.9556, address: "", phone: "" }
  ],
  
  // BURSA
  "Bursa": [
    { name: "Bursa Çalı Şubesi", lat: 40.2000, lng: 29.1000, address: "", phone: "" },
    { name: "Bursa Samanlı Şubesi", lat: 40.2500, lng: 29.1500, address: "", phone: "" },
    { name: "Bursa Oyak Şubesi", lat: 40.2167, lng: 29.0833, address: "", phone: "" },
    { name: "Bursa Duaçınarı Şubesi", lat: 40.2333, lng: 29.1000, address: "", phone: "" },
    { name: "Bursa İnegöl Şubesi", lat: 40.0833, lng: 29.5167, address: "", phone: "" },
    { name: "Bursa Oto San Sit Şubesi", lat: 40.2000, lng: 29.0500, address: "", phone: "" },
    { name: "Bursa Balıklı Şubesi", lat: 40.1833, lng: 29.0667, address: "", phone: "" },
    { name: "Bursa Demirtaş Şubesi", lat: 40.2167, lng: 29.1167, address: "", phone: "" }
  ],
  
  // GAZİANTEP
  "Gaziantep": [
    { name: "Gaziantep İpekyolu Şubesi", lat: 37.0662, lng: 37.3833, address: "", phone: "" },
    { name: "Gaziantep Küsget Şubesi", lat: 37.0500, lng: 37.4000, address: "", phone: "" },
    { name: "Gaziantep Başpınar Şubesi", lat: 37.0833, lng: 37.3667, address: "", phone: "" },
    { name: "Gaziantep Şahinbey Şubesi", lat: 37.0667, lng: 37.3667, address: "", phone: "" },
    { name: "Gaziantep İncilipınar Şubesi", lat: 37.0500, lng: 37.3500, address: "", phone: "" },
    { name: "Gaziantep Nizip Şubesi", lat: 37.0167, lng: 37.8000, address: "", phone: "" }
  ],
  
  // HATAY
  "Hatay": [
    { name: "Hatay Merkez Şubesi", lat: 36.4018, lng: 36.3498, address: "", phone: "" }
  ],
  
  // KAHRAMANMARAŞ
  "Kahramanmaraş": [
    { name: "Kahramanmaraş Merkez Şubesi", lat: 37.5858, lng: 36.9371, address: "", phone: "" }
  ],
  
  // KAYSERİ
  "Kayseri": [
    { name: "Kayseri Merkez Şubesi", lat: 38.7312, lng: 35.4787, address: "", phone: "" }
  ],
  
  // KOCAELİ
  "Kocaeli": [
    { name: "Kocaeli Dilovası Şubesi", lat: 40.7667, lng: 29.5333, address: "", phone: "" },
    { name: "Kocaeli Şekerpınar Şubesi", lat: 40.8000, lng: 29.4500, address: "", phone: "" },
    { name: "Kocaeli Gebze Şubesi", lat: 40.8000, lng: 29.4333, address: "", phone: "" },
    { name: "Kocaeli Anibal Şubesi", lat: 40.7833, lng: 29.4167, address: "", phone: "" }
  ],
  
  // KONYA
  "Konya": [
    { name: "Konya Büsan Şubesi", lat: 37.8746, lng: 32.4932, address: "", phone: "" },
    { name: "Konya Zafer Şubesi", lat: 37.8667, lng: 32.5000, address: "", phone: "" },
    { name: "Konya Karatay Şubesi", lat: 37.8833, lng: 32.4833, address: "", phone: "" },
    { name: "Konya Aykent Şubesi", lat: 37.8500, lng: 32.5167, address: "", phone: "" },
    { name: "Konya Organize Şubesi", lat: 37.9000, lng: 32.4500, address: "", phone: "" }
  ],
  
  // MANİSA
  "Manisa": [
    { name: "Manisa Merkez Şubesi", lat: 38.6142, lng: 27.4296, address: "", phone: "" },
    { name: "Manisa Turgutlu Şubesi", lat: 38.5000, lng: 27.7000, address: "", phone: "" }
  ],
  
  // MERSİN
  "Mersin": [
    { name: "Mersin Merkez Şubesi", lat: 36.8000, lng: 34.6333, address: "", phone: "" },
    { name: "Mersin Tarsus Şubesi", lat: 36.9167, lng: 34.8833, address: "", phone: "" }
  ],
  
  // OSMANİYE
  "Osmaniye": [
    { name: "Osmaniye Merkez Şubesi", lat: 37.0742, lng: 36.2478, address: "", phone: "" }
  ],
  
  // SAMSUN
  "Samsun": [
    { name: "Samsun Merkez Şubesi", lat: 41.2867, lng: 36.3300, address: "", phone: "" },
    { name: "Samsun İlkadım Şubesi", lat: 41.2833, lng: 36.3333, address: "", phone: "" }
  ],
  
  // TEKİRDAĞ
  "Tekirdağ": [
    { name: "Tekirdağ Çorlu Şubesi", lat: 41.1500, lng: 27.8000, address: "", phone: "" }
  ],
  
  // İZMİR
  "İzmir": [
    { name: "İzmir Işıkkent Şubesi", lat: 38.4500, lng: 27.1500, address: "", phone: "" },
    { name: "İzmir Buca Şubesi", lat: 38.3800, lng: 27.1700, address: "", phone: "" },
    { name: "İzmir Gaziemir Şubesi", lat: 38.3200, lng: 27.1000, address: "", phone: "" },
    { name: "İzmir Karabağlar Şubesi", lat: 38.3700, lng: 27.1000, address: "", phone: "" },
    { name: "İzmir Nif (Kemalpaşa) Şubesi", lat: 38.4200, lng: 27.4200, address: "", phone: "" },
    { name: "İzmir Ayküsan (Ayakkabıcılar Sitesi) Şubesi", lat: 38.4000, lng: 27.1200, address: "", phone: "" },
    { name: "İzmir Pınarbaşı Şubesi", lat: 38.4300, lng: 27.1500, address: "", phone: "" },
    { name: "İzmir Torbalı Şubesi", lat: 38.1800, lng: 27.3500, address: "", phone: "" },
    { name: "İzmir Yenişehir Şubesi", lat: 38.4200, lng: 27.1300, address: "", phone: "" },
    { name: "İzmir Çamdibi Şubesi", lat: 38.4400, lng: 27.1400, address: "", phone: "" },
    { name: "İzmir Çiğli Şubesi", lat: 38.5000, lng: 27.0700, address: "", phone: "" }
  ]
};

// Tüm şubeleri tek bir diziye dönüştür
function getAllBranches() {
  const allBranches = [];
  for (const city in branchesByCity) {
    branchesByCity[city].forEach(branch => {
      allBranches.push({
        ...branch,
        city: city
      });
    });
  }
  return allBranches;
}

// İl bazında şube sayılarını hesapla
function getBranchCounts() {
  const counts = {};
  for (const city in branchesByCity) {
    counts[city] = branchesByCity[city].length;
  }
  return counts;
}

// =============================================
// HARİTA OLUŞTURMA
// =============================================
document.addEventListener('DOMContentLoaded', function() {
  const mapContainer = document.getElementById('turkeyMap');
  
  if (!mapContainer) return;
  
  const allBranches = getAllBranches();
  
  if (allBranches.length === 0) {
    mapContainer.innerHTML = '<div style="padding: 2rem; text-align: center; color: var(--text-light);">Şube konumları henüz eklenmedi. Lütfen branches-map.js dosyasına şube bilgilerini ekleyin.</div>';
    return;
  }
  
  // Türkiye'nin merkez koordinatları
  const turkeyCenter = [39.0, 35.0];
  
  // Türkiye sınırları (maxBounds) - Harita bu sınırlar dışına çıkamaz
  // Daha dar sınırlar ile Türkiye'nin tamamını kapsayacak şekilde
  const turkeyBounds = L.latLngBounds(
    [35.8, 25.6], // Güneybatı köşe (en güney, en batı)
    [42.1, 44.8]  // Kuzeydoğu köşe (en kuzey, en doğu)
  );
  
  // Haritayı oluştur
  const map = L.map('turkeyMap', {
    center: turkeyCenter,
    zoom: 6,
    minZoom: 6, // Minimum zoom'u artırdık, böylece çok uzaklaşamaz
    maxZoom: 18,
    maxBounds: turkeyBounds,
    maxBoundsViscosity: 1.0 // Sınırlara yapışma kuvveti (1.0 = tam yapışma)
  });
  
  // Harita hareket ettirildiğinde sınırları kontrol et
  map.setMaxBounds(turkeyBounds);
  
  // OpenTopoMap tile layer ekle (topografik görünüm - açık renk, ince topo çizgileri)
  L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    subdomains: ['a', 'b', 'c'],
    maxZoom: 17,
    opacity: 0.9 // Biraz şeffaflık ile daha açık görünüm
  }).addTo(map);
  
  // Özel marker ikonu oluştur
  const branchIcon = L.divIcon({
    className: 'custom-marker',
    html: '<div class="marker-pin"><i class="fas fa-map-marker-alt"></i></div>',
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -40]
  });
  
  // Merkez ofis için özel marker ikonu (farklı renk ve ikon)
  const headquartersIcon = L.divIcon({
    className: 'custom-marker headquarters-marker',
    html: '<div class="marker-pin headquarters-pin"><i class="fas fa-building"></i></div>',
    iconSize: [35, 45],
    iconAnchor: [17, 45],
    popupAnchor: [0, -45]
  });
  
  // Merkez ofis marker'ını ekle
  const headquartersLat = 39.95;
  const headquartersLng = 32.75;
  const headquartersMarker = L.marker([headquartersLat, headquartersLng], {
    icon: headquartersIcon,
    zIndexOffset: 1000 // Merkez ofis marker'ı her zaman üstte görünsün
  });
  
  const headquartersPopupContent = `
    <div class="branch-popup">
      <h4 style="margin: 0 0 0.5rem 0; color: var(--primary); font-weight: 700;">
        <i class="fas fa-building" style="color: var(--accent); margin-right: 0.5rem;"></i>
        KargoKar Merkez Ofis
      </h4>
      <p style="margin: 0.25rem 0; font-size: 0.85rem; color: var(--text-light);">
        <i class="fas fa-city" style="color: var(--accent); margin-right: 0.5rem;"></i>
        Ankara
      </p>
      <p style="margin: 0.25rem 0; font-size: 0.9rem;">
        <i class="fas fa-map-marker-alt" style="color: var(--accent); margin-right: 0.5rem;"></i>
        Yakacık Mahallesi 3885 Sokak No: 1/A Yenimahalle / ANKARA
      </p>
      <p style="margin: 0.25rem 0; font-size: 0.9rem;">
        <i class="fas fa-phone" style="color: var(--accent); margin-right: 0.5rem;"></i>
        <a href="tel:4440410" style="color: var(--primary); text-decoration: none;">
          444 0 410
        </a>
      </p>
    </div>
  `;
  
  headquartersMarker.bindPopup(headquartersPopupContent, {
    maxWidth: 300,
    className: 'branch-popup-container'
  });
  
  headquartersMarker.addTo(map);
  
  // Marker Cluster Group oluştur (çok sayıda şube için)
  const markers = L.markerClusterGroup({
    chunkedLoading: true,
    maxClusterRadius: 50,
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    iconCreateFunction: function(cluster) {
      const count = cluster.getChildCount();
      let size = 'small';
      if (count > 50) size = 'large';
      else if (count > 20) size = 'medium';
      
      return L.divIcon({
        html: '<div class="marker-cluster marker-cluster-' + size + '">' + count + '</div>',
        className: 'marker-cluster-container',
        iconSize: L.point(40, 40)
      });
    }
  });
  
  // Şubeleri haritaya ekle
  allBranches.forEach((branch) => {
    const marker = L.marker([branch.lat, branch.lng], {
      icon: branchIcon
    });
    
    // Popup içeriği
    const popupContent = `
      <div class="branch-popup">
        <h4 style="margin: 0 0 0.5rem 0; color: var(--primary);">${branch.name}</h4>
        <p style="margin: 0.25rem 0; font-size: 0.85rem; color: var(--text-light);">
          <i class="fas fa-city" style="color: var(--accent); margin-right: 0.5rem;"></i>
          ${branch.city}
        </p>
        ${branch.address ? `<p style="margin: 0.25rem 0; font-size: 0.9rem;">
          <i class="fas fa-map-marker-alt" style="color: var(--accent); margin-right: 0.5rem;"></i>
          ${branch.address}
        </p>` : ''}
        ${branch.phone ? `<p style="margin: 0.25rem 0; font-size: 0.9rem;">
          <i class="fas fa-phone" style="color: var(--accent); margin-right: 0.5rem;"></i>
          <a href="tel:${branch.phone.replace(/\s/g, '')}" style="color: var(--primary); text-decoration: none;">
            ${branch.phone}
          </a>
        </p>` : ''}
      </div>
    `;
    
    marker.bindPopup(popupContent, {
      maxWidth: 300,
      className: 'branch-popup-container'
    });
    
    markers.addLayer(marker);
  });
  
  // Marker cluster'ı haritaya ekle
  map.addLayer(markers);
  
  // Harita Türkiye görünümünde sabit kalacak (otomatik zoom yok)
  
  // İstatistikleri göster (isteğe bağlı)
  const branchCounts = getBranchCounts();
  const totalBranches = allBranches.length;
  const totalCities = Object.keys(branchCounts).length;
  
  console.log(`Toplam ${totalCities} il, ${totalBranches} şube yüklendi.`);
});
