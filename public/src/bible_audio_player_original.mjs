import { bible_hebrew_audio_download } from "./bible_hebrew_audio_download.mjs";
import { drive_format } from "./drive_format.mjs";
import { bible_audio_player_drive_letter } from "./bible_audio_player_drive_letter.mjs";
import { drive_remove } from "./drive_remove.mjs";
import { each_async } from "./each_async.mjs";
import { bible_audio_player_output_path } from "./bible_audio_player_output_path.mjs";
import { file_copy_closed } from "./file_copy_closed.mjs";
import { file_copy_path } from "./file_copy_path.mjs";
import { folder_read_shallow_names } from "./folder_read_shallow_names.mjs";
import { bible_audio_player_path } from "./bible_audio_player_path.mjs";
import { bible_audio_player_generic_multiple } from "./bible_audio_player_generic_multiple.mjs";
export async function bible_audio_player_original() {
  let drive_letter = bible_audio_player_drive_letter();
  await drive_format(drive_letter);
  let name = "greek";
  let p = bible_audio_player_path(name);
  let folders = await folder_read_shallow_names(p, "");
  await bible_audio_player_generic_multiple(p, folders);
  let output = bible_audio_player_output_path();
  await each_async(await bible_hebrew_audio_download(), async (hebrew_path) => {
    let file_path_new = file_copy_path(hebrew_path, output);
    await file_copy_closed(hebrew_path, file_path_new);
  });
  await drive_remove(drive_letter);
}
