import { audio_language_list } from "./audio_language_list.mjs";
import { function_run_plugin } from "./function_run_plugin.mjs";
export async function audio_language(language) {
  let list = audio_language_list();
  return await function_run_plugin(audio_language, language);
}
