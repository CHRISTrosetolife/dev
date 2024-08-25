import { folder_files_copy } from "./folder_files_copy.mjs";
import { path_join } from "./path_join.mjs";
export async function bible_audio_player_english_nt() {
  let p = path_join(["..\\bible\\english\\ENGESVN2DA"]);
  let output = "E:\\";
  await folder_files_copy(p, ".mp3", output);
}
