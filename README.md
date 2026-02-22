# 🚀 Portfólio - Eduardo Godoy

Um portfólio pessoal moderno e responsivo de um desenvolvedor front-end, desenvolvido com HTML, CSS e JavaScript puro.

## 📋 Sobre o Projeto

Este é um site portfólio que apresenta:
- **Introdução pessoal** com descrição profissional
- **Seção Sobre**: História e visão de desenvolvimento
- **Seção Educação**: Disciplinas e tecnologias em estudo
- **Formulário de Contato**: Integrado com EmailJS para envio de mensagens
- **Design responsivo**: Adaptado para todos os dispositivos
- **Menu hambúrguer**: Navegação mobile-friendly

## 🛠️ Tecnologias Utilizadas

- **HTML 5**: Estrutura semântica
- **CSS 3**: Estilização com variáveis CSS e efeitos modernos
- **JavaScript**: Interatividade e validação
- **EmailJS**: Envio de emails diretamente do formulário
- **Boxicons**: Ícones vetoriais

## 📁 Estrutura do Projeto

```
📦 Exer-50
├── 📄 index.html          # Arquivo principal HTML
├── 🎨 style.css           # Estilos CSS
├── ⚙️ script.js            # Lógica JavaScript
├── 📂 img/                # Pasta com imagens
│   ├── logo.png
│   ├── busto2.png
│   ├── busto3.jpg
│   └── html.png
└── 📄 README.md           # Este arquivo
```

## ✨ Recursos Principais

### 1. **Navegação Responsiva**
- Menu fixo no topo com navegação suave
- Menu hambúrguer para dispositivos móveis
- Links de navegação com efeito hover

### 2. **Formulário de Contato**
- Validação de campos em tempo real
- Integração com EmailJS
- Feedback visual de erro/sucesso
- Destinatário: `eduardofgodoi@outlook.com`

### 3. **Design Moderno**
- Paleta de cores profissional
- Efeitos glassmorphism (vidro)
- Transições suaves
- Dark mode como tema padrão

### 4. **Performance**
- Scroll suave entre seções
- Carregamento otimizado
- Código limpo e organizado

## 🎨 Paleta de Cores

```css
--primary-color: #FF6B35       /* Laranja vibrante */
--secondary-color: #004E89     /* Azul escuro */
--dark-bg: #0f1419             /* Fundo escuro */
--accent: #1dd1a1              /* Verde água */
```

## 🚀 Como Usar

### 1. Abrir o Projeto
```bash
# Abra o arquivo index.html em seu navegador
```

### 2. Funcionalidades

**Navegação:**
- Clique nos links do menu para navegar pelas seções
- O menu hamburger aparece em telas pequenas

**Formulário de Contato:**
- Preencha todos os campos obrigatórios
- Clique em "Enviar" para receber a mensagem

**Responsividade:**
- O site se adapta automaticamente a qualquer tamanho de tela

## ⚙️ Configuração EmailJS

Para que o formulário de contato funcione:

1. Acesse [EmailJS](https://www.emailjs.com/)
2. Crie uma conta
3. Copie seu `Service ID` e `Template ID`
4. Atualize as constantes em `script.js`:

```javascript
const EMAIL_SERVICE_ID = "seu_service_id";
const EMAIL_TEMPLATE_ID = "seu_template_id";
const DESTINATARIO = "seu_email@gmail.com";
```

## 📱 Responsividade

- ✅ Desktop (1024px+)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (até 767px)

## 📝 Seções do Site

### 🏠 **Home**
Apresentação inicial com call-to-action (CTA) para contato e "Saiba Mais"

### 👤 **Sobre**
Descrição detalhada do desenvolvedor, sua visão e experiência

### 📚 **Educação**
Cards mostrando tecnologias e disciplinas em estudo

### 📧 **Contato**
Formulário validado para envio de mensagens

## 🔧 Funcionalidades JavaScript

- **Menu Responsivo**: Toggle do menu em dispositivos móveis
- **Smooth Scroll**: Rolagem suave entre seções
- **Validação de Formulário**: Verificação em tempo real
- **EmailJS Integration**: Envio de emails automático
- **Efeitos Interativos**: Hover states e transições

## 🌐 Hospedagem

Este projeto pode ser hospedado em:
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

## 📧 Contato

- **Email**: eduardofgodoi@outlook.com
- **GitHub**: [Seu GitHub]
- **LinkedIn**: [Seu LinkedIn]

## 📄 Licença

Este projeto é livre para uso e modificação pessoal.

---

Desenvolvido com ❤️ por **Eduardo Godoy** | Desenvolvedor Front-End
