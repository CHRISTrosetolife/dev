import { html_button } from "./html_button.mjs";
import { html_overlay } from "./html_overlay.mjs";
import { html_interacted } from "./html_interacted.mjs";
import { storage_url_audio } from "./storage_url_audio.mjs";
import { global_function } from "./global_function.mjs";
import { audio_language } from "./audio_language.mjs";
import { list_size } from "./list_size.mjs";
import { html_audio } from "./html_audio.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { add_1 } from "./add_1.mjs";
import { mod } from "./mod.mjs";
import { integer_random } from "./integer_random.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function app_language_audio(language, text) {
  assert_arguments_length(arguments, 2);
  let { voices } = audio_language(language);
  let counts = global_function(app_language_audio);
  let voices_index_last = list_index_last(voices);
  let count = object_property_initialize(
    counts,
    text,
    integer_random(0, voices_index_last),
  );
  count = add_1(count);
  if (greater_than_equal(count, voices_index_last)) {
    let length = list_size(voices);
    count = mod(count, length);
  }
  object_property_set(counts, text, count);
  let url = await storage_url_audio(language, count, text);
  if (!html_interacted()) {
    let overlay = html_overlay();
    html_button(overlay, "Press button to enable audio");
  }
  return await html_audio(url);
}
