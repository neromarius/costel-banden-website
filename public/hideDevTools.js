// Script pentru a ascunde orice meniu de developer cu text specific
setTimeout(() => {
  const texts = [
    'Preferences',
    'Hide Dev Tools',
    'Disable Dev Tools',
    'devtools',
    'WindSurf',
    'Vercel Toolbar'
  ];
  const all = Array.from(document.querySelectorAll('body *'));
  all.forEach(el => {
    const t = (el.innerText || '').trim();
    if (texts.some(txt => t.includes(txt))) {
      el.style.display = 'none';
      el.style.visibility = 'hidden';
      el.style.pointerEvents = 'none';
      el.style.opacity = '0';
      el.style.zIndex = '-9999';
    }
  });
}, 500);
