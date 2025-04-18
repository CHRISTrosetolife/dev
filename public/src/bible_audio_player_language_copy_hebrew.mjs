import { file_copy_closed } from "./file_copy_closed.mjs";
import { file_copy_path } from "./file_copy_path.mjs";
import { bible_hebrew_audio_download } from "./bible_hebrew_audio_download.mjs";
import { each_async } from "./each_async.mjs";
import { bible_audio_player_output_path } from "./bible_audio_player_output_path.mjs";
export async function bible_audio_player_language_copy_hebrew() {
  let output = bible_audio_player_output_path();
  await each_async(await bible_hebrew_audio_download(), async (hebrew_path) => {
    let file_path_new = file_copy_path(hebrew_path, output);
    await file_copy_closed(hebrew_path, file_path_new);
  });
}
