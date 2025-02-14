import { js_imports_existing } from "./js_imports_existing.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function js_imports_existing_names(ast) {
  let v = js_imports_existing(ast);
  let v2 = list_map_property(v, "name");
  return v2;
}
