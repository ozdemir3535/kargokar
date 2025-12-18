/* =============================================
   KARGO KAR - FİYATLAR SAYFASI ŞUBE LİSTESİ
   Şube bilgilerini buraya ekleyin
   ============================================= */

// =============================================
// ŞUBE BİLGİLERİ
// Buraya şube bilgilerinizi ekleyin
// Format: { name: "Şube Adı", city: "İl", address: "Adres", phone: "Telefon", email: "E-posta (opsiyonel)" }
// =============================================

const branchesForPricing = [
  // Örnek şube bilgileri - Bunları kendi şube bilgilerinizle değiştirin
  {
    name: "İstanbul Merkez Şube",
    city: "İstanbul",
    address: "Merkez Mah. Lojistik Cad. No:123, Kağıthane",
    phone: "444 0 410",
    email: "istanbul@kargokar.com"
  },
  {
    name: "Ankara Merkez Şube",
    city: "Ankara",
    address: "Kızılay Mah. Atatürk Bulvarı No:45, Çankaya",
    phone: "0312 123 45 67",
    email: "ankara@kargokar.com"
  }
  // Daha fazla şube ekleyin...
];

// =============================================
// ŞUBE LİSTESİNİ GÖSTER
// =============================================
document.addEventListener('DOMContentLoaded', function() {
  const branchesContainer = document.getElementById('branchesList');
  
  if (!branchesContainer) return;
  
  if (branchesForPricing.length === 0) {
    branchesContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem; color: var(--text-light);">
        <i class="fas fa-info-circle" style="font-size: 3rem; margin-bottom: 1rem; color: var(--accent);"></i>
        <p style="font-size: 1.1rem;">Şube bilgileri henüz eklenmedi.</p>
        <p style="margin-top: 0.5rem;">Lütfen branches-pricing.js dosyasına şube bilgilerini ekleyin.</p>
      </div>
    `;
    return;
  }
  
  // Şubeleri il bazında grupla
  const branchesByCity = {};
  branchesForPricing.forEach(branch => {
    if (!branchesByCity[branch.city]) {
      branchesByCity[branch.city] = [];
    }
    branchesByCity[branch.city].push(branch);
  });
  
  // HTML oluştur
  let html = '';
  
  Object.keys(branchesByCity).sort().forEach(city => {
    html += `
      <div class="branch-city-section fade-in">
        <h3 class="branch-city-title">
          <i class="fas fa-map-marker-alt" style="color: var(--accent); margin-right: 0.5rem;"></i>
          ${city}
        </h3>
        <div class="branch-cards-grid">
    `;
    
    branchesByCity[city].forEach(branch => {
      html += `
        <div class="branch-card">
          <div class="branch-card-header">
            <h4>${branch.name}</h4>
            <span class="branch-city-badge">${branch.city}</span>
          </div>
          <div class="branch-card-body">
            <div class="branch-info-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>${branch.address}</span>
            </div>
            <div class="branch-info-item">
              <i class="fas fa-phone"></i>
              <a href="tel:${branch.phone.replace(/\s/g, '')}">${branch.phone}</a>
            </div>
            ${branch.email ? `
            <div class="branch-info-item">
              <i class="fas fa-envelope"></i>
              <a href="mailto:${branch.email}">${branch.email}</a>
            </div>
            ` : ''}
          </div>
          <div class="branch-card-footer">
            <a href="tel:${branch.phone.replace(/\s/g, '')}" class="btn btn-primary">
              <i class="fas fa-phone"></i> Fiyat İçin Ara
            </a>
            ${branch.email ? `
            <a href="mailto:${branch.email}?subject=Fiyat Teklifi" class="btn btn-secondary">
              <i class="fas fa-envelope"></i> E-posta Gönder
            </a>
            ` : ''}
          </div>
        </div>
      `;
    });
    
    html += `
        </div>
      </div>
    `;
  });
  
  branchesContainer.innerHTML = html;
  
  // Fade-in animasyonlarını tetikle
  setTimeout(() => {
    const fadeElements = branchesContainer.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 100);
    });
  }, 100);
});

