import { bible_audio_player_english_generic } from "./bible_audio_player_english_generic.mjs";
import { tautology } from "./tautology.mjs";
export async function bible_audio_player_english_nt() {
  let download_folder = "ENGESVN2DA";
  let filter = tautology;
  await bible_audio_player_english_generic(download_folder, filter);
}
