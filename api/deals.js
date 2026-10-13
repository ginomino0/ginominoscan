const SOURCES = [
  { name: 'Codici Sconto Sconti', username: 'codici_sconto_sconti', url: 'https://t.me/s/codici_sconto_sconti', label: 'Codici sconto e offerte' },
  { name: 'Ultima Offerta', username: 'ultimaofferta', url: 'https://t.me/s/ultimaofferta', label: 'Offerte recenti' },
  { name: 'Sconti Errati', username: 'scontierrati', url: 'https://t.me/s/scontierrati', label: 'Sconti anomali ed errori prezzo' },
  { name: 'Errori Bombe', username: 'ErroriBombe', url: 'https://t.me/s/ErroriBombe', label: 'Errori prezzo e offerte lampo' },
  { name: 'Errori di Prezzo Ufficiale', username: 'errori_di_prezzo', url: 'https://t.me/s/errori_di_prezzo', label: 'Errori di prezzo e offerte verificate' },
  { name: 'Errori Prezzo Italia', username: 'erroriprezzoitalia', url: 'https://t.me/s/erroriprezzoitalia', label: 'Offerte Amazon e prezzi anomali' },
  { name: 'Tecnofferte', username: 'tecnofferte', url: 'https://t.me/s/tecnofferte', label: 'Offerte Amazon ed eBay' },
  { name: 'Offertazze', username: 'offertazze', url: 'https://t.me/s/offertazze', label: 'Offerte lampo ed errori di prezzo' },
  { name: 'Outlet Amazon Italia', username: 'outletamazonitalia', url: 'https://t.me/s/outletamazonitalia', label: 'Outlet, coupon e super sconti' },
  { name: 'Offerte.tech', username: 'offertepuntotech', url: 'https://t.me/s/offertepuntotech', label: 'Tecnologia e offerte' },
  { name: 'Cianfrusaglie', username: 'Cianfrusaglie', url: 'https://t.me/s/Cianfrusaglie', label: 'Offerte varie' }
];

function decode(s='') {
  return s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}
