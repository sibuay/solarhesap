const trMap = {
  ş: "s", Ş: "s",
  ğ: "g", Ğ: "g",
  ı: "i", İ: "i",
  ç: "c", Ç: "c",
  ö: "o", Ö: "o",
  ü: "u", Ü: "u",
};

export function slugify(str) {
  return str
    .split("")
    .map((c) => trMap[c] ?? c)
    .join("")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

// pshData key'i (display name) döndürür, bulunamazsa null
import pshData from "../data/pshData";
export function slugToSehir(slug) {
  return Object.keys(pshData).find((k) => slugify(k) === slug) ?? null;
}
