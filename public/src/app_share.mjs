import { app_share_main } from "./app_share_main.mjs";
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
export async function app_share() {
  let root = await firebase_initialize_axios();
  let context = {
    root,
  };
  object_property_set(context, "version_code", "engbsb");
  await app_context_books_bible(context);
  let lookup = html_hash_lookup();
  if (object_property_exists_not(lookup, app_share_chapter())) {
    app_share_main(context);
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
    introduce,
  );
}
