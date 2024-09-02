import { bible_audio_player_english } from "./bible_audio_player_english.mjs";
import { string_includes } from "./string_includes.mjs";
import { string_includes_curry } from "./string_includes_curry.mjs";
import { list_any } from "./list_any.mjs";
export async function bible_audio_player_esv_psalms_proverbs() {
  let download_folder = "ENGESVO2DA";
  let filter = (file_name) =>
    string_includes(file_name, "_____") &&
    list_any(["Psalms", "Proverbs"], string_includes_curry(file_name));
  await bible_audio_player_english(download_folder, filter);
}
