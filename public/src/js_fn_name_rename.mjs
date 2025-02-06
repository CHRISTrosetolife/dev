import { log } from "./log.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit_calls_fn_name } from "./js_visit_calls_fn_name.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function js_fn_name_rename(ast, name_from, name_to) {
  assert_arguments_length(arguments, 3);
  js_visit_calls_fn_name(ast, (arg) => {
    let v = object_property_get(arg, "value");
    log({
      v,
    });
    if (v === name_from) {
      object_property_set(arg, "value", name_to);
    }
  });
}
