import { list_unique } from "./list_unique.mjs";
import { list_map } from "./list_map.mjs";
import { log } from "./log.mjs";
import { http_storage } from "./http_storage.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { yyy8Uu_storage_path } from "./yyy8Uu_storage_path.mjs";
import { html_hr } from "./html_hr.mjs";
import { add_1 } from "./add_1.mjs";
import { html_button_width_full_text_click_next } from "./html_button_width_full_text_click_next.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { range } from "./range.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { list_get } from "./list_get.mjs";
import { list_length } from "./list_length.mjs";
import { string_split } from "./string_split.mjs";
import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
import { list_first } from "./list_first.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
export async function app_yyy8Uu() {
  html_style_default_initialize();
  let root = html_document_body();
  let file_path = yyy8Uu_storage_path("chapter_names");
  let { chapter_names } = await http_storage(file_path);
  let split = list_map(chapter_names, (c) => string_split(c, "-"));
  for (let s of split) {
    assert(equal, [list_length(s), 2]);
  }
  let book_names = list_map(split, (s) => list_first(s));
  let book_names_unique = list_unique(book_names);
  let book_numbers = list_map(book_names_unique, b => string_prefix_without(b, 'l'));
  console.log({
    book_names_unique,
  });
  await refresh_chapter(0);
  async function refresh_chapter(index) {
    html_clear_scroll_top(root);
    let file_path = yyy8Uu_storage_path(index);
    let chapter = await http_storage(file_path);
    let { english, latin } = chapter;
    let indices = range(list_length(english));
    for (let i of indices) {
      const l = list_get(latin, i);
      let latin_p = html_p_text(root, l);
      html_style_font_color(latin_p, "darkblue");
      html_p_text(root, list_get(english, i));
      html_hr(root);
    }
    let button_next = html_button_width_full_text_click_next(
      root,
      async function next_on_click() {
        await refresh_chapter(add_1(index));
      },
    );
  }
}
