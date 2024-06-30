import { log } from "./log.mjs";
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
import {
  getStorage,
  ref,
  uploadBytes,
} from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.12.2/firebase-storage.min.js";
export async function app_record_verse(
  context,
  book_code,
  chapter,
  verse_number,
) {
  let { root } = context;
  html_clear_scroll_top(root);
  let verses = await app_record_verses(context, book_code, chapter);
  let verse = list_find_property(verses, "verse_number", verse_number);
  let { tokens } = verse;
  let vn = html_span_text(root, verse_number);
  html_style_bold(vn);
  html_span_text(root, " ");
  html_span_text(root, list_join_space(tokens));
  let start, stop;
  start = html_button_width_full_text_click(root, "⏺️ start recording", () => {
    html_style_display_none(start);
    html_style_display_block(stop);
    html_recorder_media_start(context.mr);
  });
  stop = html_button_width_full_text_click(
    root,
    "⏹️ stop recording",
    async () => {
      html_style_display_none(stop);
      html_style_display_block(start);
      let blob = await html_recorder_media_stop(context.mr);
      let storage = getStorage();
      let storageRef = ref(storage, "audio/bible/test.mp3");
      uploadBytes(storageRef, blob).then((snapshot) => {
        console.log("Uploaded a blob or file!");
      });
    },
  );
  html_style_display_none(stop);
}
