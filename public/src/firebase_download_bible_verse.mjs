import { list_join_space } from "./list_join_space.mjs";
import { firebase_download } from "./firebase_download.mjs";
import { bible_verses_upload_path } from "./bible_verses_upload_path.mjs";
import { bible_reference_code } from "./bible_reference_code.mjs";
export async function firebase_download_bible_verse(
  bible_folder,
  chapter_code,
  verse_number,
) {
  let reference = bible_reference_code(chapter_code, verse_number);
  let storage_path = bible_verses_upload_path(
    bible_folder,
    chapter_code,
    verse_number,
  );
  let { tokens } = await firebase_download(storage_path);
  let joined = list_join_space(tokens);
  return joined;
}
