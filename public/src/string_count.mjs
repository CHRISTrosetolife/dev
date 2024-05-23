import { object_property_get } from "./object_property_get.mjs";
import { string_length } from "./string_length.mjs";
import { list_sort } from "./list_sort.mjs";
import { each_object } from "./each_object.mjs";
import { list_adder } from "./list_adder.mjs";
import { add_1 } from "./add_1.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function string_count(input_list) {
  let lookup = {};
  for (let word of input_list) {
    let count = object_property_initialize(lookup, word, 0);
    object_property_set(lookup, word, add_1(count));
  }
  let list = list_adder((la) =>
    each_object(lookup, (word, count) =>
      la({
        word,
        count,
      }),
    ),
  );
  list_sort(list, (l) => string_length(object_property_get(l, "word")));
  list_sort(list, (l) => -object_property_get(l, "count"));
  return list;
}
