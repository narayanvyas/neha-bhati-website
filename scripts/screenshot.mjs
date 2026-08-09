import { chromium } from "playwright";
import fs from "node:fs";

const outDir = "/private/tmp/claude-501/-Users-narayanvyas/2de3ea53-94a6-47b0-8086-0289df4995be/scratchpad/shots";
fs.mkdirSync(outDir, { recursive: true });

const pages = ["/", "/publications", "/books", "/contact"];
const browser = await chromium.launch();
const context = await browser.newContext({ colorScheme: "dark", viewport: { width: 1280, height: 900 } });
const page = await context.newPage();
for (const path of pages) {
  await page.goto(`http://localhost:3000${path}`, { waitUntil: "networkidle" });
  const name = path === "/" ? "home" : path.slice(1);
  await page.screenshot({ path: `${outDir}/${name}-white.png`, fullPage: true });
  console.log(`captured ${name}`);
}
await browser.close();
console.log("done");
