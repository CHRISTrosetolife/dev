import { function_parse } from "./function_parse.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_imports_existing } from "./js_imports_existing.mjs";
export async function function_imports(function_name) {
  let found = {};
  if (object_property_get(found, function_name)) {
    return;
  }
  let ast = await function_parse(function_name);
  let imports = js_imports_existing(ast);
  object_property_set(found, function_name, imports);
}
