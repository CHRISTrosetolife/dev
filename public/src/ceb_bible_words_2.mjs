import { html_parse_visit_attribute_value_single } from "./html_parse_visit_attribute_value_single.mjs";
import { error } from "./error.mjs";
import { each } from "./each.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { log } from "./log.mjs";
import { html_parse_a_hrefs } from "./html_parse_a_hrefs.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_count_words } from "./string_count_words.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
import { each_async } from "./each_async.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_map } from "./list_map.mjs";
export async function ceb_bible_words_2() {
  let url_base = string_combine_multiple([
    url_secure_w3(),
    "talibon.com/bible/",
  ]);
  let url = string_combine_multiple([url_base, "bible.html"]);
  let root_bible = await html_cache_parse(url);
  let book_hrefs = html_parse_a_hrefs(root_bible, function condition(href) {
    return string_ends_with(href, ".html");
  });
  book_hrefs = list_map(book_hrefs, (href) => string_combine(url_base, href));
  await each_async(book_hrefs, async (href) => {
    log({
      href,
    });
    let root = await html_cache_parse(href);
    let body = html_parse_visit_tag_single(root, "body");
    let { children } = body;
    each(children, (c) => {
      if (c.type === "tag") {
        if (c.name === "center") {
          let { children: children_c } = c;
          let attribute_name = "size";
          let attribute_value = "+2";
          let l = html_parse_visit_attribute_value_single(
            c,
            attribute_name,
            attribute_value,
          );
        }
      }
    });
    error();
  });
  return;
  let mapped = string_count_words(text_split);
  return mapped;
}
