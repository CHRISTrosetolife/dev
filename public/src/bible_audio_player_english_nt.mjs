import { folder_files_copy_generic } from "./folder_files_copy_generic.mjs";
import { path_join } from "./path_join.mjs";
export async function bible_audio_player_english_nt() {
  let download_folder = "ENGESVN2DA";
  let p = path_join(["..\\bible\\english", download_folder]);
  let output = "E:\\";
  await folder_files_copy_generic(p, ".mp3", output);
}