function plain(s='') {
  return decode(s.replace(/<br\s*\/?\s*>/gi, '\n').replace(/<\/p>/gi, '\n').replace(/<[^>]*>/g, ' ')).replace(/[\t\r ]+/g, ' ').replace(/\n\s+/g, '\n').trim();
}
function money(s) {
  if (!s) return null;
  const m = s.match(/(?:€\s*)?(\d{1,4}(?:[.,]\d{1,2})?)\s*€/i) || s.match(/€\s*(\d{1,4}(?:[.,]\d{1,2})?)/i) || s.match(/(\d{1,4}[.,]\d{2})\s*(?:euro|eur)/i);
  if (!m) return null;
  const n = Number(m[1].replace(/\./g, '').replace(',', '.'));
  return Number.isFinite(n) ? n : null;
}
function pricePair(text) {
  const vals = [];
  const re = /(?:€\s*)?(\d{1,4}(?:[.,]\d{1,2})?)\s*€/g;
  let m;
  while ((m = re.exec(text)) && vals.length < 4) {
    const n = Number(m[1].replace(/\./g, '').replace(',', '.'));
    if (Number.isFinite(n)) vals.push(n);
  }
  if (!vals.length) {
    const re2 = /€\s*(\d{1,4}(?:[.,]\d{1,2})?)/g;
    while ((m = re2.exec(text)) && vals.length < 4) {
      const n = Number(m[1].replace(/\./g, '').replace(',', '.'));
      if (Number.isFinite(n)) vals.push(n);
    }
  }
  return { price: vals[0] ?? null, oldPrice: vals[1] ?? null };
}
function parseDate(block) {
  const m = block.match(/<time[^>]*datetime="([^"]+)"/i);
  if (m) { const d = new Date(m[1]); if (!Number.isNaN(d.getTime())) return d.toISOString(); }
  return null;
}
function extractImage(block) {
  // Telegram pubblica spesso la foto come background-image del photo_wrap.
  const patterns = [
    /tgme_widget_message_photo_wrap[^>]*style="[^"]*background-image\s*:\s*url\(['\"]?([^'\")]+)['\"]?\)/i,
    /background-image\s*:\s*url\(['\"]?((?:https?:)?\/\/[^'\")]+)['\"]?\)/i,
    /<img[^>]+(?:src|data-src)="((?:https?:)?\/\/[^"]+)"/i
  ];
  for (const re of patterns) { const m = block.match(re); if (m) { const u = decode(m[1]); if (/^\/\//.test(u)) return 'https:' + u; if (/^https:\/\//i.test(u)) return u; } }
  return null;
}
function extractLinks(block) {
  const links = [];
  const re = /<a\b[^>]*href="([^"]+)"[^>]*>/gi;
  let m;
  while ((m = re.exec(block))) {
    const href = decode(m[1].replace(/&amp;/g, '&'));
    // Keep links that may lead to an Amazon product, including common short links.
    if (/(?:amazon\.it\/(?:dp|gp\/product|gp\/aw\/d|exec\/obidos\/ASIN)\/|amzn\.to\/|amzn\.eu\/|amazon\.it\/.*(?:tag=|ref=)|ofclub\.click\/)/i.test(href)) links.push(href);
  }
  return [...new Set(links)];
}
function extractMessages(html, source) {
  const blocks = html.match(/<div class="tgme_widget_message_wrap[\s\S]*?(?=<div class="tgme_widget_message_wrap|<\/section>|$)/gi) || [];
  return blocks.map((block, index) => {
    const textMatch = block.match(/<div class="tgme_widget_message_text[^>]*>([\s\S]*?)<\/div>/i);
    if (!textMatch) return null;
    const text = plain(textMatch[1]);
    const links = extractLinks(block);
    const image = extractImage(block);
    if (!links.length || !/amazon|amzn\.(?:to|eu)|ofclub\.click/i.test(links.join(' '))) return null;
    const { price, oldPrice } = pricePair(text);
    const titleLines = text.split('\n').map(x => x.trim()).filter(Boolean);
    let title = titleLines.find(x => !/^(?:🛍|💶|💰|👉|🚚|📦|🔥|😍|❌|#|agg\.?|aggiornato|venduto|spedito|prezzo|risparmia)/i.test(x) && !/https?:\/\//i.test(x));
    if (!title) title = titleLines[0] || 'Offerta Amazon segnalata';
    title = title.replace(/^[^\p{L}\p{N}]+/u, '').slice(0, 180);
    const discountMatch = text.match(/[-−]\s*(\d{1,3})\s*%/);
    const discount = discountMatch ? Number(discountMatch[1]) : (price && oldPrice && oldPrice > price ? Math.round((1-price/oldPrice)*100) : null);
    const shipping = /venduto e spedito da amazon|venduto da amazon/i.test(text) ? 'Amazon indicato nel post' : /spedito da amazon/i.test(text) ? 'Spedito da Amazon indicato nel post' : 'Spedizione/Prime da verificare';
    const date = parseDate(block);
    const postLink = (block.match(/<a class="tgme_widget_message_date"[^>]*href="([^"]+)"/i) || [])[1];
    return { id: `${source.name}-${date || index}-${links[0]}`, title, price, oldPrice, discount, url: links[0], image, source: source.name, sourceLabel: source.label, publishedAt: date, postUrl: postLink ? decode(postLink) : source.url, shipping, rawText: text.slice(0, 1000) };
  }).filter(Boolean);
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=20, stale-while-revalidate=40');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (req.method !== 'GET') { res.statusCode = 405; return res.end(JSON.stringify({ error: 'Metodo non supportato' })); }
  const results = await Promise.all(SOURCES.map(async source => {
    try {
      const r = await fetch(source.url, { headers: { 'user-agent': 'Mozilla/5.0 (compatible; AmazonRadar/1.0; +https://vercel.com)', 'accept-language': 'it-IT,it;q=0.9,en;q=0.7' }, signal: AbortSignal.timeout(9000) });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const html = await r.text();
      const deals = extractMessages(html, source);
      return { source: source.name, ok: true, deals, dealsCount: deals.length, checkedAt: new Date().toISOString() };
    } catch (e) { return { source: source.name, ok: false, deals: [], dealsCount: 0, checkedAt: new Date().toISOString(), error: String(e.message || e) }; }
  }));
  const map = new Map();
  for (const r of results) for (const d of r.deals) if (!map.has(d.url)) map.set(d.url, d);
  const deals = [...map.values()].sort((a,b) => (Date.parse(b.publishedAt || 0) || 0) - (Date.parse(a.publishedAt || 0) || 0));
  res.statusCode = 200;
  return res.end(JSON.stringify({ ok: results.some(r => r.ok), updatedAt: new Date().toISOString(), sources: results.map(({source,ok,checkedAt,error,dealsCount}) => ({source,ok,checkedAt,error,dealsCount})), deals, note: 'Le offerte sono segnalazioni di fonti pubbliche. Prezzo, disponibilità, sconto e spedizione vanno verificati su Amazon prima dell’acquisto.' }));
};
