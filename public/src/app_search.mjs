import { app_share_verse } from "./app_share_verse.mjs";
import { html_hash_unparse } from "./html_hash_unparse.mjs";
import { html_style_flex_row_centered } from "./html_style_flex_row_centered.mjs";
import { window_open } from "./window_open.mjs";
import { invoke_once } from "./invoke_once.mjs";
import { html_style_a_plain } from "./html_style_a_plain.mjs";
import { app_share_chapter } from "./app_share_chapter.mjs";
import { emoji_book } from "./emoji_book.mjs";
import { html_button } from "./html_button.mjs";
import { list_sort_string_map } from "./list_sort_string_map.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_copy } from "./html_button_copy.mjs";
import { firebase_download_bible_verse_search } from "./firebase_download_bible_verse_search.mjs";
import { firebase_initialize_axios } from "./firebase_initialize_axios.mjs";
import { firebase_download_bible } from "./firebase_download_bible.mjs";
import { invoke_multiple } from "./invoke_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { html_remove } from "./html_remove.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_div } from "./html_div.mjs";
import { bible_reference_code } from "./bible_reference_code.mjs";
import { each } from "./each.mjs";
import { html_input_width_full_focus } from "./html_input_width_full_focus.mjs";
import { app_search_folder } from "./app_search_folder.mjs";
import { bible_search_results } from "./bible_search_results.mjs";
import { tautology } from "./tautology.mjs";
import { html_p_text_centered } from "./html_p_text_centered.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { object_merge } from "./object_merge.mjs";
import { html_hr } from "./html_hr.mjs";
export async function app_search() {
  let root = await firebase_initialize_axios();
  html_style_a_plain();
  html_p_text_centered(root, "enter words separated by spaces");
  let i = html_input_width_full_focus(root);
  html_button(root, "🔎 search", async function () {
    let v = html_value_get(i);
    html_clear_scroll_top(root);
    html_p_text_centered(root, v);
    let split = string_split_space(v);
    let filtered = await bible_search_results(
      split,
      word_to_results,
      tautology,
    );
    each(filtered, function (f) {
      let { chapter_code, verse_number } = f;
      let reference = bible_reference_code(chapter_code, [verse_number]);
      object_merge(f, {
        reference,
      });
    });
    list_sort_string_map(filtered, function (f) {
      let v2 = object_property_get(f, "reference");
      return v2;
    });
    html_hr(root);
    html_button(root, "expand all", expand_all);
    let on_clicks = list_map(filtered, function (f) {
      let { chapter_code, verse_number, reference } = f;
      html_hr(root);
      let search_result_component = html_div(root);
      let on_click = invoke_once(async function () {
        html_remove(b);
        let joined = await firebase_download_bible_verse_search(
          chapter_code,
          verse_number,
        );
        let text = string_combine_multiple([reference, " ", joined]);
        let row = html_div(search_result_component);
        html_style_flex_row_centered(row);
        html_button(
          row,
          string_combine_multiple([emoji_book(), " open chapter"]),
          function () {
            window_open(
              string_combine_multiple([
                "chapter.html#",
                html_hash_unparse({
                  [app_share_chapter()]: chapter_code,
                  [app_share_verse()]: verse_number,
                }),
              ]),
            );
          },
        );
        html_button_copy(row, text);
        html_p_text_centered(search_result_component, text);
      });
      let b = html_button(root, reference, on_click);
      return on_click;
    });
    async function expand_all() {
      invoke_multiple(on_clicks);
    }
  });
  async function word_to_results(word) {
    let v3 = await firebase_download_bible(app_search_folder(), word);
    return v3;
  }
}
