import { app_record_version_code } from "./app_record_version_code.mjs";
import { app_context_books_bible_generic } from "./app_context_books_bible_generic.mjs";
import { app_save_get } from "./app_save_get.mjs";
import { html_style_a_plain } from "./html_style_a_plain.mjs";
import { app_firebase } from "./app_firebase.mjs";
import { app_record_home } from "./app_record_home.mjs";
import { app_record_book } from "./app_record_book.mjs";
import { app_record_chapter } from "./app_record_chapter.mjs";
import { app_record_verse } from "./app_record_verse.mjs";
import { object_property_get_or } from "./object_property_get_or.mjs";
import { html_hash_lookup } from "./html_hash_lookup.mjs";
import { html_recorder_media } from "./html_recorder_media.mjs";
import { object_merge } from "./object_merge.mjs";
export async function app_record() {
  await app_firebase({
    on_logged_in,
    on_initialized: html_style_a_plain,
  });
  async function on_logged_in(context) {
    context.mr = await html_recorder_media();
    let version_code = app_record_version_code();
    await app_context_books_bible_generic(context, version_code);
    let lookup = html_hash_lookup();
    let save = app_save_get(app_record);
    object_merge(lookup, save);
    let hash_book = object_property_get_or(lookup, "book", null);
    if (hash_book !== null) {
      let hash_chapter = object_property_get_or(lookup, "chapter", null);
      if (hash_chapter !== null) {
        let hash_verse = object_property_get_or(lookup, "verse", null);
        if (hash_verse !== null) {
          await app_record_verse(context, hash_book, hash_chapter, hash_verse);
        } else {
          await app_record_chapter(
            context,
            hash_book,
            hash_chapter,
            app_record_verse,
          );
        }
      } else {
        await app_record_book(context, hash_book);
      }
    } else {
      await app_record_home(context);
    }
  }
}
