import { http_iso_8859_1_cache } from "./http_iso_8859_1_cache.mjs";
import { file_extension_html } from "./file_extension_html.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function sandbox_4() {
  let prefix = "https://www.catholic-hierarchy.org/bishop/ll";
  let url = string_combine_multiple([prefix, file_extension_html()]);
  let html = await http_iso_8859_1_cache(url);
}
