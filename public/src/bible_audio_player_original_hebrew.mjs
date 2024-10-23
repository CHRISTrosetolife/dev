import { bible_audio_player_language_copy_hebrew } from "./bible_audio_player_language_copy_hebrew.mjs";
import { bible_audio_player_drive_replace } from "./bible_audio_player_drive_replace.mjs";
export async function bible_audio_player_original_hebrew() {
  await bible_audio_player_drive_replace(
    bible_audio_player_language_copy_hebrew,
  );
}
