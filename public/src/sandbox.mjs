import { log } from "./log.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { list_length } from "./list_length.mjs";
import { equal } from "./equal.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_single } from "./list_single.mjs";
import { ceb_dictionary_page_each } from "./ceb_dictionary_page_each.mjs";
import { list_map } from "./list_map.mjs";
import { assert } from "./assert.mjs";
export async function sandbox() {
  return await list_adder_async(async (la) => {
    await ceb_dictionary_page_each((v) => {
      let { letter, page_number, parsed } = v;
      let tables = parsed.querySelectorAll(".table-responsive");
      let div = list_single(tables);
      let rows = div.querySelectorAll("tr");
      log({
        letter,
        page_number,
        r: list_length(rows),
      });
      for (let r of rows) {
        let columns = r.querySelectorAll("td");
        assert(equal, [list_length(columns), 2]);
        let texts = list_map(columns, (c) => object_property_get(c, "text"));
        la(texts);
      }
    });
  });
}
