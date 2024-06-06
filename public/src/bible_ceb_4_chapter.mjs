import { bible_ceb_4_chapter_url } from "./bible_ceb_4_chapter_url.mjs";
import { log } from "./log.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { assert } from "./assert.mjs";
import { string_trim } from "./string_trim.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { list_adder } from "./list_adder.mjs";
import { each } from "./each.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { html_parse_visit_attribute_value_single } from "./html_parse_visit_attribute_value_single.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function bible_ceb_4_chapter(book_index, chapter_index) {
  let url_chapter = await bible_ceb_4_chapter_url(book_index, chapter_index);
  if (10) {
    log({
      url_chapter,
    });
  }
  let root_chapter = await html_cache_parse(url_chapter);
  let tb = html_parse_visit_attribute_value_single(
    root_chapter,
    "id",
    "textBody",
  );
  let p = html_parse_visit_tag_single(tb, "p");
  let verse_number = "1";
  let { children } = p;
  return list_adder((la) => {
    each(children, (c) => {
      let { type } = c;
      if (type === "text") {
        assert(null_not_is, [verse_number]);
        let { data } = c;
        data = string_trim(data);
        let tokens = string_split_space(data);
        la({
          verse_number,
          tokens,
        });
        verse_number = null;
      }
      if (type === "tag") {
        let { attribs } = c;
        if (object_property_exists(attribs, "class")) {
          let value = object_property_get(attribs, "class");
          if (value === "verse") {
            verse_number = html_parse_text(c);
            verse_number = string_trim(verse_number);
          }
        }
      }
    });
  });
}
