/* 1. Írj egy `setCookie` nevű függvényt, ami a paraméterként kapott stringet eltárolja
egy `token` nevű sütiben, ami 15 perc után lejár! */

function setCookie (str) {
  const exp = new Date(Date.now() + 15 * 60 * 1000).toUTCString();
  document.cookie = `token=${str}; expires=${exp}`;
} 

export default setCookie;
