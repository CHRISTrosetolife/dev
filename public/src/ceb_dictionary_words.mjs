import { list_adder } from "./list_adder.mjs";
import { each_object } from "./each_object.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { list_length } from "./list_length.mjs";
import { list_single } from "./list_single.mjs";
import { ceb_dictionary_page_each } from "./ceb_dictionary_page_each.mjs";
import { string_trim } from "./string_trim.mjs";
import { list_add } from "./list_add.mjs";
export async function ceb_dictionary_words() {
  let lookup = {};
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
      let list = object_property_initialize(lookup, right, []);
      list_add(list, left);
    }
  });
  let list = list_adder((la) => {
    each_object(lookup, (key, value) => {
      la([key, value]);
    });
  });
  return list;
}
