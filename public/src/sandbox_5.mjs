import { js_identifiers_shadowed_names } from "./js_identifiers_shadowed_names.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_parse } from "./function_parse.mjs";
export async function sandbox_5() {
  let ast = await function_parse(fn_name("sandbox_5b"));
  let v3 = js_identifiers_shadowed_names(ast);
  return v3;
}
