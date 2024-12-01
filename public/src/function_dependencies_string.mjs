import { function_dependencies_string_externals } from "./function_dependencies_string_externals.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { function_declaration } from "./function_declaration.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { object_properties } from "./object_properties.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
import { object_values } from "./object_values.mjs";
import { each } from "./each.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { function_imports } from "./function_imports.mjs";
export async function function_dependencies_string(function_name) {
  let map = await function_imports(function_name);
  let externals = list_adder_unique((la) => {
    each(object_values(map), (mapped) => {
      let { sources } = mapped;
      each(sources, la);
    });
  });
  let e = function_dependencies_string_externals();
  let e_code = list_map(externals, (n) => {
    return object_property_get(e, n);
  });
  if (false) {
    return e_code;
  }
  let dependency_names = object_properties(map);
  let ds = await list_map_async(dependency_names, function_declaration);
  let us = list_map(ds, js_unparse);
  let c = list_concat(e_code, us);
  let text = list_join_newline(c);
  return text;
}
