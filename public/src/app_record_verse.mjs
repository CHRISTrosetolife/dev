import { html_button } from "./html_button.mjs";
import { app_record_verse_generic } from "./app_record_verse_generic.mjs";
import { html_button_width_full_text_click_br } from "./html_button_width_full_text_click_br.mjs";
import { html_audio } from "./html_audio.mjs";
import { app_record_project_name } from "./app_record_project_name.mjs";
import { app_record } from "./app_record.mjs";
import { firebase_upload_bytes } from "./firebase_upload_bytes.mjs";
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
export async function app_record_verse(
  context,
  book_code,
  chapter,
  verse_number,
) {
  let { middle, navigation } = await app_record_verse_generic(
    app_record,
    book_code,
    chapter,
    verse_number,
    context,
    app_record_verse,
  );
  let root = object_property_get(context, "root");
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
  start = html_button(middle, "⏺️ start recording", () => {
    each(recording_not, html_style_display_none);
    record_start();
    each(recording, html_style_display_block);
  });
  previous = object_property_get(navigation, "previous");
  next = object_property_get(navigation, "next");
  let verse_next = object_property_get(navigation, "verse_next");
  listen = html_button_width_full_text_click_br(root, "👂 listen", async () => {
    await record_stop();
    let blobUrl = URL.createObjectURL(blob);
    await html_audio(blobUrl);
  });
  save = html_button_width_full_text_click_br(
    root,
    "💾 save recording and ➡️ next verse",
    async () => {
      each(recording, html_style_display_none);
      await record_stop();
      let when = date_string_iso_file();
      let storage_path = path_join([
        folder_audio_bible(),
        app_record_project_name(),
        book_code,
        chapter,
        verse_number,
        string_combine_multiple([when, ".mp3"]),
      ]);
      await firebase_upload_bytes(storage_path, blob);
      await verse_next();
    },
  );
  restart = html_button_width_full_text_click_br(
    root,
    "↩️ restart recording",
    async () => {
      each(recording, html_style_display_none);
      await html_recorder_media_stop(context.mr);
      record_start();
      each(recording, html_style_display_block);
    },
  );
  cancel = html_button_width_full_text_click_br(
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
