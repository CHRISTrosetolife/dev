import { fn_name } from "./fn_name.mjs";
import { js_code_array_empty } from "./js_code_array_empty.mjs";
import { list_get } from "./list_get.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { equal } from "./equal.mjs";
import { assert_message } from "./assert_message.mjs";
import { js_string } from "./js_string.mjs";
import { each_index } from "./each_index.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { json_to } from "./json_to.mjs";
import { list_index_is } from "./list_index_is.mjs";
import { list_single } from "./list_single.mjs";
export function js_template_to_function(ast) {
  return js_visit_node(ast, "TemplateLiteral", (v) => {
    let { node } = v;
    let e = js_parse_expression(
      js_code_call_args(fn_name("string_combine_multiple"), [
        js_code_array_empty(),
      ]),
    );
    let { arguments: as } = e;
    let a = list_single(as);
    let { quasis, expressions } = node;
    let { elements } = a;
    each_index(quasis, (q, qi) => {
      let { value } = q;
      let { raw, cooked } = value;
      assert_message(equal, [raw, cooked], () => {
        return string_combine_multiple([
          "if these are different then the code needs to pick the correct value: ",
          json_to({
            raw,
            cooked,
          }),
        ]);
      });
      if (string_empty_not_is(cooked)) {
        list_add(elements, js_string(cooked));
      }
      if (list_index_is(expressions, qi)) {
        list_add(elements, list_get(expressions, qi));
      }
    });
    object_replace(node, e);
  });
}
