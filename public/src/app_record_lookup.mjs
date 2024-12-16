import { object_property_get } from "./object_property_get.mjs";
import { app_record_home } from "./app_record_home.mjs";
import { app_record_book } from "./app_record_book.mjs";
import { app_record_chapter } from "./app_record_chapter.mjs";
import { object_property_get_or } from "./object_property_get_or.mjs";
import { object_merge } from "./object_merge.mjs";
import { app_save_get } from "./app_save_get.mjs";
import { html_hash_lookup } from "./html_hash_lookup.mjs";
import { app_context_books_bible_generic } from "./app_context_books_bible_generic.mjs";
export async function app_record_lookup(context, app_lambda, app_verse_lambda) {
  await app_context_books_bible_generic(
    context,
    object_property_get(context, "version_code"),
  );
  let lookup = html_hash_lookup();
  let save = app_save_get(app_lambda);
  object_merge(lookup, save);
  let hash_book = object_property_get_or(lookup, "book", null);
  if (hash_book !== null) {
    let hash_chapter = object_property_get_or(lookup, "chapter", null);
    if (hash_chapter !== null) {
      let hash_verse = object_property_get_or(lookup, "verse", null);
      if (hash_verse !== null) {
        await app_verse_lambda(context, hash_book, hash_chapter, hash_verse);
      } else {
        await app_record_chapter(
          context,
          hash_book,
          hash_chapter,
          app_verse_lambda,
        );
      }
    } else {
      await app_record_book(context, hash_book, app_verse_lambda);
    }
  } else {
    await app_record_home(context, app_verse_lambda);
  }
}
