import { list_any } from "./list_any.mjs";
import { string_includes } from "./string_includes.mjs";
import { bible_audio_player_english_generic } from "./bible_audio_player_english_generic.mjs";
export async function bible_audio_player_english_psalms_proverbs() {
  let download_folder = "ENGESVO2DA";
  let filter = (file_name) =>
    list_any(["Psalms", "Proverbs"], string_includes(file_name));
  await bible_audio_player_english_generic(download_folder, filter);
}
