import { ceb_audio_voices } from "./ceb_audio_voices.mjs";
import { storage_url } from "./storage_url.mjs";
import { html_audio } from "./html_audio.mjs";
import { ceb_audio_path } from "./ceb_audio_path.mjs";
import { global_get } from "./global_get.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_length } from "./list_length.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { add_1 } from "./add_1.mjs";
import { mod } from "./mod.mjs";
import { integer_random } from "./integer_random.mjs";
export async function app_ceb_audio(cebuano) {
  let voices = ceb_audio_voices();
  let g = global_get();
  let counts = object_property_initialize(g, app_ceb_audio.name, {});
  let voices_last = list_index_last(voices);
  let count = object_property_initialize(
    counts,
    cebuano,
    integer_random(0, voices_last),
  );
  count = add_1(count);
  if (greater_than_equal(count, voices_last)) {
    let length = list_length(voices);
    count = mod(count, length);
  }
  object_property_set(counts, cebuano, count);
  let file_path = ceb_audio_path(count, cebuano);
  return await html_audio(storage_url(file_path));
}
