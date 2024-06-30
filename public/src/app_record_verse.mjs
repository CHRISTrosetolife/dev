import { html_p } from "./html_p.mjs";
import { html_element } from "./html_element.mjs";
import { add } from "./add.mjs";
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
    let clipName = prompt("Enter a name for your sound clip");
    let clipContainer = html_element(root, "article");
    let clipLabel = html_p(clipContainer);
    let audio = html_element(root, "audio");
    let deleteButton = html_element(root, "button");
    clipContainer.classList.add("clip");
    audio.setAttribute("controls", "");
    deleteButton.innerHTML = "Delete";
    clipLabel.innerHTML = clipName;
    clipContainer.appendChild(audio);
    clipContainer.appendChild(clipLabel);
    clipContainer.appendChild(deleteButton);
    let blob = new Blob(chunks, {
      type: chunks[0].type,
    });
    let chunks = [];
    let audioURL = window.URL.createObjectURL(blob);
    audio.src = audioURL;
    deleteButton.onclick = function (e) {
      let evtTgt = e.target;
      evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
    };
    await html_recorder_media_stop(context.mr);
  });
}
