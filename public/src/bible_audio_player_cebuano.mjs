import { bible_audio_player_language } from "./bible_audio_player_language.mjs";
import { bible_audio_player_drive_replace } from "./bible_audio_player_drive_replace.mjs";
import { bible_audio_player_generic_multiple } from "./bible_audio_player_generic_multiple.mjs";
import { bible_audio_player_cebuano_path } from "./bible_audio_player_cebuano_path.mjs";
export async function bible_audio_player_cebuano() {
  let p = bible_audio_player_cebuano_path();
  let folders = ["CEBRPVN1DA", "CEBRPVN2DA"];
  await bible_audio_player_generic_multiple(p, folders);
  await bible_audio_player_drive_replace(lambda);
  async function lambda() {
    await bible_audio_player_language("cebuano");
  }
}
