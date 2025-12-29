/* =============================================
   KARGO KAR - ANA JAVASCRIPT DOSYASI
   ============================================= */

document.addEventListener('DOMContentLoaded', function() {
  
  // =============================================
  // HEADER SCROLL EFEKTİ
  // =============================================
  const header = document.querySelector('.header');
  
  function handleHeaderScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll(); // İlk yüklemede kontrol et
  
  // =============================================
  // MOBİL MENÜ
  // =============================================
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Menü linklerine tıklandığında menüyü kapat
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
  
  // =============================================
  // SMOOTH SCROLL (Sayfa içi linkler)
  // =============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerHeight = header.offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // =============================================
  // SCROLL ANİMASYONLARI (Fade In)
  // =============================================
  const fadeElements = document.querySelectorAll('.fade-in');
  
  function checkFadeElements() {
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', checkFadeElements);
  checkFadeElements(); // İlk yüklemede kontrol et
  
  // =============================================
  // ACCORDION (SSS Sayfası)
  // =============================================
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    
    if (header) {
      header.addEventListener('click', function() {
        // Diğer accordion'ları kapat
        accordionItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        
        // Mevcut accordion'ı toggle et
        item.classList.toggle('active');
      });
    }
  });
  
  // =============================================
  // KARGO TAKİP FORMU
  // =============================================
  const trackingForm = document.getElementById('trackingForm');
  const trackingResult = document.querySelector('.tracking-result');
  
  if (trackingForm && trackingResult) {
    trackingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const trackingNumber = document.getElementById('trackingNumber').value.trim();
      
      if (trackingNumber.length < 5) {
        alert('Lütfen geçerli bir takip numarası girin.');
        return;
      }
      
      // Demo: Takip sonucunu göster
      trackingResult.classList.add('active');
      
      // Demo: Takip numarasını güncelle
      const trackingCodeDisplay = trackingResult.querySelector('.tracking-code');
      if (trackingCodeDisplay) {
        trackingCodeDisplay.textContent = trackingNumber;
      }
      
      // Scroll to result
      setTimeout(() => {
        trackingResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    });
  }
  
  // =============================================
  // İLETİŞİM FORMU
  // =============================================
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // Form validasyonu
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (!name || !email || !message) {
        e.preventDefault();
        alert('Lütfen tüm alanları doldurun.');
        return;
      }
      
      // E-posta formatı kontrolü
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        e.preventDefault();
        alert('Lütfen geçerli bir e-posta adresi girin.');
        return;
      }
      
      // mailto: linki zaten form action'da tanımlı
      // Form submit olacak
    });
  }
  
  // =============================================
  // NAVİGASYON AKTİF SAYFA İŞARETLEME
  // =============================================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-menu a, .mobile-menu a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
  
  // =============================================
  // SAYAÇ ANİMASYONU (Stats)
  // =============================================
  const statNumbers = document.querySelectorAll('.stat-number, .hero-stat-number');
  let statsAnimated = false;
  
  function animateStats() {
    if (statsAnimated) return;
    
    const firstStat = statNumbers[0];
    if (!firstStat) return;
    
    const rect = firstStat.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      statsAnimated = true;
      
      statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/\D/g, ''));
        const suffix = stat.textContent.replace(/[\d]/g, '');
        let current = 0;
        const increment = target / 50;
        const duration = 1500;
        const stepTime = duration / 50;
        
        const counter = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(counter);
          }
          stat.textContent = Math.floor(current).toLocaleString('tr-TR') + suffix;
        }, stepTime);
      });
    }
  }
  
  window.addEventListener('scroll', animateStats);
  animateStats(); // İlk yüklemede kontrol et
  
  // =============================================
  // LAZY LOADING IMAGES
  // =============================================
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  }
  
  // =============================================
  // KARGO TAKİP LİNKİ BİLDİRİMİ
  // =============================================
  const trackingLinks = document.querySelectorAll('.tracking-link-notice');
  
  trackingLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Modal oluştur
      const modal = document.createElement('div');
      modal.className = 'modal active';
      modal.style.display = 'flex';
      modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
          <div class="modal-header">
            <h2>
              <i class="fas fa-info-circle" style="color: var(--accent); margin-right: 0.5rem;"></i>
              Bilgilendirme
            </h2>
            <button class="modal-close" onclick="this.closest('.modal').remove(); document.body.style.overflow = '';">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="modal-body">
            <p style="font-size: var(--text-lg); line-height: 1.8; color: var(--text-dark); text-align: center; margin: 1.5rem 0;">
              <strong>Takip sistemi yakında aktif olacaktır. Şimdilik en yakın şube üzerinden iletişime geçiniz.</strong>
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
              <button class="btn btn-primary" onclick="this.closest('.modal').remove(); document.body.style.overflow = ''; window.location.href='kargo-takip.html';">
                <i class="fas fa-arrow-right"></i> Yine de Devam Et
              </button>
              <button class="btn btn-secondary" onclick="this.closest('.modal').remove(); document.body.style.overflow = '';">
                <i class="fas fa-times"></i> Kapat
              </button>
            </div>
          </div>
        </div>
      `;
      
      document.body.appendChild(modal);
      document.body.style.overflow = 'hidden';
      
      // Modal dışına tıklanınca kapat
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          modal.remove();
          document.body.style.overflow = '';
        }
      });
      
      // ESC tuşu ile kapat
      const escHandler = function(e) {
        if (e.key === 'Escape') {
          modal.remove();
          document.body.style.overflow = '';
          document.removeEventListener('keydown', escHandler);
        }
      };
      document.addEventListener('keydown', escHandler);
    });
  });
  
  // =============================================
  // KURUMSAL GİRİŞ LİNKİ UYARI MODALI
  // =============================================
  const corporateLinks = document.querySelectorAll('.corporate-link-notice');
  
  corporateLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Modal oluştur
      const modal = document.createElement('div');
      modal.className = 'modal active';
      modal.style.display = 'flex';
      modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
          <div class="modal-header">
            <h2>
              <i class="fas fa-exclamation-triangle" style="color: #ff6b6b; margin-right: 0.5rem;"></i>
              Uyarı
            </h2>
            <button class="modal-close" onclick="this.closest('.modal').remove(); document.body.style.overflow = '';">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="modal-body">
            <p style="font-size: var(--text-lg); line-height: 1.8; color: var(--text-dark); text-align: center; margin: 1.5rem 0;">
              <strong>Kurumsal giriş sistemi şu anda teknik bir sorun yaşıyor. Lütfen daha sonra tekrar deneyiniz veya müşteri hizmetlerimizle iletişime geçiniz.</strong>
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
              <button class="btn btn-primary" onclick="this.closest('.modal').remove(); document.body.style.overflow = ''; window.open('https://kargokar.com/kurumsal/', '_blank');">
                <i class="fas fa-arrow-right"></i> Yine de Devam Et
              </button>
              <button class="btn btn-secondary" onclick="this.closest('.modal').remove(); document.body.style.overflow = '';">
                <i class="fas fa-times"></i> Kapat
              </button>
            </div>
          </div>
        </div>
      `;
      
      document.body.appendChild(modal);
      document.body.style.overflow = 'hidden';
      
      // Modal dışına tıklanınca kapat
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          modal.remove();
          document.body.style.overflow = '';
        }
      });
      
      // ESC tuşu ile kapat
      const escHandler = function(e) {
        if (e.key === 'Escape') {
          modal.remove();
          document.body.style.overflow = '';
          document.removeEventListener('keydown', escHandler);
        }
      };
      document.addEventListener('keydown', escHandler);
    });
  });
  
});

// =============================================
// UTILITY FONKSİYONLARI
// =============================================

// Debounce fonksiyonu
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle fonksiyonu
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

