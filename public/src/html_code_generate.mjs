import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_statement_declare_assign } from "./js_code_statement_declare_assign.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { log } from "./log.mjs";
import { html_parse } from "./html_parse.mjs";
import { object_properties } from "./object_properties.mjs";
import { html_element } from "./html_element.mjs";
export function html_code_generate(tag_name, input) {
  '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />';
  log({
    input,
  });
  let p = html_parse(input);
  let c = html_parse_visit_tag_single(p, tag_name);
  let { attribs } = c;
  let variable_name = "c";
  [
    js_code_statement_declare_assign(
      variable_name,
      js_code_call_args(html_element.name, ["parent", tag_name]),
    ),
    js_code_statement_call_args(html_attribute_set.name, ["parent", tag_name]),
  ];
  return attribs;
  return object_properties(c);
}
