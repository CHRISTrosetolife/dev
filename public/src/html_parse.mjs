import { html_parse_parsed } from "./html_parse_parsed.mjs";
export async function html_parse(input) {
  let root = await html_parse_parsed(input);
}
