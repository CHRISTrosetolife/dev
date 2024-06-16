import { log } from "./log.mjs";
import { html_parse } from "./html_parse.mjs";
import { object_properties } from "./object_properties.mjs";
export function html_code_generate(input) {
  log({
    input,
  });
  let p = html_parse(input);
  return object_properties(p);
}
