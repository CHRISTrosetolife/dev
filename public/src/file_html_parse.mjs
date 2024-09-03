import { html_parse } from "./html_parse.mjs";
import { file_read } from "./file_read.mjs";
export async function file_html_parse(f) {
  let input_string = await file_read(f);
  let parsed = await html_parse(input_string);
  return parsed;
}
