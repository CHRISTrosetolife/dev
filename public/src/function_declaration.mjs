import { js_declaration_single } from "./js_declaration_single.mjs";
import { function_parse } from "./function_parse.mjs";
export async function function_declaration(function_name) {
  let ast = await function_parse(function_name);
  js_declaration_single(ast);
}
