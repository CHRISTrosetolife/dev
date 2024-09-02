import { bible_audio_player_esv_generic } from "./bible_audio_player_esv_generic.mjs";
import { tautology } from "./tautology.mjs";
export async function bible_audio_player_esv_nt() {
  let download_folder = "ENGESVN2DA";
  let filter = tautology;
  await bible_audio_player_esv_generic(download_folder, filter);
}
