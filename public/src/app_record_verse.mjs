import { restart } from "./restart.mjs";
import { firebase_upload } from "./firebase_upload.mjs";
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
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export async function app_record_verse(
  context,
  book_code,
  chapter,
  verse_number,
) {
  let { root } = context;
  html_clear_scroll_top(root);
  let verses = await app_record_verses(book_code, chapter);
  let verse = list_find_property(verses, "verse_number", verse_number);
  let { tokens } = verse;
  let vn = html_span_text(root, verse_number);
  html_style_bold(vn);
  html_span_text(root, " ");
  html_span_text(root, list_join_space(tokens));
  let start, save, cancel, restart, recording;
  start = html_button_width_full_text_click(root, "⏺️ start recording", () => {
    html_style_display_none(start);
    html_recorder_media_start(context.mr);
    each(recording, html_style_display_block);
  });
  save = html_button_width_full_text_click(
    root,
    "💾 save recording and ➡️ next verse",
    async () => {
      each(recording, html_style_display_none);
      let blob = await html_recorder_media_stop(context.mr);
      let when = date_string_iso_file();
      let storage_path = string_combine_multiple([
        "audio/bible/test/",
        book_code,
        "/",
        chapter,
        "/",
        verse_number,
        "/",
        when,
        ".mp3",
      ]);
      await firebase_upload(storage_path, blob);
      let verse_number_next = list_find_property_next_property(
        verses,
        "verse_number",
        verse_number,
      );
      await app_record_verse(context, book_code, chapter, verse_number_next);
    },
  );
  cancel = html_button_width_full_text_click(
    root,
    "🚫 cancel recording",
    async () => {
      each(recording, html_style_display_none);
      await html_recorder_media_stop(context.mr);
      html_style_display_block(start);
    },
  );
  restart = html_button_width_full_text_click(
    root,
    "🚫 restart recording",
    async () => {
      each(recording, html_style_display_none);
      await html_recorder_media_stop(context.mr);
      html_style_display_block(start);
    },
  );
  recording = [save, cancel];
  each(recording, html_style_display_none);
}
