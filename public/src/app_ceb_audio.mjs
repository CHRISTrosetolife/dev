import { ceb_audio_voices } from "./ceb_audio_voices.mjs";
import { storage_url } from "./storage_url.mjs";
import { html_audio } from "./html_audio.mjs";
import { ceb_audio_path } from "./ceb_audio_path.mjs";
import { global_get } from "./global_get.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { list_length } from "./list_length.mjs";
export async function app_ceb_audio(cebuano) {
  let voices = ceb_audio_voices();
  let length = list_length(voices);
  let g = global_get();
  let counts = object_property_initialize(g, app_ceb_audio.name, {});
  let count = object_property_initialize(counts, cebuano, 0);
  if (greater_than_equal(count, subtract_1(length))) {
  }
  let file_path = ceb_audio_path(index, cebuano);
  return await html_audio(storage_url(file_path));
}
