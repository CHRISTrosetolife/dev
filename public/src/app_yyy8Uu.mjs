import { html_button } from "./html_button.mjs";
import { http_storage_get } from "./http_storage_get.mjs";
import { html_button_home } from "./html_button_home.mjs";
import { html_script_axios } from "./html_script_axios.mjs";
import { list_size } from "./list_size.mjs";
import { html_spacer_vertical_2 } from "./html_spacer_vertical_2.mjs";
import { list_second } from "./list_second.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_map } from "./list_map.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { yyy8Uu_storage_path } from "./yyy8Uu_storage_path.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { range } from "./range.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { list_get } from "./list_get.mjs";
import { string_split } from "./string_split.mjs";
import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
import { list_first } from "./list_first.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_combine } from "./string_combine.mjs";
import { each_index } from "./each_index.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_index } from "./list_index.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { html_buttons_next_previous_hr_none } from "./html_buttons_next_previous_hr_none.mjs";
export async function app_yyy8Uu() {
  let root = html_style_default_initialize();
  await html_script_axios(root);
  let file_path = yyy8Uu_storage_path("chapter_names");
  let { chapter_names } = await http_storage_get(file_path);
  let index_last = list_index_last(chapter_names);
  let separator = "-";
  let split = list_map(chapter_names, (c) => string_split(c, separator));
  for (let s of split) {
    assert(equal, [list_size(s), 2]);
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
      html_button(root, b, () => {
        refresh_book(book_index);
      });
    });
  }
  refresh_home();
  function refresh_book(book_index) {
    html_clear_scroll_top(root);
    button_home();
    html_hr(root);
    let book_label = list_get(book_labels, book_index);
    let book_name_unique = list_get(book_names_unique, book_index);
    let filtered = list_filter(split, (s) =>
      equal(list_first(s), book_name_unique),
    );
    let chapter_names = list_map(filtered, (f) => list_second(f));
    let chapter_numbers = list_map(chapter_names, (b) =>
      string_prefix_without(b, "c"),
    );
    let chapter_labels = list_map(chapter_numbers, (b) =>
      string_combine_multiple([book_label, " chapter ", b]),
    );
    each_index(chapter_labels, (c, chapter_book_index) => {
      html_button(root, c, () => {
        let chapter_index = list_index(
          split,
          list_get(filtered, chapter_book_index),
        );
        refresh_chapter(chapter_index);
      });
    });
  }
  function button_home() {
    html_button_home(root, refresh_home);
  }
  let show_latin = true;
  async function refresh_chapter(chapter_index) {
    html_clear_scroll_top(root);
    buttons_navigation();
    html_hr(root);
    html_button(
      root,
      (show_latin ? "hide" : "show") + " latin",
      async function on_click() {
        show_latin = !show_latin;
        await refresh_chapter(chapter_index);
      },
    );
    let file_path = yyy8Uu_storage_path(chapter_index);
    let chapter = await http_storage_get(file_path);
    let { english, latin } = chapter;
    let indices = range(list_size(english));
    for (let i of indices) {
      let l = list_get(latin, i);
      if (show_latin) {
        let latin_p = html_p_text(root, l);
        html_style_font_color(latin_p, "darkblue");
      }
      html_p_text(root, list_get(english, i));
      if (show_latin) {
        html_hr(root);
      }
    }
    if (!show_latin) {
      html_hr(root);
    }
    buttons_navigation();
    function buttons_navigation() {
      button_home();
      html_spacer_vertical_2(root);
      html_buttons_next_previous_hr_none(
        root,
        refresh_chapter,
        chapter_index,
        index_last,
      );
    }
  }
}
