import { audio_language } from "./audio_language.mjs";
import { function_run_plugin } from "./function_run_plugin.mjs";
export async function app_language_text(language, text) {
  return await function_run_plugin(audio_language, language);
}
