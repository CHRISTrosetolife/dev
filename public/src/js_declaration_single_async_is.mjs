import { object_property_get } from "./object_property_get.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
export function js_declaration_single_async_is(ast) {
  let d = js_declaration_single(ast);
  let d_async = object_property_get(d, "async");
  return d_async;
}
