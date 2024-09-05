import { bible_audio_player_english_path } from "./bible_audio_player_english_path.mjs";
import { folder_files_copy_generic } from "./folder_files_copy_generic.mjs";
import { path_join } from "./path_join.mjs";
export async function bible_audio_player_english(download_folder, filter) {
  let joined = path_join([bible_audio_player_english_path(), download_folder]);
  let output = "E:\\";
  if (0) {
    output = "..\\bible\\english\\test";
  }
  await folder_files_copy_generic(joined, ".mp3", output, filter);
}
