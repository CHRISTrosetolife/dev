import { list_single } from "./list_single.mjs";
import { ceb_dictionary_page_each } from "./ceb_dictionary_page_each.mjs";
import { log } from "./log.mjs";
export async function sandbox() {
  await ceb_dictionary_page_each((v) => {
    let { url, letter, page_number, parsed } = v;
    if (letter === "a" && page_number === 1) {
      log(url);
      let tables = parsed.querySelectorAll(".table-responsive");
      let table = list_single(tables);
    }
  });
}
