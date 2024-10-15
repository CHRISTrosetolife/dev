import { bible_audio_player_generic_multiple } from "./bible_audio_player_generic_multiple.mjs";
import { bible_audio_player_cebuano_path } from "./bible_audio_player_cebuano_path.mjs";
export async function bible_audio_player_original() {
  let p = bible_audio_player_cebuano_path();
  let folders = ["CEBRPVN1DA", "CEBRPVN2DA"];
  await bible_audio_player_generic_multiple(p, folders);
}
