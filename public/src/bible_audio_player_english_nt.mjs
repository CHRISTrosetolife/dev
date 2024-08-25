import { folder_files_copy } from "./folder_files_copy.mjs";
import { log } from "./log.mjs";
export async function bible_audio_player_english_nt() {
  let p = "..\\bible\\english\\ENGESVN2DA";
  await folder_files_copy(p, ".mp3", async (item) => {
    log({
      item,
    });
  });
}
