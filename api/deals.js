const SOURCES = [
  { name: 'Codici Sconto Sconti', username: 'codici_sconto_sconti', url: 'https://t.me/s/codici_sconto_sconti', label: 'Codici sconto e offerte' },
  { name: 'Sconti Errati', username: 'scontierrati', url: 'https://t.me/s/scontierrati', label: 'Sconti anomali ed errori prezzo' },
  { name: 'Tecnofferte', username: 'tecnofferte', url: 'https://t.me/s/tecnofferte', label: 'Offerte Amazon ed eBay' },
  { name: 'Offertazze', username: 'offertazze', url: 'https://t.me/s/offertazze', label: 'Offerte lampo ed errori di prezzo' },
  { name: 'Errori Prezzo Italia', username: 'erroriprezzoitalia', url: 'https://t.me/s/erroriprezzoitalia', label: 'Offerte Amazon e prezzi anomali' },
  { name: 'Offerte.tech', username: 'offertepuntotech', url: 'https://t.me/s/offertepuntotech', label: 'Tecnologia e offerte' },
  { name: 'Cianfrusaglie', username: 'Cianfrusaglie', url: 'https://t.me/s/Cianfrusaglie', label: 'Offerte varie' },
  { name: 'Offerte iSpazio Amazon', username: 'scontiamolo', url: 'https://t.me/s/scontiamolo', label: 'Offerte Amazon, coupon e ribassi' },
  { name: 'RafficAffari', username: 'rafficaffari', url: 'https://t.me/s/rafficaffari', label: 'Offerte bomba ed errori di prezzo' },
  { name: 'OfferteDale', username: 'offertedale', url: 'https://t.me/s/offertedale', label: 'Offerte Amazon ed eBay' },
  { name: 'OfferteDale Bombe', username: 'offertedalebombe', url: 'https://t.me/s/offertedalebombe', label: 'Offerte lampo e prezzi anomali' },
  { name: 'Errore di Prezzo', username: 'errore_di_prezzo', url: 'https://t.me/s/errore_di_prezzo', label: 'Errori di prezzo Amazon' },
  { name: 'Amazon Errori Prezzo', username: 'amazon_errori_prezzo', url: 'https://t.me/s/amazon_errori_prezzo', label: 'Errori e super offerte Amazon' },
  { name: 'Offerte Amazon Italia', username: 'offerteamazonsconti', url: 'https://t.me/s/offerteamazonsconti', label: 'Offerte e sconti Amazon' },
  { name: 'Offerte ed Affari Online', username: 'offertedaffarionline', url: 'https://t.me/s/offertedaffarionline', label: 'Offerte selezionate ed errori prezzo' },
  { name: 'Super Offerte Amazon Italy', username: 'super_offerte_amazon_italy', url: 'https://t.me/s/super_offerte_amazon_italy', label: 'Offerte Amazon' },
  { name: 'Il Re degli Affari', username: 'il_re_degli_affari', url: 'https://t.me/s/il_re_degli_affari', label: 'Offerte verificate e minimi storici' },
  { name: 'ErroriDiPrezzo', username: 'ErroriDiPrezzo', url: 'https://t.me/s/ErroriDiPrezzo', label: 'Segnalazioni di errori di prezzo' },
  { name: 'Offerte Amazon Prime', username: 'offerteamazonprime', url: 'https://t.me/s/offerteamazonprime', label: 'Offerte Amazon e Prime' },
  { name: 'Offerte Giornaliere', username: 'offertegiornaliere', url: 'https://t.me/s/offertegiornaliere', label: 'Offerte quotidiane' },
  { name: 'OfferteDale Casa', username: 'offertedalecasa', url: 'https://t.me/s/offertedalecasa', label: 'Casa ed elettrodomestici' },
  { name: 'OfferteDale Fashion', username: 'offertedalefashion', url: 'https://t.me/s/offertedalefashion', label: 'Moda e accessori' },
  { name: 'OfferteDale Sport', username: 'offertedalesport', url: 'https://t.me/s/offertedalesport', label: 'Sport e attività outdoor' },
  { name: 'Super Offerte Italia', username: 'superofferteitalia', url: 'https://t.me/s/superofferteitalia', label: 'Offerte generaliste' },
  { name: 'Sconti e Offerte Italia', username: 'scontiofferteita', url: 'https://t.me/s/scontiofferteita', label: 'Sconti Amazon e offerte generali' },
  { name: 'Amazon Offerte ITA', username: 'amazon_offerte_italy', url: 'https://t.me/s/amazon_offerte_italy', label: 'Offerte Amazon Italia' },
  { name: 'Offerte & Sconti Amazon', username: 'sconti_amz_italia', url: 'https://t.me/s/sconti_amz_italia', label: 'Offerte e coupon Amazon' },
  { name: 'Tech Deals Italia', username: 'techdeals_italia', url: 'https://t.me/s/techdeals_italia', label: 'Offerte tech e informatica' },
  { name: 'Offerte Amazon & Co.', username: 'amazontech', url: 'https://t.me/s/amazontech', label: 'Offerte Amazon e buoni sconto' },
  { name: 'Offerte AmazonIT', username: 'offerteamzitby', url: 'https://t.me/s/offerteamzitby', label: 'Offerte Amazon varie' },
  { name: 'Offerte', username: 'offerte', url: 'https://t.me/s/offerte', label: 'Offerte online e coupon' },
  { name: 'OFFERTEITALIA', username: 'offerte_italia_amazon', url: 'https://t.me/s/offerte_italia_amazon', label: 'Offerte Amazon Italia' },
  { name: 'Amazon Sconti & Promozioni', username: 'offertepromoamazonit', url: 'https://t.me/s/offertepromoamazonit', label: 'Promozioni ed errori di prezzo' },
  { name: 'AMAZON Sconti per tutti', username: 'amazon_scontipertutti', url: 'https://t.me/s/amazon_scontipertutti', label: 'Offerte Amazon generaliste' },
  { name: 'Amazon.it Offerte', username: 'amazonitalyufficiale', url: 'https://t.me/s/amazonitalyufficiale', label: 'Offerte e coupon Amazon' },
  { name: 'Sconti Amazon', username: 'vitaversoamazon', url: 'https://t.me/s/vitaversoamazon', label: 'Sconti e prezzi bassi' },
  { name: 'Offerte Tech Italia', username: 'mente_informatica', url: 'https://t.me/s/mente_informatica', label: 'Offerte tecnologia e informatica' },
];

