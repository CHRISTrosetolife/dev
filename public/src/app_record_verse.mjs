import { html_p_text } from "./html_p_text.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_element } from "./html_element.mjs";
import { html_recorder_media_stop } from "./html_recorder_media_stop.mjs";
import { html_recorder_media_record } from "./html_recorder_media_record.mjs";
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
  let verses = await app_record_verses(context, book_code, chapter);
  let verse = list_find_property(verses, "verse_number", verse_number);
  let { tokens } = verse;
  let vn = html_span_text(root, verse_number);
  html_style_bold(vn);
  html_span_text(root, " ");
  html_span_text(root, list_join_space(tokens));
  html_button_width_full_text_click(root, "⏺️ start recording", () => {
    html_recorder_media_record(context.mr);
  });
  html_button_width_full_text_click(root, "⏹️ stop recording", async () => {
    let blob = await html_recorder_media_stop(context.mr);
    let clipName = prompt("Enter a name for your sound clip");
    let clipContainer = html_element(root, "article");
    let clipLabel = html_p_text(clipContainer, clipName);
    let audio = html_element(clipContainer, "audio");
    let audioURL = window.URL.createObjectURL(blob);
    audio.src = audioURL;
    html_attribute_set(audio, "controls", "");
    let deleteButton = html_button_width_full_text_click(
      clipContainer,
      "Delete",
    );
    deleteButton.onclick = function (e) {
      let evtTgt = e.target;
      evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
    };
  });
}
