import { list_join_space } from "./list_join_space.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { firebase_download } from "./firebase_download.mjs";
import { app_search_bible_folder } from "./app_search_bible_folder.mjs";
import { bible_verses_upload_path } from "./bible_verses_upload_path.mjs";
import { bible_reference_code } from "./bible_reference_code.mjs";
export async function firebase_download_bible_verse_search(
  chapter_code,
  verse_number,
) {
  let bible_folder = app_search_bible_folder();
  let reference = bible_reference_code(chapter_code, verse_number);
  let storage_path = bible_verses_upload_path(
    bible_folder,
    chapter_code,
    verse_number,
  );
  let { tokens } = await firebase_download(storage_path);
  let text = string_combine_multiple([reference, " ", list_join_space(tokens)]);
  return text;
}
