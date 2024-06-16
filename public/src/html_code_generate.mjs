import { log } from "./log.mjs";
import { html_parse } from "./html_parse.mjs";
export function html_code_generate(input) {
  log({
    input,
  });
  let p = html_parse(input);
  log("here");
  return p;
}
