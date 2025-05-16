import { list_adder_multiple_async } from "./list_adder_multiple_async.mjs";
import { each_async } from "./each_async.mjs";
import { catholic_bishops_page } from "./catholic_bishops_page.mjs";
import { list_without } from "./list_without.mjs";
import { html_parse_a_href_starts_with_hrefs } from "./html_parse_a_href_starts_with_hrefs.mjs";
import { http_iso_8859_1_cache_parse_parsed } from "./http_iso_8859_1_cache_parse_parsed.mjs";
import { file_extension_html } from "./file_extension_html.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { generate_list_fn } from "./generate_list_fn.mjs";
export async function catholic_bishops_generate() {
  await generate_list_fn(async function () {
    let page_prefix = "ll";
    let page_file_name = string_combine_multiple([
      page_prefix,
      file_extension_html(),
    ]);
    let folder = "https://www.catholic-hierarchy.org/bishop/";
    let url = string_combine_multiple([folder, page_file_name]);
    let { root } = await http_iso_8859_1_cache_parse_parsed(url);
    let pages = html_parse_a_href_starts_with_hrefs(root, page_prefix);
    pages = list_without(pages, page_file_name);
    let v2 = await list_adder_multiple_async(async function (la) {
      await each_async(pages, async function (item) {
        let page_url = string_combine_multiple([folder, item]);
        let v = await catholic_bishops_page(page_url);
        la(v);
      });
    });
    return v2;
  }, catholic_bishops_generate);
}
