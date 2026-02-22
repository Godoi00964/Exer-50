// ===== CONFIGURAÇÃO EMAILJS =====

const EMAIL_SERVICE_ID = "service_a9m0t7u"; // Ex: "gmail"
const EMAIL_TEMPLATE_ID = "template_9viu6ns"; // Ex: "template_abc123"
const DESTINATARIO = "eduardofgodoi@outlook.com"; // Seu email para receber mensagens

// Aguardar e inicializar EmailJS
let emailjsReady = false;
function initEmailJS() {
  if (typeof emailjs !== 'undefined' && !emailjsReady) {
    emailjs.init("G-wo8jx94GGCrNyaq");
    emailjsReady = true;
    
    // Habilitar botão de envio quando EmailJS estiver pronto
    const submitBtn = document.querySelector('.contact-form form input[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.style.cursor = 'pointer';
      submitBtn.style.opacity = '1';
    }
    
    console.log('EmailJS inicializado com sucesso!');
  } else if (typeof emailjs === 'undefined') {
    setTimeout(initEmailJS, 300); // Reduzido para 300ms para resposta mais rápida
  }
}

// Chamar inicialização e desabilitar botão até carregar
document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.querySelector('.contact-form form input[type="submit"]');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.style.cursor = 'not-allowed';
    submitBtn.style.opacity = '0.6';
  }
  initEmailJS();
});

// ===== Menu Responsivo =====
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Fecha o menu ao clicar em um link
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
}

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== Validação de Formulário =====
const form = document.querySelector('.contact-form form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form fields
    const inputs = form.querySelectorAll('.labelInput');
    const textarea = form.querySelector('textarea');
    let isValid = true;

    // Validate all fields
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        isValid = false;
        input.classList.add('error');
        input.classList.remove('fade-in');
      } else {
        input.classList.remove('error');
      }
    });

    if (textarea && textarea.value.trim() === '') {
      isValid = false;
      textarea.classList.add('error');
      textarea.classList.remove('fade-in');
    } else if (textarea) {
      textarea.classList.remove('error');
    }

    // Validate email format
    const emailInput = form.querySelector('input[type="email"]');
    if (emailInput && !isValidEmail(emailInput.value)) {
      isValid = false;
      emailInput.classList.add('error');
    } else if (emailInput) {
      emailInput.classList.remove('error');
    }

    if (isValid) {
      // Verificar se EmailJS está disponível
      if (typeof emailjs === 'undefined' || !emailjsReady) {
        showNotification('✗ Serviço de email ainda está carregando. Aguarde um momento.', 'error');
        return;
      }

      // Enviar email via EmailJS
      const nomeInput = form.querySelector('input[name="nome"]');
      const assuntoInput = form.querySelector('input[name="assunto"]');
      const telefoneInput = form.querySelector('input[name="telefone"]');

      const templateParams = {
        to_email: DESTINATARIO,
        from_email: emailInput.value,
        from_name: nomeInput.value,
        subject: assuntoInput.value,
        phone: telefoneInput.value,
        message: textarea.value
      };

      // Mostrar loading
      showNotification('Enviando mensagem...', 'loading');

      emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, templateParams)
        .then(function(response) {
          console.log('Email enviado com sucesso!', response.status, response.text);
          showNotification('✓ Mensagem enviada com sucesso! Em breve retornaremos.', 'success');
          form.reset();
          
          // Remove error classes
          inputs.forEach(input => input.classList.remove('error'));
          if (textarea) textarea.classList.remove('error');
        }, function(error) {
          console.log('Erro ao enviar email:', error);
          showNotification('✗ Erro ao enviar. Verifique as configurações do EmailJS.', 'error');
        });
    } else {
      showNotification('✗ Por favor, preencha todos os campos corretamente.', 'error');
    }
  });

  // Remove error class on input focus
  form.querySelectorAll('.labelInput, textarea').forEach(field => {
    field.addEventListener('focus', function() {
      this.classList.remove('error');
    });
  });
}

// ===== Validar Email =====
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ===== Show Notification =====
function showNotification(message, type) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 16px 24px;
    background: ${type === 'success' ? '#1dd1a1' : '#ff6b6b'};
    color: white;
    border-radius: 8px;
    font-weight: 600;
    z-index: 1000;
    animation: slideIn 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    max-width: 300px;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ===== Set Active Link on Scroll =====
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section[id]');

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 300) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.navbar a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ===== Fade In Animation on Scroll =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply observer to cards and sections
document.querySelectorAll('.card, .projetos-card, .sobre-content, .home-content').forEach(el => {
  el.classList.add('fade-out');
  observer.observe(el);
});

// ===== Button Click Effects =====
document.querySelectorAll('.btn-1, .btn-2').forEach(button => {
  button.addEventListener('click', function (e) {
    // Ripple effect
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      pointer-events: none;
      animation: ripple-animation 0.6s ease-out;
    `;
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);

    // Scroll to contact if needed
    if (this.textContent.includes('Contato') || this.textContent.includes('Saiba')) {
      const contactSection = document.querySelector('.contact-form');
      if (contactSection && this.tagName === 'BUTTON') {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  });
});

// ===== Header Sticky Effect =====
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// ===== Add CSS animation for ripple =====
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple-animation {
    to {
      opacity: 0;
      transform: scale(4);
    }
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideOut {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(100px);
    }
  }
`;
document.head.appendChild(style);

// ===== Página carregada =====
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
});
