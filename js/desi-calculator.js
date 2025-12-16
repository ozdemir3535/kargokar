/* =============================================
   KARGO KAR - DESİ HESAPLAMA ARACI
   ============================================= */

document.addEventListener('DOMContentLoaded', function() {
  const calculatorBtn = document.getElementById('desiCalculatorBtn');
  const calculatorBtnMobile = document.getElementById('desiCalculatorBtnMobile');
  const modal = document.getElementById('desiCalculatorModal');
  const closeBtn = document.getElementById('closeDesiCalculator');
  const form = document.getElementById('desiCalculatorForm');
  const resultDiv = document.getElementById('desiResult');
  
  // Inline calculator (fiyatlar sayfası için)
  const inlineCalculator = document.getElementById('inlineDesiCalculator');
  const inlineForm = document.getElementById('inlineDesiCalculatorForm');
  const inlineResult = document.getElementById('inlineDesiResult');
  
  // Fiyatlar sayfasında inline calculator varsa
  if (inlineCalculator && inlineForm) {
    // Buton tıklanınca inline calculator'ı göster/gizle
    if (calculatorBtn) {
      calculatorBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (inlineCalculator.style.display === 'none' || !inlineCalculator.style.display) {
          inlineCalculator.style.display = 'block';
          inlineResult.style.display = 'none';
          // İlk input'a focus (scroll yapmadan)
          setTimeout(() => {
            document.getElementById('inlineDesiEn')?.focus();
          }, 100);
        } else {
          inlineCalculator.style.display = 'none';
          inlineResult.style.display = 'none';
        }
      });
    }
    
    // Inline form gönderimi
    inlineForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const en = parseFloat(document.getElementById('inlineDesiEn').value);
      const boy = parseFloat(document.getElementById('inlineDesiBoy').value);
      const yukseklik = parseFloat(document.getElementById('inlineDesiYukseklik').value);
      const agirlik = parseFloat(document.getElementById('inlineDesiAgirlik').value) || 0;
      
      // Desi hesaplama: (En × Boy × Yükseklik) ÷ 3000
      const desi = (en * boy * yukseklik) / 3000;
      
      // Yuvarlama (2 ondalık basamak)
      const desiRounded = Math.ceil(desi * 100) / 100;
      
      // Ücretlendirme: desi ve ağırlıktan büyük olanı
      const ucretlendirme = Math.max(desiRounded, agirlik);
      
      // Sonuçları göster
      document.getElementById('inlineDesiValue').textContent = desiRounded.toFixed(2) + ' Desi';
      document.getElementById('inlineAgirlikValue').textContent = agirlik > 0 ? agirlik.toFixed(2) + ' kg' : 'Girilmedi';
      document.getElementById('inlineUcretlendirmeValue').textContent = ucretlendirme.toFixed(2) + (ucretlendirme === desiRounded ? ' Desi' : ' kg');
      
      // Sonuç kartını göster
      inlineResult.style.display = 'block';
    });
    
    // Input değişikliklerinde sonucu gizle
    const inlineInputs = inlineForm.querySelectorAll('input');
    inlineInputs.forEach(input => {
      input.addEventListener('input', function() {
        if (inlineResult.style.display === 'block') {
          inlineResult.style.display = 'none';
        }
      });
    });
    
    // Fiyatlar sayfasında modal kullanmayacağız
    return;
  }
  
  // Diğer sayfalarda modal kullanımı
  if (!modal) return;
  
  // Modal açma fonksiyonu
  function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Mobil menüyü kapat
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenu && mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
      document.body.style.overflow = '';
    }
    // İlk input'a focus
    setTimeout(() => {
      document.getElementById('desiEn')?.focus();
    }, 100);
  }
  
  // Modal açma - Desktop
  if (calculatorBtn) {
    calculatorBtn.addEventListener('click', function(e) {
      e.preventDefault();
      openModal();
    });
  }
  
  // Modal açma - Mobile
  if (calculatorBtnMobile) {
    calculatorBtnMobile.addEventListener('click', function(e) {
      e.preventDefault();
      openModal();
    });
  }
  
  // Modal kapatma
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    resultDiv.style.display = 'none';
    form.reset();
  }
  
  closeBtn.addEventListener('click', closeModal);
  
  // Modal dışına tıklanınca kapat
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // ESC tuşu ile kapat
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
  
  // Form gönderimi
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const en = parseFloat(document.getElementById('desiEn').value);
    const boy = parseFloat(document.getElementById('desiBoy').value);
    const yukseklik = parseFloat(document.getElementById('desiYukseklik').value);
    const agirlik = parseFloat(document.getElementById('desiAgirlik').value) || 0;
    
    // Desi hesaplama: (En × Boy × Yükseklik) ÷ 3000
    const desi = (en * boy * yukseklik) / 3000;
    
    // Yuvarlama (2 ondalık basamak)
    const desiRounded = Math.ceil(desi * 100) / 100;
    
    // Ücretlendirme: desi ve ağırlıktan büyük olanı
    const ucretlendirme = Math.max(desiRounded, agirlik);
    
    // Sonuçları göster
    document.getElementById('desiValue').textContent = desiRounded.toFixed(2) + ' Desi';
    document.getElementById('agirlikValue').textContent = agirlik > 0 ? agirlik.toFixed(2) + ' kg' : 'Girilmedi';
    document.getElementById('ucretlendirmeValue').textContent = ucretlendirme.toFixed(2) + (ucretlendirme === desiRounded ? ' Desi' : ' kg');
    
    // Sonuç kartını göster
    resultDiv.style.display = 'block';
    
    // Sonuca scroll
    setTimeout(() => {
      resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  });
  
  // Input değişikliklerinde sonucu gizle
  const inputs = form.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('input', function() {
      if (resultDiv.style.display === 'block') {
        resultDiv.style.display = 'none';
      }
    });
  });
});

