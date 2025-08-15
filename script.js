// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id) || document.querySelector(a.getAttribute('href'));
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
  });
});