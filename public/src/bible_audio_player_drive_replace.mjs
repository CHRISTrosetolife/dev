import { drive_remove } from "./drive_remove.mjs";
import { drive_format } from "./drive_format.mjs";
import { bible_audio_player_drive_letter } from "./bible_audio_player_drive_letter.mjs";
export async function bible_audio_player_drive_replace(lambda) {
  let drive_letter = bible_audio_player_drive_letter();
  await drive_format(drive_letter);
  await lambda();
  await drive_remove(drive_letter);
}
