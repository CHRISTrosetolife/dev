import { list_unique } from "./list_unique.mjs";
import { list_without } from "./list_without.mjs";
import { html_parse_a_href_starts_with_hrefs } from "./html_parse_a_href_starts_with_hrefs.mjs";
import { http_iso_8859_1_cache_parse_parsed } from "./http_iso_8859_1_cache_parse_parsed.mjs";
import { catholic_bishops_generate_folder } from "./catholic_bishops_generate_folder.mjs";
import { file_extension_html } from "./file_extension_html.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function catholic_bishops_generate_pages() {
  let page_prefix = "ll";
  let page_file_name = string_combine_multiple([
    page_prefix,
    file_extension_html(),
  ]);
  let folder = catholic_bishops_generate_folder();
  let url = string_combine_multiple([folder, page_file_name]);
  let { root } = await http_iso_8859_1_cache_parse_parsed(url);
  let pages = html_parse_a_href_starts_with_hrefs(root, page_prefix);
  pages = list_without(pages, page_file_name);
  pages = list_unique(pages);
  return pages;
}
