import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { html_input_width_full_focus } from "./html_input_width_full_focus.mjs";
import { html_script_axios } from "./html_script_axios.mjs";
import { firebase_initialize } from "./firebase_initialize.mjs";
import { log } from "./log.mjs";
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
export async function app_search() {
  let root = html_style_default_initialize();
  await html_script_axios(root);
  firebase_initialize();
  html_p_text_centered(root, "enter words separated by spaces");
  let i = html_input_width_full_focus(root);
  html_button_width_full_text_click(root, "search", async () => {
    let v = html_value_get(i);
    let split = string_split_space(v);
    let f = list_filter(split, string_empty_not_is);
    let filtered = await bible_search_results(f, word_to_results, tautology);
  });
  async function word_to_results(word) {
    let destination = bible_storage_path_file_version(
      word,
      app_search_folder(),
    );
    return await firebase_download(destination);
  }
  log({
    filtered,
  });
}
