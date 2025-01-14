import { html_hash_set } from "./html_hash_set.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_hash_unparse } from "./html_hash_unparse.mjs";
import { app_share_bible_folders } from "./app_share_bible_folders.mjs";
import { each } from "./each.mjs";
import { list_take_bible_books_new } from "./list_take_bible_books_new.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { app_share_verse_refresh } from "./app_share_verse_refresh.mjs";
import { app_context_books_bible } from "./app_context_books_bible.mjs";
import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
import { app_share_verse } from "./app_share_verse.mjs";
import { app_share_chapter } from "./app_share_chapter.mjs";
import { firebase_initialize_axios } from "./firebase_initialize_axios.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_hash_lookup } from "./html_hash_lookup.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export async function app_share() {
  let root = await firebase_initialize_axios();
  let context = {
    root,
  };
  object_property_set(context, "version_code", "engbsb");
  await app_context_books_bible(context);
  let lookup = html_hash_lookup();
  if (object_property_exists_not(lookup, app_share_chapter())) {
    let books_new = list_take_bible_books_new(
      object_property_get(context, "books"),
    );
    let folders = [
      {
        text: "English",
        code: "engbsb",
      },
      {
        text: "Urdu and English",
        code: "urdgvu+engbsb",
      },
    ];
    each(folders, (folder) => {
      html_button_width_full_text_click(
        root,
        object_property_get(folder, "text"),
        () => {
          let f = object_property_get(folder, "code");
          object_property_set(lookup, app_share_bible_folders(), f);
          let joined = html_hash_unparse(lookup);
          let h = string_combine_multiple(["#", joined]);
          html_hash_set(h);
        },
      );
    });
    return;
  }
  let chapter_next = object_property_get(lookup, app_share_chapter());
  let verse_number_next;
  verse_number_next = object_property_get(lookup, app_share_verse());
  let p = bible_chapter_name_parse(chapter_next);
  let book_code = object_property_get(p, "book_code");
  let chapter_code = object_property_get(p, "chapter_code");
  await app_share_verse_refresh(
    context,
    book_code,
    chapter_code,
    verse_number_next,
  );
}
