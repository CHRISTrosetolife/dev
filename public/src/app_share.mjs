import { html_bible_verse_navigation_next } from "./html_bible_verse_navigation_next.mjs";
import { html_button_copy } from "./html_button_copy.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { firebase_initialize_axios } from "./firebase_initialize_axios.mjs";
import { each_async } from "./each_async.mjs";
import { firebase_download_bible_verse } from "./firebase_download_bible_verse.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_hash_lookup } from "./html_hash_lookup.mjs";
import { html_p_text } from "./html_p_text.mjs";
export async function app_share() {
  let body = await firebase_initialize_axios();
  let lookup = html_hash_lookup();
  let chapter = object_property_get(lookup, "c");
  let verse = object_property_get(lookup, "v");
  let bible_folders_text = object_property_get(lookup, "f");
  let bible_folders = string_split_comma(bible_folders_text);
  await each_async(bible_folders, async (bible_folder) => {
    let text = await firebase_download_bible_verse(
      bible_folder,
      chapter,
      verse,
    );
    html_p_text(body, text);
    let next = await new Promise(async (resolve) => {
      await html_bible_verse_navigation_next(
        app_fn,
        book_code,
        chapter,
        verse_number,
        (book_code, chapter, verse_number_next) =>
          resolve({
            book_code,
            chapter,
            verse_number_next,
          }),
        context,
        on_chapter_next,
      );
    });
    let verse_number_next = object_property_get(next, "verse_number_next");
    let location = object_property_get(window, "location");
    let href = object_property_get(location, "href");
    let origin = object_property_get(location, "origin");
    html_button_copy(result, text);
  });
}
