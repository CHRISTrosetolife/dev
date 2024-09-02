import { bible_audio_player_copy } from "./bible_audio_player_copy.mjs";
import { tautology } from "./tautology.mjs";
export async function bible_audio_player_esv_nt() {
  let download_folder = "ENGESVN2DA";
  let filter = tautology;
  await bible_audio_player_copy(download_folder, filter);
}
