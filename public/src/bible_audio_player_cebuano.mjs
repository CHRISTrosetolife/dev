import { bible_audio_player_language_copy } from "./bible_audio_player_language_copy.mjs";
import { bible_audio_player_drive_replace } from "./bible_audio_player_drive_replace.mjs";
export async function bible_audio_player_cebuano() {
  let language_folder_name = "cebuano";
  await bible_audio_player_drive_replace(lambda);
  async function lambda() {
    await bible_audio_player_language_copy(language_folder_name);
  }
}
