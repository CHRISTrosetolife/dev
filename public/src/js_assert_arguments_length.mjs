import { js_declaration_single } from "./js_declaration_single.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
export function js_assert_arguments_length(ast) {
  let d = js_declaration_single(ast);
  let { body } = d;
  if (list_empty_is(body)) {
    return;
  }
  let first = list_first(body);
  return body;
}
