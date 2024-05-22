import { ceb_dictionary_page_each } from "./ceb_dictionary_page_each.mjs";
import { log } from "./log.mjs";
export async function sandbox() {
  await ceb_dictionary_page_each((v) => {
    let { url, letter, page_number, parsed } = v;
    if (letter === "a" && page_number === 1) {
      log(url);
    }
  });
}
