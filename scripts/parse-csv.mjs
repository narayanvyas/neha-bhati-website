import fs from "node:fs";

const raw = fs.readFileSync(new URL("./scopus.csv", import.meta.url), "utf-8");

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else {
      if (c === '"') {
        inQuotes = true;
      } else if (c === ",") {
        row.push(field);
        field = "";
      } else if (c === "\n" || c === "\r") {
        if (c === "\r" && text[i + 1] === "\n") i++;
        row.push(field);
        rows.push(row);
        row = [];
        field = "";
      } else {
        field += c;
      }
    }
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

const rows = parseCsv(raw).filter((r) => r.length > 1);
const headers = rows[0];
const entries = rows.slice(1).map((r) => {
  const obj = {};
  headers.forEach((h, i) => (obj[h] = r[i] ?? ""));
  return obj;
});

const mapped = entries.map((e) => ({
  authors: e["Authors"],
  title: e["Title"],
  year: Number(e["Year"]),
  sourceTitle: e["Source title"],
  volume: e["Volume"],
  issue: e["Issue"],
  pageStart: e["Page start"],
  pageEnd: e["Page end"],
  citedBy: Number(e["Cited by"] || 0),
  doi: e["DOI"],
  link: e["Link"],
  documentType: e["Document Type"],
  openAccess: e["Open Access"],
}));

mapped.sort((a, b) => b.year - a.year || b.citedBy - a.citedBy);

fs.writeFileSync(
  new URL("./publications.json", import.meta.url),
  JSON.stringify(mapped, null, 2)
);

console.log(`Parsed ${mapped.length} entries`);
console.log(
  "Total citations:",
  mapped.reduce((s, m) => s + m.citedBy, 0)
);
