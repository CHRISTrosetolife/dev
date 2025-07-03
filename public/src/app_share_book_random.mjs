import { list_take_bible_books_new_context_random_vc } from "./list_take_bible_books_new_context_random_vc.mjs";
import { app_share_verse } from "./app_share_verse.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_share_chapter } from "./app_share_chapter.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { html_hash_lookup } from "./html_hash_lookup.mjs";
export function app_share_book_random(context) {
  let lookup = html_hash_lookup();
  let { book_code, chapter_code, verse_number_next } =
    list_take_bible_books_new_context_random_vc(context);
  object_property_set(
    lookup,
    app_share_chapter(),
    string_combine_multiple([book_code, chapter_code]),
  );
  object_property_set(lookup, app_share_verse(), verse_number_next);
  let v = {
    lookup,
    book_code,
    chapter_code,
    verse_number_next,
  };
  return v;
}
