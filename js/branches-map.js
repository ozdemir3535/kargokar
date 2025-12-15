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
  // İSTANBUL
  "İstanbul": [
    {
      name: "İstanbul Merkez Şube",
      lat: 41.0082,
      lng: 28.9784,
      address: "Merkez Mah. Lojistik Cad. No:123, Kağıthane, İstanbul",
      phone: "0212 123 45 67"
    }
    // İstanbul'daki diğer şubeleri buraya ekleyin
    // { name: "Şube Adı", lat: 41.xxxx, lng: 28.xxxx, address: "Adres", phone: "0212 xxx xx xx" },
  ],
  
  // ANKARA
  "Ankara": [
    {
      name: "Ankara Merkez Şube",
      lat: 39.9334,
      lng: 32.8597,
      address: "Kızılay Mah. Atatürk Bulvarı No:45, Çankaya, Ankara",
      phone: "0312 123 45 67"
    }
    // Ankara'daki diğer şubeleri buraya ekleyin
  ],
  
  // İZMİR
  "İzmir": [
    {
      name: "İzmir Merkez Şube",
      lat: 38.4237,
      lng: 27.1428,
      address: "Konak Mah. Cumhuriyet Bulvarı No:12, Konak, İzmir",
      phone: "0232 123 45 67"
    }
    // İzmir'deki diğer şubeleri buraya ekleyin
  ],
  
  // BURSA
  "Bursa": [
    {
      name: "Bursa Merkez Şube",
      lat: 40.1826,
      lng: 29.0665,
      address: "Osmangazi Mah. Atatürk Cad. No:78, Osmangazi, Bursa",
      phone: "0224 123 45 67"
    }
    // Bursa'daki diğer şubeleri buraya ekleyin
  ],
  
  // ANTALYA
  "Antalya": [
    {
      name: "Antalya Merkez Şube",
      lat: 36.8841,
      lng: 30.7056,
      address: "Muratpaşa Mah. Atatürk Bulvarı No:34, Muratpaşa, Antalya",
      phone: "0242 123 45 67"
    }
    // Antalya'daki diğer şubeleri buraya ekleyin
  ]
  
  // Diğer 13 ili buraya ekleyin:
  // "Adana": [ ... ],
  // "Gaziantep": [ ... ],
  // "Konya": [ ... ],
  // "Kocaeli": [ ... ],
  // "Mersin": [ ... ],
  // "Diyarbakır": [ ... ],
  // "Hatay": [ ... ],
  // "Manisa": [ ... ],
  // "Kayseri": [ ... ],
  // "Samsun": [ ... ],
  // "Balıkesir": [ ... ],
  // "Aydın": [ ... ],
  // "Tekirdağ": [ ... ],
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
  
  // Haritayı oluştur
  const map = L.map('turkeyMap', {
    center: turkeyCenter,
    zoom: 6,
    minZoom: 5,
    maxZoom: 18
  });
  
  // OpenStreetMap tile layer ekle
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);
  
  // Özel marker ikonu oluştur
  const branchIcon = L.divIcon({
    className: 'custom-marker',
    html: '<div class="marker-pin"><i class="fas fa-map-marker-alt"></i></div>',
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -40]
  });
  
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
        <p style="margin: 0.25rem 0; font-size: 0.9rem;">
          <i class="fas fa-map-marker-alt" style="color: var(--accent); margin-right: 0.5rem;"></i>
          ${branch.address}
        </p>
        <p style="margin: 0.25rem 0; font-size: 0.9rem;">
          <i class="fas fa-phone" style="color: var(--accent); margin-right: 0.5rem;"></i>
          <a href="tel:${branch.phone.replace(/\s/g, '')}" style="color: var(--primary); text-decoration: none;">
            ${branch.phone}
          </a>
        </p>
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
  
  // Tüm şubeleri içeren bounds hesapla
  if (allBranches.length > 0) {
    const bounds = markers.getBounds();
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }
  
  // İstatistikleri göster (isteğe bağlı)
  const branchCounts = getBranchCounts();
  const totalBranches = allBranches.length;
  const totalCities = Object.keys(branchCounts).length;
  
  console.log(`Toplam ${totalCities} il, ${totalBranches} şube yüklendi.`);
});
