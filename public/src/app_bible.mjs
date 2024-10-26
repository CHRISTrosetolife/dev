import { log } from "./log.mjs";
import { bible_storage_interlinear_book_path } from "./bible_storage_interlinear_book_path.mjs";
import { firebase_download_bible } from "./firebase_download_bible.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_bible() {
  let body = html_style_default_initialize();
  let chapter_interlinear = await firebase_download_bible(
    bible_storage_interlinear_book_path("Matthew"),
    "1",
  );
  log({
    chapter_interlinear,
  });
}
