import { js_declaration_to_params } from "./js_declaration_to_params.mjs";
import { function_declaration } from "./function_declaration.mjs";
export async function function_params(function_name) {
  let d = await function_declaration(function_name);
  let params = js_declaration_to_params(d);
  return params;
}
