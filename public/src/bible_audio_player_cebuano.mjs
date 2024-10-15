import { file_copy_closed } from "./file_copy_closed.mjs";
import { file_copy_path } from "./file_copy_path.mjs";
import { bible_hebrew_audio_download } from "./bible_hebrew_audio_download.mjs";
import { each_async } from "./each_async.mjs";
import { bible_audio_player_output_path } from "./bible_audio_player_output_path.mjs";
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
    let output = bible_audio_player_output_path();
    await each_async(
      await bible_hebrew_audio_download(),
      async (hebrew_path) => {
        let file_path_new = file_copy_path(hebrew_path, output);
        await file_copy_closed(hebrew_path, file_path_new);
      },
    );
  }
}
