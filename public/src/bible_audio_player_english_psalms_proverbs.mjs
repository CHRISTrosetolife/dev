import { string_includes_curry } from "./string_includes_curry.mjs";
import { log } from "./log.mjs";
import { list_any } from "./list_any.mjs";
import { bible_audio_player_english_generic } from "./bible_audio_player_english_generic.mjs";
export async function bible_audio_player_english_psalms_proverbs() {
  let download_folder = "ENGESVO2DA";
  let filter = (file_name) =>
    list_any(["Psalms", "Proverbs"], string_includes_curry(file_name));
  log({
    filter,
  });
  await bible_audio_player_english_generic(download_folder, filter);
}
