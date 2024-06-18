import { function_run } from "./function_run.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function audio_language(language) {
  let function_name = string_combine_multiple(
    audio_language.name,
    "_",
    language,
  );
  return await function_run(function_name, []);
}
