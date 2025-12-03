/* Gen Z Streetwear Theme - Main JavaScript */

(function() {
  'use strict';

  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('[data-mobile-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      mobileMenuToggle.setAttribute('aria-expanded', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
    });
  }

  // Cart Drawer
  const cartDrawer = document.querySelector('[data-cart-drawer]');
  const cartDrawerOpen = document.querySelectorAll('[data-cart-drawer-open]');
  const cartDrawerClose = document.querySelector('[data-cart-drawer-close]');
  const cartDrawerOverlay = document.querySelector('[data-cart-drawer-overlay]');

  function openCartDrawer() {
    if (cartDrawer) {
      cartDrawer.classList.add('is-open');
      document.body.classList.add('cart-open');
    }
  }

  function closeCartDrawer() {
    if (cartDrawer) {
      cartDrawer.classList.remove('is-open');
      document.body.classList.remove('cart-open');
    }
  }

  cartDrawerOpen.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  if (cartDrawerClose) {
    cartDrawerClose.addEventListener('click', closeCartDrawer);
  }

  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener('click', closeCartDrawer);
  }

  // Escape key closes drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      if (mobileMenu && mobileMenu.classList.contains('is-open')) {
        mobileMenu.classList.remove('is-open');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      }
    }
  });

  // Add to Cart
  document.querySelectorAll('[data-add-to-cart]').forEach(button => {
    button.addEventListener('click', async function(e) {
      e.preventDefault();
      
      const form = this.closest('form');
      const formData = new FormData(form);
      
      this.classList.add('loading');
      this.disabled = true;
      
      try {
        const response = await fetch('/cart/add.js', {
          method: 'POST',
          body: formData
        });
        
        if (response.ok) {
          await updateCartCount();
          openCartDrawer();
        }
      } catch (error) {
        console.error('Error adding to cart:', error);
      } finally {
        this.classList.remove('loading');
        this.disabled = false;
      }
    });
  });

  // Update Cart Count
  async function updateCartCount() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      
      document.querySelectorAll('[data-cart-count]').forEach(el => {
        el.textContent = cart.item_count;
        el.style.display = cart.item_count > 0 ? 'flex' : 'none';
      });
    } catch (error) {
      console.error('Error updating cart count:', error);
    }
  }

  // Quantity Controls
  document.querySelectorAll('[data-quantity-wrapper]').forEach(wrapper => {
    const minusBtn = wrapper.querySelector('[data-quantity-minus]');
    const plusBtn = wrapper.querySelector('[data-quantity-plus]');
    const input = wrapper.querySelector('[data-quantity-input]');
    
    if (minusBtn && plusBtn && input) {
      minusBtn.addEventListener('click', () => {
        const currentValue = parseInt(input.value) || 1;
        if (currentValue > 1) {
          input.value = currentValue - 1;
          input.dispatchEvent(new Event('change'));
        }
      });
      
      plusBtn.addEventListener('click', () => {
        const currentValue = parseInt(input.value) || 1;
        const max = parseInt(input.max) || Infinity;
        if (currentValue < max) {
          input.value = currentValue + 1;
          input.dispatchEvent(new Event('change'));
        }
      });
    }
  });

  // Sticky Header
  const header = document.querySelector('.site-header');
  if (header && header.dataset.sticky === 'true') {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
      
      if (currentScroll > lastScroll && currentScroll > 200) {
        header.classList.add('is-hidden');
      } else {
        header.classList.remove('is-hidden');
      }
      
      lastScroll = currentScroll;
    });
  }

  // Intersection Observer for Animations
  const animateOnScroll = document.querySelectorAll('[data-animate]');
  
  if (animateOnScroll.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animateOnScroll.forEach(el => observer.observe(el));
  }

  // Product Image Hover
  document.querySelectorAll('.product-card').forEach(card => {
    const images = card.querySelectorAll('.product-card__image img');
    if (images.length > 1) {
      card.addEventListener('mouseenter', () => {
        images[0].style.opacity = '0';
        images[1].style.opacity = '1';
      });
      
      card.addEventListener('mouseleave', () => {
        images[0].style.opacity = '1';
        images[1].style.opacity = '0';
      });
    }
  });

  // Newsletter Form
  const newsletterForm = document.querySelector('[data-newsletter-form]');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const email = this.querySelector('input[type="email"]').value;
      const button = this.querySelector('button[type="submit"]');
      const originalText = button.textContent;
      
      button.textContent = 'Subscribing...';
      button.disabled = true;
      
      // Simulate API call - replace with actual implementation
      setTimeout(() => {
        button.textContent = 'Subscribed! 🎉';
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
          this.reset();
        }, 2000);
      }, 1000);
    });
  }

  // Initialize
  updateCartCount();
})();
