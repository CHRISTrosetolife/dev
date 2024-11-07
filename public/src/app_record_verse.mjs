import { app_save_change_bible } from "./app_save_change_bible.mjs";
import { html_bible_verse_navigation } from "./html_bible_verse_navigation.mjs";
import { html_bible_verse } from "./html_bible_verse.mjs";
import { html_style_green } from "./html_style_green.mjs";
import { equal } from "./equal.mjs";
import { bible_book_chapter_text } from "./bible_book_chapter_text.mjs";
import { app_record } from "./app_record.mjs";
import { html_hr } from "./html_hr.mjs";
import { firebase_upload_bytes } from "./firebase_upload_bytes.mjs";
import { app_record_chapter } from "./app_record_chapter.mjs";
import { app_record_chapter_buttons } from "./app_record_chapter_buttons.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { path_join } from "./path_join.mjs";
import { folder_audio_bible } from "./folder_audio_bible.mjs";
import { each } from "./each.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { date_string_iso_file } from "./date_string_iso_file.mjs";
import { html_style_display_block } from "./html_style_display_block.mjs";
import { html_style_display_none } from "./html_style_display_none.mjs";
import { html_recorder_media_start } from "./html_recorder_media_start.mjs";
import { html_recorder_media_stop } from "./html_recorder_media_stop.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { app_record_verses } from "./app_record_verses.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export async function app_record_verse(
  context,
  book_code,
  chapter,
  verse_number,
) {
  await app_save_change_bible(app_record, book_code, chapter, verse_number);
  let { root } = context;
  app_record_chapter_buttons(context, book_code);
  let chapter_text = bible_book_chapter_text(book_code, chapter);
  html_button_width_full_text_click(
    root,
    chapter_text,
    async () => await app_record_chapter(context, book_code, chapter),
  );
  html_hr(root);
  let verses = await app_record_verses(book_code, chapter);
  let verse = list_find_property(verses, "verse_number", verse_number);
  let vn = html_bible_verse(root, book_code, chapter, verse);
  html_hr(root);
  if (equal(verse_number, "1")) {
    html_style_green(vn);
  }
  let start,
    previous,
    next,
    save,
    cancel,
    restart,
    recording,
    recording_not,
    listen;
  let blob = null;
  start = html_button_width_full_text_click(root, "⏺️ start recording", () => {
    each(recording_not, html_style_display_none);
    record_start();
    each(recording, html_style_display_block);
  });
  let n = await html_bible_verse_navigation(
    app_record,
    app_record_verse,
    context,
    book_code,
    chapter,
    verse_number,
    "reading and recording audio for audio Bible",
    true,
  );
  previous = object_property_get(n, "previous");
  next = object_property_get(n, "next");
  let verse_next = object_property_get(n, "verse_next");
  listen = html_button_width_full_text_click(root, "👂 listen", () => {
    record_stop();
  });
  save = html_button_width_full_text_click(
    root,
    "💾 save recording and ➡️ next verse",
    async () => {
      each(recording, html_style_display_none);
      await record_stop();
      let when = date_string_iso_file();
      let storage_path = path_join([
        folder_audio_bible(),
        "calm",
        book_code,
        chapter,
        verse_number,
        string_combine_multiple([when, ".mp3"]),
      ]);
      await firebase_upload_bytes(storage_path, blob);
      await verse_next();
    },
  );
  restart = html_button_width_full_text_click(
    root,
    "↩️ restart recording",
    async () => {
      each(recording, html_style_display_none);
      await html_recorder_media_stop(context.mr);
      record_start();
      each(recording, html_style_display_block);
    },
  );
  cancel = html_button_width_full_text_click(
    root,
    "🚫 cancel recording",
    async () => {
      each(recording, html_style_display_none);
      await html_recorder_media_stop(context.mr);
      each(recording_not, html_style_display_block);
    },
  );
  recording = [listen, save, restart, cancel];
  recording_not = [start, previous, next];
  each(recording, html_style_display_none);
  async function record_stop() {
    if (blob === null) {
      blob = await html_recorder_media_stop(context.mr);
    }
  }
  function record_start() {
    html_recorder_media_start(context.mr);
    blob = null;
  }
}
