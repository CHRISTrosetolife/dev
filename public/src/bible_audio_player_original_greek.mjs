import { bible_audio_player_language_copy_greek } from "./bible_audio_player_language_copy_greek.mjs";
import { bible_audio_player_drive_replace } from "./bible_audio_player_drive_replace.mjs";
export async function bible_audio_player_original_greek() {
  await bible_audio_player_drive_replace(lambda);
  async function lambda() {
    await bible_audio_player_language_copy_greek();
  }
}
