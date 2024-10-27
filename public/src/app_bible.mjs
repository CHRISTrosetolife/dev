import { html_spacer } from "./html_spacer.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_div } from "./html_div.mjs";
import { each } from "./each.mjs";
import { list_first } from "./list_first.mjs";
import { firebase_initialize_axios } from "./firebase_initialize_axios.mjs";
import { bible_storage_interlinear_book_path } from "./bible_storage_interlinear_book_path.mjs";
import { firebase_download_bible } from "./firebase_download_bible.mjs";
export async function app_bible() {
  let root = await firebase_initialize_axios();
  let chapter_interlinear = await firebase_download_bible(
    bible_storage_interlinear_book_path("Matthew"),
    "1",
  );
  let { verses } = chapter_interlinear;
  let verse_interlinear = list_first(verses);
  let { tokens } = verse_interlinear;
  each(tokens, (token) => {
    let d = html_div(root);
    html_span_text(d, object_property_get(token, "word"));
    html_spacer(d);
    html_span_text(d, object_property_get(token, "transliteration"));
    html_spacer(d);
    html_span_text(d, object_property_get(token, "translation"));
  });
}
