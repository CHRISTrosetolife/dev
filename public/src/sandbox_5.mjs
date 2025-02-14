import { js_identifiers_scoped } from "./js_identifiers_scoped.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_parse } from "./function_parse.mjs";
import { js_visit } from "./js_visit.mjs";
export async function sandbox_5() {
  let ast = await function_parse(fn_name("sandbox_5"));
  js_visit(ast, function (v) {
    js_identifiers_scoped();
  });
}
