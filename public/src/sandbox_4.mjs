import { catholic_bishops_page } from "./catholic_bishops_page.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { html_parse_a_href_starts_with_hrefs } from "./html_parse_a_href_starts_with_hrefs.mjs";
import { http_iso_8859_1_cache_parse_parsed } from "./http_iso_8859_1_cache_parse_parsed.mjs";
import { file_extension_html } from "./file_extension_html.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function sandbox_4() {
  let page_prefix = "ll";
  let folder = "https://www.catholic-hierarchy.org/bishop/";
  let url = string_combine_multiple([
    folder,
    page_prefix,
    file_extension_html(),
  ]);
  let { root } = await http_iso_8859_1_cache_parse_parsed(url);
  let pages = html_parse_a_href_starts_with_hrefs(root, page_prefix);
  let result = await list_map_async(pages, async function (item) {
    let page_url = string_combine_multiple([folder, item]);
    let v = await catholic_bishops_page(page_url);
    return v;
  });
  return result;
}
