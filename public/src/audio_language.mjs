import { function_run } from "./function_run.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function audio_language(language) {
  let function_name = string_combine_multiple(
    audio_language.name,
    "_",
    language,
  );
  await function_run(function_name, []);
  return object_property_get(choices, language);
}
