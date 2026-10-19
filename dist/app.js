const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
const oilCardLink = document.createElement('a');
oilCardLink.href = 'https://bknd.gudex.cl/tarjeta-aceite';
oilCardLink.textContent = 'Tarjeta de aceite';
nav.insertBefore(oilCardLink, nav.querySelector('.portal'));
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.setAttribute('aria-expanded','false'); nav.classList.remove('open'); }));
document.addEventListener('keydown', e => { if(e.key === 'Escape' && nav.classList.contains('open')) { menu.setAttribute('aria-expanded','false'); nav.classList.remove('open'); menu.focus(); } });
