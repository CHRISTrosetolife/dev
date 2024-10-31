import { html_style_link } from "./html_style_link.mjs";
import { html_hash_unparse } from "./html_hash_unparse.mjs";
import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
import { noop } from "./noop.mjs";
import { app_gs_bible_chapter_name } from "./app_gs_bible_chapter_name.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { app_share_bible_folders } from "./app_share_bible_folders.mjs";
import { app_share_verse } from "./app_share_verse.mjs";
import { app_share_chapter } from "./app_share_chapter.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
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
  let root = await firebase_initialize_axios();
  let context = {
    root,
  };
  let lookup = html_hash_lookup();
  let chapter = object_property_get(lookup, app_share_chapter());
  let verse = object_property_get(lookup, app_share_verse());
  let bible_folders_text = object_property_get(
    lookup,
    app_share_bible_folders(),
  );
  let bible_folders = string_split_comma(bible_folders_text);
  await each_async(bible_folders, async (bible_folder) => {
    let text = await firebase_download_bible_verse(
      bible_folder,
      chapter,
      verse,
    );
    html_p_text(root, text);
    let p = bible_chapter_name_parse(chapter);
    let book_code = object_property_get(p, "book_code");
    let chapter_code = object_property_get(p, "chapter_code");
    let next = await new Promise(async (resolve) => {
      await html_bible_verse_navigation_next(
        app_share,
        book_code,
        chapter_code,
        verse_number,
        (book_code, chapter, verse_number_next) =>
          resolve({
            book_code,
            chapter,
            verse_number_next,
          }),
        context,
        noop,
      );
    });
    let book_code_next = object_property_get(next, "book_code");
    let chapter_code_next = object_property_get(next, "chapter");
    let verse_number_next = object_property_get(next, "verse_number_next");
    let lookup_next = {};
    object_property_set(
      lookup_next,
      app_share_bible_folders(),
      bible_folders_text,
    );
    object_property_set(
      lookup_next,
      app_share_chapter(),
      app_gs_bible_chapter_name(book_code_next, chapter_code_next),
    );
    object_property_set(lookup_next, app_share_verse(), verse_number_next);
    let location = object_property_get(window, "location");
    let pathname = object_property_get(location, "pathname");
    let origin = object_property_get(location, "origin");
    let without_hash = string_combine_multiple([origin, pathname]);
    let joined = html_hash_unparse(lookup_next);
    let url_next = string_combine_multiple([without_hash, "#", joined]);
  });
  html_style_link(url_next);
  html_button_copy(result, text);
}
