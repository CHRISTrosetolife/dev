import { list_join_empty } from "./list_join_empty.mjs";
import { list_map } from "./list_map.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_statement_declare_assign } from "./js_code_statement_declare_assign.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { html_parse } from "./html_parse.mjs";
import { html_element } from "./html_element.mjs";
import { list_add } from "./list_add.mjs";
import { each_object } from "./each_object.mjs";
import { list_concat } from "./list_concat.mjs";
export function html_code_generate(tag_name, input) {
  let p = html_parse(input);
  let c = html_parse_visit_tag_single(p, tag_name);
  let { attribs } = c;
  let variable_name = "c";
  let statements = [
    js_code_statement_declare_assign(
      variable_name,
      js_code_call_args(html_element.name, ["parent", tag_name]),
    ),
  ];
  each_object(attribs, (key, value) => {
    let s = js_code_statement_call_args(
      html_attribute_set.name,
      list_concat([variable_name], list_map([key, value], string_delimit)),
    );
    list_add(statements, s);
  });
  let code = list_join_empty(statements);
}
