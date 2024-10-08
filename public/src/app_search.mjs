import { list_map } from "./list_map.mjs";
import { html_style_hidden } from "./html_style_hidden.mjs";
import { html_div } from "./html_div.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { bible_reference_code } from "./bible_reference_code.mjs";
import { app_search_bible_folder } from "./app_search_bible_folder.mjs";
import { bible_verses_upload_path } from "./bible_verses_upload_path.mjs";
import { each } from "./each.mjs";
import { html_input_width_full_focus } from "./html_input_width_full_focus.mjs";
import { html_script_axios } from "./html_script_axios.mjs";
import { firebase_initialize } from "./firebase_initialize.mjs";
import { app_search_folder } from "./app_search_folder.mjs";
import { bible_storage_path_file_version } from "./bible_storage_path_file_version.mjs";
import { firebase_download } from "./firebase_download.mjs";
import { bible_search_results } from "./bible_search_results.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { tautology } from "./tautology.mjs";
import { html_p_text_centered } from "./html_p_text_centered.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { object_merge } from "./object_merge.mjs";
export async function app_search() {
  let root = html_style_default_initialize();
  await html_script_axios(root);
  firebase_initialize();
  html_p_text_centered(root, "enter words separated by spaces");
  let i = html_input_width_full_focus(root);
  html_button_width_full_text_click(root, "🔎 search", async () => {
    let v = html_value_get(i);
    html_clear_scroll_top(root);
    let split = string_split_space(v);
    let filtered = await bible_search_results(
      split,
      word_to_results,
      tautology,
    );
    list_map(filtered, () => {
      let { chapter_code, verse_number } = f;
      let reference = bible_reference_code(chapter_code, verse_number);
      object_merge(f, {
        reference,
      });
    });
    each(filtered, (f) => {
      let { chapter_code, verse_number } = f;
      let r = bible_reference_code(chapter_code, verse_number);
      let result = html_div(root);
      let b = html_button_width_full_text_click(root, r, async () => {
        html_style_hidden(b);
        let storage_path = bible_verses_upload_path(
          app_search_bible_folder(),
          chapter_code,
          verse_number,
        );
        let { tokens } = await firebase_download(storage_path);
        html_p_text_centered(
          result,
          string_combine_multiple([r, " ", list_join_space(tokens)]),
        );
      });
    });
  });
  async function word_to_results(word) {
    let destination = bible_storage_path_file_version(
      word,
      app_search_folder(),
    );
    return await firebase_download(destination);
  }
}