function decode(s='') {
  return s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}
function plain(s='') {
  return decode(s.replace(/<br\s*\/?\s*>/gi, '\n').replace(/<\/p>/gi, '\n').replace(/<[^>]*>/g, ' ')).replace(/[\t\r ]+/g, ' ').replace(/\n\s+/g, '\n').trim();
}
function normalizeMoney(raw) {
  if (!raw) return null;
  let s = String(raw).replace(/\s/g, '').replace(/[^0-9.,]/g, '');
  if (!s) return null;
  const comma = s.lastIndexOf(','), dot = s.lastIndexOf('.');
  if (comma >= 0 && dot >= 0) {
    // L'ultimo separatore è quello decimale: 1.999,99 oppure 1,999.99.
    const decimal = Math.max(comma, dot);
    s = s.slice(0, decimal).replace(/[.,]/g, '') + '.' + s.slice(decimal + 1);
  } else if (comma >= 0 || dot >= 0) {
    const sep = comma >= 0 ? ',' : '.';
    const parts = s.split(sep);
    const tail = parts[parts.length - 1];
    if (parts.length > 2) {
      const decimalLike = tail.length === 2;
      s = decimalLike ? parts.slice(0, -1).join('').replace(/[.,]/g, '') + '.' + tail : parts.join('');
    } else if (tail.length === 2) {
      s = parts[0] + '.' + tail;
    } else if (tail.length === 3 && parts[0].length <= 3) {
      // 1.999 € è un prezzo con separatore delle migliaia, non 1,999 €.
      s = parts.join('');
    } else {
      s = parts.join('');
    }
  }
  const n = Number(s);
  return Number.isFinite(n) && n >= 0 && n < 1000000 ? n : null;
}
function pricePair(text) {
  // Accetta 19,99 €, 19.99€, €19,99 e importi con separatore delle migliaia.
  const pattern = /(?:€\s*(\d{1,3}(?:[.,]\d{3})+(?:[.,]\d{2})?|\d+(?:[.,]\d{1,2})?)|(\d{1,3}(?:[.,]\d{3})+(?:[.,]\d{2})?|\d+(?:[.,]\d{1,2})?)\s*(?:€|EUR|euro))/gi;
  const vals = [];
  let m;
  while ((m = pattern.exec(text)) && vals.length < 2) {
    const n = normalizeMoney(m[1] || m[2]);
    if (n != null && !vals.some(v => Math.abs(v - n) < 0.001)) vals.push(n);
  }
  // Per le offerte, il prezzo pagato è normalmente il più basso: normalizziamo
  // l'ordine anche quando il post Telegram presenta prima il prezzo originale.
  vals.sort((a, b) => a - b);
  return { price: vals[0] ?? null, oldPrice: vals.length > 1 && vals[vals.length - 1] > vals[0] ? vals[vals.length - 1] : null };
}
function parseDate(block) {
  const m = block.match(/<time[^>]*datetime="([^"]+)"/i);
  if (m) { const d = new Date(m[1]); if (!Number.isNaN(d.getTime())) return d.toISOString(); }
  return null;
}
function extractImage(block) {
  // I post Telegram possono usare background-image oppure un'anteprima del link Amazon.
  const candidates = [];
  const add = value => {
    if (!value) return;
    let u = decode(value).replace(/&amp;/g, '&').replace(/\\u0026/g, '&').trim();
    if (u.startsWith('//')) u = 'https:' + u;
    if (/^https:\/\//i.test(u) && /(?:telesco\.pe|telegram|amazon|media-amazon|ssl-images|images-amazon|m\.media-amazon|cdn\.)/i.test(u)) candidates.push(u);
  };
  // Photo allegata direttamente al messaggio.
  const photoBlocks = block.match(/<div[^>]+class="[^"]*tgme_widget_message_photo_wrap[^"]*"[^>]*>/gi) || [];
  for (const tag of photoBlocks) {
    const m = tag.match(/style="([^"]*)"/i);
    if (m) {
      const bg = m[1].match(/background-image\s*:\s*url\(\s*['"]?([^'")]+)['"]?\s*\)/i);
      if (bg) add(bg[1]);
    }
    const direct = tag.match(/data-(?:src|url)="([^"]+)"/i);
    if (direct) add(direct[1]);
  }
  // Anteprima incorporata del prodotto collegato (spesso contiene la foto Amazon).
  const previewBlocks = block.match(/<div[^>]+class="[^"]*tgme_widget_message_link_preview[^"]*"[\s\S]*?(?=<\/div>\s*<div|$)/gi) || [];
  for (const pb of previewBlocks) {
    const imgs = pb.match(/(?:background-image\s*:\s*url\(\s*['"]?[^'")]+['"]?\s*\)|<img[^>]+(?:src|data-src)="[^"]+")/gi) || [];
    for (const item of imgs) {
      const bg = item.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/i);
      const im = item.match(/(?:src|data-src)="([^"]+)"/i);
      if (bg) add(bg[1]); else if (im) add(im[1]);
    }
  }
  // Fallback generico: Telegram può cambiare l'ordine degli attributi.
  const styles = block.match(/style="[^"]*background-image\s*:\s*url\([^)]*\)[^"]*"/gi) || [];
  for (const tag of styles) { const m = tag.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/i); if (m) add(m[1]); }
  const imgs = block.match(/<img\b[^>]+(?:src|data-src)="[^"]+"[^>]*>/gi) || [];
  for (const tag of imgs) { const m = tag.match(/(?:src|data-src)="([^"]+)"/i); if (m) add(m[1]); }
  return [...new Set(candidates)].find(u => !/emoji|avatar|profile|sticker/i.test(u)) || null;
}
function extractLinks(block) {
  const links = [];
  const re = /<a\b[^>]*href="([^"]+)"[^>]*>/gi;
  let m;
  while ((m = re.exec(block))) {
    const href = decode(m[1].replace(/&amp;/g, '&'));
    // Keep links that may lead to an Amazon product, including common short links.
    if (/(?:amazon\.(?:it|com)\/(?:dp|gp\/product|gp\/aw\/d|exec\/obidos\/ASIN)\/|amzn\.(?:to|eu)\/|amzlink\.to\/|amazon\.(?:it|com)\/.*(?:tag=|ref=)|ofclub\.click\/)/i.test(href)) links.push(href);
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
    if (!links.length || !/amazon|amzn\.(?:to|eu)|amzlink\.to|ofclub\.click/i.test(links.join(' '))) return null;
    const { price, oldPrice } = pricePair(text);
    const titleLines = text.split('\n').map(x => x.trim()).filter(Boolean);
    let title = titleLines.find(x => !/^(?:🛍|💶|💰|👉|🚚|📦|🔥|😍|❌|#|agg\.?|aggiornato|venduto|spedito|prezzo|risparmia)/i.test(x) && !/https?:\/\//i.test(x));
    if (!title) title = titleLines[0] || 'Offerta Amazon segnalata';
    title = title.replace(/^[^\p{L}\p{N}]+/u, '').slice(0, 180);
    const discountMatch = text.match(/[-−]\s*(\d{1,3})\s*%/);
    const calculatedDiscount = price != null && oldPrice != null && oldPrice > price ? Math.round((1-price/oldPrice)*100) : null;
    const discount = calculatedDiscount != null ? calculatedDiscount : (discountMatch ? Number(discountMatch[1]) : null);
    const shipping = /venduto e spedito da amazon|venduto da amazon/i.test(text) ? 'Amazon indicato nel post' : /spedito da amazon/i.test(text) ? 'Spedito da Amazon indicato nel post' : 'Spedizione/Prime da verificare';
    const date = parseDate(block);
    const postLink = (block.match(/<a class="tgme_widget_message_date"[^>]*href="([^"]+)"/i) || [])[1];
    return { id: `${source.name}-${date || index}-${links[0]}`, title, price, oldPrice, discount, url: links[0], image, source: source.name, sourceLabel: source.label, publishedAt: date, postUrl: postLink ? decode(postLink) : source.url, shipping, rawText: text.slice(0, 1000) };
  }).filter(Boolean);
}

