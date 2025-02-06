import { fn_name } from "./fn_name.mjs";
import { js_visit_calls } from "./js_visit_calls.mjs";
export function js_visit_calls_fn_name(ast, lambda) {
  js_visit_calls(ast, fn_name("fn_name"), lambda);
}
