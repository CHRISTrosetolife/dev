import { audio_language_ceb } from "./audio_language_ceb.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function audio_language(language) {
  let choices = {
    ceb: () => audio_language_ceb(),
  };
  return object_property_get(choices, language);
}
