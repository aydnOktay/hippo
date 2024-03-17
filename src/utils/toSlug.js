function toSlug(text) {
  return text
    .toLowerCase()
    .replace(/ğ/gi, "g")
    .replace(/ü/gi, "u")
    .replace(/ş/gi, "s")
    .replace(/ı/gi, "i")
    .replace(/ö/gi, "o")
    .replace(/ç/gi, "c")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

module.exports = toSlug;
