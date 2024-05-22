import { list_length } from "./list_length.mjs";
import { equal } from "./equal.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_single } from "./list_single.mjs";
import { ceb_dictionary_page_each } from "./ceb_dictionary_page_each.mjs";
import { log } from "./log.mjs";
import { list_map } from "./list_map.mjs";
import { assert } from "./assert.mjs";
export async function sandbox() {
  await ceb_dictionary_page_each((v) => {
    let { url, letter, page_number, parsed } = v;
    if (letter === "a" && page_number === 1) {
      let tables = parsed.querySelectorAll(".table-responsive");
      let div = list_single(tables);
      let rows = div.querySelectorAll("tr");
      for (let r of rows) {
        let columns = r.querySelectorAll("td");
        assert(equal, [list_length(columns), 2]);
      }
      log(list_map(rows, (r) => object_property_get(r, "text")));
    }
  });
}
