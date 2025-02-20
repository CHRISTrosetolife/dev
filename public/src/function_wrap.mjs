import { object_property_get } from "./object_property_get.mjs";
import { js_declaration_to_params } from "./js_declaration_to_params.mjs";
import { function_declaration } from "./function_declaration.mjs";
export async function function_wrap(function_name, function_name_wrapped) {
  let d = await function_declaration(function_name);
  let params = js_declaration_to_params(d);
  let async = object_property_get(d, "async");
  let v = d;
  return v;
}
