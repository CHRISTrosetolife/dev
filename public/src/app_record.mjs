import { app_firebase } from "./app_firebase.mjs";
import { app_context_books_bible } from "./app_context_books_bible.mjs";
import { app_record_home } from "./app_record_home.mjs";
import { app_record_book } from "./app_record_book.mjs";
import { app_record_chapter } from "./app_record_chapter.mjs";
import { app_record_verse } from "./app_record_verse.mjs";
import { object_property_get_or } from "./object_property_get_or.mjs";
import { html_hash_lookup } from "./html_hash_lookup.mjs";
import { html_recorder_media } from "./html_recorder_media.mjs";
export async function app_record() {
  await app_firebase(on_logged_in);
  async function on_logged_in(context) {
    context.mr = await html_recorder_media();
    await app_context_books_bible(context);
    let lookup = html_hash_lookup();
    let hash_book = object_property_get_or(lookup, "book", null);
    if (hash_book !== null) {
      let hash_chapter = object_property_get_or(lookup, "chapter", null);
      if (hash_chapter !== null) {
        let hash_verse = object_property_get_or(lookup, "verse", null);
        if (hash_verse !== null) {
          await app_record_verse(context, hash_book, hash_chapter, hash_verse);
        } else {
          await app_record_chapter(context, hash_book, hash_chapter);
        }
      } else {
        app_record_book(context, hash_book);
      }
    } else {
      app_record_home(context);
    }
  }
}
