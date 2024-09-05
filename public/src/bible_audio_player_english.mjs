import { bible_audio_player_generic } from "./bible_audio_player_generic.mjs";
import { bible_audio_player_english_path } from "./bible_audio_player_english_path.mjs";
export async function bible_audio_player_english(download_folder, filter) {
  let p = bible_audio_player_english_path();
  await bible_audio_player_generic(p, download_folder, filter);
}
