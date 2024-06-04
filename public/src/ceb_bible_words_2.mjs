import { html_parse_href } from "./html_parse_href.mjs";
import { html_parse_visit_tag } from "./html_parse_visit_tag.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_count_words } from "./string_count_words.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
import { list_adder } from "./list_adder.mjs";
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
  let root = await html_cache_parse(url);
  let hrefs = list_adder((la) =>
    html_parse_visit_tag(root, "a", (v) => {
      let { node } = v;
      let href = html_parse_href(node);
      if (condition(href)) {
        la(href);
      }
    }),
  );
  function condition(href) {
    return string_ends_with(href, ".html");
  }
  hrefs = list_map(hrefs, (href) => string_combine(url_base, href));
  await each_async(hrefs, async (href) => {
    await html_cache_parse(href);
  });
  return hrefs;
  let mapped = string_count_words(text_split);
  return mapped;
}
