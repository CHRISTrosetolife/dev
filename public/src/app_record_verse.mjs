import { html_bible_verse_number } from "./html_bible_verse_number.mjs";
import { html_button_next_text } from "./html_button_next_text.mjs";
import { clipboard_copy_web } from "./clipboard_copy_web.mjs";
import { bible_search_symbols_map_single } from "./bible_search_symbols_map_single.mjs";
import { html_style_green } from "./html_style_green.mjs";
import { equal } from "./equal.mjs";
import { bible_book_chapter_text } from "./bible_book_chapter_text.mjs";
import { object_replace } from "./object_replace.mjs";
import { app_record } from "./app_record.mjs";
import { app_save_change } from "./app_save_change.mjs";
import { html_hr } from "./html_hr.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_single } from "./list_single.mjs";
import { html_a } from "./html_a.mjs";
import { html_spacer } from "./html_spacer.mjs";
import { firebase_upload_bytes } from "./firebase_upload_bytes.mjs";
import { list_next } from "./list_next.mjs";
import { list_previous } from "./list_previous.mjs";
import { app_record_chapter } from "./app_record_chapter.mjs";
import { app_record_chapter_buttons } from "./app_record_chapter_buttons.mjs";
import { object_property_get } from "./object_property_get.mjs";
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
import { list_find_property } from "./list_find_property.mjs";
import { app_record_verses } from "./app_record_verses.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { list_first } from "./list_first.mjs";
import { google_search_url } from "./google_search_url.mjs";
export async function app_record_verse(
  context,
  book_code,
  chapter,
  verse_number,
) {
  await app_save_change(app_record, (save) =>
    object_replace(save, {
      book: book_code,
      chapter,
      verse: verse_number,
    }),
  );
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
  let { tokens } = verse;
  let vn = html_bible_verse_number(root, book_code, chapter, verse_number);
  if (equal(verse_number, "1")) {
    html_style_green(vn);
  }
  each(tokens, (token) => {
    html_spacer(root);
    let mapped = bible_search_symbols_map_single(token);
    if (list_empty_not_is(mapped)) {
      html_a(
        root,
        token,
        google_search_url(
          string_combine_multiple(["define: ", list_single(mapped)]),
        ),
      );
    }
  });
  html_hr(root);
  let start, previous, next, save, cancel, restart, recording, recording_not;
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
  next = html_button_width_full_text_click(
    root,
    string_combine_multiple([html_button_next_text(), " verse"]),
    verse_next_go,
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
      await verse_next_go();
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
  recording_not = [start, previous, next];
  each(recording, html_style_display_none);
  async function verse_next_go() {
    if (list_last_is(verses, verse)) {
      await chapter_next_go();
    } else {
      let verse_number_next = list_find_property_next_property(
        verses,
        "verse_number",
        verse_number,
      );
      await app_record_verse(context, book_code, chapter, verse_number_next);
    }
  }
  async function chapter_next_go() {
    clipboard_copy_web(
      string_combine_multiple([
        chapter_text,
        ": Finished reading and recording audio for audio Bible",
      ]),
    );
    let { books } = context;
    let book = list_find_property(books, "book_code", book_code);
    let { chapters } = book;
    let chapter_next, book_next_code, book_next_book;
    if (list_last_is(chapters, chapter)) {
      if (list_last_is(books, book)) {
        book_next_book = list_first(books);
      } else {
        book_next_book = list_next(books, book);
      }
      book_next_code = object_property_get(book_next_book, "book_code");
      let { chapters } = book_next_book;
      chapter_next = list_first(chapters);
    } else {
      book_next_code = book_code;
      chapter_next = list_next(chapters, chapter);
    }
    let verses_next = await app_record_verses(book_code, chapter_next);
    await app_record_verse(
      context,
      book_next_code,
      chapter_next,
      object_property_get(list_first(verses_next), "verse_number"),
    );
  }
}
