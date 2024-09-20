import { string_size } from "./string_size.mjs";
import { string_count_lookup } from "./string_count_lookup.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_sort } from "./list_sort.mjs";
import { each_object } from "./each_object.mjs";
import { list_adder } from "./list_adder.mjs";
export function string_count(input_list) {
  let lookup = string_count_lookup(input_list);
  let list = list_adder((la) =>
    each_object(lookup, (word, count) =>
      la({
        word,
        count,
      }),
    ),
  );
  list_sort(list, (l) => string_size(object_property_get(l, "word")));
  list_sort(list, (l) => -object_property_get(l, "count"));
  return list;
}
