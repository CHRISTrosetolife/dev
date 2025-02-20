import { js_declaration_to_params } from "./js_declaration_to_params.mjs";
import { function_declaration } from "./function_declaration.mjs";
export async function function_wrap(function_name, function_name_wrapped) {
  let d = await function_declaration(function_name);
  let params = js_declaration_to_params(d);
}
