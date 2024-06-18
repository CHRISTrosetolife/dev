import { audio_language_ceb } from "./audio_language_ceb.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function audio_language(language) {
  let function_name = string_combine_multiple(
    audio_language.name,
    "_",
    language,
  );
  let choices = {
    ceb: () => audio_language_ceb(),
  };
  return object_property_get(choices, language);
}
