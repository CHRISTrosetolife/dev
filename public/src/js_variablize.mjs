import { object_replace } from "./object_replace.mjs";
import { js_name_unique_v_parsed } from "./js_name_unique_v_parsed.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_first } from "./list_first.mjs";
import { list_index } from "./list_index.mjs";
import { list_is } from "./list_is.mjs";
import { assert } from "./assert.mjs";
import { object_copy } from "./object_copy.mjs";
export function js_variablize(ast, parent_list, list_item, expression) {
  assert(list_is, [parent_list]);
  let index = list_index(parent_list, list_item);
  let { parsed, variable_name } = js_name_unique_v_parsed(ast);
  parent_list.splice(index, 0, parsed);
  let { declarations } = parsed;
  let first = list_first(declarations);
  first.init = null_or_undefined(expression)? expression:object_copy(expression);
  let parsed2 = js_parse_expression(variable_name);
  object_replace(expression, parsed2);
}
