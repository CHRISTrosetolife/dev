import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_code_generate_parent } from "./html_code_generate_parent.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_parse } from "./js_parse.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { list_map } from "./list_map.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { html_parse } from "./html_parse.mjs";
import { list_add } from "./list_add.mjs";
import { each_object } from "./each_object.mjs";
import { list_concat } from "./list_concat.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function html_code_generate(tag_name, input) {
  assert_arguments_length(arguments, 2);
  let p = await html_parse(input);
  let c = html_parse_visit_tag_single(p, tag_name);
  let { attribs } = c;
  let variable_name = "c";
  let statements = [
    js_code_statement_let_assign(
      variable_name,
      js_code_call_args(fn_name("html_element"), [
        html_code_generate_parent(),
        string_delimit(tag_name),
      ]),
    ),
  ];
  each_object(attribs, (key, value) => {
    let s = js_code_statement_call_args(
      fn_name("html_attribute_set"),
      list_concat([variable_name], list_map([key, value], string_delimit)),
    );
    list_add(statements, s);
  });
  let code = list_join_empty(statements);
  let ast = js_parse(code);
  code = js_unparse(ast);
  return code;
}
