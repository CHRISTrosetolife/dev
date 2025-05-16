import { http_iso_8859_1_cache_parse_parsed } from "./http_iso_8859_1_cache_parse_parsed.mjs";
import { file_extension_html } from "./file_extension_html.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function sandbox_4() {
  let prefix = string_combine_multiple([
    "https://www.catholic-hierarchy.org/bishop/",
    "ll",
  ]);
  let url = string_combine_multiple([prefix, file_extension_html()]);
  let p = await http_iso_8859_1_cache_parse_parsed(url);
}
