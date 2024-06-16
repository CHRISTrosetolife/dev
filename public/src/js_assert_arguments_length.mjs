import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
export function js_assert_arguments_length(ast) {
  assert_arguments_length(arguments, 1);
  let d = js_declaration_single(ast);
  let { body: body_d } = d;
  let { body: body_block } = body_d;
  if (list_empty_is(body_block)) {
    return;
  }
  let first = list_first(body_block);
  let { type: type_first } = first;
  if (type_first !== "ExpressionStatement") {
    return;
  }
  let { expression } = first;
  let { type: type_expression } = expression;
  if (type_first !== "CallExpression") {
    return;
  }
  return first;
}
