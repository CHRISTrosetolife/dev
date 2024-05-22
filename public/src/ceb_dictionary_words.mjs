import { object_property_exists } from "./object_property_exists.mjs";
import { not } from "./not.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { list_length } from "./list_length.mjs";
import { list_single } from "./list_single.mjs";
import { ceb_dictionary_page_each } from "./ceb_dictionary_page_each.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { string_trim } from "./string_trim.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function ceb_dictionary_words() {
  let lookup = {};
  return await list_adder_async(async (la) => {
    await ceb_dictionary_page_each((v) => {
      let { parsed } = v;
      let tables = parsed.querySelectorAll(".table-responsive");
      let div = list_single(tables);
      let rows = div.querySelectorAll("tr");
      for (let r of rows) {
        let columns = r.querySelectorAll("td");
        assert(equal, [list_length(columns), 2]);
        let texts = list_map(columns, (c) => object_property_get(c, "text"));
        let mapped = list_map(texts, string_case_lower);
        let mapped2 = list_map(mapped, string_trim);
        let [left, right] = mapped2;
        if (not(object_property_exists()))
          object_property_set(lookup, right, []);
        la(mapped2);
      }
    });
  });
}
