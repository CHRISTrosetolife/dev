import { bible_audio_player_english } from "./bible_audio_player_english.mjs";
import { tautology } from "./tautology.mjs";
export async function bible_audio_player_esv_nt() {
  let download_folder = "ENGESVN2DA";
  let filter = tautology;
  await bible_audio_player_english(download_folder, filter);
}
