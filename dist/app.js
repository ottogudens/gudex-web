const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.setAttribute('aria-expanded','false'); nav.classList.remove('open'); }));
document.addEventListener('keydown', e => { if(e.key === 'Escape' && nav.classList.contains('open')) { menu.setAttribute('aria-expanded','false'); nav.classList.remove('open'); menu.focus(); } });
