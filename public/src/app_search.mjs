import { firebase_download } from "./firebase_download.mjs";
import { bible_search_results } from "./bible_search_results.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_search() {
  let body = html_style_default_initialize();
  let filtered = await bible_search_results(split, word_to_results, filter);
  async function word_to_results(word) {
    return await firebase_download(i, word);
  }
}
