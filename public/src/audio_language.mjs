import { generate_list_prefix_name } from "./generate_list_prefix_name.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_run_plugin } from "./function_run_plugin.mjs";
export async function audio_language(language) {
  let name = generate_list_prefix_name(fn_name("audio_language"));
  let name_fn = eval(name);
  let list = name_fn();
  return await function_run_plugin(audio_language, language);
}
