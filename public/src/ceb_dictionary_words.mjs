import { string_size } from "./string_size.mjs";
import { list_size } from "./list_size.mjs";
import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_remove_if_exists } from "./list_remove_if_exists.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { list_adder } from "./list_adder.mjs";
import { each_object } from "./each_object.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { list_single } from "./list_single.mjs";
import { ceb_dictionary_page_each } from "./ceb_dictionary_page_each.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { list_first } from "./list_first.mjs";
export async function ceb_dictionary_words() {
  let lookup = {};
  await ceb_dictionary_page_each((v) => {
    let { parsed, page_number, letter } = v;
    let tables = parsed.querySelectorAll(".table-responsive");
    let div = list_single(tables);
    let rows = div.querySelectorAll("tr");
    for (let r of rows) {
      let columns = r.querySelectorAll("td");
      assert(equal, [list_size(columns), 2]);
      let texts = list_map(columns, (c) => object_property_get(c, "text"));
      let mapped = list_map(texts, string_case_lower);
      let mapped2 = list_map(mapped, string_trim_whitespace);
      let [left, right] = mapped2;
      if (string_empty_not_is(right)) {
        let list = object_property_initialize(lookup, right, []);
        list_add(list, left);
      }
    }
  });
  let list = list_adder((la) => {
    each_object(lookup, (key, value) => {
      list_remove_if_exists(value, key);
      if (list_empty_not_is(value)) {
        la([key, value]);
      }
    });
  });
  list_sort_string(list, list_first);
  list_sort_string(list, (l) => string_size(list_first(l)));
  return list;
}
