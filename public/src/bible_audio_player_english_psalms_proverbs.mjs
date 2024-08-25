import { string_includes } from "./string_includes.mjs";
import { bible_audio_player_english_generic } from "./bible_audio_player_english_generic.mjs";
export async function bible_audio_player_english_psalms_proverbs() {
  let download_folder = "ENGESVN2DA";
  let filter = (file_name) => string_includes(file_name);
  await bible_audio_player_english_generic(download_folder, filter);
}
