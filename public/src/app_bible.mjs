import { app_search_folder } from "./app_search_folder.mjs";
import { firebase_download_bible } from "./firebase_download_bible.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_bible() {
  let body = html_style_default_initialize();
  let chapter_interlinear = await firebase_download_bible(
    word,
    app_search_folder(),
  );
}
