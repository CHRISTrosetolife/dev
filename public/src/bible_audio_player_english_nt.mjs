import { folder_files_copy } from "./folder_files_copy.mjs";
export async function bible_audio_player_english_nt() {
  let p = "..\\bible\\english\\ENGESVN2DA";
  let output = "E:\\";
  await folder_files_copy(p, ".mp3");
}
