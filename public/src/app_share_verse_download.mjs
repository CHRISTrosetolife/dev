import { firebase_download_bible_verse } from "./firebase_download_bible_verse.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function app_share_verse_download(
  bible_folders,
  chapter,
  verse_number,
  texts,
) {
  let result = await list_map_async(bible_folders, async (bible_folder) => {
    let text = await firebase_download_bible_verse(
      bible_folder,
      chapter,
      verse_number,
    );
    return text;
  });
  list_add_multiple(texts, result);
}
