import { bible_audio_player_language_copy } from "./bible_audio_player_language_copy.mjs";
import { bible_audio_player_drive_replace } from "./bible_audio_player_drive_replace.mjs";
export async function bible_audio_player_cebuano() {
  await bible_audio_player_drive_replace(lambda);
  async function lambda() {
    await bible_audio_player_language_copy("cebuano");
  }
}
