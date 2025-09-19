// Mostrar botão "voltar ao topo"
const btnTopo = document.createElement('button');
btnTopo.textContent = '↑ Topo';
btnTopo.id = 'btnTopo';
document.body.appendChild(btnTopo);

btnTopo.style.position = 'fixed';
btnTopo.style.bottom = '20px';
btnTopo.style.right = '20px';
btnTopo.style.padding = '10px';
btnTopo.style.border = 'none';
btnTopo.style.backgroundColor = '#4CAF50';
btnTopo.style.color = '#fff';
btnTopo.style.borderRadius = '50%';
btnTopo.style.cursor = 'pointer';
btnTopo.style.display = 'none';
btnTopo.style.zIndex = '1000';

window.addEventListener('scroll', () => {
  btnTopo.style.display = window.scrollY > 300 ? 'block' : 'none';
});

btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll suave nos links do menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    destino.scrollIntoView({ behavior: 'smooth' });
  });
});
// Alternar entre modo claro e escuro
const toggleButton = document.getElementById('toggle-theme');

toggleButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');

});

// Mensagem para quem abrir o console
console.log('%cOi, curioso(a)! 👋', 'color: green; font-size: 16px; font-weight: bold');
console.log('%cEsse site foi feito por Maria Clara!', 'color: black; font-size: 14px;');
