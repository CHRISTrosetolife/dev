import { html_script_axios } from "./html_script_axios.mjs";
import { firebase_initialize } from "./firebase_initialize.mjs";
import { log } from "./log.mjs";
import { app_search_folder } from "./app_search_folder.mjs";
import { bible_storage_path_file_version } from "./bible_storage_path_file_version.mjs";
import { firebase_download } from "./firebase_download.mjs";
import { bible_search_results } from "./bible_search_results.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { tautology } from "./tautology.mjs";
export async function app_search() {
  await html_script_axios(root);
  firebase_initialize();
  let body = html_style_default_initialize();
  let filtered = await bible_search_results(
    ["micah"],
    word_to_results,
    tautology,
  );
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
