import { html_parse_text } from "./html_parse_text.mjs";
import { list_adder } from "./list_adder.mjs";
import { each } from "./each.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { error } from "./error.mjs";
import { html_parse_visit_attribute_value_single } from "./html_parse_visit_attribute_value_single.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { string_combine } from "./string_combine.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { path_join } from "./path_join.mjs";
import { list_get } from "./list_get.mjs";
import { ceb_bible_4_chapters_hrefs } from "./ceb_bible_4_chapters_hrefs.mjs";
import { bible_ceb_4_hrefs_books } from "./bible_ceb_4_hrefs_books.mjs";
import { bible_ceb_4_url_base } from "./bible_ceb_4_url_base.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function bible_ceb_4_chapter(book_index, chapter_index) {
  let url_base = bible_ceb_4_url_base();
  let book_hrefs = await bible_ceb_4_hrefs_books(url_base);
  let hrefs_chapters = await ceb_bible_4_chapters_hrefs(book_hrefs, book_index);
  let href_chapter = list_get(hrefs_chapters, chapter_index);
  let href_book = list_get(book_hrefs, book_index);
  let url_chapter = path_join([path_dirname(href_book), href_chapter]);
  url_chapter = string_combine(url_base, url_chapter);
  let root_chapter = await html_cache_parse(url_chapter);
  let tb = html_parse_visit_attribute_value_single(
    root_chapter,
    "id",
    "textBody",
  );
  let p = html_parse_visit_tag_single(tb, "p");
  let verse_number = "1";
  let { children } = p;
  list_adder((la) => {
    each(children, (c) => {
      let { type } = c;
      if (type === "text") {
        let { data } = c;
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
          }
        }
      }
    });
  });
  error();
}
