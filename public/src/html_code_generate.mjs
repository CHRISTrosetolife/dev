import { js_code_call } from "./js_code_call.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { log } from "./log.mjs";
import { html_parse } from "./html_parse.mjs";
import { object_properties } from "./object_properties.mjs";
export function html_code_generate(tag_name, input) {
  '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />';
  log({
    input,
  });
  let p = html_parse(input);
  let c = html_parse_visit_tag_single(p, tag_name);
  let { attribs } = c;
  js_code_call;
  return attribs;
  return object_properties(c);
}
