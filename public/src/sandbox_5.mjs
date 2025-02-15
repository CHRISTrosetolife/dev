import { js_shadow_has } from "./js_shadow_has.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_parse } from "./function_parse.mjs";
export async function sandbox_5() {
  let ast = await function_parse(fn_name("sandbox_5b"));
  let v3 = js_shadow_has(ast);
  return v3;
}
