import { app_save_get } from "./app_save_get.mjs";
import { app_context_books_bible } from "./app_context_books_bible.mjs";
import { app_bible_verse } from "./app_bible_verse.mjs";
import { html_style_a_plain } from "./html_style_a_plain.mjs";
import { firebase_initialize_axios } from "./firebase_initialize_axios.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export async function app_bible() {
  let root = await firebase_initialize_axios();
  html_style_a_plain();
  let chapter = "1";
  let verse_number = "1";
  let context = {
    root,
  };
  await app_context_books_bible(context);
  let save = app_save_get(app_bible);
  let book_code = object_property_initialize(save, "book", "MAT");
  await app_bible_verse(context, book_code, chapter, verse_number);
}
