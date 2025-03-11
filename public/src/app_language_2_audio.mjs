import { log } from "./log.mjs";
import { app_language_2_audio_play_should } from "./app_language_2_audio_play_should.mjs";
import { app_language_audio_unawait } from "./app_language_audio_unawait.mjs";
import { app_language_audio } from "./app_language_audio.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_span_text_emoji_ear } from "./html_span_text_emoji_ear.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_language_2_audio(word, language_learn) {
  let language = object_property_get(word, "language");
  if (language === language_learn) {
    log({
      language,
      language_learn,
    });
    let text = object_property_get(word, "text");
    if (app_language_2_audio_play_should(language)) {
      let container = object_property_get(word, "container");
      html_span_text_emoji_ear(container);
      html_on_click(container, async function () {
        await app_language_audio(language, text);
      });
      app_language_audio_unawait(language, text);
    }
  }
}
