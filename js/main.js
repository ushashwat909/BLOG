document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Menu Toggle ---
  const menuToggle = document.getElementById('menu-toggle');
  
  if (menuToggle) {
    // Create mobile nav element if it doesn't exist
    let mobileNav = document.querySelector('.mobile-nav');
    if (!mobileNav) {
      mobileNav = document.createElement('div');
      mobileNav.className = 'mobile-nav';
      mobileNav.innerHTML = `
        <a href="index.html">Home</a>
        <a href="index.html#blog">Articles</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      `;
      document.body.appendChild(mobileNav);
    }

    menuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const isOpen = mobileNav.classList.contains('open');
      menuToggle.innerHTML = isOpen 
        ? `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>`;
    });

    // Close mobile menu when a link is clicked
    mobileNav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        mobileNav.classList.remove('open');
        menuToggle.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>`;
      }
    });
  }

  // --- Active Link Highlighting ---
  const currentPath = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-list a');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    }
  });

  // --- Contact Form Handling ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate form submission
      const btn = contactForm.querySelector('button');
      const originalText = btn.innerHTML;
      btn.innerHTML = 'Sending...';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        contactForm.reset();
        
        // Show toast
        let toast = document.getElementById('toast');
        if (!toast) {
          toast = document.createElement('div');
          toast.id = 'toast';
          toast.className = 'toast';
          document.body.appendChild(toast);
        }
        toast.textContent = 'Message sent successfully!';
        toast.classList.add('show');
        
        setTimeout(() => {
          toast.classList.remove('show');
        }, 3000);
      }, 1000);
    });
  }
});
