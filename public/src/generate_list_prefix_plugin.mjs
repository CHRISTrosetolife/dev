import { list_find } from "./list_find.mjs";
import { generate_list_prefix_suffix } from "./generate_list_prefix_suffix.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
export function generate_list_prefix_plugin(fn, language) {
  let list = fn();
  let target = function_name_combine(
    string_suffix_without(
      object_property_get(fn, "name"),
      generate_list_prefix_suffix(),
    ),
    language,
  );
  let match = list_find(list, (e) => object_property_get(e, "name") === target);
  return match();
}
