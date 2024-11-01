import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { firebase_download_bible_verse } from "./firebase_download_bible_verse.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { html_clear } from "./html_clear.mjs";
export async function app_share_verse_download(
  bible_folders,
  chapter,
  verse_number,
  texts,
  verses_component,
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
  html_clear(verses_component);
  html_p_text_multiple(verses_component, texts);
}
