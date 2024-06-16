import { log } from "./log.mjs";
import { html_parse } from "./html_parse.mjs";
import { list_size } from "./list_size.mjs";
export function html_code_generate(input) {
  '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />';
  log({
    input,
  });
  let p = html_parse(input);
  let { children } = p;
  return list_size(children);
}
