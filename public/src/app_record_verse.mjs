import { firebase_upload_bytes } from "./firebase_upload_bytes.mjs";
import { list_next } from "./list_next.mjs";
import { list_previous } from "./list_previous.mjs";
import { app_record_chapter } from "./app_record_chapter.mjs";
import { app_record_chapter_buttons } from "./app_record_chapter_buttons.mjs";
import { bible_book_name } from "./bible_book_name.mjs";
import { bible_reference } from "./bible_reference.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_find_property_or } from "./list_find_property_or.mjs";
import { path_join } from "./path_join.mjs";
import { list_last_is } from "./list_last_is.mjs";
import { folder_audio_bible } from "./folder_audio_bible.mjs";
import { each } from "./each.mjs";
import { list_find_property_next_property } from "./list_find_property_next_property.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { date_string_iso_file } from "./date_string_iso_file.mjs";
import { html_style_display_block } from "./html_style_display_block.mjs";
import { html_style_display_none } from "./html_style_display_none.mjs";
import { html_recorder_media_start } from "./html_recorder_media_start.mjs";
import { html_recorder_media_stop } from "./html_recorder_media_stop.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { app_record_verses } from "./app_record_verses.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { list_first } from "./list_first.mjs";
export async function app_record_verse(
  context,
  book_code,
  chapter,
  verse_number,
) {
  let { root } = context;
  app_record_chapter_buttons(context, book_code);
  html_button_width_full_text_click(
    root,
    string_combine_multiple([
      "📖 chapter ",
      bible_book_name(book_code),
      " ",
      chapter,
    ]),
    async () => await app_record_chapter(context, book_code, chapter),
  );
  let verses = await app_record_verses(book_code, chapter);
  let verse = list_find_property(verses, "verse_number", verse_number);
  let { tokens } = verse;
  let vn = html_span_text(
    root,
    bible_reference(bible_book_name(book_code), chapter, verse_number),
  );
  html_style_bold(vn);
  html_span_text(root, " ");
  html_span_text(root, list_join_space(tokens));
  let start, previous, save, cancel, restart, recording, recording_not;
  start = html_button_width_full_text_click(root, "⏺️ start recording", () => {
    each(recording_not, html_style_display_none);
    html_recorder_media_start(context.mr);
    each(recording, html_style_display_block);
  });
  previous = html_button_width_full_text_click(
    root,
    "⬅️ previous verse",
    async () => {
      let verse_previous = list_previous(verses, verse);
      await app_record_verse(
        context,
        book_code,
        chapter,
        object_property_get(verse_previous, "verse_number"),
      );
    },
  );
  save = html_button_width_full_text_click(
    root,
    "💾 save recording and ➡️ next verse",
    async () => {
      each(recording, html_style_display_none);
      let blob = await html_recorder_media_stop(context.mr);
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
      if (list_last_is(verses, verse)) {
        await chapter_next();
      } else {
        let verse_number_next = list_find_property_next_property(
          verses,
          "verse_number",
          verse_number,
        );
        await app_record_verse(context, book_code, chapter, verse_number_next);
      }
    },
  );
  restart = html_button_width_full_text_click(
    root,
    "↩️ restart recording",
    async () => {
      each(recording, html_style_display_none);
      await html_recorder_media_stop(context.mr);
      html_recorder_media_start(context.mr);
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
  recording = [save, restart, cancel];
  recording_not = [start, previous];
  each(recording, html_style_display_none);
  async function chapter_next() {
    let { books } = context;
    let book = list_find_property_or(books, "book_code", book_code);
    let { chapters } = book;
    let chapter_next, book_next;
    if (list_last_is(chapters, chapter)) {
      if (list_last_is(books, book)) {
        book_next = list_first(books);
      } else {
        book_next = list_next(books, book);
      }
      let { chapters } = book_next;
      chapter_next = list_first(chapters);
    } else {
      book_next = book_code;
      chapter_next = list_next(chapters, chapter);
    }
    let verses_next = await app_record_verses(book_code, chapter_next);
    await app_record_verse(
      context,
      book_next,
      chapter_next,
      object_property_get(list_first(verses_next), "verse_number"),
    );
  }
}
