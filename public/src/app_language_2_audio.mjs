import { app_language_audio_unawait } from "./app_language_audio_unawait.mjs";
import { app_language_audio } from "./app_language_audio.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_span_text_emoji_ear } from "./html_span_text_emoji_ear.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_language_2_audio(language, word, text_word) {
  if (language === "tgl") {
    let container2 = object_property_get(word, "container");
    html_span_text_emoji_ear(container2);
    html_on_click(container2, async () => {
      await app_language_audio(language, text_word);
    });
    app_language_audio_unawait(language, text_word);
  }
}
