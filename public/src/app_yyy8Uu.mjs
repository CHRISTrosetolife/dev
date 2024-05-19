import { list_second } from "./list_second.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_map } from "./list_map.mjs";
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
import { string_combine } from "./string_combine.mjs";
import { each_index } from "./each_index.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function app_yyy8Uu() {
  html_style_default_initialize();
  let root = html_document_body();
  let file_path = yyy8Uu_storage_path("chapter_names");
  let { chapter_names } = await http_storage(file_path);
  const separator = "-";
  let split = list_map(chapter_names, (c) => string_split(c, separator));
  for (let s of split) {
    assert(equal, [list_length(s), 2]);
  }
  let book_names = list_map(split, (s) => list_first(s));
  let book_names_unique = list_unique(book_names);
  let book_numbers = list_map(book_names_unique, (b) =>
    string_prefix_without(b, "l"),
  );
  let book_labels = list_map(book_numbers, (b) => string_combine("book ", b));
  function refresh_home() {
    html_clear_scroll_top(root);
    each_index(book_labels, (b, book_index) => {
      html_button_width_full_text_click(root, b, () => {
        refresh_book(book_index);
      });
    });
  }
  refresh_home();
  function refresh_book(book_index) {
    let book_label = list_get(book_labels, book_index);
    let book_name_unique = list_get(book_names_unique, book_index);
    let filtered = list_filter(split, (s) =>
      equal(list_first(s), book_name_unique),
    );
    let chapter_names = list_map(filtered, (f) => list_second(f));
    let chapter_numbers = list_map(chapter_names, (b) =>
      string_prefix_without(b, "c"),
    );
    let chapter_labels = list_map(chapter_numbers, (b) => {
      string_combine_multiple([book_label, " chapter ", b]);
    });
  }
  async function refresh_chapter(chapter_index) {
    html_clear_scroll_top(root);
    let file_path = yyy8Uu_storage_path(chapter_index);
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
        await refresh_chapter(add_1(chapter_index));
      },
    );
  }
}
