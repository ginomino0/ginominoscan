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
  { name: 'Errori di Prezzo e Sconti', username: 'erroriprezzoesconti', url: 'https://t.me/s/erroriprezzoesconti', label: 'Sconti e prezzi anomali' },
  { name: 'Super Offerte Amazon Italy', username: 'super_offerte_amazon_italy', url: 'https://t.me/s/super_offerte_amazon_italy', label: 'Offerte Amazon' },
  { name: 'Il Re degli Affari', username: 'il_re_degli_affari', url: 'https://t.me/s/il_re_degli_affari', label: 'Offerte verificate e minimi storici' },
  { name: 'ErroriDiPrezzo', username: 'ErroriDiPrezzo', url: 'https://t.me/s/ErroriDiPrezzo', label: 'Segnalazioni di errori di prezzo' },
  { name: 'Offerte & Errori Prezzo', username: 'OfferteErroriSconti', url: 'https://t.me/s/OfferteErroriSconti', label: 'Offerte e prezzi sbagliati' },
  { name: 'Offerte Tech Amazon IT', username: 'offertetechamazonit', url: 'https://t.me/s/offertetechamazonit', label: 'Offerte tecnologia Amazon' },
  { name: 'Offerte Amazon eBay Gratis', username: 'offerteescontigratis', url: 'https://t.me/s/offerteescontigratis', label: 'Offerte e sconti vari' },
  { name: 'Amazon Offerte Italia', username: 'amazonofferteitalia', url: 'https://t.me/s/amazonofferteitalia', label: 'Offerte Amazon Italia' },
  { name: 'Sconti Italiani', username: 'sconti_italiani', url: 'https://t.me/s/sconti_italiani', label: 'Sconti e offerte' },
  { name: 'Offerte dal Web', username: 'offertedalweb', url: 'https://t.me/s/offertedalweb', label: 'Offerte da negozi online' },
  { name: 'Offerte Lampo Italia', username: 'offertelampoitalia', url: 'https://t.me/s/offertelampoitalia', label: 'Offerte lampo' },
  { name: 'Offerte Online Italia', username: 'offerteonlineitalia', url: 'https://t.me/s/offerteonlineitalia', label: 'Offerte online' },
  { name: 'Offerte e Sconti', username: 'offerte_e_sconti', url: 'https://t.me/s/offerte_e_sconti', label: 'Offerte e codici sconto' },
  { name: 'Offerte Amazon Prime', username: 'offerteamazonprime', url: 'https://t.me/s/offerteamazonprime', label: 'Offerte Amazon e Prime' },
  { name: 'Offerte Giornaliere', username: 'offertegiornaliere', url: 'https://t.me/s/offertegiornaliere', label: 'Offerte quotidiane' },
  { name: 'Offerte Hi-Tech', username: 'offerte_hitech', url: 'https://t.me/s/offerte_hitech', label: 'Tecnologia e informatica' },
  { name: 'Offerte Telefonia', username: 'telefonino_offerte', url: 'https://t.me/s/telefonino_offerte', label: 'Smartphone e accessori' },
  { name: 'OfferteDale Casa', username: 'offertedalecasa', url: 'https://t.me/s/offertedalecasa', label: 'Casa ed elettrodomestici' },
  { name: 'OfferteDale Fashion', username: 'offertedalefashion', url: 'https://t.me/s/offertedalefashion', label: 'Moda e accessori' },
  { name: 'OfferteDale Sport', username: 'offertedalesport', url: 'https://t.me/s/offertedalesport', label: 'Sport e attività outdoor' },
  { name: 'Super Offerte Italia', username: 'superofferteitalia', url: 'https://t.me/s/superofferteitalia', label: 'Offerte generaliste' },
  { name: 'Offerte Amazon Tech', username: 'offerteamazontech', url: 'https://t.me/s/offerteamazontech', label: 'Tecnologia Amazon' },
  { name: 'Offerte Amazon e Coupon', username: 'amazon_coupon_offerte', url: 'https://t.me/s/amazon_coupon_offerte', label: 'Coupon e offerte Amazon' },
  { name: 'Prezzi Bomba', username: 'prezzibomba', url: 'https://t.me/s/prezzibomba', label: 'Prezzi bassi e offerte lampo' },
  { name: 'Offerte Smart Italia', username: 'offertesmartitalia', url: 'https://t.me/s/offertesmartitalia', label: 'Offerte selezionate' }
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
    const discount = discountMatch ? Number(discountMatch[1]) : (price && oldPrice && oldPrice > price ? Math.round((1-price/oldPrice)*100) : null);
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
