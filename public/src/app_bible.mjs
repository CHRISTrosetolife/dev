import { list_first } from "./list_first.mjs";
import { firebase_initialize_axios } from "./firebase_initialize_axios.mjs";
import { log } from "./log.mjs";
import { bible_storage_interlinear_book_path } from "./bible_storage_interlinear_book_path.mjs";
import { firebase_download_bible } from "./firebase_download_bible.mjs";
export async function app_bible() {
  let root = await firebase_initialize_axios();
  let chapter_interlinear = await firebase_download_bible(
    bible_storage_interlinear_book_path("Matthew"),
    "1",
  );
  let { verses } = chapter_interlinear;
  let verse_interlinear = list_first(chapter_interlinear);
  log({
    verse_interlinear,
  });
}
