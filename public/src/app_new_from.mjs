import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { function_declaration } from "./function_declaration.mjs";
import { app_identifier } from "./app_identifier.mjs";
import { app_new_generic } from "./app_new_generic.mjs";
import { js_unparse } from "./js_unparse.mjs";
export async function app_new_from(name_existing, name_new) {
  let name_existing_prefixed = app_identifier(name_existing);
  let d = await function_declaration(name_existing_prefixed);
  let body = object_property_get(d, "body");
  let body2 = object_property_get(body, "body");
  let statements = list_join_newline(list_map(body2, js_unparse));
  let v = await app_new_generic(
    name_new,
    statements,
    object_property_get(d, "async"),
  );
  return v;
}
