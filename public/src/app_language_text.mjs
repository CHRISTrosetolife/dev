import { audio_language } from "./audio_language.mjs";
import { function_run_plugin } from "./function_run_plugin.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function app_language_text(language, text) {
  let texts = await function_run_plugin(audio_language, language);
  return object_property_get(texts, text);
}
