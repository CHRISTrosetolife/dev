import { log } from "./log.mjs";
import { html_parse } from "./html_parse.mjs";
import { list_single } from "./list_single.mjs";
import { json_to } from "./json_to.mjs";
export function html_code_generate(input) {
  '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />';
  log({
    input,
  });
  let p = html_parse(input);
  let { children } = p;
  let c = list_single(children);
  let { attribs } = c;
  return json_to(attribs);
}