function productKey(deal) {
  const urls = [deal.url, deal.postUrl].filter(Boolean);
  for (const raw of urls) {
    try {
      const u = new URL(raw);
      const path = decodeURIComponent(u.pathname);
      const m = path.match(/\/(?:dp|gp\/product|gp\/aw\/d|exec\/obidos\/ASIN)\/([A-Z0-9]{10})(?:[/?]|$)/i);
      if (m) return 'asin:' + m[1].toUpperCase();
    } catch {}
  }
  // For shortened/affiliate links, identical normalized URLs still collapse.
  try {
    const u = new URL(deal.url);
    u.hash = '';
    for (const key of [...u.searchParams.keys()]) if (/^(tag|ref|linkcode|camp|creative|creativeasin|ascsubtag|utm_.+)$/i.test(key)) u.searchParams.delete(key);
    return 'url:' + u.hostname.toLowerCase().replace(/^www\./, '') + u.pathname.replace(/\/$/, '') + (u.searchParams.toString() ? '?' + u.searchParams.toString() : '');
  } catch { return 'url:' + String(deal.url || '').trim(); }
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
  for (const r of results) for (const d of r.deals) {
    const key = productKey(d);
    const existing = map.get(key);
    if (!existing) map.set(key, { ...d, sources: [d.source] });
    else {
      if (!existing.sources.includes(d.source)) existing.sources.push(d.source);
      // Prefer the richer record when the same Amazon product is reposted.
      if ((!existing.image && d.image) || (existing.price == null && d.price != null) || (!existing.publishedAt && d.publishedAt)) {
        const sources = existing.sources;
        map.set(key, { ...d, ...existing, image: existing.image || d.image, price: existing.price ?? d.price, oldPrice: existing.oldPrice ?? d.oldPrice, discount: existing.discount ?? d.discount, publishedAt: existing.publishedAt || d.publishedAt, sources });
      }
    }
  }
  const deals = [...map.values()].sort((a,b) => (Date.parse(b.publishedAt || 0) || 0) - (Date.parse(a.publishedAt || 0) || 0));
  res.statusCode = 200;
  return res.end(JSON.stringify({ ok: results.some(r => r.ok), updatedAt: new Date().toISOString(), sources: results.map(({source,ok,checkedAt,error,dealsCount}) => ({source,ok,checkedAt,error,dealsCount})), deals, note: 'Le offerte sono segnalazioni di fonti pubbliche. Prezzo, disponibilità, sconto e spedizione vanno verificati su Amazon prima dell’acquisto.' }));
};
