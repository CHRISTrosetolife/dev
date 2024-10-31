import { firebase_download_bible_verse_search } from "./firebase_download_bible_verse_search.mjs";
import { firebase_initialize_axios } from "./firebase_initialize_axios.mjs";
import { firebase_download_bible } from "./firebase_download_bible.mjs";
import { invoke_multiple } from "./invoke_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { html_remove } from "./html_remove.mjs";
import { clipboard_copy_web } from "./clipboard_copy_web.mjs";
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
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { object_merge } from "./object_merge.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { html_hr } from "./html_hr.mjs";
export async function app_search() {
  let root = await firebase_initialize_axios();
  html_p_text_centered(root, "enter words separated by spaces");
  let i = html_input_width_full_focus(root);
  html_button_width_full_text_click(root, "🔎 search", async () => {
    let v = html_value_get(i);
    html_clear_scroll_top(root);
    html_p_text_centered(root, v);
    let split = string_split_space(v);
    let filtered = await bible_search_results(
      split,
      word_to_results,
      tautology,
    );
    each(filtered, (f) => {
      let { chapter_code, verse_number } = f;
      let reference = bible_reference_code(chapter_code, verse_number);
      object_merge(f, {
        reference,
      });
    });
    list_sort_string(filtered, (f) => object_property_get(f, "reference"));
    html_hr(root);
    html_button_width_full_text_click(root, "expand all", expand_all);
    let on_clicks = list_map(filtered, (f) => {
      let { chapter_code, verse_number, reference } = f;
      html_hr(root);
      let result = html_div(root);
      let on_click = async () => {
        html_remove(b);
        let text = await firebase_download_bible_verse_search(
          chapter_code,
          verse_number,
        );
        html_button_width_full_text_click(result, "📋 copy", () => {
          clipboard_copy_web(text);
        });
        html_p_text_centered(result, text);
      };
      let b = html_button_width_full_text_click(root, reference, on_click);
      return on_click;
    });
    async function expand_all() {
      invoke_multiple(on_clicks);
    }
  });
  async function word_to_results(word) {
    return await firebase_download_bible(app_search_folder(), word);
  }
}
