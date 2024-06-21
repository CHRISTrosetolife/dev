import { js_declaration_single_body } from "./js_declaration_single_body.mjs";
import { string_to } from "./string_to.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
export function js_assert_arguments_length(ast) {
  assert_arguments_length(arguments, 1);
  let d = js_declaration_single(ast);
  let body_block = js_declaration_single_body(ast);
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
  if (type_expression !== "CallExpression") {
    return;
  }
  let { callee } = expression;
  let { type: type_callee } = callee;
  if (type_callee !== "Identifier") {
    return;
  }
  let { name } = callee;
  if (name !== assert_arguments_length.name) {
    return;
  }
  let { params } = d;
  expression.arguments = list_map(
    ["arguments", string_to(list_size(params))],
    js_parse_expression,
  );
}
