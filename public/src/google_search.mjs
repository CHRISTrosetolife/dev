import { browser_open } from "./browser_open.mjs";
export async function google_search(query) {
  await browser_open("https://www.google.com/search?q=");
}
