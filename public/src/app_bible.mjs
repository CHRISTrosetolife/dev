import { app_record_generic } from "./app_record_generic.mjs";
import { log } from "./log.mjs";
import { app_save_set } from "./app_save_set.mjs";
import { app_save_get } from "./app_save_get.mjs";
import { app_context_books_bible } from "./app_context_books_bible.mjs";
import { app_bible_verse } from "./app_bible_verse.mjs";
import { html_style_a_plain } from "./html_style_a_plain.mjs";
import { firebase_initialize_axios } from "./firebase_initialize_axios.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { object_merge } from "./object_merge.mjs";
export async function app_bible() {
  await app_record_generic("engbsb", app_bible, app_bible_verse);
  return;
  let root = await firebase_initialize_axios();
  html_style_a_plain();
  let context = {
    root,
  };
  await app_context_books_bible(context);
  let save = app_save_get(app_bible);
  log({
    save,
  });
  object_merge(save, {
    verse_number: "25",
  });
  let book_code = object_property_initialize(save, "book", "MAT");
  let chapter = object_property_initialize(save, "chapter", "1");
  let verse_number = object_property_initialize(save, "verse", "1");
  app_save_set(app_bible, save);
  await app_bible_verse(context, book_code, chapter, verse_number);
}
