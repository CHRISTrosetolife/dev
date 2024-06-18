import { audio_language } from "./audio_language.mjs";
import { audio_path } from "./audio_path.mjs";
import { list_size } from "./list_size.mjs";
import { html_audio } from "./html_audio.mjs";
import { storage_url } from "./storage_url.mjs";
import { global_get } from "./global_get.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { add_1 } from "./add_1.mjs";
import { mod } from "./mod.mjs";
import { integer_random } from "./integer_random.mjs";
export async function app_ceb_audio(cebuano) {
  let language = "ceb";
  let { voices } = audio_language(language);
  let g = global_get();
  let counts = object_property_initialize(g, app_ceb_audio.name, {});
  let voices_index_last = list_index_last(voices);
  let count = object_property_initialize(
    counts,
    cebuano,
    integer_random(0, voices_index_last),
  );
  count = add_1(count);
  if (greater_than_equal(count, voices_index_last)) {
    let length = list_size(voices);
    count = mod(count, length);
  }
  object_property_set(counts, cebuano, count);
  let file_path = audio_path(language, count, cebuano);
  return await html_audio(storage_url(file_path));
}
