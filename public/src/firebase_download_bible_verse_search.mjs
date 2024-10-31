import { firebase_download_bible_verse } from "./firebase_download_bible_verse.mjs";
import { app_search_bible_folder } from "./app_search_bible_folder.mjs";
export async function firebase_download_bible_verse_search(
  chapter_code,
  verse_number,
) {
  let bible_folder = app_search_bible_folder();
  return await firebase_download_bible_verse(
    chapter_code,
    verse_number,
    bible_folder,
  );
}
